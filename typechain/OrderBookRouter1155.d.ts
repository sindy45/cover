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

interface OrderBookRouter1155Interface extends ethers.utils.Interface {
  functions: {
    "factory()": FunctionFragment;
    "limitOrder(uint256,uint256,address,address,uint256,bool,bool)": FunctionFragment;
    "routerMultiCall(uint8[],bytes[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "limitOrder",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      boolean,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "routerMultiCall",
    values: [BigNumberish[], BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limitOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routerMultiCall",
    data: BytesLike
  ): Result;

  events: {};
}

export class OrderBookRouter1155 extends BaseContract {
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

  interface: OrderBookRouter1155Interface;

  functions: {
    factory(overrides?: CallOverrides): Promise<[string]>;

    limitOrder(
      fromAmount: BigNumberish,
      destAmount: BigNumberish,
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      makerOnly: boolean,
      takerOnly: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    routerMultiCall(
      selector: BigNumberish[],
      params: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  limitOrder(
    fromAmount: BigNumberish,
    destAmount: BigNumberish,
    fromToken: string,
    destToken: string,
    fee: BigNumberish,
    makerOnly: boolean,
    takerOnly: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  routerMultiCall(
    selector: BigNumberish[],
    params: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    limitOrder(
      fromAmount: BigNumberish,
      destAmount: BigNumberish,
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      makerOnly: boolean,
      takerOnly: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    routerMultiCall(
      selector: BigNumberish[],
      params: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    limitOrder(
      fromAmount: BigNumberish,
      destAmount: BigNumberish,
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      makerOnly: boolean,
      takerOnly: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    routerMultiCall(
      selector: BigNumberish[],
      params: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limitOrder(
      fromAmount: BigNumberish,
      destAmount: BigNumberish,
      fromToken: string,
      destToken: string,
      fee: BigNumberish,
      makerOnly: boolean,
      takerOnly: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    routerMultiCall(
      selector: BigNumberish[],
      params: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
