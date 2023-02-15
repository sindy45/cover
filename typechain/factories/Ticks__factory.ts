/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ticks, TicksInterface } from "../Ticks";

const _abi = [
  {
    inputs: [],
    name: "AmountInDeltaNeutral",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountOutDeltaNeutral",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "InfiniteTickLoop0",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "InfiniteTickLoop1",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLatestTick",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "NoLiquidityToRollover",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplementedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickLowerOld",
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
    name: "WrongTickUpperOld",
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
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "uint160",
        name: "priceLimit",
        type: "uint160",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "unlocked",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "swapFee",
            type: "uint16",
          },
          {
            internalType: "int16",
            name: "tickSpread",
            type: "int16",
          },
          {
            internalType: "uint16",
            name: "twapLength",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "auctionLength",
            type: "uint16",
          },
          {
            internalType: "int24",
            name: "latestTick",
            type: "int24",
          },
          {
            internalType: "uint32",
            name: "genesisBlock",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "lastBlock",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "auctionStart",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "accumEpoch",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "liquidityGlobal",
            type: "uint128",
          },
          {
            internalType: "uint160",
            name: "latestPrice",
            type: "uint160",
          },
        ],
        internalType: "struct ICoverPoolStructs.GlobalState",
        name: "state",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "input",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inputBoosted",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionDepth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionBoost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInDelta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoverPoolStructs.SwapCache",
        name: "cache",
        type: "tuple",
      },
    ],
    name: "quote",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "input",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inputBoosted",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionDepth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionBoost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInDelta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoverPoolStructs.SwapCache",
        name: "",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x612f0861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80635a9d606f1461005b5780635f580c66146100e1578063cdb98d0714610103578063dd3fac9214610130575b600080fd5b61006e610069366004612926565b610150565b6040516100d8929190600061012082019050835182526020840151602083015260408401516040830152606084015160608301526080840151608083015260a084015160a083015260c084015160c083015260e084015160e0830152826101008301529392505050565b60405180910390f35b8180156100ed57600080fd5b506101016100fc3660046129e6565b610b0e565b005b81801561010f57600080fd5b5061012361011e366004612a45565b610ea1565b6040516100d89190612ae5565b81801561013c57600080fd5b5061010161014b366004612be0565b611ac5565b61019860405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000856101bc5782516001600160a01b0386161115806101b757508251155b6101cb565b82516001600160a01b03861610155b156101db57508190506000610b05565b6101608401516040850151608086015160a08601516001600160a01b0390931692839261ffff90811692169081101561021c57876080015161ffff16610222565b8660a001515b61023290655af3107a4000612c78565b61023c9190612c97565b6102469190612c78565b60c08601819052670de0b6b3a7640000906102619082612cb9565b86606001516102709190612c78565b61027a9190612c97565b608086015287156106e057866001600160a01b03168110156102a257506001600160a01b0386165b60208501518551604051630e8e499360e21b8152600481019290925260248201839052604482015260009073__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af4158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d9190612cd1565b9050808660800151116105555760208601518651608088015160609290921b9160009173__$1b9fef1800622f5f6a93914ffdeb7ba32f$__91630af8b27f9185916103789082612c78565b6103829087612cb9565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526044820152606401602060405180830381865af41580156103cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ef9190612cd1565b60208901518951604051630b00d01b60e31b8152600481019290925260248201839052604482015290915073__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af4158015610456573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047a9190612cd1565b6001600160a01b0382168952608089015160608a015191975073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9163aa9a091291906104ba9087612c78565b6104c49190612c97565b6104ce9086612cea565b60208b01516040516001600160e01b031960e085901b1681526004810192909252600160601b60248301526044820152606401602060405180830381865af415801561051e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105429190612cd1565b60e08901525050600060608701526106da565b80156106da5760208601518651604051630b00d01b60e31b8152600481019290925260248201849052604482015273__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af41580156105bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e39190612cd1565b8287526080870151606088015191955073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9163aa9a0912919061061a9085612c78565b6106249190612c97565b61062e9084612cea565b60208901516040516001600160e01b031960e085901b1681526004810192909252600160601b60248301526044820152606401602060405180830381865af415801561067e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a29190612cd1565b60e0870152608086015160608701516106bb9083612c78565b6106c59190612c97565b866060018181516106d69190612cea565b9052505b50610aff565b866001600160a01b03168111156106fd57506001600160a01b0386165b60208501518551604051630b00d01b60e31b8152600481019290925260248201526044810183905260009073__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af4158015610764573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107889190612cd1565b905080866080015111610978576080860151602087015160405163554d048960e11b81526004810192909252600160601b6024830152604482015260009073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015610802573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108269190612cd1565b87516108329190612cb9565b60208801518851604051630e8e499360e21b8152600481019290925260248201526044810182905290915073__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af4158015610899573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bd9190612cd1565b8188526060880151608089015191965073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9163aa9a0912916108f291612cea565b60208a01516040516001600160e01b031960e085901b1681526004810192909252600160601b60248301526044820152606401602060405180830381865af4158015610942573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109669190612cd1565b60e08801525060006060870152610afd565b8015610afd5760208601518651604051630e8e499360e21b8152600481019290925260248201526044810184905273__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af41580156109e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a069190612cd1565b8287526080870151606088015191955073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9163aa9a09129190610a3d9085612c78565b610a479190612c97565b610a519084612cea565b60208901516040516001600160e01b031960e085901b1681526004810192909252600160601b60248301526044820152606401602060405180830381865af4158015610aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac59190612cd1565b60e087015260808601516060870151610ade9083612c78565b610ae89190612c97565b86606001818151610af99190612cea565b9052505b505b84935050505b94509492505050565b6040518060600160405280620d89e71960020b8152602001620d89e719610b3490612d01565b60020b81526020018363ffffffff168152508660008560020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff1602179055509050506040518060600160405280620d89e71960020b81526020018460020b81526020018363ffffffff16815250866000620d89e71960020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505060405180606001604052808460020b8152602001620d89e719610cbb90612d01565b60020b815263ffffffff8416602090910152866000610cdd620d89e719612d01565b60020b815260208082019290925260409081016000208351815493850151949092015163ffffffff1666010000000000000269ffffffff0000000000001962ffffff95861663010000000265ffffffffffff199095169590931694909417929092171691909117905573__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3610d6a8386612d23565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015610da9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcd9190612d6b565b6001860180546001600160a01b0319166001600160a01b039290921691909117905573__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3610e138386612d8f565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015610e52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e769190612d6b565b60019490940180546001600160a01b0319166001600160a01b03909516949094179093555050505050565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915260016001607f1b036001600160801b0384161115610f335760405163581a12d760e11b815260040160405180910390fd5b826001600160801b031688610140015160016001607f1b03610f559190612dd6565b6001600160801b03161015610f7d5760405163581a12d760e11b815260040160405180910390fd5b60008a60008860020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b031681525050905060008b60008760020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b03168152505090508a60008960020b60020b815260200190815260200160002060000160009054906101000a900460020b60020b8b60008a60020b60020b815260200190815260200160002060000160039054906101000a900460020b60020b146113025783156112d95784826000018181516112ae9190612dfe565b600f0b9052506020820180518691906112c8908390612e44565b6001600160801b0316905250611520565b6112e382866120ed565b915084826000018181516112f79190612e6f565b600f0b905250611520565b831561135c576040518060e001604052808661131d90612eb5565b600f0b81526001600160801b0387166020820152600060408201819052606082018190526080820181905260a0820181905260c090910152915061139c565b6040805160e081018252600f87900b8152600060208201819052918101829052606081018290526080810182905260a0810182905260c081019190915291505b600289810b600090815260208d9052604090205463010000009004810b9087900b8113156113cb5750856113f0565b600281900b600090815260208d905260409020805462ffffff191662ffffff8b161790555b8860020b8a60020b12158061140b57508060020b8960020b12155b156114295760405163044f7fb160e51b815260040160405180910390fd5b60405180606001604052808b60020b81526020018260020b8152602001600063ffffffff168152508c60008b60020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550905050888c60008c60020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff160217905550505b600286810b600090815260208d9052604090205463010000008104820b910b146115b05783156115735761155481866120ed565b905084816000018181516115689190612e6f565b600f0b9052506117ff565b84816000018181516115859190612dfe565b600f0b90525060208101805186919061159f908390612e44565b6001600160801b03169052506117ff565b83156115f957506040805160e081018252600f86900b8152600060208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152611649565b6040518060e001604052808661160e90612eb5565b600f0b81526001600160801b0387166020820152600060408201819052606082018190526080820181905260a0820181905260c09091015290505b600287810b600090815260208d90526040902054810b9089900b81121561166d5750875b600288810b600090815260208e9052604090205463010000008104820b910b148061169e57508660020b8860020b13155b806116af57508060020b8760020b13155b156116cd576040516329f7012160e21b815260040160405180910390fd5b60405180606001604052808260020b81526020018960020b8152602001600063ffffffff168152508c60008960020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550905050868c60008360020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff160217905550868c60008a60020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff160217905550505b818c60008a60020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b03160217905550905050808c60008860020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505089925050509998505050505050505050565b600286810b600090815260208b8152604091829020825160e0810184528154600f81900b82526001600160801b03600160801b91829004811694830194909452600183015480851695830195909552938490048316606082015293015490811660808401526001600160401b03918104821660a0840152600160c01b90041660c08201528215611c10578315611bbd5780602001516001600160801b0316856001600160801b031603611b8057611b7d81600061251a565b90505b8481600001818151611b929190612e6f565b600f0b905250602081018051869190611bac908390612dd6565b6001600160801b0316905250611c6d565b60208101518151611bce9190612e44565b6001600160801b0316856001600160801b031603611bf357611bf181600161251a565b505b8481600001818151611c059190612dfe565b600f0b905250611c6d565b8315611c6d578560020b8760020b03611c4e5780604001516001600160801b0316856001600160801b031603611c4e57611c4b81600061251a565b90505b8481604001818151611c609190612dd6565b6001600160801b03169052505b808a60008960020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b031602179055509050505060008960008760020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b03168152505090508115611fed578315611f855760208101518151611f439190612e44565b6001600160801b0316856001600160801b031603611f6857611f6681600161251a565b505b8481600001818151611f7a9190612dfe565b600f0b905250612049565b80602001516001600160801b0316856001600160801b031603611fb057611fad81600061251a565b90505b8481600001818151611fc29190612e6f565b600f0b905250602081018051869190611fdc908390612dd6565b6001600160801b0316905250612049565b83612049578560020b8760020b0361202a5780604001516001600160801b0316856001600160801b03160361202a5761202781600061251a565b90505b848160400181815161203c9190612dd6565b6001600160801b03169052505b600295860b600090815260209a8b5260409081902082519b8301516001600160801b039c8d16600160801b918e168202178255918301516060840151908d16908d16830217600182015560808301519701805460a084015160c09094015198909c166001600160c01b0319909c169b909b176001600160401b03928316909102176001600160c01b0316600160c01b91909616029490941790975550505050505050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260a08301516001600160401b031615612513576020830151835160009161214c91612e6f565b6001600160801b031690506000670de0b6b3a76400008560a001516001600160401b031686606001516001600160801b03166121889190612c78565b6121929190612c97565b905080856060018181516121a69190612dd6565b6001600160801b031690525060405163554d048960e11b81526004810182905260248101839052600160601b604482015260009073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a09129082908290606401602060405180830381865af415801561221a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061223e9190612cd1565b600160601b6122566001600160801b038a1688612cb9565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526044820152606401602060405180830381865af415801561229f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122c39190612cd1565b6001600160801b03169050670de0b6b3a764000086606001516001600160801b0316826122f09190612c78565b6122fa9190612c97565b6001600160401b031660a087015260608601805182919061231c908390612e44565b6001600160801b0316905250505060c08401516001600160401b031615612511576000670de0b6b3a76400008560c001516001600160401b031686608001516001600160801b031661236e9190612c78565b6123789190612c97565b9050808560800181815161238c9190612dd6565b6001600160801b031690525060405163554d048960e11b81526004810182905260248101839052600160601b604482015260009073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a09129082908290606401602060405180830381865af4158015612400573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124249190612cd1565b600160601b61243c6001600160801b038a1688612cb9565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526044820152606401602060405180830381865af4158015612485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124a99190612cd1565b6001600160801b03169050670de0b6b3a764000086608001516001600160801b0316826124d69190612c78565b6124e09190612c97565b6001600160401b031660c0870152608086018051829190612502908390612e44565b6001600160801b031690525050505b505b5090919050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152811561263f5760a08301516001600160401b03161561263a57670de0b6b3a76400008360a001516001600160401b031684606001516001600160801b031661259b9190612c78565b6125a59190612c97565b836060018181516125b69190612dd6565b6001600160801b0316905250600060a084015260c08301516001600160401b03161561263a57670de0b6b3a76400008360c001516001600160401b031684608001516001600160801b031661260b9190612c78565b6126159190612c97565b836080018181516126269190612dd6565b6001600160801b0316905250600060c08401525b612513565b60a08301516001600160401b03161561271457670de0b6b3a76400008360a001516001600160401b031684606001516001600160801b03166126819190612c78565b61268b9190612c97565b6001600160801b03166060840152670de0b6b3a764000060a084015260c08301516001600160401b03161561263a57670de0b6b3a76400008360c001516001600160401b031684608001516001600160801b03166126e99190612c78565b6126f39190612c97565b6001600160801b03166080840152670de0b6b3a764000060c0840152612513565b5050600060608201819052608082015290565b8035801515811461273757600080fd5b919050565b6001600160a01b038116811461275157600080fd5b50565b80356127378161273c565b60405161018081016001600160401b038111828210171561279057634e487b7160e01b600052604160045260246000fd5b60405290565b60405161010081016001600160401b038111828210171561279057634e487b7160e01b600052604160045260246000fd5b803560ff8116811461273757600080fd5b803561ffff8116811461273757600080fd5b8035600181900b811461273757600080fd5b8035600281900b811461273757600080fd5b803563ffffffff8116811461273757600080fd5b80356001600160801b038116811461273757600080fd5b6000610180828403121561284c57600080fd5b61285461275f565b905061285f826127c7565b815261286d602083016127d8565b602082015261287e604083016127ea565b604082015261288f606083016127d8565b60608201526128a0608083016127d8565b60808201526128b160a083016127fc565b60a08201526128c260c0830161280e565b60c08201526128d360e0830161280e565b60e08201526101006128e681840161280e565b908201526101206128f883820161280e565b9082015261014061290a838201612822565b9082015261016061291c838201612754565b9082015292915050565b6000806000808486036102c081121561293e57600080fd5b61294786612727565b945060208601356129578161273c565b93506129668760408801612839565b92506101006101bf198201121561297c57600080fd5b50612985612796565b6101c086013581526101e0860135602082015261020086013560408201526102208601356060820152610240860135608082015261026086013560a082015261028086013560c08201526102a09095013560e0860152509194909350909190565b60008060008060008060c087890312156129ff57600080fd5b863595506020870135945060408701359350612a1d606088016127fc565b9250612a2b6080880161280e565b9150612a3960a088016127fc565b90509295509295509295565b60008060008060008060008060006102808a8c031215612a6457600080fd5b8935985060208a01359750612a7c8b60408c01612839565b9650612a8b6101c08b016127fc565b9550612a9a6101e08b016127fc565b9450612aa96102008b016127fc565b9350612ab86102208b016127fc565b9250612ac76102408b01612822565b9150612ad66102608b01612727565b90509295985092959850929598565b815160ff16815261018081016020830151612b06602084018261ffff169052565b506040830151612b1b604084018260010b9052565b506060830151612b31606084018261ffff169052565b506080830151612b47608084018261ffff169052565b5060a0830151612b5c60a084018260020b9052565b5060c0830151612b7460c084018263ffffffff169052565b5060e0830151612b8c60e084018263ffffffff169052565b506101008381015163ffffffff908116918401919091526101208085015190911690830152610140808401516001600160801b031690830152610160928301516001600160a01b0316929091019190915290565b60008060008060008060008060006102808a8c031215612bff57600080fd5b8935985060208a01359750612c178b60408c01612839565b9650612c266101c08b016127fc565b9550612c356101e08b016127fc565b9450612c446102008b01612822565b9350612c536102208b01612727565b9250612ac76102408b01612727565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612c9257612c92612c62565b500290565b600082612cb457634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115612ccc57612ccc612c62565b500190565b600060208284031215612ce357600080fd5b5051919050565b600082821015612cfc57612cfc612c62565b500390565b60008160020b627fffff198103612d1a57612d1a612c62565b60000392915050565b60008160020b8360020b6000811281627fffff1901831281151615612d4a57612d4a612c62565b81627fffff018313811615612d6157612d61612c62565b5090039392505050565b600060208284031215612d7d57600080fd5b8151612d888161273c565b9392505050565b60008160020b8360020b6000821282627fffff03821381151615612db557612db5612c62565b82627fffff19038212811615612dcd57612dcd612c62565b50019392505050565b60006001600160801b0383811690831681811015612df657612df6612c62565b039392505050565b600081600f0b83600f0b600081128160016001607f1b031901831281151615612e2957612e29612c62565b8160016001607f1b03018313811615612d6157612d61612c62565b60006001600160801b03808316818516808303821115612e6657612e66612c62565b01949350505050565b600081600f0b83600f0b600082128260016001607f1b0303821381151615612e9957612e99612c62565b8260016001607f1b0319038212811615612dcd57612dcd612c62565b600081600f0b60016001607f1b03198103612d1a57612d1a612c6256fea2646970667358221220106afdedb9a0dcc20702fe509c3336fb4b5c482f4da0feedaf0a0332ced0a15c64736f6c634300080d0033";

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
      new RegExp("__\\$357eccfa53a4e88c122661903e0e603301\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/DyDxMath.sol:DyDxMath"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1b9fef1800622f5f6a93914ffdeb7ba32f\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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
  ["contracts/libraries/DyDxMath.sol:DyDxMath"]: string;
  ["contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"]: string;
  ["contracts/libraries/TickMath.sol:TickMath"]: string;
}
