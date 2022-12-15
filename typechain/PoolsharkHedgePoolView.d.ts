/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolsharkHedgePoolViewInterface extends ethers.utils.Interface {
  functions: {
    "feeGrowthGlobalIn()": FunctionFragment;
    "feeGrowthGlobalOut()": FunctionFragment;
    "feeTo()": FunctionFragment;
    "lastBlockNumber()": FunctionFragment;
    "latestTick()": FunctionFragment;
    "liquidity()": FunctionFragment;
    "nearestTick()": FunctionFragment;
    "positions(address,int24,int24)": FunctionFragment;
    "sqrtPrice()": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "utils()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "feeGrowthGlobalIn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobalOut",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTick",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nearestTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sqrtPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "utils", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "feeGrowthGlobalIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobalOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "latestTick", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nearestTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sqrtPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "utils", data: BytesLike): Result;

  events: {};
}

export class PoolsharkHedgePoolView extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolsharkHedgePoolViewInterface;

  functions: {
    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobalOut(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    lastBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestTick(overrides?: CallOverrides): Promise<[number]>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    nearestTick(overrides?: CallOverrides): Promise<[number]>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthGlobalLast: BigNumber;
        claimPriceLast: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    sqrtPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        feeGrowthGlobalIn: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
      }
    >;

    utils(overrides?: CallOverrides): Promise<[string]>;
  };

  feeGrowthGlobalIn(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobalOut(overrides?: CallOverrides): Promise<BigNumber>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  lastBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  latestTick(overrides?: CallOverrides): Promise<number>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  nearestTick(overrides?: CallOverrides): Promise<number>;

  positions(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      feeGrowthGlobalLast: BigNumber;
      claimPriceLast: BigNumber;
      amountIn: BigNumber;
      amountOut: BigNumber;
    }
  >;

  sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

  ticks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      previousTick: number;
      nextTick: number;
      liquidityDelta: BigNumber;
      liquidityDeltaMinus: BigNumber;
      feeGrowthGlobalIn: BigNumber;
      amountInDelta: BigNumber;
      amountOutDelta: BigNumber;
    }
  >;

  utils(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalOut(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    lastBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    latestTick(overrides?: CallOverrides): Promise<number>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    nearestTick(overrides?: CallOverrides): Promise<number>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthGlobalLast: BigNumber;
        claimPriceLast: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        feeGrowthGlobalIn: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
      }
    >;

    utils(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalOut(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    lastBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    latestTick(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    nearestTick(overrides?: CallOverrides): Promise<BigNumber>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    utils(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobalOut(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nearestTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sqrtPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    utils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
