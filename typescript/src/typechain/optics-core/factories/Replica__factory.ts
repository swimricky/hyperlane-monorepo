/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "sequence",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "ProcessError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "canConfirm",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "current",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_current",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_nextToProcess",
        type: "uint32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextPending",
    outputs: [
      {
        internalType: "bytes32",
        name: "_pending",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_confirmAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextToProcess",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516131583803806131588339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff166130ef61006960003980610d155280610d7c52506130ef6000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80638d3638f4116100ee578063b31c01fb11610097578063c19d93fb11610071578063c19d93fb14610641578063d88beda214610649578063df034cd014610651578063f6d1610214610682576101a3565b8063b31c01fb14610519578063ba739a62146105cb578063bf30a55d146105ec576101a3565b80639fa6a6e3116100c85780639fa6a6e3146104ec578063a3f81d68146104f4578063ab91c7b014610511576101a3565b80638d3638f414610436578063928bc4b21461043e578063961681dc146104e4576101a3565b806339992668116101505780636188af0e1161012a5780636188af0e146103635780637022b58e1461041157806371bfb7b814610419576101a3565b8063399926681461033257806345630b1a1461033a578063456d067214610342576101a3565b80632bbd59ca116101815780632bbd59ca146102ad5780632bef2892146102eb578063371d307114610308576101a3565b806314cfabb3146101a857806319d9d21a146101c457806325e3beda14610293575b600080fd5b6101b061068a565b604080519115158252519081900360200190f35b610291600480360360a08110156101da57600080fd5b813591602081019181019060808101606082013564010000000081111561020057600080fd5b82018360208201111561021257600080fd5b8035906020019184600183028401116401000000008311171561023457600080fd5b91939092909160208101903564010000000081111561025257600080fd5b82018360208201111561026457600080fd5b8035906020019184600183028401116401000000008311171561028657600080fd5b5090925090506106b6565b005b61029b610915565b60408051918252519081900360200190f35b6102ca600480360360208110156102c357600080fd5b503561091b565b604051808260028111156102da57fe5b815260200191505060405180910390f35b6101b06004803603602081101561030157600080fd5b5035610930565b6101b0600480360361044081101561031f57600080fd5b5080359060208101906104200135610945565b61029b610a65565b61029b610a6b565b61034a610a80565b6040805163ffffffff9092168252519081900360200190f35b610291600480360361044081101561037a57600080fd5b81019060208101813564010000000081111561039557600080fd5b8201836020820111156103a757600080fd5b803590602001918460018302840111640100000000831117156103c957600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610a8c565b610291610b18565b61029b6004803603602081101561042f57600080fd5b5035610d01565b61034a610d13565b6101b06004803603602081101561045457600080fd5b81019060208101813564010000000081111561046f57600080fd5b82018360208201111561048157600080fd5b803590602001918460018302840111640100000000831117156104a357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d37945050505050565b61034a611428565b61029b611434565b6101b06004803603602081101561050a57600080fd5b503561143a565b61029b611461565b6102916004803603606081101561052f57600080fd5b81359160208101359181019060608101604082013564010000000081111561055657600080fd5b82018360208201111561056857600080fd5b8035906020019184600183028401116401000000008311171561058a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061146d945050505050565b6105d3611753565b6040805192835260208301919091528051918290030190f35b610291600480360360a081101561060257600080fd5b5063ffffffff813581169173ffffffffffffffffffffffffffffffffffffffff60208201351691604082013591606081013591608090910135166117a1565b6102ca611956565b61029b611979565b610659611980565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61029b6119a2565b600061069660026119ae565b158015906106b157506106b16106ac60026119ee565b61143a565b905090565b6002600054760100000000000000000000000000000000000000000000900460ff1660028111156106e357fe5b141561075057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f86018190048102820181019092528481526107929188918835918890889081908401838280828437600092019190915250611a8f92505050565b80156107e157506107e186866001602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a8f92505050565b80156107f257508435602086013514155b1561090d576107ff611b27565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b61271081565b60096020526000908152604090205460ff1681565b600061093d600283611b31565b90505b919050565b60008060008581526009602052604090205460ff16600281111561096557fe5b146109d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b6000610a07858560208060200260405190810160405280929190826020800280828437600092019190915250879150611bad9050565b9050610a128161143a565b15610a58575050600083815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155610a5e565b60009150505b9392505050565b60055481565b6004546000906106b19063ffffffff16611c58565b60065463ffffffff1681565b610a9e83805190602001208383610945565b610b0957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610b1283610d37565b50505050565b6002600054760100000000000000000000000000000000000000000000900460ff166002811115610b4557fe5b1415610bb257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610bbc60026119ae565b610c2757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f2170656e64696e67000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080610c3460026119ae565b90505b600081118015610c4f5750610c4f6106ac60026119ee565b15610c8757610c5e6002611ccd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610c37565b81610cf357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f2174696d65000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610cfb611b2f565b50600155565b60076020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610d448382611e06565b90506000610d737fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611e2a565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610dc77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611e5b565b63ffffffff1614610e3957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b6001845160208087019190912060009081526009909152604090205460ff166002811115610e6357fe5b14610ecf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f2170656e64696e67000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60085460ff16600114610f4357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f217265656e7472616e7400000000000000000000000000000000000000000000604482015290519081900360640190fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055600260096000610f9c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611e8c565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610fde57fe5b0217905550600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000166001830163ffffffff161790556207c8305a101561108a57604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006110b77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611ecb565b9050606073ffffffffffffffffffffffffffffffffffffffff82166207a1206111017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611ede565b61112c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611f0e565b61118161115a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611f3f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611fb0565b604051602401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111d35781810151838201526020016111bb565b50505050905090810190601f1680156112005780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f56d5d47500000000000000000000000000000000000000000000000000000000178152905182519297509550859450925090508083835b602083106112c857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161128b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038160008787f1925050503d806000811461132b576040519150601f19603f3d011682016040523d82523d6000602084013e611330565b606091505b509095509050846113f3578173ffffffffffffffffffffffffffffffffffffffff168363ffffffff167f16d8b729d8c09fdfd34c0cbac3feebd37ea7dbf51704e005df39179db55646fc836040518080602001828103825283818151815260200191508051906020019080838360005b838110156113b85781810151838201526020016113a0565b50505050905090810190601f1680156113e55780820380516001836020036101000a031916815260200191505b509250505060405180910390a35b5050600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055509092915050565b60045463ffffffff1681565b60015481565b60008181526007602052604081205480611458576000915050610940565b42101592915050565b60006106b160026119ae565b6002600054760100000000000000000000000000000000000000000000900460ff16600281111561149a57fe5b141561150757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b600061151360026119ae565b1115611595576115236002611ff4565b831461159057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420656e64206f6620717565756500000000000000000000000000000000604482015290519081900360640190fd5b611605565b826001541461160557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e74207570646174650000000000000000000000000000604482015290519081900360640190fd5b611610838383611a8f565b61167b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f6261642073696700000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b611683611b2f565b60055460008381526007602052604090204290910190556116a5600283612031565b5060045460408051602080825284518183015284518694889463ffffffff909116937f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2938893919283929083019185019080838360005b838110156117145781810151838201526020016116fc565b50505050905090810190601f1680156117415780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b60008061176060026119ae565b156117885761176f60026119ee565b600081815260076020526040902054909250905061179d565b50506001546000818152600760205260409020545b9091565b600054610100900460ff16806117ba57506117ba61209e565b806117c8575060005460ff16155b61181d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612fa8602e913960400191505060405180910390fd5b600054610100900460ff1615801561188357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61188c856120af565b6118966002612244565b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556004805463ffffffff808a167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009283161790925586835560008781526007602052604090209290925560058590556006805491851691909216179055801561090d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050505050565b600054760100000000000000000000000000000000000000000000900460ff1681565b6207a12081565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60006106b16002611ff4565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166119e68282612289565b949350505050565b60006119f9826122a3565b15611a6557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5080546fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b600080611a9a610a6b565b8585604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052805190602001209050611adb816122d2565b60005490915062010000900473ffffffffffffffffffffffffffffffffffffffff16611b078285612323565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b611b2f6123bd565b565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111611ba1576000818152600185016020526040902054831415611b99576001915050611ba7565b600101611b49565b50600090505b92915050565b8260005b6020811015611c5057600183821c166000858360208110611bce57fe5b602002015190508160011415611c145780846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350611c46565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b5050600101611bb1565b509392505050565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611d058282612289565b611d7057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611dc1576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b815160009060208401611e2164ffffffffff85168284612400565b95945050505050565b600061093d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660246004612456565b600061093d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004612456565b600080611e9883612477565b6bffffffffffffffffffffffff1690506000611eb38461248b565b6bffffffffffffffffffffffff169091209392505050565b600061093d611ed98361249f565b6124d0565b600061093d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004612456565b600061093d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600460206124d3565b600061093d604c80611f727fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861661248b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff9190911603600061267e565b6060600080611fbe8461248b565b6bffffffffffffffffffffffff1690506040519150819250611fe38483602001612704565b508181016020016040529052919050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b81546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009283900482166001019182169092029190911783558115611ba7576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b60006120a930612830565b15905090565b600054610100900460ff16806120c857506120c861209e565b806120d6575060005460ff16155b61212b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612fa8602e913960400191505060405180910390fd5b600054610100900460ff1615801561219157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602177fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760100000000000000000000000000000000000000000000179055801561224057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b80546fffffffffffffffffffffffffffffffff166122865780547fffffffffffffffffffffffffffffffff000000000000000000000000000000001660011781555b50565b60019103016fffffffffffffffffffffffffffffffff1690565b546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000909204161090565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461239557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6123b386828585612836565b9695505050505050565b600080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b60008061240d8484612a24565b905060405181111561241d575060005b8061244b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610a5e565b611e21858585612a96565b60008160200360080260ff1661246d8585856124d3565b901c949350505050565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b600061093d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c60206124d3565b90565b600060ff82166124e557506000610a5e565b6124ee8461248b565b6bffffffffffffffffffffffff166125098460ff8516612a24565b11156125e85761254a61251b85612477565b6bffffffffffffffffffffffff166125328661248b565b6bffffffffffffffffffffffff16858560ff16612aa9565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125ad578181015183820152602001612595565b50505050905090810190601f1680156125da5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff161115612645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612ff8603a913960400191505060405180910390fd5b60088202600061265486612477565b6bffffffffffffffffffffffff169050600061266f83612c04565b91909501511695945050505050565b60008061268a86612477565b6bffffffffffffffffffffffff1690506126a386612c4d565b6126b7856126b18489612a24565b90612a24565b11156126e6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506119e6565b6126f08186612a24565b90506123b38364ffffffffff168286612400565b600061270f83612c77565b612764576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806130326028913960400191505060405180910390fd5b61276d83612c89565b6127c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061305a602b913960400191505060405180910390fd5b60006127cd8461248b565b6bffffffffffffffffffffffff16905060006127e885612477565b6bffffffffffffffffffffffff169050600060405190508481111561280d5760206060fd5b8285848460045afa506123b361282287612cc6565b64ffffffffff168685612a96565b3b151590565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156128b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612f656022913960400191505060405180910390fd5b8360ff16601b14806128c657508360ff16601c145b61291b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612fd66022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612977573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611e2157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b81810182811015611ba757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60606000612ab686612ccc565b9150506000612ac486612ccc565b9150506000612ad286612ccc565b9150506000612ae086612ccc565b915050838383836040516020018080613085603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612f8782397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000612c588261248b565b612c6183612477565b016bffffffffffffffffffffffff169050919050565b6000612c8282612da0565b1592915050565b6000612c9482612cc6565b64ffffffffff1664ffffffffff1415612caf57506000610940565b6000612cba83612c4d565b60405110199392505050565b60d81c90565b600080601f5b600f8160ff161115612d345760ff600882021684901c612cf181612dc8565b61ffff16841793508160ff16601014612d0c57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612cd2565b50600f5b60ff8160ff161015612d9a5760ff600882021684901c612d5781612dc8565b61ffff16831792508160ff16600014612d7257601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612d38565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b6000612dda60048360ff16901c612df8565b60ff161760081b62ffff0016612def82612df8565b60ff1617919050565b600060f08083179060ff82161415612e14576030915050610940565b8060ff1660f11415612e2a576031915050610940565b8060ff1660f21415612e40576032915050610940565b8060ff1660f31415612e56576033915050610940565b8060ff1660f41415612e6c576034915050610940565b8060ff1660f51415612e82576035915050610940565b8060ff1660f61415612e98576036915050610940565b8060ff1660f71415612eae576037915050610940565b8060ff1660f81415612ec4576038915050610940565b8060ff1660f91415612eda576039915050610940565b8060ff1660fa1415612ef0576061915050610940565b8060ff1660fb1415612f06576062915050610940565b8060ff1660fc1415612f1c576063915050610940565b8060ff1660fd1415612f32576064915050610940565b8060ff1660fe1415612f48576065915050610940565b8060ff1660ff1415612f5e576066915050610940565b5091905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220ba7eb03366fd5f408bc1083c5469db5e4c329bdc631abed58b45a7e7466a827d64736f6c63430007060033";

export class Replica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
