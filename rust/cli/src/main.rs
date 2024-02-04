use ethers::abi::Abi;
use ethers::contract::Contract;
use ethers::core::k256::ecdsa::SigningKey;
use ethers::prelude::*;
use ethers::providers::Provider;

use std::collections::HashMap;

use clap::{Args, Parser, Subcommand};
use cli_settings::matching_list::MatchingList;
use ethers_signers::Signer;
use hyperlane_base::settings::loader::load_settings_for_cli;
use hyperlane_base::settings::Settings;
use hyperlane_core::{Indexer, KnownHyperlaneDomain, H256};
use std::fs;
use std::path::Path;
use std::str::FromStr;
use std::sync::Arc;
mod cli_settings;

const CLI_CONFIG_PATH_ROOT: &str = "./config/";
const PRIVATE_KEY_NAME: &str = "private_key.json";

#[derive(Parser)]
struct Cli {
    #[command(subcommand)]
    cmd: CliCmd,
}

#[derive(Subcommand, Debug, Clone)]
enum CliCmd {
    #[command(about = "Sends a message using the Hyperlane API and provided args")]
    Send(SendArgs),
    #[command(about = format!("Send test message with default values for args {:?}", SendArgs::default()))]
    SendTest,
    #[command(about = "Searches for messages matching the provided matching list")]
    Search(SearchArgs),
}

#[derive(Args, Debug, Clone)]
struct SendArgs {
    #[arg(help = "origin chain name", long)]
    origin_chain: String,
    #[arg(long, help = "origin mailbox address")]
    origin_mailbox: String,
    #[arg(short, long, help = "RPC URL to connect to origin chain")]
    rpc_url: String,
    #[arg(long, help = "destination chain name", default_value = "fuji")]
    destination_chain: String,
    #[arg(long, help = "destination address")]
    destination_address: String,
    #[arg(short, long, help = "bytes of message to send in hex")]
    message: String,
}

impl Default for SendArgs {
    fn default() -> Self {
        Self {
            origin_chain: "bsctestnet".to_string(),
            origin_mailbox: "0xF9F6F5646F478d5ab4e20B0F910C92F1CCC9Cc6D".to_string(),
            rpc_url: "https://bsc-testnet.publicnode.com".to_string(),
            destination_chain: "fuji".to_string(),
            destination_address: "0x44a7e1d76fD8AfA244AdE7278336E3D5C658D398".to_string(),
            message: "48656c6c6f20576f726c64".to_string(),
        }
    }
}

#[derive(Args, Debug, Clone)]
struct SearchArgs {
    #[arg(
        help = "matching list in json format. See https://docs.hyperlane.xyz/docs/operate/config-reference#whitelist for reference",
        long,
        default_value = "[]"
    )]
    matching_list: String,
}

#[tokio::main(flavor = "current_thread")]
/// Requirements
/// - setup and use private key for hyperlane messaging
/// - display output in a user-friendly way
async fn main() -> eyre::Result<()> {
    let cli = Cli::parse();
    match cli.cmd {
        CliCmd::Send(send_args) => {
            process_send_message(send_args).await.unwrap();
        }
        CliCmd::SendTest => {
            process_send_message(SendArgs::default()).await.unwrap();
        }
        CliCmd::Search(search_args) => {
            process_search_for_messages(search_args).await.unwrap();
        }
    }

    Ok(())
}

async fn process_send_message(send_args: SendArgs) -> eyre::Result<()> {
    let contract = load_origin_chain_mailbox(&send_args)?;

    let recipient_address: [u8; 32] = match send_args.destination_address.strip_prefix("0x") {
        Some(address) => H256::from(address.parse::<Address>().unwrap()).0,
        None => H256::from(send_args.destination_address.parse::<Address>().unwrap()).0,
    };

    let message_body: ethers::core::types::Bytes = Bytes::from_str(&send_args.message).unwrap();

    let destination_domain = send_args
        .destination_chain
        .parse::<KnownHyperlaneDomain>()
        .map(|v| v as u32)?;

    let quote_dispatch_call = contract.method_hash::<_, U256>(
        [156, 66, 189, 24],
        (destination_domain, recipient_address, message_body.clone()),
    )?;

    let quote_dispatch_value = quote_dispatch_call.call().await?;

    let mut dispatch_call = contract.method_hash::<_, [u8; 32]>(
        [250, 49, 222, 1],
        (destination_domain, recipient_address, message_body),
    )?;

    dispatch_call = dispatch_call.value(quote_dispatch_value);
    let dispatch_tx = dispatch_call.send().await?;

    let dispatch_receipt: Option<TransactionReceipt> = dispatch_tx.confirmations(3).await?;
    if let Some(receipt) = dispatch_receipt {
        println!(
            "Confirmed dispatch tx. Txn Hash: {:?}",
            receipt.transaction_hash
        );
    } else {
        println!("unable to confirm dispatch tx");
    }
    Ok(())
}

