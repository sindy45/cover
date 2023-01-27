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
  "0x610a05610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80633a39264c14610050578063580680d814610080578063aec6cbfe146100b0575b600080fd5b61006a600480360381019061006591906108fd565b6100e0565b604051610077919061092b565b60405180910390f35b61009a600480360381019061009591906108fd565b61017a565b6040516100a7919061092b565b60405180910390f35b6100ca60048036038101906100c5919061093c565b610214565b6040516100d7919061092b565b60405180910390f35b600061010e7f94cc3121311bead50fa98e47920200036a18646716a14b74b648e033b888f26260001b610667565b61013a7fdfa5547c24523174b4d28df90784baafae6bfa79440d6373494bd1c797ac92e960001b610667565b6101667fe835c09ee23c4ba2423f80fcc7d37ed45bf612dffd89e121a7758445d6eb600360001b610667565b61017184848461066a565b90509392505050565b60006101a87fba0a8d1092a390af097ce48bee423e3feb36d7518ba3c9182938234fc9b31bf260001b610667565b6101d47f6acb8ad062654d46b05062601e1f6fd88bae2311dcf7b0b9e1bd105e8dc1fe2560001b610667565b6102007fbe4f2e22ad778e7427a52f440d43725bbc13d8c3da9a940bdc047e263670b01e60001b610667565b61020b8484846107b7565b90509392505050565b60006102427fecee7e3329da091d5d97d6512a2cc0dfe8e017d7c1ce2edf6ecb9defbfa38cbe60001b610667565b61026e7f6b0a534eb5fa808204021894c577c8f5074e8413f8ce1a8a3688e223c0237ecb60001b610667565b61029a7f29a526abc91c0840448ec6b97d5b51de903016fb7e34097ac0385ec3e7ba06d960001b610667565b6102c67f7d747ae1f6c180e636d993563f49667310e2253e212b3983b6eccb96f4d3b40960001b610667565b8385036103e3576102f97f2920f553c0a915c439c415903037a51ebf228a32485ec53997705dd60d8bdf4e60001b610667565b6103257f63b6982a102a765042f816c2271427a97cd68954aa5c448a76556b132bcf180b60001b610667565b6103517f01798eb5e3b53c0d4b916a40beb4f2490ba081a242f9d02413d6183b1f0ac96260001b610667565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912846c010000000000000000000000008989036040518463ffffffff1660e01b815260040161039b9392919061097e565b602060405180830381865af41580156103b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dc919061099d565b905061065e565b61040f7f1648be966789504f850d68f9e47248349afd96d2912a88f264ce96d4b32e839760001b610667565b61043b7f7d057c855aa6b34d6fbdc9e1308ff7692dfc3dd482f7365225e7de6573da4a4460001b610667565b8584036105d35761046e7f131bb553c48628f1a66c40142f793cb920fc6d111c8213ed189575d1d2da3e6260001b610667565b61049a7f8026ec63a68d02ead0042650b7a1cc8ffab94e6704386ab80aed1d68cb222c0b60001b610667565b6104c67fd91e14bc4fbe6ed91f59f2a276c833144e327e9bb1fecea2f9002ea125bcc5f060001b610667565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128373__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128a8a6c010000000000000000000000006040518463ffffffff1660e01b81526004016105299392919061097e565b602060405180830381865af4158015610546573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056a919061099d565b8989036040518463ffffffff1660e01b815260040161058b9392919061097e565b602060405180830381865af41580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc919061099d565b905061065d565b6105ff7f05b1d5bf85df86ecd68f6f3510b7f64426c8175b088bac413d5b29c226e914fd60001b610667565b61062b7f9f930ce61148821978bfb8ab6a258046dadac7f2802976e1eb3ee2683e11d5a960001b610667565b6040517faf4c2e6500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b95945050505050565b50565b60006106987ff48524fc5efa4e6c2c9e714e64673dfceca35e97c838bcb19ef4a7c087bca75b60001b610667565b6106c47f4f5db3c2dbc5ce7b2fe7e458af15d7b47d08fe58f173db26291e2bf942fc526a60001b610667565b6106f07fc3f3a2c3f26b4fac01d9aa28d11862430bb7852236103f9214265fecdafd812a60001b610667565b61071c7f03903ed94a4e05bbb6d4bb9925074c8ceb243fd57c7bd0d536bcd0084bc08f4560001b610667565b8273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912606087901b868603866040518463ffffffff1660e01b815260040161075e9392919061097e565b602060405180830381865af415801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f919061099d565b816107ad576107ac6109b9565b5b0490509392505050565b60006107e57f732d583458d5633894a2341b87878bc3f7634310b645b3d56230281fa4b090c860001b610667565b6108117fb9d1b63feb9af593b62043faac98bb8762524e1c06a123d9d364c86ed3dc7f1c60001b610667565b61083d7f1ec5eb804d48e9b32ba1b70f4f088085ec805bcfa60095ec2d8465e0fc6f489e60001b610667565b6108697ff655fb9ccd21751ae26a911f597d80a50ddcebc8d8cd7b18e538640ef8d6cbd660001b610667565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912858585036c010000000000000000000000006040518463ffffffff1660e01b81526004016108b39392919061097e565b602060405180830381865af41580156108d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f4919061099d565b90509392505050565b60008060006060848603121561091257600080fd5b8335925060208401359150604084013590509250925092565b600060208201905082825292915050565b600080600080600060a0868803121561095457600080fd5b85359450602086013593506040860135925060608601359150608086013590509295509295909350565b6000606082019050848252836020830152826040830152949350505050565b6000602082840312156109af57600080fd5b8151905092915050565b634e487b7160e01b600052601260045260246000fdfea26469706673582212209b41b8b62f0028e20cdf2e65af9c831388af7be676ab3058a987de77cda5583f64736f6c634300080d0033";

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
