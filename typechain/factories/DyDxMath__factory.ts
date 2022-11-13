/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DyDxMath, DyDxMathInterface } from "../DyDxMath";

const _abi = [
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
  "0x61021761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063aec6cbfe1461003a575b600080fd5b61004d6100483660046101a6565b61005f565b60405190815260200160405180910390f35b60008385116100805761007983600160601b8888036100f3565b90506100ea565b8584116100a2576100798261009a8888600160601b6100f3565b8888036100f3565b60006100bf836100b78888600160601b6100f3565b8789036100f3565b905060006100d485600160601b8a89036100f3565b90508082106100e357806100e5565b815b925050505b95945050505050565b600080806000198587098587029250828110838203039150508060000361012c576000841161012157600080fd5b50829004905061019f565b80841161013857600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b600080600080600060a086880312156101be57600080fd5b50508335956020850135955060408501359460608101359450608001359250905056fea2646970667358221220cfd76c3069e1a43b0b0ceed7789e41769ec8939187ab49afa284f307c667236e64736f6c634300080d0033";

export class DyDxMath__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
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