fn load_origin_chain_mailbox(
    send_args: &SendArgs,
) -> Result<Contract<SignerMiddleware<Arc<Provider<Http>>, Wallet<SigningKey>>>, eyre::Error> {
    let provider =
        Arc::new(Provider::<Http>::try_from(&send_args.rpc_url).expect("Invalid provider URL"));
    let origin_chain = send_args
        .origin_chain
        .parse::<KnownHyperlaneDomain>()
        .map(|v| v as u32)?;
    let contract_address = send_args.origin_mailbox.parse::<Address>().unwrap();
    let mailbox_abi = get_mailbox_abi();
    let mut wallet = generate_or_load_wallet()?;
    wallet = wallet.with_chain_id(origin_chain);
    let client = SignerMiddleware::new(provider, wallet);
    let contract = Contract::new(contract_address, mailbox_abi, client);
    Ok(contract)
}

fn get_mailbox_abi() -> Abi {
    let path = String::from("./chains/hyperlane-ethereum/abis/IMailbox.abi.json");
    let contents = fs::read_to_string(path).unwrap();
    serde_json::from_str(contents.as_str()).unwrap()
}

async fn process_search_for_messages(search_args: SearchArgs) -> eyre::Result<()> {
    let match_list: MatchingList = match serde_json::from_str(&search_args.matching_list) {
        Ok(list) => list,
        Err(e) => return Err(CliError::InvalidMatchingList(e).into()),
    };

    let settings: Settings = load_settings_for_cli().unwrap();

    let chains = &settings.chains;
    let matching_origin_chains = chains
        .iter()
        .filter(|(_, chain_conf)| match_list.chain_matches(chain_conf, false))
        .collect::<Vec<_>>();

    let mut filtered_logs = HashMap::new();
    for (name, chain_conf) in matching_origin_chains.iter() {
        let metrics = settings.metrics(&format!("{}-cli", name)).unwrap();
        let indexer = chain_conf
            .build_message_indexer(&metrics.clone())
            .await
            .unwrap();
        let finalized_block_num = indexer.get_finalized_block_number().await.unwrap();
        // fetch logs from the most recent 10K blocks
        // using chunks of 1K blocks
        // fetch oldest blocks first
        for i in (0..10).rev() {
            let range_end = finalized_block_num.saturating_sub(i * 1000);
            let range_start = range_end.saturating_sub(1000) + 1;
            let range = range_start..=range_end;

            // returns in nonce ascending order
            let filtered_logs_for_chain = indexer
                .fetch_logs(range)
                .await?
                .into_iter()
                .filter(|(msg, _)| match_list.msg_matches(msg, false))
                .map(|(msg, _)| msg)
                .collect::<Vec<_>>();
            filtered_logs
                .entry(name)
                .and_modify(|v: &mut Vec<_>| v.extend(filtered_logs_for_chain.clone()))
                .or_insert(filtered_logs_for_chain);
        }
    }
    for (chain_name, logs) in filtered_logs.iter() {
        if logs.is_empty() {
            println!("No matching logs found from {chain_name}'s mailbox");
            continue;
        }
        println!("Matching Logs from {chain_name}'s mailbox:");
        logs.iter().rev().for_each(|l| println!("{l:?}"));
    }

    Ok(())
}

fn generate_or_load_wallet() -> eyre::Result<Wallet<SigningKey>> {
    let crate_root = env!("CARGO_MANIFEST_DIR");
    let config_dir = format!("{}/{}", crate_root, CLI_CONFIG_PATH_ROOT);
    let config_path = Path::new(config_dir.as_str());
    let private_key = format!(
        "{}/{}/{}",
        crate_root, CLI_CONFIG_PATH_ROOT, PRIVATE_KEY_NAME
    );

    let private_key_path = Path::new(private_key.as_str());
    if private_key_path.exists() && private_key_path.is_file() {
        println!("private key already exists");
        let wallet = Wallet::<SigningKey>::decrypt_keystore(private_key_path, "").unwrap();
        println!("loaded wallet address: {:?}", wallet.address());
        Ok(wallet)
    } else {
        println!("generating private key");
        let mut rng = rand::thread_rng();
        let (wallet, _) =
            Wallet::<SigningKey>::new_keystore(config_path, &mut rng, "", Some("private_key.json"))
                .unwrap();
        println!("generated wallet address: {:?}", wallet.address());
        println!(
            "please transfer gas for origin chain for newly generated wallet address: {:?}",
            wallet.address()
        );
        Err(CliError::NewWalletGenerated(wallet.address()).into())
    }
}

#[derive(Debug, thiserror::Error)]
pub enum CliError {
    #[error("New wallet generated, please transfer gas for origin chain to newly generated wallet address: {0:?}")]
    NewWalletGenerated(Address),
    #[error("Invalid Matching List. Error: {0}")]
    InvalidMatchingList(serde_json::Error),
}
