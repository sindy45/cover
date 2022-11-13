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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolsharkHedgePoolInterface extends ethers.utils.Interface {
  functions: {
    "burn(int24,int24,uint128)": FunctionFragment;
    "collectProtocolFee()": FunctionFragment;
    "concentratedFactory()": FunctionFragment;
    "feeGrowthGlobal0()": FunctionFragment;
    "feeGrowthGlobal0Last()": FunctionFragment;
    "feeGrowthGlobal1()": FunctionFragment;
    "feeGrowthGlobal1Last()": FunctionFragment;
    "getPriceAndNearestTicks()": FunctionFragment;
    "getSecondsGrowthAndLastObservation()": FunctionFragment;
    "getTokenProtocolFees()": FunctionFragment;
    "liquidity0()": FunctionFragment;
    "liquidity1()": FunctionFragment;
    "mint((int24,int24,int24,int24,uint128,uint128,bool,bool))": FunctionFragment;
    "positions(address,int24,int24,bool)": FunctionFragment;
    "swap(address,bool,uint256,uint160)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collectProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "concentratedFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal0Last",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal1Last",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceAndNearestTicks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSecondsGrowthAndLastObservation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenProtocolFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "concentratedFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal0Last",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal1Last",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceAndNearestTicks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSecondsGrowthAndLastObservation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenProtocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;

  events: {
    "Burn(address,uint256,uint256)": EventFragment;
    "Collect(address,uint256,uint256)": EventFragment;
    "Mint(address,uint256,uint256)": EventFragment;
    "PoolCreated(address,address,address,uint256)": EventFragment;
    "Swap(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    owner: string;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type CollectEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type MintEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    owner: string;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type PoolCreatedEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    pool: string;
    token0: string;
    token1: string;
    fee: BigNumber;
  }
>;

export type SwapEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    recipient: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
  }
>;

export class PoolsharkHedgePool extends BaseContract {
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

  interface: PoolsharkHedgePoolInterface;

  functions: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collectProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    concentratedFactory(overrides?: CallOverrides): Promise<[string]>;

    feeGrowthGlobal0(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobal0Last(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobal1(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobal1Last(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriceAndNearestTicks(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, number] & {
        _price0: BigNumber;
        _price1: BigNumber;
        _nearestTick0: number;
        _nearestTick1: number;
      }
    >;

    getSecondsGrowthAndLastObservation(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & {
        _secondsGrowthGlobal: BigNumber;
        _lastObservation: number;
      }
    >;

    getTokenProtocolFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _token0ProtocolFee: BigNumber;
        _token1ProtocolFee: BigNumber;
      }
    >;

    liquidity0(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidity1(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthGlobalLast: BigNumber;
        highestTickClaimed: number;
        amountClaimed: BigNumber;
      }
    >;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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
        BigNumber,
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        amount0: BigNumber;
        amount1: BigNumber;
        liquidity0: BigNumber;
        liquidity1: BigNumber;
        feeGrowthGlobal0: BigNumber;
        feeGrowthGlobal1: BigNumber;
        averageSqrtPrice0: BigNumber;
        averageSqrtPrice1: BigNumber;
        secondsGrowthOutside: BigNumber;
      }
    >;
  };

  burn(
    lower: BigNumberish,
    upper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collectProtocolFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  concentratedFactory(overrides?: CallOverrides): Promise<string>;

  feeGrowthGlobal0(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobal0Last(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobal1(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobal1Last(overrides?: CallOverrides): Promise<BigNumber>;

  getPriceAndNearestTicks(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, number] & {
      _price0: BigNumber;
      _price1: BigNumber;
      _nearestTick0: number;
      _nearestTick1: number;
    }
  >;

  getSecondsGrowthAndLastObservation(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number] & {
      _secondsGrowthGlobal: BigNumber;
      _lastObservation: number;
    }
  >;

  getTokenProtocolFees(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      _token0ProtocolFee: BigNumber;
      _token1ProtocolFee: BigNumber;
    }
  >;

  liquidity0(overrides?: CallOverrides): Promise<BigNumber>;

  liquidity1(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    mintParams: {
      lowerOld: BigNumberish;
      lower: BigNumberish;
      upperOld: BigNumberish;
      upper: BigNumberish;
      amount0Desired: BigNumberish;
      amount1Desired: BigNumberish;
      zeroForOne: boolean;
      native: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  positions(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: boolean,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      liquidity: BigNumber;
      feeGrowthGlobalLast: BigNumber;
      highestTickClaimed: number;
      amountClaimed: BigNumber;
    }
  >;

  swap(
    recipient: string,
    zeroForOne: boolean,
    amountIn: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
      BigNumber,
      BigNumber
    ] & {
      previousTick: number;
      nextTick: number;
      amount0: BigNumber;
      amount1: BigNumber;
      liquidity0: BigNumber;
      liquidity1: BigNumber;
      feeGrowthGlobal0: BigNumber;
      feeGrowthGlobal1: BigNumber;
      averageSqrtPrice0: BigNumber;
      averageSqrtPrice1: BigNumber;
      secondsGrowthOutside: BigNumber;
    }
  >;

  callStatic: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        token0Amount: BigNumber;
        token1Amount: BigNumber;
        token0Fees: BigNumber;
        token1Fees: BigNumber;
      }
    >;

    collectProtocolFee(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    concentratedFactory(overrides?: CallOverrides): Promise<string>;

    feeGrowthGlobal0(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal0Last(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1Last(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceAndNearestTicks(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, number] & {
        _price0: BigNumber;
        _price1: BigNumber;
        _nearestTick0: number;
        _nearestTick1: number;
      }
    >;

    getSecondsGrowthAndLastObservation(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & {
        _secondsGrowthGlobal: BigNumber;
        _lastObservation: number;
      }
    >;

    getTokenProtocolFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _token0ProtocolFee: BigNumber;
        _token1ProtocolFee: BigNumber;
      }
    >;

    liquidity0(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity1(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthGlobalLast: BigNumber;
        highestTickClaimed: number;
        amountClaimed: BigNumber;
      }
    >;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
        BigNumber,
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        amount0: BigNumber;
        amount1: BigNumber;
        liquidity0: BigNumber;
        liquidity1: BigNumber;
        feeGrowthGlobal0: BigNumber;
        feeGrowthGlobal1: BigNumber;
        averageSqrtPrice0: BigNumber;
        averageSqrtPrice1: BigNumber;
        secondsGrowthOutside: BigNumber;
      }
    >;
  };

  filters: {
    "Burn(address,uint256,uint256)"(
      owner?: string | null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; amount0: BigNumber; amount1: BigNumber }
    >;

    Burn(
      owner?: string | null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; amount0: BigNumber; amount1: BigNumber }
    >;

    "Collect(address,uint256,uint256)"(
      sender?: string | null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; amount0: BigNumber; amount1: BigNumber }
    >;

    Collect(
      sender?: string | null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; amount0: BigNumber; amount1: BigNumber }
    >;

    "Mint(address,uint256,uint256)"(
      owner?: string | null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; amount0: BigNumber; amount1: BigNumber }
    >;

    Mint(
      owner?: string | null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; amount0: BigNumber; amount1: BigNumber }
    >;

    "PoolCreated(address,address,address,uint256)"(
      pool?: null,
      token0?: null,
      token1?: null,
      fee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { pool: string; token0: string; token1: string; fee: BigNumber }
    >;

    PoolCreated(
      pool?: null,
      token0?: null,
      token1?: null,
      fee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { pool: string; token0: string; token1: string; fee: BigNumber }
    >;

    "Swap(address,address,address,uint256,uint256)"(
      recipient?: string | null,
      tokenIn?: string | null,
      tokenOut?: string | null,
      amountIn?: null,
      amountOut?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        recipient: string;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    Swap(
      recipient?: string | null,
      tokenIn?: string | null,
      tokenOut?: string | null,
      amountIn?: null,
      amountOut?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        recipient: string;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;
  };

  estimateGas: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collectProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    concentratedFactory(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal0(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal0Last(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1Last(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceAndNearestTicks(overrides?: CallOverrides): Promise<BigNumber>;

    getSecondsGrowthAndLastObservation(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenProtocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity0(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity1(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collectProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    concentratedFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeGrowthGlobal0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobal0Last(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeGrowthGlobal1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobal1Last(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceAndNearestTicks(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSecondsGrowthAndLastObservation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenProtocolFees(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidity0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
