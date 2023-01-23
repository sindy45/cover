/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICoverPool, ICoverPoolInterface } from "../ICoverPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "claim",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "claim",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "lowerOld",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upperOld",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "claim",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "amountDesired",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "priceLimit",
        type: "uint160",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICoverPool__factory {
  static readonly abi = _abi;
  static createInterface(): ICoverPoolInterface {
    return new utils.Interface(_abi) as ICoverPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICoverPool {
    return new Contract(address, _abi, signerOrProvider) as ICoverPool;
  }
}
