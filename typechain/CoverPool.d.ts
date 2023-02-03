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

interface CoverPoolInterface extends ethers.utils.Interface {
  functions: {
    "burn(int24,int24,int24,bool,uint128)": FunctionFragment;
    "collect(int24,int24,int24,bool)": FunctionFragment;
    "feeTo()": FunctionFragment;
    "globalState()": FunctionFragment;
    "mint(int24,int24,int24,int24,int24,uint128,bool)": FunctionFragment;
    "pool0()": FunctionFragment;
    "pool1()": FunctionFragment;
    "positions0(address,int24,int24)": FunctionFragment;
    "positions1(address,int24,int24)": FunctionFragment;
    "quote(bool,uint256,uint160)": FunctionFragment;
    "swap(address,bool,uint256,uint160)": FunctionFragment;
    "tickNodes(int24)": FunctionFragment;
    "ticks0(int24)": FunctionFragment;
    "ticks1(int24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "globalState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
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
  encodeFunctionData(
    functionFragment: "quote",
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, boolean, BigNumberish, BigNumberish]
  ): string;
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

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "globalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickNodes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks1", data: BytesLike): Result;

  events: {
    "Burn(address,int24,int24,int24,bool,uint128)": EventFragment;
    "Collect(address,uint256,uint256)": EventFragment;
    "Mint(address,int24,int24,bool,uint128)": EventFragment;
    "PoolCreated(address,address,address,uint24,int24)": EventFragment;
    "Swap(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type BurnEvent = TypedEvent<
  [string, number, number, number, boolean, BigNumber] & {
    owner: string;
    lower: number;
    upper: number;
    claim: number;
    zeroForOne: boolean;
    liquidityBurned: BigNumber;
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
  [string, number, number, boolean, BigNumber] & {
    owner: string;
    lower: number;
    upper: number;
    zeroForOne: boolean;
    liquidityMinted: BigNumber;
  }
>;

export type PoolCreatedEvent = TypedEvent<
  [string, string, string, number, number] & {
    pool: string;
    token0: string;
    token1: string;
    fee: number;
    tickSpacing: number;
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

export class CoverPool extends BaseContract {
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

  interface: CoverPoolInterface;

  functions: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collect(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    globalState(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, number, number] & {
        swapFee: number;
        tickSpread: number;
        twapLength: number;
        lastBlockNumber: number;
        unlocked: number;
        latestTick: number;
        accumEpoch: number;
      }
    >;

    mint(
      lowerOld: BigNumberish,
      lower: BigNumberish,
      upperOld: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      amountDesired: BigNumberish,
      zeroForOne: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pool0(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
      }
    >;

    pool1(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
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

    quote(
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { inAmount: BigNumber; outAmount: BigNumber }
    >;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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
  };

  burn(
    lower: BigNumberish,
    upper: BigNumberish,
    claim: BigNumberish,
    zeroForOne: boolean,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collect(
    lower: BigNumberish,
    upper: BigNumberish,
    claim: BigNumberish,
    zeroForOne: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  globalState(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number, number] & {
      swapFee: number;
      tickSpread: number;
      twapLength: number;
      lastBlockNumber: number;
      unlocked: number;
      latestTick: number;
      accumEpoch: number;
    }
  >;

  mint(
    lowerOld: BigNumberish,
    lower: BigNumberish,
    upperOld: BigNumberish,
    upper: BigNumberish,
    claim: BigNumberish,
    amountDesired: BigNumberish,
    zeroForOne: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pool0(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      feeGrowthCurrentEpoch: BigNumber;
      price: BigNumber;
    }
  >;

  pool1(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      feeGrowthCurrentEpoch: BigNumber;
      price: BigNumber;
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

  quote(
    zeroForOne: boolean,
    amountIn: BigNumberish,
    priceLimit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { inAmount: BigNumber; outAmount: BigNumber }
  >;

  swap(
    recipient: string,
    zeroForOne: boolean,
    amountIn: BigNumberish,
    priceLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  callStatic: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    collect(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountIn: BigNumber; amountOut: BigNumber }
    >;

    feeTo(overrides?: CallOverrides): Promise<string>;

    globalState(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, number, number] & {
        swapFee: number;
        tickSpread: number;
        twapLength: number;
        lastBlockNumber: number;
        unlocked: number;
        latestTick: number;
        accumEpoch: number;
      }
    >;

    mint(
      lowerOld: BigNumberish,
      lower: BigNumberish,
      upperOld: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      amountDesired: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    pool0(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
      }
    >;

    pool1(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        feeGrowthCurrentEpoch: BigNumber;
        price: BigNumber;
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

    quote(
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { inAmount: BigNumber; outAmount: BigNumber }
    >;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
  };

  filters: {
    "Burn(address,int24,int24,int24,bool,uint128)"(
      owner?: string | null,
      lower?: BigNumberish | null,
      upper?: BigNumberish | null,
      claim?: null,
      zeroForOne?: null,
      liquidityBurned?: null
    ): TypedEventFilter<
      [string, number, number, number, boolean, BigNumber],
      {
        owner: string;
        lower: number;
        upper: number;
        claim: number;
        zeroForOne: boolean;
        liquidityBurned: BigNumber;
      }
    >;

    Burn(
      owner?: string | null,
      lower?: BigNumberish | null,
      upper?: BigNumberish | null,
      claim?: null,
      zeroForOne?: null,
      liquidityBurned?: null
    ): TypedEventFilter<
      [string, number, number, number, boolean, BigNumber],
      {
        owner: string;
        lower: number;
        upper: number;
        claim: number;
        zeroForOne: boolean;
        liquidityBurned: BigNumber;
      }
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

    "Mint(address,int24,int24,bool,uint128)"(
      owner?: string | null,
      lower?: BigNumberish | null,
      upper?: BigNumberish | null,
      zeroForOne?: null,
      liquidityMinted?: null
    ): TypedEventFilter<
      [string, number, number, boolean, BigNumber],
      {
        owner: string;
        lower: number;
        upper: number;
        zeroForOne: boolean;
        liquidityMinted: BigNumber;
      }
    >;

    Mint(
      owner?: string | null,
      lower?: BigNumberish | null,
      upper?: BigNumberish | null,
      zeroForOne?: null,
      liquidityMinted?: null
    ): TypedEventFilter<
      [string, number, number, boolean, BigNumber],
      {
        owner: string;
        lower: number;
        upper: number;
        zeroForOne: boolean;
        liquidityMinted: BigNumber;
      }
    >;

    "PoolCreated(address,address,address,uint24,int24)"(
      pool?: null,
      token0?: null,
      token1?: null,
      fee?: null,
      tickSpacing?: null
    ): TypedEventFilter<
      [string, string, string, number, number],
      {
        pool: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;

    PoolCreated(
      pool?: null,
      token0?: null,
      token1?: null,
      fee?: null,
      tickSpacing?: null
    ): TypedEventFilter<
      [string, string, string, number, number],
      {
        pool: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
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
      zeroForOne: boolean,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collect(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    globalState(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      lowerOld: BigNumberish,
      lower: BigNumberish,
      upperOld: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      amountDesired: BigNumberish,
      zeroForOne: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    quote(
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tickNodes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks0(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ticks1(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collect(
      lower: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      zeroForOne: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    globalState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      lowerOld: BigNumberish,
      lower: BigNumberish,
      upperOld: BigNumberish,
      upper: BigNumberish,
      claim: BigNumberish,
      amountDesired: BigNumberish,
      zeroForOne: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    quote(
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountIn: BigNumberish,
      priceLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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
  };
}
