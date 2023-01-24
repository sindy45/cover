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

interface TicksInterface extends ethers.utils.Interface {
  functions: {
    "getMaxLiquidity(int24)": FunctionFragment;
    "quote(bool,uint160,(uint24,int24,uint16,uint32,uint8,int24,uint32),(uint256,uint256,uint256,uint256))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMaxLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [
      boolean,
      BigNumberish,
      {
        swapFee: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        lastBlockNumber: BigNumberish;
        unlocked: BigNumberish;
        latestTick: BigNumberish;
        accumEpoch: BigNumberish;
      },
      {
        price: BigNumberish;
        liquidity: BigNumberish;
        feeAmount: BigNumberish;
        input: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMaxLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;

  events: {};
}

export class Ticks extends BaseContract {
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

  interface: TicksInterface;

  functions: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    quote(
      zeroForOne: boolean,
      priceLimit: BigNumberish,
      state: {
        swapFee: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        lastBlockNumber: BigNumberish;
        unlocked: BigNumberish;
        latestTick: BigNumberish;
        accumEpoch: BigNumberish;
      },
      cache: {
        price: BigNumberish;
        liquidity: BigNumberish;
        feeAmount: BigNumberish;
        input: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          price: BigNumber;
          liquidity: BigNumber;
          feeAmount: BigNumber;
          input: BigNumber;
        },
        BigNumber
      ] & { amountOut: BigNumber }
    >;
  };

  getMaxLiquidity(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quote(
    zeroForOne: boolean,
    priceLimit: BigNumberish,
    state: {
      swapFee: BigNumberish;
      tickSpread: BigNumberish;
      twapLength: BigNumberish;
      lastBlockNumber: BigNumberish;
      unlocked: BigNumberish;
      latestTick: BigNumberish;
      accumEpoch: BigNumberish;
    },
    cache: {
      price: BigNumberish;
      liquidity: BigNumberish;
      feeAmount: BigNumberish;
      input: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        price: BigNumber;
        liquidity: BigNumber;
        feeAmount: BigNumber;
        input: BigNumber;
      },
      BigNumber
    ] & { amountOut: BigNumber }
  >;

  callStatic: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quote(
      zeroForOne: boolean,
      priceLimit: BigNumberish,
      state: {
        swapFee: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        lastBlockNumber: BigNumberish;
        unlocked: BigNumberish;
        latestTick: BigNumberish;
        accumEpoch: BigNumberish;
      },
      cache: {
        price: BigNumberish;
        liquidity: BigNumberish;
        feeAmount: BigNumberish;
        input: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          price: BigNumber;
          liquidity: BigNumber;
          feeAmount: BigNumber;
          input: BigNumber;
        },
        BigNumber
      ] & { amountOut: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quote(
      zeroForOne: boolean,
      priceLimit: BigNumberish,
      state: {
        swapFee: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        lastBlockNumber: BigNumberish;
        unlocked: BigNumberish;
        latestTick: BigNumberish;
        accumEpoch: BigNumberish;
      },
      cache: {
        price: BigNumberish;
        liquidity: BigNumberish;
        feeAmount: BigNumberish;
        input: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quote(
      zeroForOne: boolean,
      priceLimit: BigNumberish,
      state: {
        swapFee: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        lastBlockNumber: BigNumberish;
        unlocked: BigNumberish;
        latestTick: BigNumberish;
        accumEpoch: BigNumberish;
      },
      cache: {
        price: BigNumberish;
        liquidity: BigNumberish;
        feeAmount: BigNumberish;
        input: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
