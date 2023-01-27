/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TwapOracle, TwapOracleInterface } from "../TwapOracle";

const _abi = [
  {
    inputs: [],
    name: "blockTime",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRangePool",
        name: "pool",
        type: "IRangePool",
      },
      {
        internalType: "uint16",
        name: "twapLength",
        type: "uint16",
      },
    ],
    name: "calculateAverageTick",
    outputs: [
      {
        internalType: "int24",
        name: "averageTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "twapLength",
        type: "uint16",
      },
    ],
    name: "isPoolObservationsEnough",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6107d761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80631b2f3d8a1461005b5780631e2e81071461009c57806348b15166146100bf5780639f8cb5d6146100da575b600080fd5b81801561006757600080fd5b5061007b6100763660046103d3565b610100565b6040805160ff909316835260029190910b6020830152015b60405180910390f35b6100af6100aa3660046103d3565b61013e565b6040519015158152602001610093565b6100c7600c81565b60405161ffff9091168152602001610093565b6100ed6100e83660046103d3565b610151565b60405160029190910b8152602001610093565b60008061010d848461015d565b6101265761011b84846101db565b506000905080610137565b6001610132858561023c565b915091505b9250929050565b600061014a838361015d565b9392505050565b600061014a838361023c565b600080836001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801561019e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c2919061040c565b50505061ffff8088169116101594505050505092915050565b6040516332148f6760e01b815261ffff821660048201526001600160a01b038316906332148f6790602401600060405180830381600087803b15801561022057600080fd5b505af1158015610234573d6000803e3d6000fd5b505050505050565b6040805160038082526080820190925260009182919060208201606080368337019050509050600081600081518110610277576102776104d0565b63ffffffff9092166020928302919091019091015261029783600c6104fc565b61ffff16816001815181106102ae576102ae6104d0565b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526000906001600160a01b0386169063883bdbfd906102f2908590600401610526565b600060405180830381865afa15801561030f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103379190810190610639565b5090508160018151811061034d5761034d6104d0565b602002602001015160030b8160018151811061036b5761036b6104d0565b602002602001015182600081518110610386576103866104d0565b60200260200101516103989190610705565b6103a29190610755565b95945050505050565b6001600160a01b03811681146103c057600080fd5b50565b61ffff811681146103c057600080fd5b600080604083850312156103e657600080fd5b82356103f1816103ab565b91506020830135610401816103c3565b809150509250929050565b600080600080600080600060e0888a03121561042757600080fd5b8751610432816103ab565b8097505060208801518060020b811461044a57600080fd5b604089015190965061045b816103c3565b606089015190955061046c816103c3565b608089015190945061047d816103c3565b60a089015190935060ff8116811461049457600080fd5b60c089015190925080151581146104aa57600080fd5b8091505092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600061ffff8083168185168183048111821515161561051d5761051d6104e6565b02949350505050565b6020808252825182820181905260009190848201906040850190845b8181101561056457835163ffffffff1683529284019291840191600101610542565b50909695505050505050565b604051601f8201601f1916810167ffffffffffffffff81118282101715610599576105996104ba565b604052919050565b600067ffffffffffffffff8211156105bb576105bb6104ba565b5060051b60200190565b600082601f8301126105d657600080fd5b815160206105eb6105e6836105a1565b610570565b82815260059290921b8401810191818101908684111561060a57600080fd5b8286015b8481101561062e578051610621816103ab565b835291830191830161060e565b509695505050505050565b6000806040838503121561064c57600080fd5b825167ffffffffffffffff8082111561066457600080fd5b818501915085601f83011261067857600080fd5b815160206106886105e6836105a1565b82815260059290921b840181019181810190898411156106a757600080fd5b948201945b838610156106d55785518060060b81146106c65760008081fd5b825294820194908201906106ac565b918801519196509093505050808211156106ee57600080fd5b506106fb858286016105c5565b9150509250929050565b60008160060b8360060b6000811281667fffffffffffff1901831281151615610730576107306104e6565b81667fffffffffffff01831381161561074b5761074b6104e6565b5090039392505050565b60008160060b8360060b8061077a57634e487b7160e01b600052601260045260246000fd5b667fffffffffffff19821460001982141615610798576107986104e6565b9005939250505056fea26469706673582212201596d158604d36a0691afe6838a60951f1910487011518f64cbe6e8329ae015464736f6c634300080d0033";

export class TwapOracle__factory extends ContractFactory {
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
  ): Promise<TwapOracle> {
    return super.deploy(overrides || {}) as Promise<TwapOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TwapOracle {
    return super.attach(address) as TwapOracle;
  }
  connect(signer: Signer): TwapOracle__factory {
    return super.connect(signer) as TwapOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TwapOracleInterface {
    return new utils.Interface(_abi) as TwapOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TwapOracle {
    return new Contract(address, _abi, signerOrProvider) as TwapOracle;
  }
}
