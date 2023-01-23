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
  "0x61020861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80630af8b27f14610045578063aa9a09121461006a575b600080fd5b610058610053366004610190565b61007d565b60405190815260200160405180910390f35b610058610078366004610190565b610094565b600061008a8484846100a1565b90505b9392505050565b600061008a8484846100de565b60006100ae8484846100de565b905081806100be576100be6101bc565b8385091561008d5760001981106100d457600080fd5b6001019392505050565b6000808060001985870985870292508281108382030391505080600003610117576000841161010c57600080fd5b50829004905061008d565b80841161012357600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000806000606084860312156101a557600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601260045260246000fdfea2646970667358221220d73efc16568de78a14910fec2087c365d4ff68e19b0d2dd298b2a704b9bf8c6864736f6c634300080d0033";

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
