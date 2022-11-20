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
  "0x61152f61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c8063121f0e0c1461005057806377e0596114610088578063dc47a5c2146100a8575b600080fd5b81801561005c57600080fd5b5061007061006b3660046112b0565b6100d3565b60405160029190910b81526020015b60405180910390f35b81801561009457600080fd5b506100706100a3366004611325565b610344565b6100bb6100b63660046113d1565b610c06565b6040516001600160801b03909116815260200161007f565b600284900b60008181526020879052604081209091620d89e71914801590610111575060028101546001600160801b03858116600160801b90920416145b156101db578054600281810b600090815260208a9052604080822063010000009485900480850b845291909220825465ffffff000000191662ffffff9283169095029490941782558454845462ffffff19169116178355919088810b9086900b0361017e57825460020b94505b5050600286810b600090815260208990526040812080546001600160b01b03191681556001810182905591820181905560038201556004810180546001600160801b031916905560050180546001600160a01b03191690556101ff565b6002810180546001600160801b03600160801b808304821688900382160291161790555b50600284900b6000908152602087905260409020610220620d89e719611413565b60020b8560020b1415801561024b575060028101546001600160801b03858116600160801b90920416145b15610315578054600281810b600090815260208a9052604080822063010000009485900480850b845291909220825465ffffff000000191662ffffff9283169095029490941782558454845462ffffff19169116178355919087810b9086900b036102b857825460020b94505b5050600285810b600090815260208990526040812080546001600160b01b03191681556001810182905591820181905560038201556004810180546001600160801b031916905560050180546001600160a01b0319169055610339565b6002810180546001600160801b03600160801b808304821688900382160291161790555b509095945050505050565b60008460020b8760020b12158061036157508560020b8860020b12155b1561037f5760405163338d790760e01b815260040160405180910390fd5b600287900b620d89e71913156103a8576040516345bde0e360e11b815260040160405180910390fd5b6103b5620d89e719611413565b60020b8560020b13156103db5760405163093cbe4760e21b815260040160405180910390fd5b60006103e688610c46565b6001600160a01b03169050826001600160a01b03168111156107c057600288810b600090815260208e9052604090200154600160801b90046001600160801b03168015158061043c5750600289900b620d89e719145b1561048f5761044b8682611435565b8d60008b60020b60020b815260200190815260200160002060020160106101000a8154816001600160801b0302191690836001600160801b031602179055506107be565b60028a810b600090815260208f90526040902080548183015491926301000000909104900b90600160801b90046001600160801b03161580156104da575060028c900b620d89e71914155b806104eb57508a60020b8c60020b12155b806104fc57508060020b8b60020b12155b1561051a576040516307dfb2f760e01b815260040160405180910390fd5b6040518061014001604052808d60020b81526020018260020b815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b03168152602001896001600160801b031681526020018f815260200160006001600160801b031681526020018e6001600160a01b03168152508f60008d60020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060c08201518160020160106101000a8154816001600160801b0302191690836001600160801b0316021790555060e082015181600301556101008201518160040160006101000a8154816001600160801b0302191690836001600160801b031602179055506101208201518160050160006101000a8154816001600160a01b0302191690836001600160a01b031602179055509050508a8260000160036101000a81548162ffffff021916908360020b62ffffff1602179055508a8f60008360020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff16021790555050505b505b5060006107cc86610c46565b6001600160a01b03169050826001600160a01b0316811115610b9c57600286810b600090815260208e9052604090200154600160801b90046001600160801b03168015158061082c5750610823620d89e719611413565b60020b8760020b145b1561087f5761083b8682611435565b8d60008960020b60020b815260200190815260200160002060020160106101000a8154816001600160801b0302191690836001600160801b03160217905550610b9a565b600288810b600090815260208f90526040902080548183015491926301000000909104900b90600160801b90046001600160801b031615806108c757508860020b8160020b13155b806108d857508860020b8a60020b12155b156108f6576040516315beab4760e01b815260040160405180910390fd5b6040518061014001604052808b60020b81526020018260020b815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b03168152602001896001600160801b031681526020018f815260200160006001600160801b031681526020018e6001600160a01b03168152508f60008b60020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060c08201518160020160106101000a8154816001600160801b0302191690836001600160801b0316021790555060e082015181600301556101008201518160040160006101000a8154816001600160801b0302191690836001600160801b031602179055506101208201518160050160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550905050888260000160036101000a81548162ffffff021916908360020b62ffffff160217905550888f60008360020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff16021790555050505b505b506000610ba883610f7c565b90508560020b8460020b128015610bc557508060020b8660020b13155b15610bd257859350610bf6565b8760020b8460020b128015610bed57508060020b8860020b13155b15610bf6578793505b50919a9950505050505050505050565b6000610c13826002611460565b610c20620d89e719611413565b610c2a91906114a1565b610c409062ffffff166001600160801b036114c3565b92915050565b60008060008360020b12610c5d578260020b610c6a565b8260020b610c6a906114dd565b9050610c79620d89e719611413565b62ffffff16811115610c9e57604051633e1f710360e21b815260040160405180910390fd5b600081600116600003610cb557600160801b610cc7565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610cfb576ffff97272373d413259a46990580e213a0260801c5b6004821615610d1a576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615610d39576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610d58576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610d77576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610d96576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610db5576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610dd5576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610df5576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610e15576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610e35576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610e55576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610e75576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610e95576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610eb5576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610ed6576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610ef6576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610f15576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610f32576b048a170391f7dc42444e8fa20260801c5b60008460020b1315610f53578060001981610f4f57610f4f61148b565b0490505b640100000000810615610f67576001610f6a565b60005b60ff16602082901c0192505050919050565b60006401000276a36001600160a01b0383161080610fb7575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b15610fd557604051636e4ba61d60e01b815260040160405180910390fd5b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c9790881196179094179092171790911717176080811061106957607f810383901c9150611073565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461127357886001600160a01b031661125882610c46565b6001600160a01b0316111561126d5781611275565b80611275565b815b9998505050505050505050565b8035600281900b811461129457600080fd5b919050565b80356001600160801b038116811461129457600080fd5b600080600080600060a086880312156112c857600080fd5b853594506112d860208701611282565b93506112e660408701611282565b92506112f460608701611299565b915061130260808701611282565b90509295509295909350565b80356001600160a01b038116811461129457600080fd5b6000806000806000806000806000806101408b8d03121561134557600080fd5b8a35995060208b0135985061135c60408c0161130e565b975061136a60608c01611282565b965061137860808c01611282565b955061138660a08c01611282565b945061139460c08c01611282565b93506113a260e08c01611299565b92506113b16101008c01611282565b91506113c06101208c0161130e565b90509295989b9194979a5092959850565b6000602082840312156113e357600080fd5b813562ffffff811681146113f657600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b60008160020b627fffff19810361142c5761142c6113fd565b60000392915050565b60006001600160801b03808316818516808303821115611457576114576113fd565b01949350505050565b600062ffffff80831681851681830481118215151615611482576114826113fd565b02949350505050565b634e487b7160e01b600052601260045260246000fd5b600062ffffff808416806114b7576114b761148b565b92169190910492915050565b60006001600160801b03808416806114b7576114b761148b565b6000600160ff1b82016114f2576114f26113fd565b506000039056fea26469706673582212203305aac666ec161563246e29d2fdc5cbb03d9698eb154326bd131f231678de9e64736f6c634300080d0033";

export class Ticks__factory extends ContractFactory {
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
