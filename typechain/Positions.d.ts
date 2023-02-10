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

interface PositionsInterface extends ethers.utils.Interface {
  functions: {
    "getMaxLiquidity(int24)": FunctionFragment;
    "validate((int24,int24,int24,int24,bool,uint128,(uint8,uint16,int16,uint16,int24,uint32,uint32,uint160)))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMaxLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [
      {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        zeroForOne: boolean;
        amount: BigNumberish;
        state: {
          unlocked: BigNumberish;
          swapFee: BigNumberish;
          tickSpread: BigNumberish;
          twapLength: BigNumberish;
          latestTick: BigNumberish;
          lastBlockNumber: BigNumberish;
          accumEpoch: BigNumberish;
          latestPrice: BigNumberish;
        };
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMaxLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {};
}

export class Positions extends BaseContract {
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

  interface: PositionsInterface;

  functions: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    validate(
      params: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        zeroForOne: boolean;
        amount: BigNumberish;
        state: {
          unlocked: BigNumberish;
          swapFee: BigNumberish;
          tickSpread: BigNumberish;
          twapLength: BigNumberish;
          latestTick: BigNumberish;
          lastBlockNumber: BigNumberish;
          accumEpoch: BigNumberish;
          latestPrice: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, BigNumber, BigNumber] & {
        liquidityMinted: BigNumber;
      }
    >;
  };

  getMaxLiquidity(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  validate(
    params: {
      lowerOld: BigNumberish;
      lower: BigNumberish;
      upper: BigNumberish;
      upperOld: BigNumberish;
      zeroForOne: boolean;
      amount: BigNumberish;
      state: {
        unlocked: BigNumberish;
        swapFee: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        latestTick: BigNumberish;
        lastBlockNumber: BigNumberish;
        accumEpoch: BigNumberish;
        latestPrice: BigNumberish;
      };
    },
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, BigNumber, BigNumber] & {
      liquidityMinted: BigNumber;
    }
  >;

  callStatic: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validate(
      params: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        zeroForOne: boolean;
        amount: BigNumberish;
        state: {
          unlocked: BigNumberish;
          swapFee: BigNumberish;
          tickSpread: BigNumberish;
          twapLength: BigNumberish;
          latestTick: BigNumberish;
          lastBlockNumber: BigNumberish;
          accumEpoch: BigNumberish;
          latestPrice: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, BigNumber, BigNumber] & {
        liquidityMinted: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validate(
      params: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        zeroForOne: boolean;
        amount: BigNumberish;
        state: {
          unlocked: BigNumberish;
          swapFee: BigNumberish;
          tickSpread: BigNumberish;
          twapLength: BigNumberish;
          latestTick: BigNumberish;
          lastBlockNumber: BigNumberish;
          accumEpoch: BigNumberish;
          latestPrice: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMaxLiquidity(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validate(
      params: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        zeroForOne: boolean;
        amount: BigNumberish;
        state: {
          unlocked: BigNumberish;
          swapFee: BigNumberish;
          tickSpread: BigNumberish;
          twapLength: BigNumberish;
          latestTick: BigNumberish;
          lastBlockNumber: BigNumberish;
          accumEpoch: BigNumberish;
          latestPrice: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
