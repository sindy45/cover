/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015cc380380620015cc83398101604081905262000034916200011b565b6200003f8162000046565b5062000233565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001f7565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200012f57600080fd5b82516001600160401b03808211156200014757600080fd5b818501915085601f8301126200015c57600080fd5b81518181111562000171576200017162000105565b604051601f8201601f19908116603f011681019083821181831017156200019c576200019c62000105565b816040528281528886848701011115620001b557600080fd5b600093505b82841015620001d95784840186015181850187015292850192620001ba565b82841115620001eb5760008684830101525b98975050505050505050565b600181811c908216806200020c57607f821691505b6020821081036200022d57634e487b7160e01b600052602260045260246000fd5b50919050565b61138980620002436000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610b3f565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610b82565b610222565b60405190151581526020016100a9565b6100e86100e3366004610ba6565b610274565b6040516100a99190610c0c565b610108610103366004610d6b565b610308565b005b61011d610118366004610e15565b610354565b6040516100a99190610f1b565b610108610138366004610f2e565b61047e565b6100c561014b366004610f6a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004610f9d565b61048d565b60006001600160a01b0383166101fc5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025357506001600160e01b031982166303a24d0760e21b145b8061026e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606002805461028390611002565b80601f01602080910402602001604051908101604052809291908181526020018280546102af90611002565b80156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103245750610324853361014b565b6103405760405162461bcd60e51b81526004016101f39061103c565b61034d85858585856104d2565b5050505050565b606081518351146103b95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f3565b6000835167ffffffffffffffff8111156103d5576103d5610c1f565b6040519080825280602002602001820160405280156103fe578160200160208202803683370190505b50905060005b8451811015610476576104498582815181106104225761042261108b565b602002602001015185838151811061043c5761043c61108b565b602002602001015161018c565b82828151811061045b5761045b61108b565b602090810291909101015261046f816110b7565b9050610404565b509392505050565b6104893383836106af565b5050565b6001600160a01b0385163314806104a957506104a9853361014b565b6104c55760405162461bcd60e51b81526004016101f39061103c565b61034d858585858561078f565b81518351146105345760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f3565b6001600160a01b03841661055a5760405162461bcd60e51b81526004016101f3906110d0565b3360005b845181101561064157600085828151811061057b5761057b61108b565b6020026020010151905060008583815181106105995761059961108b565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156105e95760405162461bcd60e51b81526004016101f390611115565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061062690849061115f565b925050819055505050508061063a906110b7565b905061055e565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610691929190611177565b60405180910390a46106a78187878787876108b9565b505050505050565b816001600160a01b0316836001600160a01b0316036107225760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f3565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166107b55760405162461bcd60e51b81526004016101f3906110d0565b3360006107c185610a1d565b905060006107ce85610a1d565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156108115760405162461bcd60e51b81526004016101f390611115565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a1682528120805488929061084e90849061115f565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46108ae848a8a8a8a8a610a68565b505050505050505050565b6001600160a01b0384163b156106a75760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906108fd90899089908890889088906004016111a5565b6020604051808303816000875af1925050508015610938575060408051601f3d908101601f1916820190925261093591810190611203565b60015b6109e457610944611220565b806308c379a00361097d575061095861123c565b80610963575061097f565b8060405162461bcd60e51b81526004016101f39190610c0c565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f3565b6001600160e01b0319811663bc197c8160e01b14610a145760405162461bcd60e51b81526004016101f3906112c6565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610a5757610a5761108b565b602090810291909101015292915050565b6001600160a01b0384163b156106a75760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610aac908990899088908890889060040161130e565b6020604051808303816000875af1925050508015610ae7575060408051601f3d908101601f19168201909252610ae491810190611203565b60015b610af357610944611220565b6001600160e01b0319811663f23a6e6160e01b14610a145760405162461bcd60e51b81526004016101f3906112c6565b80356001600160a01b0381168114610b3a57600080fd5b919050565b60008060408385031215610b5257600080fd5b610b5b83610b23565b946020939093013593505050565b6001600160e01b031981168114610b7f57600080fd5b50565b600060208284031215610b9457600080fd5b8135610b9f81610b69565b9392505050565b600060208284031215610bb857600080fd5b5035919050565b6000815180845260005b81811015610be557602081850181015186830182015201610bc9565b81811115610bf7576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610b9f6020830184610bbf565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610c5b57610c5b610c1f565b6040525050565b600067ffffffffffffffff821115610c7c57610c7c610c1f565b5060051b60200190565b600082601f830112610c9757600080fd5b81356020610ca482610c62565b604051610cb18282610c35565b83815260059390931b8501820192828101915086841115610cd157600080fd5b8286015b84811015610cec5780358352918301918301610cd5565b509695505050505050565b600082601f830112610d0857600080fd5b813567ffffffffffffffff811115610d2257610d22610c1f565b604051610d39601f8301601f191660200182610c35565b818152846020838601011115610d4e57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610d8357600080fd5b610d8c86610b23565b9450610d9a60208701610b23565b9350604086013567ffffffffffffffff80821115610db757600080fd5b610dc389838a01610c86565b94506060880135915080821115610dd957600080fd5b610de589838a01610c86565b93506080880135915080821115610dfb57600080fd5b50610e0888828901610cf7565b9150509295509295909350565b60008060408385031215610e2857600080fd5b823567ffffffffffffffff80821115610e4057600080fd5b818501915085601f830112610e5457600080fd5b81356020610e6182610c62565b604051610e6e8282610c35565b83815260059390931b8501820192828101915089841115610e8e57600080fd5b948201945b83861015610eb357610ea486610b23565b82529482019490820190610e93565b96505086013592505080821115610ec957600080fd5b50610ed685828601610c86565b9150509250929050565b600081518084526020808501945080840160005b83811015610f1057815187529582019590820190600101610ef4565b509495945050505050565b602081526000610b9f6020830184610ee0565b60008060408385031215610f4157600080fd5b610f4a83610b23565b915060208301358015158114610f5f57600080fd5b809150509250929050565b60008060408385031215610f7d57600080fd5b610f8683610b23565b9150610f9460208401610b23565b90509250929050565b600080600080600060a08688031215610fb557600080fd5b610fbe86610b23565b9450610fcc60208701610b23565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ff657600080fd5b610e0888828901610cf7565b600181811c9082168061101657607f821691505b60208210810361103657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602f908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526e195c881b9bdc88185c1c1c9bdd9959608a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016110c9576110c96110a1565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60008219821115611172576111726110a1565b500190565b60408152600061118a6040830185610ee0565b828103602084015261119c8185610ee0565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190526000906111d190830186610ee0565b82810360608401526111e38186610ee0565b905082810360808401526111f78185610bbf565b98975050505050505050565b60006020828403121561121557600080fd5b8151610b9f81610b69565b600060033d11156112395760046000803e5060005160e01c5b90565b600060443d101561124a5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561127a57505050505090565b82850191508151818111156112925750505050505090565b843d87010160208285010111156112ac5750505050505090565b6112bb60208286010187610c35565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061134890830184610bbf565b97965050505050505056fea26469706673582212206ff2888b5a98223726a0f73a59ca826e403499ef9c674e971b9631cdaad4abcc64736f6c634300080d0033";

export class ERC1155__factory extends ContractFactory {
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
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
