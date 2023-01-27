/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FullPrecisionMath,
  FullPrecisionMathInterface,
} from "../FullPrecisionMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "divRoundingUp",
    outputs: [
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "mulDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "mulDivRoundingUp",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61024e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80630af8b27f1461005057806340226b3214610075578063aa9a09121461008e575b600080fd5b61006361005e3660046101b4565b6100a1565b60405190815260200160405180910390f35b6100636100833660046101e0565b808204910615150190565b61006361009c3660046101b4565b6100b8565b60006100ae8484846100c5565b90505b9392505050565b60006100ae848484610102565b60006100d2848484610102565b905081806100e2576100e2610202565b838509156100b15760001981106100f857600080fd5b6001019392505050565b600080806000198587098587029250828110838203039150508060000361013b576000841161013057600080fd5b5082900490506100b1565b80841161014757600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000806000606084860312156101c957600080fd5b505081359360208301359350604090920135919050565b600080604083850312156101f357600080fd5b50508035926020909101359150565b634e487b7160e01b600052601260045260246000fdfea2646970667358221220c442f96423af16897cf633ba750de2c75809b04cd946d49fb20c4cd1079355f764736f6c634300080d0033";

export class FullPrecisionMath__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FullPrecisionMath> {
    return super.deploy(overrides || {}) as Promise<FullPrecisionMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FullPrecisionMath {
    return super.attach(address) as FullPrecisionMath;
  }
  connect(signer: Signer): FullPrecisionMath__factory {
    return super.connect(signer) as FullPrecisionMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FullPrecisionMathInterface {
    return new utils.Interface(_abi) as FullPrecisionMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FullPrecisionMath {
    return new Contract(address, _abi, signerOrProvider) as FullPrecisionMath;
  }
}
