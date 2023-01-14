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
    "feeTo()": FunctionFragment;
    "pool0()": FunctionFragment;
    "pool1()": FunctionFragment;
    "positions0(address,int24,int24)": FunctionFragment;
    "positions1(address,int24,int24)": FunctionFragment;
    "state()": FunctionFragment;
    "tickNodes(int24)": FunctionFragment;
    "ticks0(int24)": FunctionFragment;
    "ticks1(int24)": FunctionFragment;
    "utils()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool0", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positions0",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "positions1",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tickNodes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ticks0",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ticks1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "utils", values?: undefined): string;

  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickNodes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks1", data: BytesLike): Result;
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
    feeTo(overrides?: CallOverrides): Promise<[string]>;

    pool0(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, number, number] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
        nearestTick: number;
        lastTick: number;
      }
    >;

    pool1(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, number, number] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
        nearestTick: number;
        lastTick: number;
      }
    >;

    positions0(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        accumEpochLast: number;
        claimPriceLast: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    positions1(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        accumEpochLast: number;
        claimPriceLast: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    state(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, number] & {
        unlocked: number;
        latestTick: number;
        accumEpoch: number;
        lastBlockNumber: number;
        swapFee: number;
        tickSpacing: number;
      }
    >;

    tickNodes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        previousTick: number;
        nextTick: number;
        accumEpochLast: number;
      }
    >;

    ticks0(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      }
    >;

    ticks1(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      }
    >;

    utils(overrides?: CallOverrides): Promise<[string]>;
  };

  feeTo(overrides?: CallOverrides): Promise<string>;

  pool0(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, number, number] & {
      liquidity: BigNumber;
      feeGrowthCurrentEpoch: BigNumber;
      price: BigNumber;
      nearestTick: number;
      lastTick: number;
    }
  >;

  pool1(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, number, number] & {
      liquidity: BigNumber;
      feeGrowthCurrentEpoch: BigNumber;
      price: BigNumber;
      nearestTick: number;
      lastTick: number;
    }
  >;

  positions0(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      accumEpochLast: number;
      claimPriceLast: BigNumber;
      amountIn: BigNumber;
      amountOut: BigNumber;
    }
  >;

  positions1(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      accumEpochLast: number;
      claimPriceLast: BigNumber;
      amountIn: BigNumber;
      amountOut: BigNumber;
    }
  >;

  state(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number] & {
      unlocked: number;
      latestTick: number;
      accumEpoch: number;
      lastBlockNumber: number;
      swapFee: number;
      tickSpacing: number;
    }
  >;

  tickNodes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number] & {
      previousTick: number;
      nextTick: number;
      accumEpochLast: number;
    }
  >;

  ticks0(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      liquidityDelta: BigNumber;
      liquidityDeltaMinus: BigNumber;
      amountInDelta: BigNumber;
      amountOutDelta: BigNumber;
      amountInDeltaCarryPercent: BigNumber;
      amountOutDeltaCarryPercent: BigNumber;
    }
  >;

  ticks1(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      liquidityDelta: BigNumber;
      liquidityDeltaMinus: BigNumber;
      amountInDelta: BigNumber;
      amountOutDelta: BigNumber;
      amountInDeltaCarryPercent: BigNumber;
      amountOutDeltaCarryPercent: BigNumber;
    }
  >;

  utils(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    feeTo(overrides?: CallOverrides): Promise<string>;

    pool0(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, number, number] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
        nearestTick: number;
        lastTick: number;
      }
    >;

    pool1(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, number, number] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
        nearestTick: number;
        lastTick: number;
      }
    >;

    positions0(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        accumEpochLast: number;
        claimPriceLast: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    positions1(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        accumEpochLast: number;
        claimPriceLast: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    state(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, number] & {
        unlocked: number;
        latestTick: number;
        accumEpoch: number;
        lastBlockNumber: number;
        swapFee: number;
        tickSpacing: number;
      }
    >;

    tickNodes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        previousTick: number;
        nextTick: number;
        accumEpochLast: number;
      }
    >;

    ticks0(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      }
    >;

    ticks1(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      }
    >;

    utils(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    pool0(overrides?: CallOverrides): Promise<BigNumber>;

    pool1(overrides?: CallOverrides): Promise<BigNumber>;

    positions0(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positions1(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    tickNodes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks0(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ticks1(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    utils(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions0(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positions1(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tickNodes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticks0(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticks1(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    utils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
