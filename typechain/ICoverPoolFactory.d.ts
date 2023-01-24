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

interface ICoverPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "concentratedFactory()": FunctionFragment;
    "createCoverPool(address,address,uint256,uint24,uint16)": FunctionFragment;
    "feeTierTickSpacing(uint256)": FunctionFragment;
    "getCoverPool(address,address,uint256,uint24,uint16)": FunctionFragment;
    "libraries()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolList(uint256)": FunctionFragment;
    "poolMapping(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "concentratedFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createCoverPool",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeTierTickSpacing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCoverPool",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "libraries", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolMapping",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "concentratedFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCoverPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeTierTickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCoverPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "libraries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolMapping",
    data: BytesLike
  ): Result;

  events: {
    "PoolCreated(address,address,uint24,int24,uint16,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export type PoolCreatedEvent = TypedEvent<
  [string, string, number, number, number, string] & {
    token0: string;
    token1: string;
    fee: number;
    tickSpread: number;
    twapLength: number;
    pool: string;
  }
>;

export class ICoverPoolFactory extends BaseContract {
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

  interface: ICoverPoolFactoryInterface;

  functions: {
    concentratedFactory(overrides?: CallOverrides): Promise<[string]>;

    createCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeTierTickSpacing(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    libraries(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    poolMapping(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  concentratedFactory(overrides?: CallOverrides): Promise<string>;

  createCoverPool(
    fromToken: string,
    destToken: string,
    fee: BigNumberish,
    tickSpread: BigNumberish,
    twapLength: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeTierTickSpacing(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCoverPool(
    fromToken: string,
    destToken: string,
    fee: BigNumberish,
    tickSpread: BigNumberish,
    twapLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  libraries(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  poolMapping(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    concentratedFactory(overrides?: CallOverrides): Promise<string>;

    createCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    feeTierTickSpacing(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    libraries(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    poolMapping(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "PoolCreated(address,address,uint24,int24,uint16,address)"(
      token0?: string | null,
      token1?: string | null,
      fee?: BigNumberish | null,
      tickSpread?: null,
      twapLength?: null,
      pool?: null
    ): TypedEventFilter<
      [string, string, number, number, number, string],
      {
        token0: string;
        token1: string;
        fee: number;
        tickSpread: number;
        twapLength: number;
        pool: string;
      }
    >;

    PoolCreated(
      token0?: string | null,
      token1?: string | null,
      fee?: BigNumberish | null,
      tickSpread?: null,
      twapLength?: null,
      pool?: null
    ): TypedEventFilter<
      [string, string, number, number, number, string],
      {
        token0: string;
        token1: string;
        fee: number;
        tickSpread: number;
        twapLength: number;
        pool: string;
      }
    >;
  };

  estimateGas: {
    concentratedFactory(overrides?: CallOverrides): Promise<BigNumber>;

    createCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeTierTickSpacing(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    libraries(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolMapping(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    concentratedFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeTierTickSpacing(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCoverPool(
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    libraries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolMapping(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
