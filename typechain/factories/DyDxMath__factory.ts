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
  "0x610def610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806372471890146100505780639026147314610080578063aec6cbfe146100b0575b600080fd5b61006a60048036038101906100659190610cb5565b6100e0565b6040516100779190610cfd565b60405180910390f35b61009a60048036038101906100959190610cb5565b61017c565b6040516100a79190610cfd565b60405180910390f35b6100ca60048036038101906100c59190610d0e565b610218565b6040516100d79190610cfd565b60405180910390f35b600061010e7f3f4f21e1d561df090e4f3c29e0168f0f3cb62c52f3afbade02af88052188371360001b61066b565b61013a7fb3b1984cd5371ae126c9cbafa56a117b1ad2a54dd80df5d7ee6d815982e06cf860001b61066b565b6101667f2b9aef365da2e688f1d2b161592655b50e2f92892a53b837c7a0d2c22c3cbc6c60001b61066b565b6101728585858561066e565b9050949350505050565b60006101aa7f12051bc02c15c74be94a143eae0ccece423e0d7e17aafb806bc0064f3e07158a60001b61066b565b6101d67f4b926f9a5911eee5fea13b750cf12677ef1813415ada05dbb9f94040d6b8814860001b61066b565b6102027f844b9fbde388c75f851cf9ce2f9fa78a0aa0289a02a012585a51f3fcaa845ca360001b61066b565b61020e85858585610956565b9050949350505050565b60006102467f5578647d7055bd0689c9af450e934c3a289742a8ef6832f6077ac468518a633f60001b61066b565b6102727fe27b98285eec2eaa4a02ed189a162baf80462253c80c08710b875a0acde3f1f360001b61066b565b61029e7f2e6a1e76cb819b81d8bbbec9f930c0906975b2e9f6e10b615043f4f870079ad660001b61066b565b6102ca7f2386380c8aa115bfd25b5949f4560c4464e03e768116a55d6286025d5e128fb660001b61066b565b8385036103e7576102fd7fbf06455c23b857450d698f8321bc1713e8041ff795bef2bb39673ca40746e35260001b61066b565b6103297f630758216c7ce20213d6d551b1ab1b273ef9b41334dbe0f9195168b483df3e3360001b61066b565b6103557f14768bbe57d9b99a43253b5f9fa4caa5da6aad9ddb1a0e53c344cf9a9d4b980360001b61066b565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912846c010000000000000000000000008989036040518463ffffffff1660e01b815260040161039f93929190610d50565b602060405180830381865af41580156103bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e09190610d6f565b9050610662565b6104137fb72a9c984243499490d4a6f9709d0d68edc4bb3966b18f8322b38c4e8fa0c51760001b61066b565b61043f7f1b4bf056d5ef39bc8f3a86b70d4acf2010ad68f202483a89c8b5a8a86473d00560001b61066b565b8584036105d7576104727fb4b2b629bb08b8d0c8d83d5438db31f8f93bef0329dbb8e1754b21fc34034b2160001b61066b565b61049e7f22ca5abad9bc81d68dd76985777e04231d9f2eae2f25e46e1b6046b6959521eb60001b61066b565b6104ca7f2dfa47a3fb8aa3b9fed1fe2b3bd656ad16cc0223f5266f39f2add9c216b9e07960001b61066b565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128373__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128a8a6c010000000000000000000000006040518463ffffffff1660e01b815260040161052d93929190610d50565b602060405180830381865af415801561054a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056e9190610d6f565b8989036040518463ffffffff1660e01b815260040161058f93929190610d50565b602060405180830381865af41580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190610d6f565b9050610661565b6106037fd261df324c34f399558d5a3334697edfdde27a406619c6699151395521b1297960001b61066b565b61062f7f7fb883fcf5703ea6b0f6e2b6b530181c37bf521978b9a2eb8af5b3cd421c178360001b61066b565b6040517faf4c2e6500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b95945050505050565b50565b600061069c7f6070acad552db868bafb908850af06bb02f474393ac923e81cef4a0a6beadb9560001b61066b565b6106c87f747f9400a6e5e4af5e73b2238188cb11a5ea93ee27dbb7826f22d3f182d4aaa960001b61066b565b6106f47fffa4353b20ac082083c88c27b1a288c2dc8819af4ad7b63af62d0c0b301756c760001b61066b565b6107207fcba4adde54ad3ca878e7f9f80790c0154e1e91765be1471abb7ca1ab8c919ba960001b61066b565b811561083c576107527fdfc4dffe2fdca7cce95e80ecc10ade6e2b7c9fc6c638a32bb3aa6343022b0df660001b61066b565b61077e7f2b954adac72a154cd409a004098b565bbe36a91bf9178955b5ec404a515b3c4860001b61066b565b6107aa7faa3b43bf36627f3549d59abdeffd2a7fe0c3b6d915042afe2afe13515831dadc60001b61066b565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__630af8b27f868686036c010000000000000000000000006040518463ffffffff1660e01b81526004016107f493929190610d50565b602060405180830381865af4158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190610d6f565b905061094e565b6108687fec43e9164ec48325ddab139141677d4ae49ee59f89710dd1a2dfde044718aaa960001b61066b565b6108947fe8caf79f1bc7702b0d9c0dcf6ca56c05a09cca01ec1ebb38855657c6908e4ed960001b61066b565b6108c07f7312843b1b65c0cfa39b9705ce966b0057fcd7a0ccfd50fd59794c3fe22b5fba60001b61066b565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912868686036c010000000000000000000000006040518463ffffffff1660e01b815260040161090a93929190610d50565b602060405180830381865af4158015610927573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094b9190610d6f565b90505b949350505050565b60006109847f0191d2673050b707fbafb969a66b7d74b4f1ffec68a5634056bae1f3671c8e5e60001b61066b565b6109b07fe182f45c0bd6d5bbfd4472b86dc17f64b11736b17adef3e56b76c2e4fb5a522b60001b61066b565b6109dc7fde533697cfbc12b70869426081d7184a0052ea805256468cd80ed340166fdafb60001b61066b565b610a087fef227b18a76d15c86ac24feae669038b632c31b0c966de2925ad438755bdf22360001b61066b565b8115610b9457610a3a7fbeedc07bdee481db015b2f163e4980e201deafe299aae20b7ee99ab23ce9a43f60001b61066b565b610a667fbac379c46d17749ac1f54272f22ca86d9808969d3a75842540206b303660032760001b61066b565b610a927f17c83ab62c3eda5d9a6eb5ba6af95e37d5b030cb618bcfd7bc16de282f8ca7c460001b61066b565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__6340226b3273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__630af8b27f606089901b888803886040518463ffffffff1660e01b8152600401610aed93929190610d50565b602060405180830381865af4158015610b0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2e9190610d6f565b866040518363ffffffff1660e01b8152600401610b4c929190610d8b565b602060405180830381865af4158015610b69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8d9190610d6f565b9050610cad565b610bc07f911121a71fadf865011587691be056d3d88c4a9cbe44c20139cd9d15d555643260001b61066b565b610bec7f244ee69b34cacee6c5071f898c3a5cc63f1665a8e750141d33940a57b1f1b0c560001b61066b565b610c187fdb70c9c1bc3fbaf1842885f6f80fba6523ed50aaff3270b60922b5c36fb5c8a960001b61066b565b8373__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912606088901b878703876040518463ffffffff1660e01b8152600401610c5a93929190610d50565b602060405180830381865af4158015610c77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9b9190610d6f565b81610ca957610ca8610da3565b5b0490505b949350505050565b60008060008060808587031215610ccb57600080fd5b84359350602085013592506040850135915060608501358015158114610cf057600080fd5b8091505092959194509250565b600060208201905082825292915050565b600080600080600060a08688031215610d2657600080fd5b85359450602086013593506040860135925060608601359150608086013590509295509295909350565b6000606082019050848252836020830152826040830152949350505050565b600060208284031215610d8157600080fd5b8151905092915050565b60006040820190508382528260208301529392505050565b634e487b7160e01b600052601260045260246000fdfea26469706673582212203f0f01674db32823761a881e5c3b9d6039418f5c9a53ad1f5c4f28228854e23364736f6c634300080d0033";

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
