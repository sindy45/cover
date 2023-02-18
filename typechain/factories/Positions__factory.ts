/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Positions, PositionsInterface } from "../Positions";

const _abi = [
  {
    inputs: [],
    name: "InvalidClaimTick",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLowerTick",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPositionAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPositionBoundsOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPositionBoundsTwap",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidUpperTick",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughPositionLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplementedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNotUpdated",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickClaimedAt",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "int24",
            name: "lowerOld",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "lower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "upper",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "upperOld",
            type: "int24",
          },
          {
            internalType: "bool",
            name: "zeroForOne",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
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
              {
                internalType: "contract IRangePool",
                name: "inputPool",
                type: "IRangePool",
              },
            ],
            internalType: "struct ICoverPoolStructs.GlobalState",
            name: "state",
            type: "tuple",
          },
        ],
        internalType: "struct ICoverPoolStructs.ValidateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "validate",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "liquidityMinted",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x613e2d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c8063021a3af01461005b5780632060836a14610092578063576613d8146100b2578063c92deb3a14610109575b600080fd5b81801561006757600080fd5b5061007b6100763660046134e5565b610136565b6040516100899291906136aa565b60405180910390f35b81801561009e57600080fd5b5061007b6100ad3660046136cf565b6106d1565b6100c56100c03660046137b7565b610b3c565b60408051600297880b815295870b602087015293860b93850193909352930b60608301526001600160801b03909216608082015260a081019190915260c001610089565b81801561011557600080fd5b50610129610124366004613855565b6112ac565b6040516100899190613938565b60006101406131d5565b604080516060810180835285516001600160a01b03908116600090815260208c8152858220818a018051600290810b85529183528784208b890151830b8552835287842061012088018952805463ffffffff811688526001600160801b03600160201b909104811660808a0152600182015480821660a08b0152600160801b9004811660c08a0152818401541660e0890152600301549094166101008701529385529151855163986cfba360e01b8152930b600484015293518184019273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9263986cfba3926024808401938290030181865af4158015610238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025c9190613958565b6001600160a01b03168152604080870151905163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156102c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ea9190613958565b6001600160a01b0316815250905083608001516001600160801b031660000361031a5760008592509250506106c7565b8060000151602001516001600160801b031684608001516001600160801b031611156103595760405163193d143560e11b815260040160405180910390fd5b83606001516103ad57836020015160020b8560a0015160020b13806103a8575080515160208086015160020b600090815290889052604090205463ffffffff918216600160301b909104909116115b6103f1565b836040015160020b8560a0015160020b12806103f1575080515160408086015160020b60009081526020899052205463ffffffff918216600160301b909104909116115b1561040f57604051632d59207760e11b815260040160405180910390fd5b6020840151604080860151608087015160608801519251636e9fd64960e11b815273__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__9463dd3fac9294610465948e948e948e9493906001908190600401613975565b60006040518083038186803b15801561047d57600080fd5b505af4158015610491573d6000803e3d6000fd5b50505050836060015161052e5773__$357eccfa53a4e88c122661903e0e603301$__637247189085608001518360200151846040015160006040518563ffffffff1660e01b81526004016104e894939291906139dc565b602060405180830381865af4158015610505573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105299190613a0e565b6105b9565b73__$357eccfa53a4e88c122661903e0e603301$__639026147385608001518360200151846040015160006040518563ffffffff1660e01b815260040161057894939291906139dc565b602060405180830381865af4158015610595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b99190613a0e565b815160600180516105cb908390613a3d565b6001600160801b03169052506080840151815160200180516105ee908390613a68565b6001600160801b03908116909152915185516001600160a01b03908116600090815260208c81526040808320828b0151600290810b8552908352818420828c0151820b855283529281902085518154938701518916600160201b026001600160a01b031994851663ffffffff909216919091171781559085015160608601518816600160801b029088161760018201556080808601519382018054949098166001600160801b0319949094169390931790965560a090930151600390950180549590921694909216939093179092555083015191508390505b9550959350505050565b60006106db6131d5565b60408051606080820180845286516001600160a01b03908116600090815260208d81528682208a88018051600290810b8552918352888420968c0151820b845295825287832061012088018952805463ffffffff81168752600160201b90046001600160801b0390811660808a0152600182015480821660a08b0152600160801b9004811660c08a0152818301541660e0890152600301549093166101008701529285529251945163986cfba360e01b815294900b600485015290929082019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156107d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fb9190613958565b6001600160a01b03168152606086015160405163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015610865573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108899190613958565b6001600160a01b031681525090508360c001516001600160801b03166000036108b95760008592509250506106c7565b8051602001516001600160801b03166000036108e657610120850151815163ffffffff909116905261099c565b8360a0015161093857836040015160020b8560a0015160020b1380610933575080515160408086015160020b60009081526020899052205463ffffffff918216600160301b909104909116115b61097e565b836060015160020b8560a0015160020b128061097e5750805151606085015160020b60009081526020889052604090205463ffffffff918216600160301b909104909116115b1561099c57604051632d59207760e11b815260040160405180910390fd5b73__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__63cdb98d07888888886020015189604001518a608001518b606001518c60c001518d60a001516040518a63ffffffff1660e01b81526004016109fb99989796959493929190613a90565b6101a060405180830381865af4158015610a19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3d9190613b3d565b94508360c001518160000151602001818151610a599190613a3d565b6001600160801b03908116909152915185516001600160a01b03908116600090815260208c81526040808320818b0151600290810b85529083528184206060808d0151830b86529084529382902086518154948801518a16600160201b026001600160a01b031995861663ffffffff9092169190911717815591860151938601518816600160801b0293881693909317600182015560808501519281018054939097166001600160801b0319939093169290921790955560a0909201516003909201805492909116919093161790915550505060c0810151829550959350505050565b600080600080600080620d89e71960020b876020015160020b1215610b74576040516347b567bd60e01b815260040160405180910390fd5b610b81620d89e719613c3b565b60020b876040015160020b1315610bab57604051630cda75cf60e41b815260040160405180910390fd5b8660c001516040015160010b8760200151610bc69190613c73565b60020b15610be7576040516347b567bd60e01b815260040160405180910390fd5b8660c001516040015160010b8760400151610c029190613c73565b60020b15610c2357604051630cda75cf60e41b815260040160405180910390fd5b8660a001516001600160801b0316600003610c5157604051630bc9d91360e21b815260040160405180910390fd5b866040015160020b876020015160020b121580610c7c5750866060015160020b876000015160020b12155b15610c9a5760405163119de2e360e21b815260040160405180910390fd5b866080015115610cdb578660c0015160a0015160020b876020015160020b12610cd657604051630f4b1dd760e21b815260040160405180910390fd5b610d0d565b8660c0015160a0015160020b876040015160020b13610d0d57604051630f4b1dd760e21b815260040160405180910390fd5b602087015160405163986cfba360e01b815260029190910b600482015260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015610d69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8d9190613958565b6001600160a01b03169050600073__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba38a604001516040518263ffffffff1660e01b8152600401610dde919060029190910b815260200190565b602060405180830381865af4158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f9190613958565b6001600160a01b0316905073__$357eccfa53a4e88c122661903e0e603301$__63aec6cbfe83838c60800151610e555784610e57565b855b8d60800151610e73578d60a001516001600160801b0316610e76565b60005b8e60800151610e86576000610e95565b8e60a001516001600160801b03165b6040516001600160e01b031960e088901b1681526004810195909552602485019390935260448401919091526064830152608482015260a401602060405180830381865af4158015610eeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0f9190613a0e565b92508860800151156110a2578860c0015160a0015160020b896040015160020b1261109d5760c0890151604081015160a090910151610f519160010b90613c95565b600290810b60408b810182905260c08c015160a0015190920b60608c0152905163986cfba360e01b8152600481019190915260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe69190613958565b604051639026147360e01b8152600481018690526001600160a01b0391909116602482018190526044820184905260006064830152915073__$357eccfa53a4e88c122661903e0e603301$__90639026147390608401602060405180830381865af4158015611059573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107d9190613a0e565b8a60a00181815161108e9190613a68565b6001600160801b031690525090505b611221565b8860c0015160a0015160020b896020015160020b136112215760c0890151604081015160a0909101516110d89160010b90613cdd565b600290810b60208b0181905260c08b015160a0015190910b8a5260405163986cfba360e01b8152600481019190915260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015611146573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116a9190613958565b604051630724718960e41b815260048101869052602481018590526001600160a01b03919091166044820181905260006064830152915073__$357eccfa53a4e88c122661903e0e603301$__90637247189090608401602060405180830381865af41580156111dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112019190613a0e565b8a60a0018181516112129190613a68565b6001600160801b031690525091505b6f7fffffffffffffffffffffffffffffff8311156112525760405163581a12d760e11b815260040160405180910390fd5b886040015160020b896020015160020b0361128057604051630f4b1dd760e21b815260040160405180910390fd5b505086516020880151604089015160608a015160a0909a0151929a919990985096509094509092509050565b6112b46131d5565b60408051610160810180835284516001600160a01b03908116600090815260208c81528582208189018051600290810b85529183528784208a890151830b8552835287842061022088018952805463ffffffff811688526001600160801b03600160201b90910481166101808a015260018201548082166101a08b0152600160801b900481166101c08a015281840154166101e0890152600301549094166102008701529385529151855163986cfba360e01b8152930b600484015293518184019273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9263986cfba3926024808401938290030181865af41580156113b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d59190613958565b6001600160a01b03168152606085015160405163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af415801561143f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114639190613958565b6001600160a01b03168152604080860151905163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156114cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f19190613958565b6001600160a01b0316815260200173__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3866080015161153e57886040015160010b8960a001516115399190613cdd565b611555565b886040015160010b8960a001516115559190613c95565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015611594573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b89190613958565b6001600160a01b0316815260608086018051600290810b600090815260208c815260409182902082518087018452905480850b825263010000008104850b8284015263ffffffff600160301b90910416818401529086015260019085018190529284019290925260a08901519051608090930192820b910b1461163c57600061164f565b8554600160801b90046001600160801b03165b6001600160801b0316815260200160006001600160801b03168152602001600081525090508060000151602001516001600160801b03166000036116c25760a08301516001600160801b0316156116b95760405163193d143560e11b815260040160405180910390fd5b849150506131cb565b826080015161170257826020015160020b836060015160020b1480156116fd5750600184015460208201516001600160a01b03908116911614155b611734565b826040015160020b836060015160020b1480156117345750600184015460608201516001600160a01b03908116911614155b801561174d57508460a0015160020b836060015160020b145b1561177d576001840154815160a001516001600160a01b0391821691160361177857849150506131cb565b61181e565b805160a001516001600160a01b0316158015906117e6575082608001516117c45780604001516001600160a01b0316816000015160a001516001600160a01b0316116117e6565b80604001516001600160a01b0316816000015160a001516001600160a01b0316105b801561180057508460a0015160020b836060015160020b14155b1561181e57604051638c39242d60e01b815260040160405180910390fd5b826020015160020b836060015160020b12806118475750826040015160020b836060015160020b135b1561186557604051638c39242d60e01b815260040160405180910390fd5b826080015161187857826040015161187e565b82602001515b60020b836060015160020b036118e95780515160a08201516040015163ffffffff9182169116116118c257604051632d59207760e11b815260040160405180910390fd5b82608001516118d957600060e082018190526118e3565b600060c082018190525b50611a22565b600083608001516119225760a082015160209081015160020b6000908152908890526040902054600160301b900463ffffffff16611948565b60a08201515160020b600090815260208890526040902054600160301b900463ffffffff165b82515190915063ffffffff908116908216111561197857604051632d59207760e11b815260040160405180910390fd5b60a08401516001600160801b031615611a205783608001516119cd5781515160a083015160209081015160020b600090815290899052604090205463ffffffff918216600160301b90910490911611156119d0565b60015b151560c083015260808401516119e7576001611a18565b81515160a08301515160020b60009081526020899052604090205463ffffffff918216600160301b90910490911611155b151560e08301525b505b8260800151611a35578260400151611a3b565b82602001515b60020b836060015160020b03611b9257606083018051600290810b600090815260208a90526040808220600101549351830b825290200154670de0b6b3a764000091611aa4916001600160801b03600160801b9283900416916001600160401b03910416613d24565b611aae9190613d43565b606084015160020b600090815260208990526040902060010154611ae29190600160801b90046001600160801b0316613d57565b6001600160801b03908116610100830152606084018051600290810b600090815260208b90526040808220600101549351830b825290200154670de0b6b3a764000092611b4792600160801b90041690600160c01b90046001600160401b0316613d24565b611b519190613d43565b6060840151600290810b600090815260208a9052604090200154611b7e91906001600160801b0316613d57565b6001600160801b03166101208201526121ce565b8260800151611ba5578260200151611bab565b82604001515b60020b836060015160020b14611bc657805160006080909101525b606080840151600290810b600090815260208a81526040808320815160e0810183528154600f81900b82526001600160801b03600160801b91829004811695830195909552600183015480861694830194909452928390048416968101969096529093015490811660808501526001600160401b03928104831660a080860191909152600160c01b90910490921660c08401528351909101516001600160a01b03161580611cc057508460800151611c9e5782604001516001600160a01b0316836000015160a001516001600160a01b031610611cc0565b82604001516001600160a01b0316836000015160a001516001600160a01b0316115b905060008560a001516001600160801b03168860a0015160020b876060015160020b14611cfd5760208401518451611cf89190613a3d565b611d09565b87546001600160801b03165b6001600160801b0316611d1c9190613d57565b90506000670de0b6b3a76400008460a001516001600160401b031685606001516001600160801b0316611d4f9190613d24565b611d599190613d43565b90508084606001818151611d6d9190613a68565b6001600160801b0390811690915260c0860151608087015160009350670de0b6b3a764000092611da7926001600160401b03169116613d24565b611db19190613d43565b90508085608001818151611dc59190613a68565b6001600160801b03169052508315611eca57818661010001818151611dea9190613a3d565b6001600160801b031690525061012086018051829190611e0b908390613a3d565b6001600160801b0390811690915287516020015160a08b015182169116149050611ec55760a08801518651602001518491611e4591613a68565b6001600160801b0316836001600160801b0316611e629190613d24565b611e6c9190613d43565b611e769083613a68565b9150828860a00151876000015160200151611e919190613a68565b6001600160801b0316826001600160801b0316611eae9190613d24565b611eb89190613d43565b611ec29082613a68565b90505b611f43565b8215611f4357828860a001516001600160801b0316836001600160801b0316611ef39190613d24565b611efd9190613d43565b611f079083613a3d565b9150828860a001516001600160801b0316826001600160801b0316611f2c9190613d24565b611f369190613d43565b611f409082613a3d565b90505b60608501516001600160801b0316156120075784606001516001600160801b0316826001600160801b0316670de0b6b3a7640000611f819190613d24565b611f8b9190613d43565b6001600160401b031660a086015260808501516001600160801b031615611ff45784608001516001600160801b0316816001600160801b0316670de0b6b3a7640000611fd79190613d24565b611fe19190613d43565b6001600160401b031660c086015261201d565b670de0b6b3a764000060c086015261201d565b670de0b6b3a764000060a0860181905260c08601525b818560600181815161202f9190613a3d565b6001600160801b031690525060808501805182919061204f908390613a3d565b9150906001600160801b031690816001600160801b031681525050848c60008a6060015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505050505050505b805160a001516001600160a01b03166000036122115782608001516121f75780602001516121fd565b80606001515b81516001600160a01b0390911660a0909101525b826080015161224057806000015160a001516001600160a01b031681604001516001600160a01b031611612262565b806000015160a001516001600160a01b031681604001516001600160a01b0316105b156123bf5760008360800151612307578151602081015160a0909101516040808501519051639026147360e01b815273__$357eccfa53a4e88c122661903e0e603301$__936390261473936122c19391929091906000906004016139dc565b602060405180830381865af41580156122de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123029190613a0e565b612394565b8151602081015160408085015160a0909301519051630724718960e41b815273__$357eccfa53a4e88c122661903e0e603301$__936372471890936123539390926000906004016139dc565b602060405180830381865af4158015612370573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123949190613a0e565b90508082600001516040018181516123ac9190613a3d565b6001600160801b03169052506124299050565b82608001516123ee57806000015160a001516001600160a01b031681604001516001600160a01b031610612410565b806000015160a001516001600160a01b031681604001516001600160a01b0316115b156124295760018401546001600160a01b031660408201525b8460a0015160020b836060015160020b1480156124685750826080015161245457826040015161245a565b82602001515b60020b836060015160020b14155b156129b65760a08301516001600160801b0316156127935782608001516125245760a083015160408083015160018701549151630724718960e41b815273__$357eccfa53a4e88c122661903e0e603301$__936372471890936124de9391926001600160a01b03909116906000906004016139dc565b602060405180830381865af41580156124fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061251f9190613a0e565b6125bb565b60a083015160018501546040808401519051639026147360e01b815273__$357eccfa53a4e88c122661903e0e603301$__9363902614739361257a9391926001600160a01b0390911691906000906004016139dc565b602060405180830381865af4158015612597573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125bb9190613a0e565b815160600180516125cd908390613a3d565b6001600160801b0316905250608083015161267e5760a08301516040808301516001808801549251639026147360e01b815273__$357eccfa53a4e88c122661903e0e603301$__9463902614739461263894919391926001600160a01b0390911691906004016139dc565b602060405180830381865af4158015612655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126799190613a0e565b612712565b60a08301516001808601546040808501519051630724718960e41b815273__$357eccfa53a4e88c122661903e0e603301$__946372471890946126d19491936001600160a01b03909216926004016139dc565b602060405180830381865af41580156126ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127129190613a0e565b81610140018181516127249190613d6e565b90525060a083015184546001600160801b0391821691160361274e5783546001600160801b031684555b60a08301518454859060009061276e9084906001600160801b0316613a68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b6080808201516001600160a01b0316604083015283015161287057805160208101516001860154604084015160a09093015173__$357eccfa53a4e88c122661903e0e603301$__93639026147393926001600160a01b0390811692918116911611612802578460800151612809565b845160a001515b60006040518563ffffffff1660e01b815260040161282a94939291906139dc565b602060405180830381865af4158015612847573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061286b9190613a0e565b61293e565b73__$357eccfa53a4e88c122661903e0e603301$__637247189082600001516020015183604001516001600160a01b0316846000015160a001516001600160a01b0316106128c25783608001516128c9565b835160a001515b60018801546040516001600160e01b031960e086901b1681526128fd9392916001600160a01b0316906000906004016139dc565b602060405180830381865af415801561291a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061293e9190613a0e565b81516040018051612950908390613a3d565b6001600160801b03908116909152825160800151865461297b93509091600160801b90910416613a68565b816101000181815161298d9190613a3d565b6001600160801b0390811690915285548351600160801b909104909116608090910152506129c1565b805160006080909101525b60a08301516001600160801b031615612b16578260800151612a6c5760a083015160408083015160608401519151630724718960e41b815273__$357eccfa53a4e88c122661903e0e603301$__93637247189093612a269391926000906004016139dc565b602060405180830381865af4158015612a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a679190613a0e565b612af7565b73__$357eccfa53a4e88c122661903e0e603301$__63902614738460a001518360200151846040015160006040518563ffffffff1660e01b8152600401612ab694939291906139dc565b602060405180830381865af4158015612ad3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612af79190613a0e565b81516060018051612b09908390613a3d565b6001600160801b03169052505b6101008101516001600160801b031615612cb65761010081015181516020015160405163554d048960e11b81526001600160801b03928316600482015291166024820152600160601b604482015273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bc49190613a0e565b612bcf906001613d6e565b81516040018051612be1908390613a68565b6001600160801b0390811690915261012083015116159050612cb65761012081015181516020015160405163554d048960e11b81526001600160801b03928316600482015291166024820152600160601b604482015273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612c73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c979190613a0e565b81516060018051612ca9908390613a3d565b6001600160801b03169052505b6020850151612ccc9061ffff16620f4240613d86565b62ffffff16816000015160400151620f4240612ce89190613da2565b612cf29190613dd1565b81516001600160801b03919091166040918201526060840151905163986cfba360e01b815260029190910b600482015273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015612d5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d829190613958565b6001600160a01b0316604082015260a08501516060840151600291820b910b14612db0578060400151612dbf565b60018401546001600160a01b03165b81516001600160a01b0391821660a09091015260808201516001860154908216911603612dff57604081015181516001600160a01b0390911660a0909101525b604081015160018501546001600160a01b039081169116148015612e3057508460a0015160020b836060015160020b145b15612e4e57604081015181516001600160a01b0390911660a0909101525b60a08301516001600160801b031615612f8b578260800151612e74578260200151612e7a565b82604001515b60020b836060015160020b14612ead578260800151612ea157600060c08201819052612eab565b600060e082018190525b505b73__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__63dd3fac928888888760800151612edd578760600151612ee3565b87602001515b8860800151612ef6578860400151612efc565b88606001515b8960a001518a608001518960c001518a60e001516040518a63ffffffff1660e01b8152600401612f3499989796959493929190613975565b60006040518083038186803b158015612f4c57600080fd5b505af4158015612f60573d6000803e3d6000fd5b505050508260a001518160000151602001818151612f7e9190613a68565b6001600160801b03169052505b8260800151612fab57826020015160020b836060015160020b1415612fbe565b826040015160020b836060015160020b14155b1561302f5782516001600160a01b031660009081526020898152604080832082870151600290810b855290835281842082880151820b8552909252822080546001600160a01b03199081168255600182019390935590810180546001600160801b0319169055600301805490911690555b826080015161310057805183516001600160a01b03908116600090815260208b815260408083206060808a0151600290810b8652918452828520838b0151830b8652845293829020865181549488015163ffffffff9091166001600160a01b031995861617600160201b6001600160801b03928316021782559287015194870151948316600160801b95841695909502949094176001850155608086015190840180546001600160801b0319169190921617905560a0909301516003820180549094169216919091179091556131c5565b805183516001600160a01b03908116600090815260208b8152604080832082890151600290810b85529083528184206060808b0151830b865290845293829020865181549488015163ffffffff9091166001600160a01b031995861617600160201b6001600160801b03928316021782559287015194870151948316600160801b95841695909502949094176001850155608086015190840180546001600160801b0319169190921617905560a0909301516003820180549094169216919091179091555b50849150505b9695505050505050565b604080516101a081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081019190915290565b6040516101a081016001600160401b038111828210171561327257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171561327257634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b038111828210171561327257634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b038111828210171561327257634e487b7160e01b600052604160045260246000fd5b60ff8116811461331757600080fd5b50565b803561332581613308565b919050565b61ffff8116811461331757600080fd5b80356133258161332a565b8060010b811461331757600080fd5b803561332581613345565b8060020b811461331757600080fd5b80356133258161335f565b63ffffffff8116811461331757600080fd5b803561332581613379565b6001600160801b038116811461331757600080fd5b803561332581613396565b6001600160a01b038116811461331757600080fd5b8035613325816133b6565b60006101a082840312156133e957600080fd5b6133f1613241565b90506133fc8261331a565b815261340a6020830161333a565b602082015261341b60408301613354565b604082015261342c6060830161333a565b606082015261343d6080830161333a565b608082015261344e60a0830161336e565b60a082015261345f60c0830161338b565b60c082015261347060e0830161338b565b60e082015261010061348381840161338b565b9082015261012061349583820161338b565b908201526101406134a78382016133ab565b908201526101606134b98382016133cb565b908201526101806134cb8382016133cb565b9082015292915050565b8035801515811461332557600080fd5b60008060008060008587036102a08112156134ff57600080fd5b86359550602087013594506040870135935061351e88606089016133d6565b925060a06101ff198201121561353357600080fd5b5061353c613278565b61020087013561354b816133b6565b815261022087013561355c8161335f565b60208201526102408701356135708161335f565b604082015261358261026088016134d5565b606082015261028087013561359681613396565b6080820152949793965091945092919050565b805160ff16825260208101516135c5602084018261ffff169052565b5060408101516135da604084018260010b9052565b5060608101516135f0606084018261ffff169052565b506080810151613606608084018261ffff169052565b5060a081015161361b60a084018260020b9052565b5060c081015161363360c084018263ffffffff169052565b5060e081015161364b60e084018263ffffffff169052565b506101008181015163ffffffff908116918401919091526101208083015190911690830152610140808201516001600160801b031690830152610160808201516001600160a01b03908116918401919091526101809182015116910152565b6001600160801b03831681526101c081016136c860208301846135a9565b9392505050565b60008060008060008587036102e08112156136e957600080fd5b86359550602087013594506040870135935061370888606089016133d6565b925060e06101ff198201121561371d57600080fd5b506137266132a8565b610200870135613735816133b6565b81526102208701356137468161335f565b602082015261024087013561375a8161335f565b604082015261026087013561376e8161335f565b6060820152613780610280880161336e565b60808201526137926102a088016134d5565b60a08201526137a46102c088016133ab565b60c0820152809150509295509295909350565b600061026082840312156137ca57600080fd5b6137d26132a8565b82356137dd8161335f565b815260208301356137ed8161335f565b602082015260408301356138008161335f565b604082015260608301356138138161335f565b6060820152613824608084016134d5565b608082015260a083013561383781613396565b60a08201526138498460c085016133d6565b60c08201529392505050565b6000806000806000808688036102e081121561387057600080fd5b87359650602088013595506040880135945061388f8960608a016133d6565b9350610200880135925060c061021f19820112156138ac57600080fd5b506138b56132d8565b6102208801356138c4816133b6565b81526102408801356138d58161335f565b60208201526102608801356138e98161335f565b60408201526102808801356138fd8161335f565b606082015261390f6102a089016134d5565b60808201526102c088013561392381613396565b8060a083015250809150509295509295509295565b6101a0810161394782846135a9565b92915050565b8051613325816133b6565b60006020828403121561396a57600080fd5b81516136c8816133b6565b898152602081018990526102a08101613991604083018a6135a9565b600297880b6101e08301529590960b6102008701526001600160801b039390931661022086015290151561024085015215156102608401521515610280909201919091529392505050565b6001600160801b039490941684526001600160a01b039283166020850152911660408301521515606082015260800190565b600060208284031215613a2057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60006001600160801b03808316818516808303821115613a5f57613a5f613a27565b01949350505050565b60006001600160801b0383811690831681811015613a8857613a88613a27565b039392505050565b898152602081018990526102a08101613aac604083018a6135a9565b8760020b6101e08301528660020b6102008301528560020b6102208301528460020b6102408301526001600160801b0384166102608301528215156102808301529a9950505050505050505050565b805161332581613308565b80516133258161332a565b805161332581613345565b80516133258161335f565b805161332581613379565b805161332581613396565b60006101a08284031215613b5057600080fd5b613b58613241565b613b6183613afb565b8152613b6f60208401613b06565b6020820152613b8060408401613b11565b6040820152613b9160608401613b06565b6060820152613ba260808401613b06565b6080820152613bb360a08401613b1c565b60a0820152613bc460c08401613b27565b60c0820152613bd560e08401613b27565b60e0820152610100613be8818501613b27565b90820152610120613bfa848201613b27565b90820152610140613c0c848201613b32565b90820152610160613c1e84820161394d565b90820152610180613c3084820161394d565b908201529392505050565b60008160020b627fffff198103613c5457613c54613a27565b60000392915050565b634e487b7160e01b600052601260045260246000fd5b60008260020b80613c8657613c86613c5d565b808360020b0791505092915050565b60008160020b8360020b6000811281627fffff1901831281151615613cbc57613cbc613a27565b81627fffff018313811615613cd357613cd3613a27565b5090039392505050565b60008160020b8360020b6000821282627fffff03821381151615613d0357613d03613a27565b82627fffff19038212811615613d1b57613d1b613a27565b50019392505050565b6000816000190483118215151615613d3e57613d3e613a27565b500290565b600082613d5257613d52613c5d565b500490565b600082821015613d6957613d69613a27565b500390565b60008219821115613d8157613d81613a27565b500190565b600062ffffff83811690831681811015613a8857613a88613a27565b60006001600160801b0380831681851681830481118215151615613dc857613dc8613a27565b02949350505050565b60006001600160801b0380841680613deb57613deb613c5d565b9216919091049291505056fea2646970667358221220b2f9459a67c26f70c992203ec6585ea4eac8018e0462a65d8d2bc893ef0d811f64736f6c634300080d0033";

type PositionsConstructorParams =
  | [linkLibraryAddresses: PositionsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Positions__factory extends ContractFactory {
  constructor(...args: PositionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        Positions__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: PositionsLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b52f7ddb7db4526c8b5c81c46a9292f776\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/TickMath.sol:TickMath"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$dc25dd3a5fe6a540f35c01c335c2ccfd23\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/Ticks.sol:Ticks"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Positions> {
    return super.deploy(overrides || {}) as Promise<Positions>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Positions {
    return super.attach(address) as Positions;
  }
  connect(signer: Signer): Positions__factory {
    return super.connect(signer) as Positions__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionsInterface {
    return new utils.Interface(_abi) as PositionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Positions {
    return new Contract(address, _abi, signerOrProvider) as Positions;
  }
}

export interface PositionsLibraryAddresses {
  ["contracts/libraries/TickMath.sol:TickMath"]: string;
  ["contracts/libraries/Ticks.sol:Ticks"]: string;
  ["contracts/libraries/DyDxMath.sol:DyDxMath"]: string;
  ["contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"]: string;
}
