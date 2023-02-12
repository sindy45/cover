/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RangeFactoryMock,
  RangeFactoryMockInterface,
} from "../RangeFactoryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "feeTierTickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610ac6380380610ac683398101604081905261002f91610201565b600180546001600160a01b031916331790556001600160a01b03818116908316106100945760405162461bcd60e51b81526020600482015260116024820152703bb937b733903a37b5b2b71037b93232b960791b604482015260640160405180910390fd5b60026020527febaffbad3b7fced837389fa2c76ef17bd16e01452243bc801329ba9c392c939f805462ffffff19908116600a9081179092557f8f2d796c159bb2bb788bc3f1a337a929c07b0cf1d9277451fd5f909c263c02d680548216603c1790556127106000527f5e7cc46d63c0d79d92b677239084c61b6b019c2759734090f1970fc4b4823988805490911660c8179055604051839183916101f4919061013c906101d8565b6001600160a01b03948516815293909216602084015262ffffff16604083015260020b6060820152608001604051809103906000f080158015610183573d6000803e3d6000fd5b50600080546001600160a01b039283166001600160a01b03199182168117835594831682526003602090815260408084209590941683529384528282206101f483529093522080549091169091179055610234565b6106ef806103d783390190565b80516001600160a01b03811681146101fc57600080fd5b919050565b6000806040838503121561021457600080fd5b61021d836101e5565b915061022b602084016101e5565b90509250929050565b610194806102436000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631698ee821461003b5780637b12f27014610092575b600080fd5b6100756100493660046100f9565b60036020908152600093845260408085208252928452828420905282529020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b76100a036600461013c565b600260208190526000918252604090912054900b81565b60405160029190910b8152602001610089565b80356001600160a01b03811681146100e157600080fd5b919050565b803562ffffff811681146100e157600080fd5b60008060006060848603121561010e57600080fd5b610117846100ca565b9250610125602085016100ca565b9150610133604085016100e6565b90509250925092565b60006020828403121561014e57600080fd5b610157826100e6565b939250505056fea264697066735822122056bd68c3598731e4758ac2a2439088ee51046158e52d5612165fe8c12929580564736f6c634300080d0033608060405234801561001057600080fd5b506040516106ef3803806106ef83398101604081905261002f91610117565b826001600160a01b0316846001600160a01b0316106100885760405162461bcd60e51b81526020600482015260116024820152703bb937b733903a37b5b2b71037b93232b960791b604482015260640160405180910390fd5b60008054336001600160a01b031991821617909155600180549091166001600160a01b039586161790556002805462ffffff938416600355939094166001600160b81b031990931692909217600160a01b92909116919091021790556004805463ffffffff19166204000417905561017f565b80516001600160a01b038116811461011257600080fd5b919050565b6000806000806080858703121561012d57600080fd5b610136856100fb565b9350610144602086016100fb565b9250604085015162ffffff8116811461015c57600080fd5b8092505060608501518060020b811461017457600080fd5b939692955090935050565b6105618061018e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063915a48881161005b578063915a488814610159578063d0c93a7c1461017f578063d21220a7146101a7578063eb25c51f146101ba57600080fd5b80630dfe16811461008d57806332148f67146100bd5780633850c7bd146100ed578063883bdbfd14610138575b600080fd5b6001546100a0906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100eb6100cb36600461038e565b6004805461ffff909216620100000263ffff000019909216919091179055565b005b6004805460408051600160601b8152600060208201529081019290925261ffff808216606084015262010000909104166080820152606460a0820152600160c082015260e0016100b4565b61014b6101463660046103b9565b610216565b6040516100b492919061042e565b6100eb61016736600461038e565b6004805461ffff191661ffff92909216919091179055565b6002805461019491600160a01b909104900b81565b60405160029190910b81526020016100b4565b6002546100a0906001600160a01b031681565b6100eb6101c83660046104cc565b6004805471ffffffffffffffffffffffffffff00000000191664010000000066ffffffffffffff9485160266ffffffffffffff60581b191617600160581b9290931691909102919091179055565b6060808267ffffffffffffffff811115610232576102326104ff565b60405190808252806020026020018201604052801561025b578160200160208202803683370190505b50915060048054906101000a900460060b8260008151811061027f5761027f610515565b600692830b60209182029290920101526004548351600160581b90910490910b90839060019081106102b3576102b3610515565b60069290920b602092830291909101909101528267ffffffffffffffff8111156102df576102df6104ff565b604051908082528060200260200182016040528015610308578160200160208202803683370190505b50905069c91435798c9226a0e6d78160008151811061032957610329610515565b60200260200101906001600160a01b031690816001600160a01b03168152505069c914354b931643013aeb8160018151811061036757610367610515565b60200260200101906001600160a01b031690816001600160a01b0316815250509250929050565b6000602082840312156103a057600080fd5b813561ffff811681146103b257600080fd5b9392505050565b600080602083850312156103cc57600080fd5b823567ffffffffffffffff808211156103e457600080fd5b818501915085601f8301126103f857600080fd5b81358181111561040757600080fd5b8660208260051b850101111561041c57600080fd5b60209290920196919550909350505050565b604080825283519082018190526000906020906060840190828701845b8281101561046a57815160060b8452928401929084019060010161044b565b5050508381038285015284518082528583019183019060005b818110156104a85783516001600160a01b031683529284019291840191600101610483565b5090979650505050505050565b8035600681900b81146104c757600080fd5b919050565b600080604083850312156104df57600080fd5b6104e8836104b5565b91506104f6602084016104b5565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea26469706673582212201abf769ec06e5098d15e94362aa3def9cf87d7ff27268316dbcea5ebb394b8d764736f6c634300080d0033";

export class RangeFactoryMock__factory extends ContractFactory {
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
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RangeFactoryMock> {
    return super.deploy(
      tokenA,
      tokenB,
      overrides || {}
    ) as Promise<RangeFactoryMock>;
  }
  getDeployTransaction(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenA, tokenB, overrides || {});
  }
  attach(address: string): RangeFactoryMock {
    return super.attach(address) as RangeFactoryMock;
  }
  connect(signer: Signer): RangeFactoryMock__factory {
    return super.connect(signer) as RangeFactoryMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RangeFactoryMockInterface {
    return new utils.Interface(_abi) as RangeFactoryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RangeFactoryMock {
    return new Contract(address, _abi, signerOrProvider) as RangeFactoryMock;
  }
}
