/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DyDxMath, DyDxMathInterface } from "../DyDxMath";

const _abi = [
  {
    inputs: [],
    name: "PriceOutsideBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
    ],
    name: "getDx",
    outputs: [
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
    ],
    name: "getDy",
    outputs: [
      {
        internalType: "uint256",
        name: "dy",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "getLiquidityForAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61042f61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80633a39264c14610050578063580680d814610075578063aec6cbfe14610088575b600080fd5b61006361005e366004610363565b61009b565b60405190815260200160405180910390f35b610063610083366004610363565b6100b0565b61006361009636600461038f565b6100bd565b60006100a8848484610239565b949350505050565b60006100a88484846102da565b60008385036101545760405163554d048960e11b815260048101849052600160601b6024820152868603604482015273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a0912906064015b602060405180830381865af4158015610129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014d91906103ca565b9050610230565b8584036102175760405163554d048960e11b81526004810187905260248101869052600160601b604482015273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290849083908390606401602060405180830381865af41580156101c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e691906103ca565b6040516001600160e01b031960e085901b16815260048101929092526024820152888803604482015260640161010c565b60405163af4c2e6560e01b815260040160405180910390fd5b95945050505050565b60405163554d048960e11b8152606084901b6004820152828203602482015260448101829052600090839073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af41580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c491906103ca565b816102d1576102d16103e3565b04949350505050565b60405163554d048960e11b8152600481018490528282036024820152600160601b604482015260009073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af415801561033f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a891906103ca565b60008060006060848603121561037857600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156103a757600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000602082840312156103dc57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fdfea264697066735822122056eb2de17f24cf5ebb83212834aeb6d1a3b17f616e050e986b89fd0121f8010f64736f6c634300080d0033";

type DyDxMathConstructorParams =
  | [linkLibraryAddresses: DyDxMathLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DyDxMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DyDxMath__factory extends ContractFactory {
  constructor(...args: DyDxMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, DyDxMath__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: DyDxMathLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1b9fef1800622f5f6a93914ffdeb7ba32f\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DyDxMath> {
    return super.deploy(overrides || {}) as Promise<DyDxMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DyDxMath {
    return super.attach(address) as DyDxMath;
  }
  connect(signer: Signer): DyDxMath__factory {
    return super.connect(signer) as DyDxMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DyDxMathInterface {
    return new utils.Interface(_abi) as DyDxMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DyDxMath {
    return new Contract(address, _abi, signerOrProvider) as DyDxMath;
  }
}

export interface DyDxMathLibraryAddresses {
  ["contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"]: string;
}
