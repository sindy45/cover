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
import type {
  ConcentratedPoolMock,
  ConcentratedPoolMockInterface,
} from "../ConcentratedPoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_swapFee",
        type: "uint24",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "cardinalityNext",
        type: "uint16",
      },
    ],
    name: "increaseObservationCardinalityNext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "secondsPerLiquidityCumulativeX128s",
        type: "uint160[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "slot0",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "uint16",
        name: "observationIndex",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "cardinality",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "cardinalityNext",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "feeProtocol",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161050438038061050483398101604081905261002f916100e1565b816001600160a01b0316836001600160a01b0316106100885760405162461bcd60e51b81526020600482015260116024820152703bb937b733903a37b5b2b71037b93232b960791b604482015260640160405180910390fd5b600080546001600160a01b039485166001600160a01b031991821617909155600180549390941692169190911790915562ffffff16600255610130565b80516001600160a01b03811681146100dc57600080fd5b919050565b6000806000606084860312156100f657600080fd5b6100ff846100c5565b925061010d602085016100c5565b9150604084015162ffffff8116811461012557600080fd5b809150509250925092565b6103c58061013f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806332148f67146100465780633850c7bd14610076578063883bdbfd146100ba575b600080fd5b61007461005436600461023c565b6003805461ffff909216620100000263ffff000019909216919091179055565b005b60408051600160601b8152600060208201526004918101829052606081019190915260056080820152606460a0820152600160c082015260e0015b60405180910390f35b6100cd6100c8366004610267565b6100db565b6040516100b19291906102dc565b6060808267ffffffffffffffff8111156100f7576100f7610363565b604051908082528060200260200182016040528015610120578160200160208202803683370190505b50915060008260008151811061013857610138610379565b602002602001019060060b908160060b8152505060008260018151811061016157610161610379565b60069290920b602092830291909101909101528267ffffffffffffffff81111561018d5761018d610363565b6040519080825280602002602001820160405280156101b6578160200160208202803683370190505b50905069c91435798c9226a0e6d7816000815181106101d7576101d7610379565b60200260200101906001600160a01b031690816001600160a01b03168152505069c914354b931643013aeb8160018151811061021557610215610379565b60200260200101906001600160a01b031690816001600160a01b0316815250509250929050565b60006020828403121561024e57600080fd5b813561ffff8116811461026057600080fd5b9392505050565b6000806020838503121561027a57600080fd5b823567ffffffffffffffff8082111561029257600080fd5b818501915085601f8301126102a657600080fd5b8135818111156102b557600080fd5b8660208260051b85010111156102ca57600080fd5b60209290920196919550909350505050565b604080825283519082018190526000906020906060840190828701845b8281101561031857815160060b845292840192908401906001016102f9565b5050508381038285015284518082528583019183019060005b818110156103565783516001600160a01b031683529284019291840191600101610331565b5090979650505050505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea264697066735822122079c4767fa6bf22891177dacd6c0f99f8532f13fdcd7c1d60017a453b7bea9f8a64736f6c634300080d0033";

export class ConcentratedPoolMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    tokenA: string,
    tokenB: string,
    _swapFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConcentratedPoolMock> {
    return super.deploy(
      tokenA,
      tokenB,
      _swapFee,
      overrides || {}
    ) as Promise<ConcentratedPoolMock>;
  }
  getDeployTransaction(
    tokenA: string,
    tokenB: string,
    _swapFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenA,
      tokenB,
      _swapFee,
      overrides || {}
    );
  }
  attach(address: string): ConcentratedPoolMock {
    return super.attach(address) as ConcentratedPoolMock;
  }
  connect(signer: Signer): ConcentratedPoolMock__factory {
    return super.connect(signer) as ConcentratedPoolMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConcentratedPoolMockInterface {
    return new utils.Interface(_abi) as ConcentratedPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConcentratedPoolMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConcentratedPoolMock;
  }
}
