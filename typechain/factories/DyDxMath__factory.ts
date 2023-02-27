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
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
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
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
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
  "0x610dee610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806372471890146100505780639026147314610080578063aec6cbfe146100b0575b600080fd5b61006a60048036038101906100659190610cb4565b6100e0565b6040516100779190610cfc565b60405180910390f35b61009a60048036038101906100959190610cb4565b61017c565b6040516100a79190610cfc565b60405180910390f35b6100ca60048036038101906100c59190610d0d565b610217565b6040516100d79190610cfc565b60405180910390f35b600061010e7f1722c39ec3ec00380a200dd400990baba228e509acaf8648f14966fdf73b0aee60001b61066a565b61013a7fdab9e2385f93bfeeb73e22364875f22cb948ff509fab0e9407c639a31fe2177960001b61066a565b6101667fd121502994d8e9069772b94dcd3852b479282b2d9f5aead5d9af62b1cf6b1ac360001b61066a565b6101728585858561066d565b9050949350505050565b60006101aa7f875fed086125767ab1d5df8b2e8c487e5bb715c08071fdb9a78edf41a5324ad960001b61066a565b6101d67f5ad9fc32513a58bd1dbf93d9e658f80c820a6d38f7d7b39268619002b7a2b0d960001b61066a565b6102017ef96346c1ab12b3d1665eb681df92a427d7e177be1576238ed11925efa057cb60001b61066a565b61020d85858585610955565b9050949350505050565b60006102457fa7b8b20e856c60ede7376e299868b1c761d1a3510dcf30a69c2d4de22be51c7160001b61066a565b6102717f8ea231f20fe7449cd1b5f9d76bb3ab70464670c588611ef6e199991fcae8dcd060001b61066a565b61029d7fce51ddbf9fb83fc20c456dca0813235d1d270390b5a7f33cc1294a120542ee0460001b61066a565b6102c97f7111598be9e959955855b12b9bc8a13bf78420b41b6fbab2e33fc49279ee96a960001b61066a565b8385036103e6576102fc7f652d57438c73a0a24c7796d0967463c7c5ac8ecfdfb7f6ca0d0ec53c00149a9060001b61066a565b6103287fa66d23e017c0516c254904c9fc538f5a1e97efeaeb906450ab5b6cb4595f0e0260001b61066a565b6103547f165ffe33cf8f7d0520f94420c61f6ff4dd3b3a9a67d3db92c48f6892fa321faf60001b61066a565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912846c010000000000000000000000008989036040518463ffffffff1660e01b815260040161039e93929190610d4f565b602060405180830381865af41580156103bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103df9190610d6e565b9050610661565b6104127ff6b79326db96ed3b730a5a7f174c96436b43c6d063d053092113c87c1e18f32c60001b61066a565b61043e7fb91d56f054b0c6d0eb452b0068b9736f7c3b01ce7c49dc7d200ae7c3e818a15860001b61066a565b8584036105d6576104717f28bab4072c778af3582fa5607f2d60998fd2f6a0e252b79ab37d243cc804b8e060001b61066a565b61049d7f6d3c591ec3ba260e0a05a2f33ccdf1af41ceec117b7c88ed640f44bc037bdffc60001b61066a565b6104c97f793111a28b9636f85816529d20fdc0287269049cd7305191d4d091d0fece005260001b61066a565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128373__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128a8a6c010000000000000000000000006040518463ffffffff1660e01b815260040161052c93929190610d4f565b602060405180830381865af4158015610549573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056d9190610d6e565b8989036040518463ffffffff1660e01b815260040161058e93929190610d4f565b602060405180830381865af41580156105ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cf9190610d6e565b9050610660565b6106027f1156b04c0e14ed2488f85f8626bdbd1f9be2899aa08d584b4c48c22418cd133b60001b61066a565b61062e7f7700b4f547c64b2332a730d2a3c0bd6489d802a5b59e61ad13f637acac71404560001b61066a565b6040517faf4c2e6500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b95945050505050565b50565b600061069b7fd8d0a8486a7ab7ef60ea1591790ebb0aa158f57d0c69292383609075eeb7e72e60001b61066a565b6106c77f4bfa7a360b848e3571e4148a8b918dae2a9a84aa7bf8ad97c81baa27393599bb60001b61066a565b6106f37f317b856391228366273fc13bdcf956fc830e936c9d2f57e83a86e8f0d5ac8cf660001b61066a565b61071f7fdc267efde30e628fdfac3da98f40b6cee84f0f398aba39af255c26a1817ebe6860001b61066a565b811561083b576107517f3906bf157e3fe19ea5b9237796a285e690f25678f70fdc6508d8ab900fac32e260001b61066a565b61077d7fc1f10b63653af66eb1ee9cc006792d4753b09e571fbf58a58779f161d542393b60001b61066a565b6107a97f2457304c202e0afb5ea2ecf09c1f4914fef83cc6f4862911313ffa8d00f588e160001b61066a565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__630af8b27f868686036c010000000000000000000000006040518463ffffffff1660e01b81526004016107f393929190610d4f565b602060405180830381865af4158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610d6e565b905061094d565b6108677fc7a226bd09f279b09b0dc2465723509ec447756415b192492160c54fa90165fe60001b61066a565b6108937f1c5017047ab164fdfa12b021d0acc847dc2262d0453dae4bc9c721806588758360001b61066a565b6108bf7f7f17df951ded38c95e4203b6d41cef3b8a499fa6226c42083845d9c31ea3224760001b61066a565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912868686036c010000000000000000000000006040518463ffffffff1660e01b815260040161090993929190610d4f565b602060405180830381865af4158015610926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094a9190610d6e565b90505b949350505050565b60006109837f3a83cfbbe7fc10fc56f7271df5d336dc795e14d350855ff0d09a85cb9158002360001b61066a565b6109af7f61e60c63afe97867f207aec1dbf32336cbdab324ff468183bc1a0a264d4309e660001b61066a565b6109db7f9ebaf8aa5f539b8a1c0c9a2088c686b75fc6e631ae2b348593a87b6beb9103f360001b61066a565b610a077fab02928ad388a3bf0d792c9a0c61738ae30a2bc6dd84bcd1b20e78784424dd4760001b61066a565b8115610b9357610a397f684ebce9e52c3cc2fe7652b829445f413c5a10137192d32a9605cca45c149bbb60001b61066a565b610a657f6756cc1fd8ebceb87c8eabfa490c51b99fc7271c2e6d2ab90092d609416b699960001b61066a565b610a917fa807989560bdb7e7b2441065fcfbbbaf4f5b40e9f7fea8928d22730f116cc4fe60001b61066a565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__6340226b3273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__630af8b27f606089901b888803886040518463ffffffff1660e01b8152600401610aec93929190610d4f565b602060405180830381865af4158015610b09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2d9190610d6e565b866040518363ffffffff1660e01b8152600401610b4b929190610d8a565b602060405180830381865af4158015610b68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8c9190610d6e565b9050610cac565b610bbf7f94dfacf641fd8feeb8c4da5f0a92a752a4dd6ae823d7b114f844be38ec62702d60001b61066a565b610beb7ff390e597bd3c40b7c4de35427101438ab592610c8bfea4bdb002e1e3d2f1280760001b61066a565b610c177f7500bf83473c01ab50c7667274735e494c7094f88883f096df85698e741495df60001b61066a565b8373__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912606088901b878703876040518463ffffffff1660e01b8152600401610c5993929190610d4f565b602060405180830381865af4158015610c76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9a9190610d6e565b81610ca857610ca7610da2565b5b0490505b949350505050565b60008060008060808587031215610cca57600080fd5b84359350602085013592506040850135915060608501358015158114610cef57600080fd5b8091505092959194509250565b600060208201905082825292915050565b600080600080600060a08688031215610d2557600080fd5b85359450602086013593506040860135925060608601359150608086013590509295509295909350565b6000606082019050848252836020830152826040830152949350505050565b600060208284031215610d8057600080fd5b8151905092915050565b60006040820190508382528260208301529392505050565b634e487b7160e01b600052601260045260246000fdfea26469706673582212206314f8bef05735788db2338f3f3013086f6481f8edc2ff1a98e853fa73be5a9264736f6c634300080d0033";

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
