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
    "burn(int24,int24,int24,uint128)": FunctionFragment;
    "feeGrowthGlobalIn()": FunctionFragment;
    "feeGrowthGlobalOut()": FunctionFragment;
    "feeTo()": FunctionFragment;
    "lastBlockNumber()": FunctionFragment;
    "latestTick()": FunctionFragment;
    "liquidity()": FunctionFragment;
    "mint((int24,int24,int24,int24,uint128,bool,bool))": FunctionFragment;
    "nearestTick()": FunctionFragment;
    "positions(address,int24,int24)": FunctionFragment;
    "secondsGrowthGlobal()": FunctionFragment;
    "sqrtPrice()": FunctionFragment;
    "swap(address,bool,uint256,uint160)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "transferIn(address,uint256)": FunctionFragment;
    "transferOut(address,address,uint256)": FunctionFragment;
    "utils()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
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
    functionFragment: "mint",
    values: [
      {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amountDesired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "nearestTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "secondsGrowthGlobal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sqrtPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "transferIn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOut",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "utils", values?: undefined): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nearestTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "secondsGrowthGlobal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sqrtPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "utils", data: BytesLike): Result;

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
      claim: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobalOut(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    lastBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestTick(overrides?: CallOverrides): Promise<[number]>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amountDesired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    secondsGrowthGlobal(overrides?: CallOverrides): Promise<[BigNumber]>;

    sqrtPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

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
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        amountIn: BigNumber;
        liquidity: BigNumber;
        feeGrowthGlobal: BigNumber;
        feeGrowthGlobalLast: BigNumber;
        secondsGrowthOutside: BigNumber;
      }
    >;

    transferIn(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOut(
      to: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    utils(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    lower: BigNumberish,
    upper: BigNumberish,
    claim: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeGrowthGlobalIn(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobalOut(overrides?: CallOverrides): Promise<BigNumber>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  lastBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  latestTick(overrides?: CallOverrides): Promise<number>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    mintParams: {
      lowerOld: BigNumberish;
      lower: BigNumberish;
      upperOld: BigNumberish;
      upper: BigNumberish;
      amountDesired: BigNumberish;
      zeroForOne: boolean;
      native: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  secondsGrowthGlobal(overrides?: CallOverrides): Promise<BigNumber>;

  sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

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
    [number, number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      previousTick: number;
      nextTick: number;
      amountIn: BigNumber;
      liquidity: BigNumber;
      feeGrowthGlobal: BigNumber;
      feeGrowthGlobalLast: BigNumber;
      secondsGrowthOutside: BigNumber;
    }
  >;

  transferIn(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOut(
    to: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  utils(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenInAmount: BigNumber;
        tokenOutAmount: BigNumber;
      }
    >;

    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalOut(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    lastBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    latestTick(overrides?: CallOverrides): Promise<number>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amountDesired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    secondsGrowthGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

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
        BigNumber
      ] & {
        previousTick: number;
        nextTick: number;
        amountIn: BigNumber;
        liquidity: BigNumber;
        feeGrowthGlobal: BigNumber;
        feeGrowthGlobalLast: BigNumber;
        secondsGrowthOutside: BigNumber;
      }
    >;

    transferIn(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOut(
      to: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    utils(overrides?: CallOverrides): Promise<string>;
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
      claim: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalOut(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    lastBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    latestTick(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amountDesired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nearestTick(overrides?: CallOverrides): Promise<BigNumber>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    secondsGrowthGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferIn(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOut(
      to: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    utils(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeGrowthGlobalIn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobalOut(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      mintParams: {
        lowerOld: BigNumberish;
        lower: BigNumberish;
        upperOld: BigNumberish;
        upper: BigNumberish;
        amountDesired: BigNumberish;
        zeroForOne: boolean;
        native: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nearestTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    secondsGrowthGlobal(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sqrtPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    transferIn(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOut(
      to: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    utils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
