/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ticks, TicksInterface } from "../Ticks";

const _abi = [
  {
    inputs: [],
    name: "NotImplementedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickLowerOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickLowerRange",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickUpperOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickUpperRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "_tickSpacing",
        type: "uint24",
      },
    ],
    name: "getMaxLiquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x611c7161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c8063121f0e0c1461006657806341ee16d71461009e57806391282ef4146100be578063aa62b776146100fd578063dc47a5c21461011d575b600080fd5b81801561007257600080fd5b5061008661008136600461172b565b610148565b60405160029190910b81526020015b60405180910390f35b8180156100aa57600080fd5b506100866100b93660046117a6565b610558565b8180156100ca57600080fd5b506100de6100d9366004611889565b610e15565b60408051938452600292830b6020850152910b90820152606001610095565b81801561010957600080fd5b506100de6101183660046118f3565b6112bb565b61013061012b366004611982565b6114d3565b6040516001600160801b039091168152602001610095565b600284900b60008181526020879052604081209091620d89e7191480159061017f575060018101546001600160801b038581169116145b15610259578054600281810b600090815260208a905260408082206301000000909404830b80835291209188900b146101e9578254825465ffffff000000191663010000009182900462ffffff9081169092021783558354825462ffffff1916911617815561023d565b600287810b600090815260208b9052604080822054855465ffffff000000191663010000009182900462ffffff8181169093029190911787558754940b83529120805462ffffff1916929091169190911790555b8760020b8560020b0361025257825460020b94505b505061027e565b6001810180546001600160801b03808216879003166001600160801b03199091161790555b50600284900b600090815260208790526040902061029f620d89e7196119b3565b60020b8560020b141580156102c3575060018101546001600160801b038581169116145b15610396578054600281810b600081815260208b905260408082206301000000909504840b825290209189900b1461032c578254825465ffffff000000191663010000009182900462ffffff9081169092021783558354825462ffffff1916911617815561037a565b600288810b600090815260208b905260408082205486549381900b83529120805465ffffff000000191663010000009384900462ffffff908116909402179055825462ffffff191691161781555b8660020b8560020b0361038f57825460020b94505b50506103bb565b6001810180546001600160801b03808216879003166001600160801b03199091161790555b600286900b620d89e719148015906103e2575060018101546001600160801b038581169116145b1561043757600286810b600090815260208990526040812080546001600160b01b03191681556001810180546001600160801b0319169055918201819055600382015560040180546001600160a01b03191690555b610444620d89e7196119b3565b60020b8560020b14158015610468575060018101546001600160801b038581169116145b156104bd57600285810b600090815260208990526040812080546001600160b01b03191681556001810180546001600160801b0319169055918201819055600382015560040180546001600160a01b03191690555b6105056040518060400160405280601881526020017f72656d6f766564206c6f776572206c69717569646974793a0000000000000000815250856001600160801b0316611513565b61054d6040518060400160405280601881526020017f72656d6f766564207570706572206c69717569646974793a0000000000000000815250856001600160801b0316611513565b509095945050505050565b60008560020b8860020b12158061057557508660020b8960020b12155b156105935760405163338d790760e01b815260040160405180910390fd5b600288900b620d89e71913156105bc576040516345bde0e360e11b815260040160405180910390fd5b6105c9620d89e7196119b3565b60020b8660020b13156105ef5760405163093cbe4760e21b815260040160405180910390fd5b60405163986cfba360e01b8152600289900b60048201526001600160a01b0383169073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af415801561064d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067191906119d5565b6001600160a01b0316111561096057600288900b600090815260208d905260409020600101546001600160801b0316801515806106b55750600289900b620d89e719145b156106fd576106c486826119f2565b60028a900b600090815260208f90526040902060010180546001600160801b0319166001600160801b039290921691909117905561095e565b60028a810b600090815260208f905260409020805490916301000000909104810b9089900b81131561072c5750875b60018201546001600160801b031615801561074f575060028c900b620d89e71914155b801561076157508560020b8c60020b14155b8061077257508a60020b8c60020b12155b8061078357508060020b8b60020b12155b156107a1576040516307dfb2f760e01b815260040160405180910390fd5b6040518060e001604052808d60020b81526020018260020b815260200160006001600160801b03168152602001896001600160801b031681526020018f81526020018f81526020018e6001600160a01b03168152508f60008d60020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160006101000a8154816001600160801b0302191690836001600160801b031602179055506080820151816002015560a0820151816003015560c08201518160040160006101000a8154816001600160a01b0302191690836001600160a01b031602179055509050508a8260000160036101000a81548162ffffff021916908360020b62ffffff1602179055508a8f60008360020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff16021790555050505b505b60405163986cfba360e01b8152600287900b60048201526001600160a01b0383169073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156109be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e291906119d5565b6001600160a01b03161115610d3757600286900b600090815260208d905260409020600101546001600160801b031680151580610a305750610a27620d89e7196119b3565b60020b8760020b145b15610a7857610a3f86826119f2565b600288900b600090815260208f90526040902060010180546001600160801b0319166001600160801b0392909216919091179055610d35565b60008d60008a60020b60020b8152602001908152602001600020905060008160000160039054906101000a900460020b9050610ab68a60020b61155c565b610ac28960020b61155c565b610ace8160020b61155c565b6001820154610ae5906001600160801b03166115a4565b60018201546001600160801b0316158015610b125750610b08620d89e7196119b3565b60020b8a60020b14155b8015610b2457508560020b8a60020b14155b80610b3557508860020b8a60020b13155b80610b4657508060020b8960020b12155b15610b64576040516315beab4760e01b815260040160405180910390fd5b815460028c810b91900b1215610b78578a99505b6040518060e001604052808b60020b81526020018260020b815260200160006001600160801b03168152602001896001600160801b031681526020018f81526020018f81526020018e6001600160a01b03168152508f60008b60020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160006101000a8154816001600160801b0302191690836001600160801b031602179055506080820151816002015560a0820151816003015560c08201518160040160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550905050888260000160006101000a81548162ffffff021916908360020b62ffffff160217905550888f60008360020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff16021790555050505b505b6040516309eed80b60e31b81526001600160a01b038316600482015260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__90634f76c05890602401602060405180830381865af4158015610d92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db69190611a1d565b90508660020b8560020b128015610dd357508060020b8760020b13155b15610de057869450610e04565b8860020b8560020b128015610dfb57508060020b8960020b13155b15610e04578894505b50929b9a5050505050505050505050565b60008080806002610e26878a611a50565b610e309190611a8a565b60020b600003610eb657610e6e604051806040016040528060138152602001727469636b20616363756d756c6174656420746f60681b8152506115e9565b610e7a8860020b61155c565b50600287900b600090815260208a90526040902060010154670de0b6b3a764000090610eaf906001600160801b031688611aac565b9650610f77565b600288900b600090815260208b905260409020600101546001600160801b03168015610f545787610ef86001600160801b038316670de0b6b3a7640000611ac4565b610f029190611ae3565b9150610f16816001600160801b03166115a4565b610f1f886115a4565b610f4f6040518060400160405280600e81526020016d31b0b9393c903832b931b2b73a1d60911b81525083611513565b610f60565b670de0b6b3a764000091505b610f736001600160801b03821689611af7565b9750505b600289810b600090815260208c9052604090200154610f95906115a4565b600289900b600090815260208b90526040902060030154610fb5906115a4565b600289810b600090815260208c90526040812060038101549201549091610fdb91611af7565b9050801561113c576000620f4240610ff38882611b0e565b62ffffff168862ffffff1661100d858d600160801b61162c565b61101a90620f4240611ac4565b6110249190611ae3565b61102e9190611ac4565b6110389190611ae3565b9050611043826115a4565b6000670de0b6b3a76400006110588584611ac4565b6110629190611ae3565b905061106d826115a4565b611076816115a4565b60028b900b600090815260208e90526040902080548291906006906110af908490660100000000000090046001600160801b03166119f2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555080826110df9190611af7565b60028d900b600090815260208f9052604090208054600690611115908490660100000000000090046001600160801b03166119f2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60028a900b600090815260208c9052604081206003018054839290611162908490611aac565b909155505060408051808201909152601781527f63757272656e74207469636b206665652067726f77746800000000000000000060208201526111a4906115e9565b60028a810b600090815260208d90526040902001546111c2906115a4565b60028a900b600090815260208c905260409020600301546111e2906115a4565b600289900b600090815260208c9052604081206003018054839290611208908490611aac565b90915550506040805180820190915260148152730dccaf0e840e8d2c6d640cccaca40cee4deeee8d60631b6020820152611241906115e9565b61124d8960020b61155c565b600289810b600090815260208d905260409020015461126b906115a4565b600289900b600090815260208c9052604090206003015461128b906115a4565b50505050600285810b600090815260209890985260409097205493979496630100000090940490930b9450505050565b600286900b600090815260208990526040812060040154819081906112e9906001600160a01b031689611b32565b60028a900b600090815260208d90526040902060040180546001600160a01b0319166001600160a01b039290921691909117905584156113f15760028460020b8a60020b8161133a5761133a611a3a565b0560020b8161134b5761134b611a3a565b0760020b60000361137f57600289900b600090815260208c905260409020600101546001600160801b0316909603956113a5565b600289900b600090815260208c905260409020600101546001600160801b031696909601955b60028a810b600090815260208d90526040812090910180548892906113cb908490611aac565b9091555050600289810b600090815260208d90526040902054999a509890980b976114c2565b60028460020b8a60020b8161140857611408611a3a565b0560020b8161141957611419611a3a565b0760020b60000361144e57600289900b600090815260208c905260409020600101546001600160801b03169690960195611473565b600289900b600090815260208c905260409020600101546001600160801b0316909603955b60028a810b600090815260208d9052604081209091018054889290611499908490611aac565b9091555050600289810b600090815260208d90526040902054999a50630100000090990490980b975b509499979850959695505050505050565b60006114e0826002611b52565b6114ed620d89e7196119b3565b6114f79190611b7d565b61150d9062ffffff166001600160801b03611b9f565b92915050565b6115588282604051602401611529929190611c06565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526116df565b5050565b6115a18160405160240161157291815260200190565b60408051601f198184030181529190526020810180516001600160e01b0316632d5b6cb960e01b1790526116df565b50565b6115a1816040516024016115ba91815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b1790526116df565b6115a1816040516024016115fd9190611c28565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526116df565b6000808060001985870985870292508281108382030391505080600003611665576000841161165a57600080fd5b5082900490506116d8565b80841161167157600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8060020b81146115a157600080fd5b80356001600160801b038116811461172657600080fd5b919050565b600080600080600060a0868803121561174357600080fd5b85359450602086013561175581611700565b9350604086013561176581611700565b92506117736060870161170f565b9150608086013561178381611700565b809150509295509295909350565b6001600160a01b03811681146115a157600080fd5b60008060008060008060008060008060006101608c8e0312156117c857600080fd5b8b359a5060208c0135995060408c01356117e181611791565b985060608c01356117f181611700565b975060808c013561180181611700565b965060a08c013561181181611700565b955060c08c013561182181611700565b945061182f60e08d0161170f565b93506101008c013561184081611700565b92506101208c013561185181611700565b91506101408c013561186281611791565b809150509295989b509295989b9093969950565b803562ffffff8116811461172657600080fd5b60008060008060008060c087890312156118a257600080fd5b8635955060208701356118b481611700565b945060408701356118c481611700565b9350606087013592506118d960808801611876565b91506118e760a08801611876565b90509295509295509295565b600080600080600080600080610100898b03121561191057600080fd5b88359750602089013561192281611700565b9650604089013561193281611700565b9550606089013561194281611791565b94506080890135935060a0890135925060c0890135801515811461196557600080fd5b915061197360e08a01611876565b90509295985092959890939650565b60006020828403121561199457600080fd5b6116d882611876565b634e487b7160e01b600052601160045260246000fd5b60008160020b627fffff1981036119cc576119cc61199d565b60000392915050565b6000602082840312156119e757600080fd5b81516116d881611791565b60006001600160801b03808316818516808303821115611a1457611a1461199d565b01949350505050565b600060208284031215611a2f57600080fd5b81516116d881611700565b634e487b7160e01b600052601260045260246000fd5b60008160020b8360020b80611a6757611a67611a3a565b627fffff19821460001982141615611a8157611a8161199d565b90059392505050565b60008260020b80611a9d57611a9d611a3a565b808360020b0791505092915050565b60008219821115611abf57611abf61199d565b500190565b6000816000190483118215151615611ade57611ade61199d565b500290565b600082611af257611af2611a3a565b500490565b600082821015611b0957611b0961199d565b500390565b600062ffffff83811690831681811015611b2a57611b2a61199d565b039392505050565b60006001600160a01b0383811690831681811015611b2a57611b2a61199d565b600062ffffff80831681851681830481118215151615611b7457611b7461199d565b02949350505050565b600062ffffff80841680611b9357611b93611a3a565b92169190910492915050565b60006001600160801b0380841680611b9357611b93611a3a565b6000815180845260005b81811015611bdf57602081850181015186830182015201611bc3565b81811115611bf1576000602083870101525b50601f01601f19169290920160200192915050565b604081526000611c196040830185611bb9565b90508260208301529392505050565b6020815260006116d86020830184611bb956fea26469706673582212209b1a6355218d56206e6b549dcc538db57f11ffa72b9175255b11085a82db101964736f6c634300080d0033";

type TicksConstructorParams =
  | [linkLibraryAddresses: TicksLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TicksConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Ticks__factory extends ContractFactory {
  constructor(...args: TicksConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Ticks__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: TicksLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b52f7ddb7db4526c8b5c81c46a9292f776\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/TickMath.sol:TickMath"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ticks> {
    return super.deploy(overrides || {}) as Promise<Ticks>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Ticks {
    return super.attach(address) as Ticks;
  }
  connect(signer: Signer): Ticks__factory {
    return super.connect(signer) as Ticks__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TicksInterface {
    return new utils.Interface(_abi) as TicksInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ticks {
    return new Contract(address, _abi, signerOrProvider) as Ticks;
  }
}

export interface TicksLibraryAddresses {
  ["contracts/libraries/TickMath.sol:TickMath"]: string;
}
