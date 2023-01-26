/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickMath, TickMathInterface } from "../TickMath";

const _abi = [
  {
    inputs: [],
    name: "PriceOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "TickOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "WaitUntilEnoughObservations",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "getSqrtRatioAtTick",
    outputs: [
      {
        internalType: "uint160",
        name: "getSqrtPriceX96",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "getTickAtSqrtRatio",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
    ],
    name: "validatePrice",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610a9e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806326c9c807146100505780634f76c05814610065578063986cfba314610090575b600080fd5b61006361005e366004610832565b6100bb565b005b610078610073366004610832565b610146565b60405160029190910b81526020015b60405180910390f35b6100a361009e366004610862565b610157565b6040516001600160a01b039091168152602001610087565b6401000276a36001600160a01b03821610806100f4575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03821610155b156101435761012a60405180604001604052806006815260200165383934b1b29d60d11b815250826001600160a01b0316610162565b604051636e4ba61d60e01b815260040160405180910390fd5b50565b6000610151826101ab565b92915050565b6000610151826104db565b6101a78282604051602401610178929190610885565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610811565b5050565b60006401000276a36001600160a01b03831610806101e6575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b1561020457604051636e4ba61d60e01b815260040160405180910390fd5b640100000000600160c01b03602083901b166fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c979088119617909417909217179091171717608081106102a85761029e607f826108f8565b83901c91506102b9565b6102b381607f6108f8565b83901b91505b600060406102c860808461090f565b901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b8217915050600081693627a301d71055774c8561044b919061094e565b90506000608061046b6f028f6481ab7f045a5af012a19d003aaa8461090f565b901d90506000608061048d846fdb2df09e81959a81455e260799a0632f6109d3565b901d90508060020b8260020b146104cc57886001600160a01b03166104b1826104db565b6001600160a01b031611156104c657816104ce565b806104ce565b815b9998505050505050505050565b60008060008360020b126104f2578260020b6104ff565b8260020b6104ff90610a14565b905061050e620d89e719610a30565b62ffffff1681111561053357604051633e1f710360e21b815260040160405180910390fd5b60008160011660000361054a57600160801b61055c565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610590576ffff97272373d413259a46990580e213a0260801c5b60048216156105af576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156105ce576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156105ed576fffcb9843d60f6159c9db58835c9266440260801c5b602082161561060c576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561062b576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561064a576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561066a576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561068a576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156106aa576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156106ca576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156106ea576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161561070a576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561072a576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561074a576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561076b576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561078b576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156107aa576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156107c7576b048a170391f7dc42444e8fa20260801c5b60008460020b13156107e85780600019816107e4576107e4610a52565b0490505b6401000000008106156107fc5760016107ff565b60005b60ff16602082901c0192505050919050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006020828403121561084457600080fd5b81356001600160a01b038116811461085b57600080fd5b9392505050565b60006020828403121561087457600080fd5b81358060020b811461085b57600080fd5b604081526000835180604084015260005b818110156108b35760208187018101516060868401015201610896565b818111156108c5576000606083860101525b50602083019390935250601f91909101601f191601606001919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561090a5761090a6108e2565b500390565b60008083128015600160ff1b85018412161561092d5761092d6108e2565b6001600160ff1b0384018313811615610948576109486108e2565b50500390565b60006001600160ff1b0381841382841380821686840486111615610974576109746108e2565b600160ff1b6000871282811687830589121615610993576109936108e2565b600087129250878205871284841616156109af576109af6108e2565b878505871281841616156109c5576109c56108e2565b505050929093029392505050565b600080821280156001600160ff1b03849003851316156109f5576109f56108e2565b600160ff1b8390038412811615610a0e57610a0e6108e2565b50500190565b6000600160ff1b8201610a2957610a296108e2565b5060000390565b60008160020b627fffff198103610a4957610a496108e2565b60000392915050565b634e487b7160e01b600052601260045260246000fdfea2646970667358221220bea2d27288723f9ff049a38b8a7c0ce89a589b1c87fe9850fa2bc14b9a19bb0164736f6c634300080d0033";

export class TickMath__factory extends ContractFactory {
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
  ): Promise<TickMath> {
    return super.deploy(overrides || {}) as Promise<TickMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickMath {
    return super.attach(address) as TickMath;
  }
  connect(signer: Signer): TickMath__factory {
    return super.connect(signer) as TickMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickMathInterface {
    return new utils.Interface(_abi) as TickMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMath {
    return new Contract(address, _abi, signerOrProvider) as TickMath;
  }
}
