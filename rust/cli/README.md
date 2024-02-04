# Hyperlane Rust CLI

## Setup

Follow the setup instructions found in the hyperlane monorepo's `rust/README.md` file.

## Running the CLI

To see the commnands available when running the cli, run:

```bash
cargo run --release --bin cli
```

Or Build and then run the binary directly:

```bash
cargo build --release --bin cli
./target/release/cli
```

## Send Message Commands

### Funding/generating the wallet

When the CLI is run with a command to send a message, it will attempt to load the private key used to pay for the transaction from `cli/config/private_key.json`. If the file does not exist, the CLI will generate and save the private key for you as well as print out the wallet address. You will need to then transfer gas to the newly generated wallet for the origin chain you wish the send the message from.

### Sending a test message

You can send a test message which will send a message with the bytes of "Hello World" from the Binance Smart Chain testnet mailbox to the Fuji (Avalance Testnet) Test Recipient by running the following command:

```bash
cargo run --release --bin cli send-test
```

### Sending a message

To send a message, you can run:

```bash
cargo run --release --bin cli send --origin-chain <ORIGIN_CHAIN> --origin-mailbox <ORIGIN_MAILBOX> --rpc-url <RPC_URL> --destination-address <DESTINATION_ADDRESS> --message <MESSAGE>

# output
private key already exists
loaded wallet address: 0xd0ef675cf7dbe28215e534fad83afd3731b773b2
Confirmed dispatch tx. Txn Hash: 0xeb1a6f2692ff30b07036d76daac3bbef6086c9a27daeaf99c95df84f3401043d
```

example:

```bash
cargo run --bin cli send --origin-chain "bsctestnet" --origin-mailbox "0xF9F6F5646F478d5ab4e20B0F910C92F1CCC9Cc6D" --rpc-url "https://bsc-testnet.publicnode.com" --destination-chain "fuji"  --destination-address "0x44a7e1d76fD8AfA244AdE7278336E3D5C658D398" --message "48656c6c6f20576f726c64"
```

## Search for messages

To search for messages, run the `search` command with a matching list. The matching list is a json array with filters for the messages you want to search for. The CLI will use the configs from the `rust/config` directory use the `origindomain` filters from the matching list to determine which mailboxes to search for messages from. It will search the 10000 most recent blocks and return all messages that match the filters in the matching list by origin domain sorted by nonce in reverse order(most recent messages first).

For more information on matching lists, please visit the following:

[Matching List](https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/1e43a3e1defa8f3025099961d6ac0e4a500f4de6/rust/agents/relayer/src/settings/matching_list.rs#L21).

[Message Filtering](https://docs.hyperlane.xyz/docs/operate/relayer/message-filtering)

[Whitelist](https://docs.hyperlane.xyz/docs/operate/config-reference#whitelist)

```bash
cargo run --bin cli search --matching-list '[{"origindomain":97,"senderaddress":"0xd0ef675cf7dbe28215e534fad83afd3731b773b2","destinationdomain":"*","recipientaddress":"0x44a7e1d76fD8AfA244AdE7278336E3D5C658D398"}]'

# output
Matching Logs from bsctestnet's mailbox:
HyperlaneMessage { id: 0xd1af3b481fcb01ce2e56d30acf884223cee9b99d95c037ab493353f5bb75fe81, version: 3, nonce: 366, origin: bsctestnet, sender: 0xd0ef675cf7dbe28215e534fad83afd3731b773b2, destination: fuji, recipient: 0x44a7e1d76fd8afa244ade7278336e3d5c658d398, body: 0x48656c6c6f20576f726c64 }
```
