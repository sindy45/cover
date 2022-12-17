/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolsharkHedgePoolLibraries,
  PoolsharkHedgePoolLibrariesInterface,
} from "../PoolsharkHedgePoolLibraries";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IConcentratedPool",
        name: "pool",
        type: "address",
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
    inputs: [],
    name: "concentratedFactory",
    outputs: [
      {
        internalType: "contract IConcentratedFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "liquidityAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmountsForLiquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "token0amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "token1amount",
        type: "uint128",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getSqrtPriceLimitX96",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "output",
        type: "uint256",
      },
      {
        internalType: "uint24",
        name: "swapFee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "totalFeeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "handleFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IConcentratedPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "initializePoolObservations",
    outputs: [
      {
        internalType: "int24",
        name: "startingTick",
        type: "int24",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IConcentratedPool",
        name: "pool",
        type: "address",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "mulDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
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
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "mulDivRoundingUp",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
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
        name: "x",
        type: "uint256",
      },
    ],
    name: "sqrt",
    outputs: [
      {
        internalType: "uint256",
        name: "z",
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
        name: "y",
        type: "uint256",
      },
    ],
    name: "toUint128",
    outputs: [
      {
        internalType: "uint128",
        name: "z",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "toUint160",
    outputs: [
      {
        internalType: "uint160",
        name: "z",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "within1",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110c6806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637247189011610097578063aa9a091211610066578063aa9a09121461026f578063aec6cbfe14610282578063d42980e514610295578063dfef6beb146102bd57600080fd5b8063724718901461020b578063786570c21461021e578063809fdd3314610231578063902614731461025c57600080fd5b8063392b952d116100d3578063392b952d1461019f5780633ef27011146101b257806365e8e4d1146101e5578063677342ce146101f857600080fd5b80630af8b27f1461010557806313a1ec751461012b578063353939741461014e578063382d7a8214610174575b600080fd5b610118610113366004610a45565b6102d0565b6040519081526020015b60405180910390f35b61013e610139366004610a71565b6102e7565b6040519015158152602001610122565b61016161015c366004610aab565b6102fc565b60405160029190910b8152602001610122565b610187610182366004610ad6565b610328565b6040516001600160a01b039091168152602001610122565b61013e6101ad366004610aab565b610363565b6101c56101c0366004610af3565b61036e565b604080516001600160801b03938416815292909116602083015201610122565b6101616101f3366004610aab565b610468565b610118610206366004610b40565b610473565b610118610219366004610b59565b61047e565b600054610187906001600160a01b031681565b61024461023f366004610b40565b610497565b6040516001600160801b039091168152602001610122565b61011861026a366004610b59565b6104b2565b61011861027d366004610a45565b6104c0565b610118610290366004610b9a565b6104cd565b6102a86102a3366004610bd5565b610530565b60408051928352602083019190915201610122565b6101876102cb366004610b40565b61054a565b60006102dd848484610560565b90505b9392505050565b60006102f3838361059d565b90505b92915050565b6000610307826105bf565b61031f576103148261063b565b50620d89e819919050565b6102f682610698565b6000816103535761034e600173fffd8963efd1fc6a506488495d951d5263988d26610c30565b6102f6565b6102f66401000000006001610c58565b60006102f6826105bf565b60008084861161038e5761038761023f858989876107ff565b90506103ce565b8685116103ab576103a461023f85898987610830565b91506103ce565b6103ba61023f85878987610830565b91506103cb61023f858988876107ff565b90505b6104166040518060400160405280601781526020017f746f6b656e496e20616d6f756e743a2020202020202020000000000000000000815250836001600160801b0316610881565b61045e6040518060400160405280601781526020017f746f6b656e4f757420616d6f756e743a20202020202020000000000000000000815250826001600160801b0316610881565b9550959350505050565b60006102f682610698565b60006102f6826108ca565b600061048c858585856107ff565b90505b949350505050565b806001600160801b03811681146104ad57600080fd5b919050565b600061048c85858585610830565b60006102dd848484610972565b60008385116104ee576104e783600160601b888803610972565b9050610527565b858411610510576104e7826105088888600160601b610972565b888803610972565b600061052384600160601b898803610972565b9150505b95945050505050565b60008061053d8684610c83565b9396939550929350505050565b806001600160a01b03811681146104ad57600080fd5b600061056d848484610972565b9050818061057d5761057d610c9b565b838509156102e057600019811061059357600080fd5b6001019392505050565b6000818311156105b45750600181830311156102f6565b506001919003111590565b600080826001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610600573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106249190610cc3565b5050600561ffff9091161015979650505050505050565b6040516332148f6760e01b8152600560048201526001600160a01b038216906332148f6790602401600060405180830381600087803b15801561067d57600080fd5b505af1158015610691573d6000803e3d6000fd5b5050505050565b60408051600380825260808201909252600091829190602082016060803683370190505090506000816000815181106106d3576106d3610d78565b63ffffffff909216602092830291909101909101526106f46005600c610d8e565b61ffff168160018151811061070b5761070b610d78565b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526000906001600160a01b0385169063883bdbfd9061074f908590600401610db8565b600060405180830381865afa15801561076c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107949190810190610ecb565b509050816001815181106107aa576107aa610d78565b602002602001015160030b816001815181106107c8576107c8610d78565b6020026020010151826000815181106107e3576107e3610d78565b60200260200101516107f59190610f97565b61048f9190610fe7565b6000811561081f5761081885858503600160601b610560565b905061048f565b61048c85858503600160601b610972565b600081156108585761081861084c606087901b86860386610560565b85808204910615150190565b8361086a606087901b86860386610972565b8161087757610877610c9b565b0495945050505050565b6108c68282604051602401610897929190611033565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610a24565b5050565b60b581600160881b81106108e35760409190911b9060801c5b690100000000000000000081106108ff5760209190911b9060401c5b6501000000000081106109175760109190911b9060201c5b6301000000811061092d5760089190911b9060101c5b62010000010260121c80820401600190811c80830401811c80830401811c80830401811c80830401811c80830401811c80830401901c8082048111156104ad57900490565b60008080600019858709858702925082811083820303915050806000036109ab57600084116109a057600080fd5b5082900490506102e0565b8084116109b757600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600080600060608486031215610a5a57600080fd5b505081359360208301359350604090920135919050565b60008060408385031215610a8457600080fd5b50508035926020909101359150565b6001600160a01b0381168114610aa857600080fd5b50565b600060208284031215610abd57600080fd5b81356102e081610a93565b8015158114610aa857600080fd5b600060208284031215610ae857600080fd5b81356102e081610ac8565b600080600080600060a08688031215610b0b57600080fd5b853594506020860135935060408601359250606086013591506080860135610b3281610ac8565b809150509295509295909350565b600060208284031215610b5257600080fd5b5035919050565b60008060008060808587031215610b6f57600080fd5b8435935060208501359250604085013591506060850135610b8f81610ac8565b939692955090935050565b600080600080600060a08688031215610bb257600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060808587031215610beb57600080fd5b84359350602085013562ffffff81168114610c0557600080fd5b93969395505050506040820135916060013590565b634e487b7160e01b600052601160045260246000fd5b60006001600160a01b0383811690831681811015610c5057610c50610c1a565b039392505050565b60006001600160a01b03828116848216808303821115610c7a57610c7a610c1a565b01949350505050565b60008219821115610c9657610c96610c1a565b500190565b634e487b7160e01b600052601260045260246000fd5b805161ffff811681146104ad57600080fd5b600080600080600080600060e0888a031215610cde57600080fd5b8751610ce981610a93565b8097505060208801518060020b8114610d0157600080fd5b9550610d0f60408901610cb1565b9450610d1d60608901610cb1565b9350610d2b60808901610cb1565b925060a088015160ff81168114610d4157600080fd5b60c0890151909250610d5281610ac8565b8091505092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600061ffff80831681851681830481118215151615610daf57610daf610c1a565b02949350505050565b6020808252825182820181905260009190848201906040850190845b81811015610df657835163ffffffff1683529284019291840191600101610dd4565b50909695505050505050565b604051601f8201601f1916810167ffffffffffffffff81118282101715610e2b57610e2b610d62565b604052919050565b600067ffffffffffffffff821115610e4d57610e4d610d62565b5060051b60200190565b600082601f830112610e6857600080fd5b81516020610e7d610e7883610e33565b610e02565b82815260059290921b84018101918181019086841115610e9c57600080fd5b8286015b84811015610ec0578051610eb381610a93565b8352918301918301610ea0565b509695505050505050565b60008060408385031215610ede57600080fd5b825167ffffffffffffffff80821115610ef657600080fd5b818501915085601f830112610f0a57600080fd5b81516020610f1a610e7883610e33565b82815260059290921b84018101918181019089841115610f3957600080fd5b948201945b83861015610f675785518060060b8114610f585760008081fd5b82529482019490820190610f3e565b91880151919650909350505080821115610f8057600080fd5b50610f8d85828601610e57565b9150509250929050565b60008160060b8360060b6000811281667fffffffffffff1901831281151615610fc257610fc2610c1a565b81667fffffffffffff018313811615610fdd57610fdd610c1a565b5090039392505050565b60008160060b8360060b8061100c57634e487b7160e01b600052601260045260246000fd5b667fffffffffffff1982146000198214161561102a5761102a610c1a565b90059392505050565b604081526000835180604084015260005b818110156110615760208187018101516060868401015201611044565b81811115611073576000606083860101525b50602083019390935250601f91909101601f19160160600191905056fea264697066735822122025b3005e6ce238380ae6b5e1b7ffae00d41b62ee8b01d9c857e4828319c3aacb64736f6c634300080d0033";

export class PoolsharkHedgePoolLibraries__factory extends ContractFactory {
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
  ): Promise<PoolsharkHedgePoolLibraries> {
    return super.deploy(
      overrides || {}
    ) as Promise<PoolsharkHedgePoolLibraries>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoolsharkHedgePoolLibraries {
    return super.attach(address) as PoolsharkHedgePoolLibraries;
  }
  connect(signer: Signer): PoolsharkHedgePoolLibraries__factory {
    return super.connect(signer) as PoolsharkHedgePoolLibraries__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolsharkHedgePoolLibrariesInterface {
    return new utils.Interface(_abi) as PoolsharkHedgePoolLibrariesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolsharkHedgePoolLibraries {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PoolsharkHedgePoolLibraries;
  }
}
