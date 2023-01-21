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

interface TwapOracleInterface extends ethers.utils.Interface {
  functions: {
    "calculateAverageTick(address)": FunctionFragment;
    "concentratedFactory()": FunctionFragment;
    "getSqrtPriceLimitX96(bool)": FunctionFragment;
    "initializePoolObservations(address)": FunctionFragment;
    "isPoolObservationsEnough(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateAverageTick",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "concentratedFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSqrtPriceLimitX96",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePoolObservations",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolObservationsEnough",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateAverageTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "concentratedFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSqrtPriceLimitX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePoolObservations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolObservationsEnough",
    data: BytesLike
  ): Result;

  events: {};
}

export class TwapOracle extends BaseContract {
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

  interface: TwapOracleInterface;

  functions: {
    calculateAverageTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[number] & { averageTick: number }>;

    concentratedFactory(overrides?: CallOverrides): Promise<[string]>;

    getSqrtPriceLimitX96(
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initializePoolObservations(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPoolObservationsEnough(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  calculateAverageTick(
    pool: string,
    overrides?: CallOverrides
  ): Promise<number>;

  concentratedFactory(overrides?: CallOverrides): Promise<string>;

  getSqrtPriceLimitX96(
    zeroForOne: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initializePoolObservations(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPoolObservationsEnough(
    pool: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    calculateAverageTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<number>;

    concentratedFactory(overrides?: CallOverrides): Promise<string>;

    getSqrtPriceLimitX96(
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializePoolObservations(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { initializable: number; startingTick: number }
    >;

    isPoolObservationsEnough(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    calculateAverageTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    concentratedFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getSqrtPriceLimitX96(
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializePoolObservations(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPoolObservationsEnough(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateAverageTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    concentratedFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSqrtPriceLimitX96(
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializePoolObservations(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPoolObservationsEnough(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
