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
    "feeGrowthGlobal()": FunctionFragment;
    "feeGrowthGlobalLast()": FunctionFragment;
    "liquidity()": FunctionFragment;
    "positions(address,int24,int24)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "feeGrowthGlobal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobalLast",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobalLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;

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
    feeGrowthGlobal(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobalLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

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
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        amountIn: BigNumber;
        amountOut: BigNumber;
        amountInGrowth: BigNumber;
        amountInGrowthLast: BigNumber;
        liquidity: BigNumber;
        feeGrowthGlobal: BigNumber;
        amountInUnfilled: BigNumber;
        secondsGrowthOutside: BigNumber;
      }
    >;
  };

  feeGrowthGlobal(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobalLast(overrides?: CallOverrides): Promise<BigNumber>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

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
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      previousTick: number;
      nextTick: number;
      amountIn: BigNumber;
      amountOut: BigNumber;
      amountInGrowth: BigNumber;
      amountInGrowthLast: BigNumber;
      liquidity: BigNumber;
      feeGrowthGlobal: BigNumber;
      amountInUnfilled: BigNumber;
      secondsGrowthOutside: BigNumber;
    }
  >;

  callStatic: {
    feeGrowthGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalLast(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

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
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        amountIn: BigNumber;
        amountOut: BigNumber;
        amountInGrowth: BigNumber;
        amountInGrowthLast: BigNumber;
        liquidity: BigNumber;
        feeGrowthGlobal: BigNumber;
        amountInUnfilled: BigNumber;
        secondsGrowthOutside: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    feeGrowthGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalLast(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    feeGrowthGlobal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobalLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
