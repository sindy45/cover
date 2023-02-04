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
        internalType: "int24",
        name: "tickSpacing",
        type: "int24",
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
                internalType: "uint24",
                name: "swapFee",
                type: "uint24",
              },
              {
                internalType: "int24",
                name: "tickSpread",
                type: "int24",
              },
              {
                internalType: "uint16",
                name: "twapLength",
                type: "uint16",
              },
              {
                internalType: "uint32",
                name: "lastBlockNumber",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "unlocked",
                type: "uint8",
              },
              {
                internalType: "int24",
                name: "latestTick",
                type: "int24",
              },
              {
                internalType: "uint32",
                name: "accumEpoch",
                type: "uint32",
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
  "0x61326561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c8063021a3af0146100665780632060836a1461009d57806324cfd9df146100bd578063576613d8146100e8578063c92deb3a1461013f575b600080fd5b81801561007257600080fd5b506100866100813660046129d1565b610170565b604051610094929190612af1565b60405180910390f35b8180156100a957600080fd5b506100866100b8366004612b16565b6106c9565b6100d06100cb366004612bf8565b610b5c565b6040516001600160801b039091168152602001610094565b6100fb6100f6366004612c13565b610b9c565b60408051600297880b815295870b602087015293860b93850193909352930b60608301526001600160801b03909216608082015260a081019190915260c001610094565b81801561014b57600080fd5b5061015f61015a366004612ca7565b61126e565b604051610094959493929190612d8a565b600061017a6127d2565b604080516060810180835285516001600160a01b03908116600090815260208c8152858220818a018051600290810b85529183528784208b890151830b855283528784206101008801895280546001600160801b03808216895263ffffffff600160801b928390041660808b0152600183015490971660a08a01529083015480871660c08a01520490941660e08701529385529151855163986cfba360e01b8152930b600484015293518184019273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9263986cfba3926024808401938290030181865af4158015610263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102879190612dcc565b6001600160a01b03168152604080870151905163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156102f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103159190612dcc565b6001600160a01b0316815250905083608001516001600160801b03166000036103455760008592509250506106bf565b80515160808501516001600160801b03918216911611156103795760405163193d143560e11b815260040160405180910390fd5b83606001516103d157836020015160020b8560a0015160020b13806103cc575080516020908101518582015160020b60009081529188905260409091205463ffffffff918216600160301b909104909116115b61041b565b836040015160020b8560a0015160020b128061041b5750805160209081015160408087015160020b6000908152928990529091205463ffffffff918216600160301b909104909116115b1561043957604051632d59207760e11b815260040160405180910390fd5b602084015160408086015160808701516060880151925163691ba6ab60e01b815273__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__9463691ba6ab9461048f948e948e94919290916001908190600401612de9565b60006040518083038186803b1580156104a757600080fd5b505af41580156104bb573d6000803e3d6000fd5b5050505083606001516105555773__$357eccfa53a4e88c122661903e0e603301$__63580680d88560800151836020015184604001516040518463ffffffff1660e01b815260040161050f93929190612e38565b602060405180830381865af415801561052c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105509190612e62565b6105dd565b73__$357eccfa53a4e88c122661903e0e603301$__633a39264c8560800151836020015184604001516040518463ffffffff1660e01b815260040161059c93929190612e38565b602060405180830381865af41580156105b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dd9190612e62565b815160800180516105ef908390612e91565b6001600160801b031690525060808401518151805161060f908390612ebc565b6001600160801b03908116909152915185516001600160a01b03908116600090815260208c81526040808320828b0151600290810b8552908352818420828c0151820b855283529281902085518154938701519089166001600160a01b031994851617600160801b63ffffffff9092168202178255918601516001820180549094169516949094179091556060840151608094850151908716961602949094179301929092555083015191508390505b9550959350505050565b60006106d36127d2565b60408051606080820180845286516001600160a01b03908116600090815260208d81528682208a88018051600290810b8552918352888420968c0151820b84529582528783206101008801895280546001600160801b038082168852600160801b9182900463ffffffff1660808b0152600183015490961660a08a01529082015480861660c08a01520490931660e08701529285529251945163986cfba360e01b815294900b600485015290929082019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156107c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e49190612dcc565b6001600160a01b03168152606086015160405163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af415801561084e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108729190612dcc565b6001600160a01b031681525090508360c001516001600160801b03166000036108a25760008592509250506106bf565b8051516001600160801b03166000036108fb5760c0850151815163ffffffff90911660209091015260a08401516108dd5780602001516108e3565b80604001515b81516001600160a01b039091166040909101526109bc565b8360a0015161095357836040015160020b8560a0015160020b138061094e5750805160209081015160408087015160020b6000908152928990529091205463ffffffff918216600160301b909104909116115b61099e565b836060015160020b8560a0015160020b128061099e57508051602090810151606086015160020b60009081529188905260409091205463ffffffff918216600160301b909104909116115b156109bc57604051632d59207760e11b815260040160405180910390fd5b60208401516040808601516080870151606088015160c089015160a08a01519451633c655abb60e21b8152600481018e9052602481018d9052600296870b604482015293860b606485015291850b608484015290930b60a48201526cffffffffffffffffffffffffff90921660c4830152151560e482015273__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__9063f1956aec906101040160006040518083038186803b158015610a6c57600080fd5b505af4158015610a80573d6000803e3d6000fd5b5050505060c084015181518051610a98908390612e91565b6001600160801b03908116909152915185516001600160a01b03908116600090815260208c81526040808320818b0151600290810b85529083528184206060808d0151830b865290845293829020865181549488015163ffffffff16600160801b9081026001600160a01b0319968716928c16929092179190911782559287015160018201805491909716941693909317909455918401516080909401518616909102929094169190911792019190915550505060c0810151829550959350505050565b6000610b69826002612ee4565b610b76620d89e719612f0f565b610b809190612f47565b610b969062ffffff166001600160801b03612f69565b92915050565b6000806000806000808660c00151602001518760200151610bbd9190612f83565b60020b15610bde576040516347b567bd60e01b815260040160405180910390fd5b8660c00151602001518760400151610bf69190612f83565b60020b15610c1757604051630cda75cf60e41b815260040160405180910390fd5b8660a001516001600160801b0316600003610c4557604051630bc9d91360e21b815260040160405180910390fd5b866040015160020b876020015160020b12610c735760405163119de2e360e21b815260040160405180910390fd5b866080015115610cb4578660c0015160a0015160020b876020015160020b12610caf57604051630f4b1dd760e21b815260040160405180910390fd5b610ce6565b8660c0015160a0015160020b876040015160020b13610ce657604051630f4b1dd760e21b815260040160405180910390fd5b602087015160405163986cfba360e01b815260029190910b600482015260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015610d42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d669190612dcc565b6001600160a01b03169050600073__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba38a604001516040518263ffffffff1660e01b8152600401610db7919060029190910b815260200190565b602060405180830381865af4158015610dd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df89190612dcc565b6001600160a01b0316905073__$357eccfa53a4e88c122661903e0e603301$__63aec6cbfe83838c60800151610e2e5784610e30565b855b8d60800151610e4c578d60a001516001600160801b0316610e4f565b60005b8e60800151610e5f576000610e6e565b8e60a001516001600160801b03165b6040516001600160e01b031960e088901b1681526004810195909552602485019390935260448401919091526064830152608482015260a401602060405180830381865af4158015610ec4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee89190612e62565b9250886080015115611071578860c0015160a0015160020b896040015160020b1261106c5760c0890151602081015160a090910151610f279190612fa5565b600290810b60408b810182905260c08c015160a0015190920b60608c0152905163986cfba360e01b8152600481019190915260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190612dcc565b604051630e8e499360e21b8152600481018690526001600160a01b03919091166024820181905260448201849052915073__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af4158015611028573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104c9190612e62565b8a60a00181815161105d9190612ebc565b6001600160801b031690525090505b6111e6565b8860c0015160a0015160020b896020015160020b136111e65760c0890151602081015160a0909101516110a49190612fed565b600290810b60208b0181905260c08b015160a0015190910b8a5260405163986cfba360e01b8152600481019190915260009073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015611112573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111369190612dcc565b604051630b00d01b60e31b815260048101869052602481018590526001600160a01b039190911660448201819052915073__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af41580156111a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c69190612e62565b8a60a0018181516111d79190612ebc565b6001600160801b031690525091505b6c7fffffffffffffffffffffffff8311156112145760405163581a12d760e11b815260040160405180910390fd5b886040015160020b896020015160020b0361124257604051630f4b1dd760e21b815260040160405180910390fd5b505086516020880151604089015160608a015160a0909a0151929a919990985096509094509092509050565b60008060008061127c6127d2565b60006040518061014001604052808d60008a600001516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6020015160020b60020b815260200190815260200160002060008a6040015160020b60020b81526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016000820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160801b03166001600160801b03166001600160801b03168152505081526020018960000160109054906101000a90046001600160801b03166001600160801b03166001600160e81b0316815260200173__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba38a602001516040518263ffffffff1660e01b815260040161144d919060029190910b815260200190565b602060405180830381865af415801561146a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148e9190612dcc565b6001600160a01b031681526040808a0151905163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156114f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151c9190612dcc565b6001600160a01b03168152606089015160405163986cfba360e01b815260029190910b600482015260209091019073__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015611586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115aa9190612dcc565b6001600160a01b03168152606089810151600290810b600090815260208f8152604080832081518087018352905480860b82526301000000810490950b81840152600160301b90940463ffffffff1684820152908501929092526001918401829052918301526080820181905260a09091018190528151519192506001600160801b0390911690036116875760008760a00151600f0b131561165f5760405163193d143560e11b815260040160405180910390fd5b51606081015160809091015160208801516040890151929750909550935091508790506127c4565b86608001516116b65780608001516001600160a01b03168160000151604001516001600160a01b0316116116d8565b80608001516001600160a01b03168160000151604001516001600160a01b0316105b80156116f257508860a0015160020b876060015160020b14155b1561171057604051638c39242d60e01b815260040160405180910390fd5b866020015160020b876060015160020b12806117395750866040015160020b876060015160020b135b1561175757604051638c39242d60e01b815260040160405180910390fd5b600087608001516117f0578151805160409182015160808501519251630e8e499360e21b815273__$357eccfa53a4e88c122661903e0e603301$__93633a39264c936117aa939092909190600401612e38565b602060405180830381865af41580156117c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117eb9190612e62565b611879565b8151805160808401516040928301519251630b00d01b60e31b815273__$357eccfa53a4e88c122661903e0e603301$__9363580680d893611838939092909190600401612e38565b602060405180830381865af4158015611855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118799190612e62565b8a51909150620f42409061188d9082613034565b61189c9062ffffff1683613052565b6118a69190613071565b825160600180516118b8908390612e91565b6001600160801b03169052505060808701516118d85786604001516118de565b86602001515b60020b876060015160020b03611a745780600001516020015163ffffffff168160a001516040015163ffffffff161161192a57604051632d59207760e11b815260040160405180910390fd5b866080015161194157600060e0820181905261194b565b600060c082018190525b50606087018051600290810b600090815260208e90526040808220600190810154945190930b825290200154670de0b6b3a7640000916119a591600a9190910b90600160b01b900467ffffffffffffffff1660070b613085565b6119af919061310a565b606088015160020b600090815260208d905260409020600101546119d69190600a0b613138565b600f0b610100820152606087018051600290810b600090815260208e90526040808220600101549351830b825290200154670de0b6b3a764000091611a2e91600a9190910b9067ffffffffffffffff1660070b613085565b611a38919061310a565b606088015160020b600090815260208d90526040902060010154611a669190600160581b9004600a0b613138565b600f0b6101208201526120f2565b60008760800151611aad5760a082015160209081015160020b6000908152908c90526040902054600160301b900463ffffffff16611ad3565b60a08201515160020b600090815260208c90526040902054600160301b900463ffffffff165b905081600001516020015163ffffffff168163ffffffff161115611b0a57604051632d59207760e11b815260040160405180910390fd5b60008860a00151600f0b1315611bb7578760800151611b5f57815160209081015160a084015182015160020b6000908152918d905260409091205463ffffffff918216600160301b9091049091161115611b62565b60015b151560c08301526080880151611b79576001611baf565b815160209081015160a08401515160020b6000908152918d905260409091205463ffffffff918216600160301b90910490911611155b151560e08301525b8760800151611bca578760200151611bd0565b87604001515b60020b886060015160020b14611c5857606088015160020b600090815260208d9052604090206001015461010083018051600a9290920b91611c13908390613177565b600f0b905250606088015160020b600090815260208d9052604090206001015461012083018051600160581b909204600a0b91611c51908390613177565b600f0b9052505b876060015160020b8a60a0015160020b036120f0578951620f424090611c7e9082613034565b62ffffff168960800151611d2257835151608085015160018d0154604051630e8e499360e21b815273__$357eccfa53a4e88c122661903e0e603301$__93633a39264c93611cdc93919290916001600160a01b031690600401612e38565b602060405180830381865af4158015611cf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1d9190612e62565b611db4565b83515160018c01546080860151604051630b00d01b60e31b815273__$357eccfa53a4e88c122661903e0e603301$__9363580680d893611d739391926001600160a01b039091169190600401612e38565b602060405180830381865af4158015611d90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db49190612e62565b611dbe91906131bd565b611dc89190612f69565b82516080018051611dda908390612e91565b6001600160801b03169052506080880151600090611e885773__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba38c602001518d60a00151611e209190612fed565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015611e5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e839190612dcc565b611f19565b73__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba38c602001518d60a00151611eb69190612fa5565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015611ef5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f199190612dcc565b6001600160a01b03811660808501528b51909150620f424090611f3c9082613034565b62ffffff168a60800151611fdb5784515160018d0154604051630e8e499360e21b815273__$357eccfa53a4e88c122661903e0e603301$__92633a39264c92611f95926001600160a01b03909116908890600401612e38565b602060405180830381865af4158015611fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd69190612e62565b612065565b84515160018d0154604051630b00d01b60e31b815273__$357eccfa53a4e88c122661903e0e603301$__9263580680d8926120249288916001600160a01b031690600401612e38565b602060405180830381865af4158015612041573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120659190612e62565b61206f91906131bd565b6120799190612f69565b8351606001805161208b908390612e91565b6001600160801b03169052505060a08801516000600f9190910b13156120f05760a088015189548a906000906120cb9084906001600160801b0316612ebc565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b505b60008760a00151600f0b131561223e5786608001516121985773__$357eccfa53a4e88c122661903e0e603301$__63580680d88860a00151836080015184606001516040518463ffffffff1660e01b815260040161215293929190612e38565b602060405180830381865af415801561216f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121939190612e62565b61221f565b60a087015160408083015160808401519151630e8e499360e21b815273__$357eccfa53a4e88c122661903e0e603301$__93633a39264c936121de939192600401612e38565b602060405180830381865af41580156121fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061221f9190612e62565b81516080018051612231908390612e91565b6001600160801b03169052505b6000816101200151600f0b13156123125761012081015181515160405163554d048960e11b81526001600160801b03928316600482015291166024820152600160601b604482015260019073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af41580156122c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e99190612e62565b6122f391906131e3565b81516080018051612305908390612e91565b6001600160801b03169052505b6000816101000151600f0b121561241c578851620f4240906123349082613034565b62ffffff1673__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912846101000151612362906131fa565b85515160405160e084901b6001600160e01b03191681526001600160801b03928316600482015291166024820152600160601b6044820152606401602060405180830381865af41580156123ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123de9190612e62565b6123e9906001613217565b6123f391906131bd565b6123fd9190612f69565b8151606001805161240f908390612ebc565b6001600160801b03169052505b8860a0015160020b876060015160020b1461243b57806080015161244a565b60018801546001600160a01b03165b81516001600160a01b0390911660409091015260a08701516000600f9190910b1315612592578660800151612483578660200151612489565b86604001515b60020b876060015160020b146124bc5786608001516124b057600060c082018190526124ba565b600060e082018190525b505b73__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__63691ba6ab8c8c8a608001516124eb578a606001516124f1565b8a602001515b8b60800151612504578b6040015161250a565b8b606001515b8c60a001518d608001518860c001518960e001516040518963ffffffff1660e01b8152600401612541989796959493929190612de9565b60006040518083038186803b15801561255957600080fd5b505af415801561256d573d6000803e3d6000fd5b5050505060a087015181518051612585908390612ebc565b6001600160801b03169052505b86608001516125b257866020015160020b876060015160020b14156125c5565b866040015160020b876060015160020b14155b156126205786516001600160a01b0316600090815260208d81526040808320828b0151600290810b8552908352818420828c0151820b8552909252822080546001600160a01b03199081168255600182018054909116905501555b86608001516126cf57805187516001600160a01b03908116600090815260208f815260408083206060808e0151600290810b8652918452828520838f0151830b8652845293829020865181549488015163ffffffff16600160801b9081026001600160a01b03199687166001600160801b039384161717835593880151600183018054919098169516949094179095559285015160809095015182160293169290921791810191909155612772565b805187516001600160a01b03908116600090815260208f81526040808320828d0151600290810b85529083528184206060808f0151830b865290845293829020865181549488015163ffffffff16600160801b9081026001600160a01b03199687166001600160801b0393841617178355938801516001830180549190981695169490941790955592850151608090950151821602931692909217918101919091555b50806000015160600151816000015160800151886080015161279857886060015161279e565b88602001515b89608001516127b15789604001516127b7565b89606001515b8c95509550955095509550505b965096509650965096915050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b60405160e0810167ffffffffffffffff8111828210171561283f57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff8111828210171561283f57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561283f57634e487b7160e01b600052604160045260246000fd5b8035600281900b81146128b957600080fd5b919050565b803561ffff811681146128b957600080fd5b803563ffffffff811681146128b957600080fd5b803560ff811681146128b957600080fd5b600060e0828403121561290757600080fd5b61290f61280e565b9050813562ffffff8116811461292457600080fd5b8152612932602083016128a7565b6020820152612943604083016128be565b6040820152612954606083016128d0565b6060820152612965608083016128e4565b608082015261297660a083016128a7565b60a082015261298760c083016128d0565b60c082015292915050565b6001600160a01b03811681146129a757600080fd5b50565b803580151581146128b957600080fd5b80356001600160801b03811681146128b957600080fd5b60008060008060008587036101e08112156129eb57600080fd5b863595506020870135945060408701359350612a0a88606089016128f5565b925060a061013f1982011215612a1f57600080fd5b50612a28612845565b610140870135612a3781612992565b8152612a4661016088016128a7565b6020820152612a5861018088016128a7565b6040820152612a6a6101a088016129aa565b6060820152612a7c6101c088016129ba565b6080820152809150509295509295909350565b62ffffff8151168252602081015160020b602083015261ffff6040820151166040830152606081015163ffffffff808216606085015260ff608084015116608085015260a083015160020b60a08501528060c08401511660c085015250505050565b6001600160801b03831681526101008101612b0f6020830184612a8f565b9392505050565b6000806000806000858703610220811215612b3057600080fd5b863595506020870135945060408701359350612b4f88606089016128f5565b925060e061013f1982011215612b6457600080fd5b50612b6d61280e565b610140870135612b7c81612992565b8152612b8b61016088016128a7565b6020820152612b9d61018088016128a7565b6040820152612baf6101a088016128a7565b6060820152612bc16101c088016128a7565b6080820152612bd36101e088016129aa565b60a0820152612be561020088016129ba565b60c0820152809150509295509295909350565b600060208284031215612c0a57600080fd5b612b0f826128a7565b60006101a08284031215612c2657600080fd5b612c2e61280e565b612c37836128a7565b8152612c45602084016128a7565b6020820152612c56604084016128a7565b6040820152612c67606084016128a7565b6060820152612c78608084016129aa565b6080820152612c8960a084016129ba565b60a0820152612c9b8460c085016128f5565b60c08201529392505050565b600080600080600080868803610220811215612cc257600080fd5b873596506020880135955060408801359450612ce18960608a016128f5565b9350610140880135925060c061015f1982011215612cfe57600080fd5b50612d07612876565b610160880135612d1681612992565b8152612d2561018089016128a7565b6020820152612d376101a089016128a7565b6040820152612d496101c089016128a7565b6060820152612d5b6101e089016129aa565b608082015261020088013580600f0b8114612d7557600080fd5b8060a083015250809150509295509295509295565b6001600160801b03868116825285166020820152600284810b604083015283900b60608201526101608101612dc26080830184612a8f565b9695505050505050565b600060208284031215612dde57600080fd5b8151612b0f81612992565b9788526020880196909652600294850b60408801529290930b60608601526cffffffffffffffffffffffffff16608085015290151560a0840152151560c0830152151560e08201526101000190565b6001600160801b039390931683526001600160a01b03918216602084015216604082015260600190565b600060208284031215612e7457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60006001600160801b03808316818516808303821115612eb357612eb3612e7b565b01949350505050565b60006001600160801b0383811690831681811015612edc57612edc612e7b565b039392505050565b600062ffffff80831681851681830481118215151615612f0657612f06612e7b565b02949350505050565b60008160020b627fffff198103612f2857612f28612e7b565b60000392915050565b634e487b7160e01b600052601260045260246000fd5b600062ffffff80841680612f5d57612f5d612f31565b92169190910492915050565b60006001600160801b0380841680612f5d57612f5d612f31565b60008260020b80612f9657612f96612f31565b808360020b0791505092915050565b60008160020b8360020b6000811281627fffff1901831281151615612fcc57612fcc612e7b565b81627fffff018313811615612fe357612fe3612e7b565b5090039392505050565b60008160020b8360020b6000821282627fffff0382138115161561301357613013612e7b565b82627fffff1903821281161561302b5761302b612e7b565b50019392505050565b600062ffffff808316818516808303821115612eb357612eb3612e7b565b600081600019048311821515161561306c5761306c612e7b565b500290565b60008261308057613080612f31565b500490565b60006001600160ff1b03818413828413808216868404861116156130ab576130ab612e7b565b600160ff1b60008712828116878305891216156130ca576130ca612e7b565b600087129250878205871284841616156130e6576130e6612e7b565b878505871281841616156130fc576130fc612e7b565b505050929093029392505050565b60008261311957613119612f31565b600160ff1b82146000198414161561313357613133612e7b565b500590565b60008083128015600160ff1b85018412161561315657613156612e7b565b6001600160ff1b038401831381161561317157613171612e7b565b50500390565b600081600f0b83600f0b600082128260016001607f1b03038213811516156131a1576131a1612e7b565b8260016001607f1b031903821281161561302b5761302b612e7b565b60006001600160801b0380831681851681830481118215151615612f0657612f06612e7b565b6000828210156131f5576131f5612e7b565b500390565b600081600f0b60016001607f1b03198103612f2857612f28612e7b565b6000821982111561322a5761322a612e7b565b50019056fea264697066735822122000d76a3846043647bd953773fc7c0014108c0f44adcd25d6b7da5f499e8694fd64736f6c634300080d0033";

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
