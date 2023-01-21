/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  PoolsharkHedgePoolErrors,
  PoolsharkHedgePoolErrorsInterface,
} from "../PoolsharkHedgePoolErrors";

const _abi = [
  {
    inputs: [],
    name: "InvalidPosition",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSwapFee",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTick",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTickSpread",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidToken",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Locked",
    type: "error",
  },
  {
    inputs: [],
    name: "LowerNotEvenTick",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxTickLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughOutputLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Token0Missing",
    type: "error",
  },
  {
    inputs: [],
    name: "Token1Missing",
    type: "error",
  },
  {
    inputs: [],
    name: "UpperNotOddTick",
    type: "error",
  },
  {
    inputs: [],
    name: "WaitUntilEnoughObservations",
    type: "error",
  },
];

export class PoolsharkHedgePoolErrors__factory {
  static readonly abi = _abi;
  static createInterface(): PoolsharkHedgePoolErrorsInterface {
    return new utils.Interface(_abi) as PoolsharkHedgePoolErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolsharkHedgePoolErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PoolsharkHedgePoolErrors;
  }
}
