/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "TwapOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TwapOracle__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolEvents__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolStorage__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolView",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolView__factory>;
    getContractFactory(
      name: "IConcentratedFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConcentratedFactory__factory>;
    getContractFactory(
      name: "IConcentratedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConcentratedPool__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IPoolsharkHedgePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolsharkHedgePool__factory>;
    getContractFactory(
      name: "IPoolsharkHedgePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolsharkHedgePoolFactory__factory>;
    getContractFactory(
      name: "IPoolsharkUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolsharkUtils__factory>;
    getContractFactory(
      name: "IPositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionManager__factory>;
    getContractFactory(
      name: "IDyDxMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDyDxMath__factory>;
    getContractFactory(
      name: "IFullPrecisionMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFullPrecisionMath__factory>;
    getContractFactory(
      name: "IMathUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMathUtils__factory>;
    getContractFactory(
      name: "IRebaseLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRebaseLibrary__factory>;
    getContractFactory(
      name: "ISafeCast",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISafeCast__factory>;
    getContractFactory(
      name: "ISwapLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapLib__factory>;
    getContractFactory(
      name: "ITwapOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITwapOracle__factory>;
    getContractFactory(
      name: "IUnsafeMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUnsafeMath__factory>;
    getContractFactory(
      name: "DyDxMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DyDxMath__factory>;
    getContractFactory(
      name: "FullPrecisionMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FullPrecisionMath__factory>;
    getContractFactory(
      name: "TickMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMath__factory>;
    getContractFactory(
      name: "Ticks",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ticks__factory>;
    getContractFactory(
      name: "PoolsharkHedgePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePool__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolFactory__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolLibraries",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolLibraries__factory>;
    getContractFactory(
      name: "ConcentratedFactoryMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConcentratedFactoryMock__factory>;
    getContractFactory(
      name: "ConcentratedPoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConcentratedPoolMock__factory>;
    getContractFactory(
      name: "Token20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token20__factory>;
    getContractFactory(
      name: "DyDxMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DyDxMath__factory>;
    getContractFactory(
      name: "FullPrecisionMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FullPrecisionMath__factory>;
    getContractFactory(
      name: "MathUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MathUtils__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolErrors__factory>;
    getContractFactory(
      name: "PoolsharkHedgePoolFactoryErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkHedgePoolFactoryErrors__factory>;
    getContractFactory(
      name: "PoolsharkMiscErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkMiscErrors__factory>;
    getContractFactory(
      name: "PoolsharkPositionErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkPositionErrors__factory>;
    getContractFactory(
      name: "PoolsharkTicksErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkTicksErrors__factory>;
    getContractFactory(
      name: "PoolsharkTransferErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolsharkTransferErrors__factory>;
    getContractFactory(
      name: "SafeCast",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeCast__factory>;
    getContractFactory(
      name: "SafeTransfers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeTransfers__factory>;
    getContractFactory(
      name: "SwapLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapLib__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "TwapOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TwapOracle>;
    getContractAt(
      name: "PoolsharkHedgePoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolEvents>;
    getContractAt(
      name: "PoolsharkHedgePoolStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolStorage>;
    getContractAt(
      name: "PoolsharkHedgePoolView",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolView>;
    getContractAt(
      name: "IConcentratedFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConcentratedFactory>;
    getContractAt(
      name: "IConcentratedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConcentratedPool>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IPoolsharkHedgePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolsharkHedgePool>;
    getContractAt(
      name: "IPoolsharkHedgePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolsharkHedgePoolFactory>;
    getContractAt(
      name: "IPoolsharkUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolsharkUtils>;
    getContractAt(
      name: "IPositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPositionManager>;
    getContractAt(
      name: "IDyDxMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDyDxMath>;
    getContractAt(
      name: "IFullPrecisionMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFullPrecisionMath>;
    getContractAt(
      name: "IMathUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMathUtils>;
    getContractAt(
      name: "IRebaseLibrary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRebaseLibrary>;
    getContractAt(
      name: "ISafeCast",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISafeCast>;
    getContractAt(
      name: "ISwapLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapLib>;
    getContractAt(
      name: "ITwapOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITwapOracle>;
    getContractAt(
      name: "IUnsafeMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUnsafeMath>;
    getContractAt(
      name: "DyDxMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DyDxMath>;
    getContractAt(
      name: "FullPrecisionMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FullPrecisionMath>;
    getContractAt(
      name: "TickMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickMath>;
    getContractAt(
      name: "Ticks",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ticks>;
    getContractAt(
      name: "PoolsharkHedgePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePool>;
    getContractAt(
      name: "PoolsharkHedgePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolFactory>;
    getContractAt(
      name: "PoolsharkHedgePoolLibraries",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolLibraries>;
    getContractAt(
      name: "ConcentratedFactoryMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConcentratedFactoryMock>;
    getContractAt(
      name: "ConcentratedPoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConcentratedPoolMock>;
    getContractAt(
      name: "Token20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token20>;
    getContractAt(
      name: "DyDxMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DyDxMath>;
    getContractAt(
      name: "FullPrecisionMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FullPrecisionMath>;
    getContractAt(
      name: "MathUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MathUtils>;
    getContractAt(
      name: "PoolsharkHedgePoolErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolErrors>;
    getContractAt(
      name: "PoolsharkHedgePoolFactoryErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkHedgePoolFactoryErrors>;
    getContractAt(
      name: "PoolsharkMiscErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkMiscErrors>;
    getContractAt(
      name: "PoolsharkPositionErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkPositionErrors>;
    getContractAt(
      name: "PoolsharkTicksErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkTicksErrors>;
    getContractAt(
      name: "PoolsharkTransferErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolsharkTransferErrors>;
    getContractAt(
      name: "SafeCast",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeCast>;
    getContractAt(
      name: "SafeTransfers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeTransfers>;
    getContractAt(
      name: "SwapLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapLib>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
