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
    "validate((address,int24,int24,int24,int24,int24,uint128,bool),(uint8,int16,uint16,uint16,int24,uint32,uint32,uint32,uint32,uint128,uint160,IRangePool))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "validate",
    values: [
      {
        recipient: string;
        lowerOld: BigNumberish;
        lower: BigNumberish;
        claim: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        amount: BigNumberish;
        zeroForOne: boolean;
      },
      {
        unlocked: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        latestTick: BigNumberish;
        genesisBlock: BigNumberish;
        lastBlock: BigNumberish;
        auctionStart: BigNumberish;
        accumEpoch: BigNumberish;
        liquidityGlobal: BigNumberish;
        latestPrice: BigNumberish;
        inputPool: string;
      }
    ]
  ): string;

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
    validate(
      params: {
        recipient: string;
        lowerOld: BigNumberish;
        lower: BigNumberish;
        claim: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        amount: BigNumberish;
        zeroForOne: boolean;
      },
      state: {
        unlocked: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        latestTick: BigNumberish;
        genesisBlock: BigNumberish;
        lastBlock: BigNumberish;
        auctionStart: BigNumberish;
        accumEpoch: BigNumberish;
        liquidityGlobal: BigNumberish;
        latestPrice: BigNumberish;
        inputPool: string;
      },
      overrides?: CallOverrides
    ): Promise<
      [
        [string, number, number, number, number, number, BigNumber, boolean] & {
          recipient: string;
          lowerOld: number;
          lower: number;
          claim: number;
          upper: number;
          upperOld: number;
          amount: BigNumber;
          zeroForOne: boolean;
        },
        BigNumber
      ] & { liquidityMinted: BigNumber }
    >;
  };

  validate(
    params: {
      recipient: string;
      lowerOld: BigNumberish;
      lower: BigNumberish;
      claim: BigNumberish;
      upper: BigNumberish;
      upperOld: BigNumberish;
      amount: BigNumberish;
      zeroForOne: boolean;
    },
    state: {
      unlocked: BigNumberish;
      tickSpread: BigNumberish;
      twapLength: BigNumberish;
      auctionLength: BigNumberish;
      latestTick: BigNumberish;
      genesisBlock: BigNumberish;
      lastBlock: BigNumberish;
      auctionStart: BigNumberish;
      accumEpoch: BigNumberish;
      liquidityGlobal: BigNumberish;
      latestPrice: BigNumberish;
      inputPool: string;
    },
    overrides?: CallOverrides
  ): Promise<
    [
      [string, number, number, number, number, number, BigNumber, boolean] & {
        recipient: string;
        lowerOld: number;
        lower: number;
        claim: number;
        upper: number;
        upperOld: number;
        amount: BigNumber;
        zeroForOne: boolean;
      },
      BigNumber
    ] & { liquidityMinted: BigNumber }
  >;

  callStatic: {
    validate(
      params: {
        recipient: string;
        lowerOld: BigNumberish;
        lower: BigNumberish;
        claim: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        amount: BigNumberish;
        zeroForOne: boolean;
      },
      state: {
        unlocked: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        latestTick: BigNumberish;
        genesisBlock: BigNumberish;
        lastBlock: BigNumberish;
        auctionStart: BigNumberish;
        accumEpoch: BigNumberish;
        liquidityGlobal: BigNumberish;
        latestPrice: BigNumberish;
        inputPool: string;
      },
      overrides?: CallOverrides
    ): Promise<
      [
        [string, number, number, number, number, number, BigNumber, boolean] & {
          recipient: string;
          lowerOld: number;
          lower: number;
          claim: number;
          upper: number;
          upperOld: number;
          amount: BigNumber;
          zeroForOne: boolean;
        },
        BigNumber
      ] & { liquidityMinted: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    validate(
      params: {
        recipient: string;
        lowerOld: BigNumberish;
        lower: BigNumberish;
        claim: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        amount: BigNumberish;
        zeroForOne: boolean;
      },
      state: {
        unlocked: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        latestTick: BigNumberish;
        genesisBlock: BigNumberish;
        lastBlock: BigNumberish;
        auctionStart: BigNumberish;
        accumEpoch: BigNumberish;
        liquidityGlobal: BigNumberish;
        latestPrice: BigNumberish;
        inputPool: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validate(
      params: {
        recipient: string;
        lowerOld: BigNumberish;
        lower: BigNumberish;
        claim: BigNumberish;
        upper: BigNumberish;
        upperOld: BigNumberish;
        amount: BigNumberish;
        zeroForOne: boolean;
      },
      state: {
        unlocked: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        latestTick: BigNumberish;
        genesisBlock: BigNumberish;
        lastBlock: BigNumberish;
        auctionStart: BigNumberish;
        accumEpoch: BigNumberish;
        liquidityGlobal: BigNumberish;
        latestPrice: BigNumberish;
        inputPool: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
