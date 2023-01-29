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
    "accumulate((int24,int24,uint32),(int104,uint104,int88,int88,uint64,uint64),(int104,uint104,int88,int88,uint64,uint64),uint32,uint128,int128,int128,bool)": FunctionFragment;
    "getMaxLiquidity(int24)": FunctionFragment;
    "quote(bool,uint160,(uint24,int24,uint16,uint32,uint8,int24,uint32),(uint256,uint256,uint256,uint256))": FunctionFragment;
    "rollover(int24,int24,uint256,uint256,int128,int128,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accumulate",
    values: [
      {
        previousTick: BigNumberish;
        nextTick: BigNumberish;
        accumEpochLast: BigNumberish;
      },
      {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
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
  encodeFunctionData(
    functionFragment: "rollover",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;

  decodeFunctionResult(functionFragment: "accumulate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMaxLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rollover", data: BytesLike): Result;

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
    accumulate(
      tickNode: {
        previousTick: BigNumberish;
        nextTick: BigNumberish;
        accumEpochLast: BigNumberish;
      },
      crossTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumEpoch: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      removeLiquidity: boolean,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          [number, number, number] & {
            previousTick: number;
            nextTick: number;
            accumEpochLast: number;
          },
          [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
            liquidityDelta: BigNumber;
            liquidityDeltaMinus: BigNumber;
            amountInDelta: BigNumber;
            amountOutDelta: BigNumber;
            amountInDeltaCarryPercent: BigNumber;
            amountOutDeltaCarryPercent: BigNumber;
          },
          [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
            liquidityDelta: BigNumber;
            liquidityDeltaMinus: BigNumber;
            amountInDelta: BigNumber;
            amountOutDelta: BigNumber;
            amountInDeltaCarryPercent: BigNumber;
            amountOutDeltaCarryPercent: BigNumber;
          }
        ] & {
          amountInDelta: BigNumber;
          amountOutDelta: BigNumber;
          accumTickNode: [number, number, number] & {
            previousTick: number;
            nextTick: number;
            accumEpochLast: number;
          };
          crossTick: [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
          ] & {
            liquidityDelta: BigNumber;
            liquidityDeltaMinus: BigNumber;
            amountInDelta: BigNumber;
            amountOutDelta: BigNumber;
            amountInDeltaCarryPercent: BigNumber;
            amountOutDeltaCarryPercent: BigNumber;
          };
          accumTick: [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
          ] & {
            liquidityDelta: BigNumber;
            liquidityDeltaMinus: BigNumber;
            amountInDelta: BigNumber;
            amountOutDelta: BigNumber;
            amountInDeltaCarryPercent: BigNumber;
            amountOutDeltaCarryPercent: BigNumber;
          };
        }
      ]
    >;

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

    rollover(
      nextTickToCross: BigNumberish,
      nextTickToAccum: BigNumberish,
      currentPrice: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      isPool0: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  accumulate(
    tickNode: {
      previousTick: BigNumberish;
      nextTick: BigNumberish;
      accumEpochLast: BigNumberish;
    },
    crossTick: {
      liquidityDelta: BigNumberish;
      liquidityDeltaMinus: BigNumberish;
      amountInDelta: BigNumberish;
      amountOutDelta: BigNumberish;
      amountInDeltaCarryPercent: BigNumberish;
      amountOutDeltaCarryPercent: BigNumberish;
    },
    accumTick: {
      liquidityDelta: BigNumberish;
      liquidityDeltaMinus: BigNumberish;
      amountInDelta: BigNumberish;
      amountOutDelta: BigNumberish;
      amountInDeltaCarryPercent: BigNumberish;
      amountOutDeltaCarryPercent: BigNumberish;
    },
    accumEpoch: BigNumberish,
    currentLiquidity: BigNumberish,
    amountInDelta: BigNumberish,
    amountOutDelta: BigNumberish,
    removeLiquidity: boolean,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      [number, number, number] & {
        previousTick: number;
        nextTick: number;
        accumEpochLast: number;
      },
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      },
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      }
    ] & {
      amountInDelta: BigNumber;
      amountOutDelta: BigNumber;
      accumTickNode: [number, number, number] & {
        previousTick: number;
        nextTick: number;
        accumEpochLast: number;
      };
      crossTick: [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      };
      accumTick: [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        liquidityDelta: BigNumber;
        liquidityDeltaMinus: BigNumber;
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaCarryPercent: BigNumber;
        amountOutDeltaCarryPercent: BigNumber;
      };
    }
  >;

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

  rollover(
    nextTickToCross: BigNumberish,
    nextTickToAccum: BigNumberish,
    currentPrice: BigNumberish,
    currentLiquidity: BigNumberish,
    amountInDelta: BigNumberish,
    amountOutDelta: BigNumberish,
    isPool0: boolean,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    accumulate(
      tickNode: {
        previousTick: BigNumberish;
        nextTick: BigNumberish;
        accumEpochLast: BigNumberish;
      },
      crossTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumEpoch: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      removeLiquidity: boolean,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        [number, number, number] & {
          previousTick: number;
          nextTick: number;
          accumEpochLast: number;
        },
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          liquidityDelta: BigNumber;
          liquidityDeltaMinus: BigNumber;
          amountInDelta: BigNumber;
          amountOutDelta: BigNumber;
          amountInDeltaCarryPercent: BigNumber;
          amountOutDeltaCarryPercent: BigNumber;
        },
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          liquidityDelta: BigNumber;
          liquidityDeltaMinus: BigNumber;
          amountInDelta: BigNumber;
          amountOutDelta: BigNumber;
          amountInDeltaCarryPercent: BigNumber;
          amountOutDeltaCarryPercent: BigNumber;
        }
      ] & {
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        accumTickNode: [number, number, number] & {
          previousTick: number;
          nextTick: number;
          accumEpochLast: number;
        };
        crossTick: [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          liquidityDelta: BigNumber;
          liquidityDeltaMinus: BigNumber;
          amountInDelta: BigNumber;
          amountOutDelta: BigNumber;
          amountInDeltaCarryPercent: BigNumber;
          amountOutDeltaCarryPercent: BigNumber;
        };
        accumTick: [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          liquidityDelta: BigNumber;
          liquidityDeltaMinus: BigNumber;
          amountInDelta: BigNumber;
          amountOutDelta: BigNumber;
          amountInDeltaCarryPercent: BigNumber;
          amountOutDeltaCarryPercent: BigNumber;
        };
      }
    >;

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

    rollover(
      nextTickToCross: BigNumberish,
      nextTickToAccum: BigNumberish,
      currentPrice: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      isPool0: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    accumulate(
      tickNode: {
        previousTick: BigNumberish;
        nextTick: BigNumberish;
        accumEpochLast: BigNumberish;
      },
      crossTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumEpoch: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      removeLiquidity: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    rollover(
      nextTickToCross: BigNumberish,
      nextTickToAccum: BigNumberish,
      currentPrice: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      isPool0: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accumulate(
      tickNode: {
        previousTick: BigNumberish;
        nextTick: BigNumberish;
        accumEpochLast: BigNumberish;
      },
      crossTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumTick: {
        liquidityDelta: BigNumberish;
        liquidityDeltaMinus: BigNumberish;
        amountInDelta: BigNumberish;
        amountOutDelta: BigNumberish;
        amountInDeltaCarryPercent: BigNumberish;
        amountOutDeltaCarryPercent: BigNumberish;
      },
      accumEpoch: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      removeLiquidity: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    rollover(
      nextTickToCross: BigNumberish,
      nextTickToAccum: BigNumberish,
      currentPrice: BigNumberish,
      currentLiquidity: BigNumberish,
      amountInDelta: BigNumberish,
      amountOutDelta: BigNumberish,
      isPool0: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
