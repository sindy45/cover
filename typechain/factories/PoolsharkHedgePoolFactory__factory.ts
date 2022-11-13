/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolsharkHedgePoolFactory,
  PoolsharkHedgePoolFactoryInterface,
} from "../PoolsharkHedgePoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_concentratedFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FeeTierNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "IdenticalTokenAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "PoolAlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "tickSpacing",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "concentratedFactory",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "destToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "createHedgePool",
    outputs: [
      {
        internalType: "address",
        name: "book",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "feeTierTickSpacing",
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
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "destToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "getHedgePool",
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
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolList",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "poolMapping",
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
  "0x608060405234801561001057600080fd5b50604051613e57380380613e5783398101604081905261002f91610062565b60018054336001600160a01b031991821617909155600280549091166001600160a01b0392909216919091179055610092565b60006020828403121561007457600080fd5b81516001600160a01b038116811461008b57600080fd5b9392505050565b613db6806100a16000396000f3fe60806040523480156200001157600080fd5b5060043610620000875760003560e01c80638da5cb5b11620000625780638da5cb5b1462000100578063a299bffd1462000114578063e43a8de41462000146578063fb948c94146200015d57600080fd5b80632a48235b146200008c5780634f3d4c9e14620000c0578063786570c214620000ec575b600080fd5b620000a36200009d36600462000766565b62000174565b6040516001600160a01b0390911681526020015b60405180910390f35b620000a3620000d136600462000766565b6003602052600090815260409020546001600160a01b031681565b600254620000a3906001600160a01b031681565b600154620000a3906001600160a01b031681565b620001376200012536600462000766565b60006020819052908152604090205481565b604051908152602001620000b7565b620000a36200015736600462000799565b6200019f565b620000a36200016e36600462000799565b62000626565b600481815481106200018557600080fd5b6000918252602090912001546001600160a01b0316905081565b6000826001600160a01b0316846001600160a01b031603620001d45760405163e16fb02360e01b815260040160405180910390fd5b6000836001600160a01b0316856001600160a01b031610620001f75783620001f9565b845b90506000846001600160a01b0316866001600160a01b0316106200021e578562000220565b845b9050816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000261573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002879190620007df565b60ff16600003620002df5760405162461bcd60e51b815260206004820181905260248201527f4552524f523a20746f6b656e3020646563696d616c7320617265207a65726f2e60448201526064015b60405180910390fd5b806001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200031e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003449190620007df565b60ff16600003620003985760405162461bcd60e51b815260206004820181905260248201527f4552524f523a20746f6b656e3120646563696d616c7320617265207a65726f2e6044820152606401620002d6565b604080516001600160a01b0380851660208301528316918101919091526060810185905260009060800160408051601f198184030181529181528151602092830120600081815260039093529120549091506001600160a01b0316156200041257604051630188c99160e11b815260040160405180910390fd5b6002546040516307b12f2760e41b815262ffffff871660048201526000916001600160a01b031690637b12f27090602401602060405180830381865afa15801562000461573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200048791906200080b565b90508060020b600003620004ae576040516303312a0160e11b815260040160405180910390fd5b6000620004bd858589620006cb565b604080513060208201526001600160a01b03808416928201929092528188166060820152908616608082015262ffffff808a1660a0830152841660c082015290915060009060e001604051602081830303815290604052604051620005229062000758565b6200052e919062000830565b604051809103906000f0801580156200054b573d6000803e3d6000fd5b5060008581526003602052604080822080546001600160a01b03808d166001600160a01b0319928316179092556004805460018101825594527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90930180548286169416939093179092555191925062ffffff8a1691878216918916907f4470e1086434f3ba8e48450a0f722677d8a6c05ce78da5f7da84b9a0abdc60af9062000611908890879062ffffff9290921682526001600160a01b0316602082015260400190565b60405180910390a45050505050509392505050565b600080836001600160a01b0316856001600160a01b0316106200064a57836200064c565b845b90506000846001600160a01b0316866001600160a01b03161062000671578562000673565b845b604080516001600160a01b039485166020808301919091529285168183015260608082019790975281518082039097018752608001815285519582019590952060009081526003909152939093205416949350505050565b600254604051630b4c774160e11b81526001600160a01b038581166004830152848116602483015262ffffff841660448301526000921690631698ee8290606401602060405180830381865afa1580156200072a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000750919062000888565b949350505050565b6134d880620008a983390190565b6000602082840312156200077957600080fd5b5035919050565b6001600160a01b03811681146200079657600080fd5b50565b600080600060608486031215620007af57600080fd5b8335620007bc8162000780565b92506020840135620007ce8162000780565b929592945050506040919091013590565b600060208284031215620007f257600080fd5b815160ff811681146200080457600080fd5b9392505050565b6000602082840312156200081e57600080fd5b81518060020b81146200080457600080fd5b600060208083528351808285015260005b818110156200085f5785810183015185820160400152820162000841565b8181111562000872576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156200089b57600080fd5b815162000804816200078056fe6101606040523480156200001257600080fd5b50604051620034d8380380620034d8833981016040819052620000359162000890565b6000806000806000808680602001905181019062000054919062000981565b95509550955095509550955060006001600160a01b0316846001600160a01b031614806200008a57506001600160a01b03841630145b15620000a95760405163c1ab6dc160e01b815260040160405180910390fd5b6001600160a01b0383161580620000c857506001600160a01b03831630145b15620000e75760405163c1ab6dc160e01b815260040160405180910390fd5b61271062ffffff83161115620001105760405163da7459b760e01b815260040160405180910390fd5b6001600160a01b0380871660e081905286821661010052858216610120529084166101405262ffffff80841660a052821660805260408051638da5cb5b60e01b81529051638da5cb5b916004808201926020929091908290030181865afa15801562000180573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a6919062000a0d565b600180546001600160a01b0319166001600160a01b0392909216919091179055604051636e23d2e160e11b815262ffffff8216600482015273__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__9063dc47a5c290602401602060405180830381865af41580156200021b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000241919062000a34565b6001600160801b031660c052610100516200025c9062000370565b600a805462ffffff92909216600160a01b0262ffffff60a01b19909216919091179055610100516200028e9062000370565b600a60176101000a81548162ffffff021916908360020b62ffffff160217905550620002d4600a60149054906101000a900460020b620004f960201b620016641760201c565b600960006101000a8154816001600160a01b0302191690836001600160a01b031602179055506200031f600a60179054906101000a900460020b620004f960201b620016641760201c565b600a80546001600160a01b0319166001600160a01b03929092169190911790555050600160005550506003805463ffffffff60a01b1916600160a01b4263ffffffff16021790555062000d74915050565b6040805160038082526080820190925260009182919060208201606080368337019050509050600081600081518110620003ae57620003ae62000a5f565b63ffffffff90921660209283029190910190910152620003d16005600c62000a8b565b61ffff1681600181518110620003eb57620003eb62000a5f565b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526000906001600160a01b0385169063883bdbfd906200043190859060040162000ab8565b600060405180830381865afa1580156200044f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000479919081019062000b9c565b5090508160018151811062000492576200049262000a5f565b602002602001015160030b81600181518110620004b357620004b362000a5f565b602002602001015182600081518110620004d157620004d162000a5f565b6020026020010151620004e5919062000c74565b620004f1919062000ce0565b949350505050565b60008060008360020b1262000512578260020b62000521565b8260020b620005219062000d30565b905062000532620d89e71962000d4f565b62ffffff168111156200055857604051633e1f710360e21b815260040160405180910390fd5b6000816001166000036200057157600160801b62000583565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b031690506002821615620005ae576ffff97272373d413259a46990580e213a0260801c5b6004821615620005ce576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615620005ee576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156200060e576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156200062e576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156200064e576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156200066e576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156200068f576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615620006b0576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615620006d1576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615620006f2576fe7159475a2c29b7443b29c7fa6e889d90260801c5b61100082161562000713576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161562000734576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161562000755576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161562000776576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161562000798576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615620007b9576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615620007d9576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615620007f7576b048a170391f7dc42444e8fa20260801c5b60008460020b13156200081c57806000198162000818576200081862000cca565b0490505b6401000000008106156200083257600162000835565b60005b60ff16602082901c0192505050919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000888576200088862000847565b604052919050565b60006020808385031215620008a457600080fd5b82516001600160401b0380821115620008bc57600080fd5b818501915085601f830112620008d157600080fd5b815181811115620008e657620008e662000847565b620008fa601f8201601f191685016200085d565b915080825286848285010111156200091157600080fd5b60005b818110156200093157838101850151838201860152840162000914565b81811115620009435760008583850101525b50909695505050505050565b6001600160a01b03811681146200096557600080fd5b50565b805162ffffff811681146200097c57600080fd5b919050565b60008060008060008060c087890312156200099b57600080fd5b8651620009a8816200094f565b6020880151909650620009bb816200094f565b6040880151909550620009ce816200094f565b6060880151909450620009e1816200094f565b9250620009f16080880162000968565b915062000a0160a0880162000968565b90509295509295509295565b60006020828403121562000a2057600080fd5b815162000a2d816200094f565b9392505050565b60006020828403121562000a4757600080fd5b81516001600160801b038116811462000a2d57600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600061ffff8083168185168183048111821515161562000aaf5762000aaf62000a75565b02949350505050565b6020808252825182820181905260009190848201906040850190845b818110156200094357835163ffffffff168352928401929184019160010162000ad4565b60006001600160401b0382111562000b145762000b1462000847565b5060051b60200190565b600082601f83011262000b3057600080fd5b8151602062000b4962000b438362000af8565b6200085d565b82815260059290921b8401810191818101908684111562000b6957600080fd5b8286015b8481101562000b9157805162000b83816200094f565b835291830191830162000b6d565b509695505050505050565b6000806040838503121562000bb057600080fd5b82516001600160401b038082111562000bc857600080fd5b818501915085601f83011262000bdd57600080fd5b8151602062000bf062000b438362000af8565b82815260059290921b8401810191818101908984111562000c1057600080fd5b948201945b8386101562000c415785518060060b811462000c315760008081fd5b8252948201949082019062000c15565b9188015191965090935050508082111562000c5b57600080fd5b5062000c6a8582860162000b1e565b9150509250929050565b60008160060b8360060b6000811281667fffffffffffff190183128115161562000ca25762000ca262000a75565b81667fffffffffffff01831381161562000cc05762000cc062000a75565b5090039392505050565b634e487b7160e01b600052601260045260246000fd5b60008160060b8360060b8062000d0657634e487b7160e01b600052601260045260246000fd5b667fffffffffffff1982146000198214161562000d275762000d2762000a75565b90059392505050565b6000600160ff1b820162000d485762000d4862000a75565b5060000390565b60008160020b627fffff19810362000d6b5762000d6b62000a75565b60000392915050565b60805160a05160c05160e0516101005161012051610140516126b462000e2460003960008181610ba301528181610bca01528181610cc40152818161143d015281816116340152611eda015260008181610bf401528181610c7301528181610c9a015281816114150152818161159d0152611eaf0152600050506000505060006121e701526000610a0c015260008181611f0401528181611f5101528181611fa60152611ff301526126b46000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639da1209611610097578063caa4b46a11610066578063caa4b46a14610309578063cf78756b14610331578063f30dba931461033a578063fb5d80b31461043f57600080fd5b80639da12096146102b1578063a34123a7146102ba578063adc07262146102ed578063b0112bec146102f657600080fd5b8063786570c2116100d3578063786570c2146102105780637cd4ec0f1461023b57806387d4e1e91461024e5780638c347f9b1461026857600080fd5b806304c17d2f14610105578063147fd2a1146101a257806362f58f11146101b95780636d59d802146101e4575b600080fd5b6101676101133660046122a1565b600c6020908152600094855260408086208252938552838520815291845282842090915282529020805460018201546002928301546001600160801b039283169391929181900b9163010000009091041684565b604080516001600160801b039586168152602081019490945260029290920b9183019190915290911660608201526080015b60405180910390f35b6101ab60075481565b604051908152602001610199565b6002546101cc906001600160801b031681565b6040516001600160801b039091168152602001610199565b600354604080516001600160a01b0383168152600160a01b90920463ffffffff16602083015201610199565b600d54610223906001600160a01b031681565b6040516001600160a01b039091168152602001610199565b6101ab6102493660046122fd565b61045b565b6002546101cc90600160801b90046001600160801b031681565b600954600a54604080516001600160a01b0393841681529282166020840152600160a01b8204600290810b91840191909152600160b81b909104900b6060820152608001610199565b6101ab60045481565b6102cd6102c836600461235c565b610d47565b604080519485526020850193909352918301526060820152608001610199565b6101ab60065481565b6101ab6103043660046123a3565b610fa7565b61031161151b565b604080516001600160801b03938416815292909116602083015201610199565b6101ab60055481565b6103c8610348366004612476565b600b60205260009081526040902080546001820154600280840154600385015460048601546005870154600688015460079098015487860b986301000000890490960b976001600160801b03600160301b90910481169780821697600160801b9091048216969091169493926001600160a01b039081169291811691168b565b6040805160029c8d0b81529a909b0b60208b01526001600160801b039889169a8a019a909a52958716606089015293861660808801529490911660a086015260c085015260e08401929092526001600160a01b03918216610100840152811661012083015290911661014082015261016001610199565b6008546001600160801b0380821691600160801b900416610311565b6000805460020361047f576040516303cb96db60e21b815260040160405180910390fd5b600260005561048d8261199a565b6000604051806101200160405280600081526020016000815260200160008152602001866104bd576004546104c1565b6005545b8152602001866104d3576005546104d7565b6004545b8152602001866104f2576009546001600160a01b03166104ff565b600a546001600160a01b03165b81526020018661051a576002546001600160801b031661052e565b600254600160801b90046001600160801b03165b81526020018581526020018661055057600a54600160b81b900460020b61055e565b600a54600160a01b900460020b5b60020b81525090506105738160c001516119f4565b60e081015115610a9f57600061058d826101000151611664565b6001600160a01b0316905080600080881561080657866001600160a01b03168310156105c057866001600160a01b031692505b60006105d78660c00151858860a001516000611a7a565b9050808660e001511161070557600060608760c00151901b9050600061061f828960a001518a60e001518b60a0015161061091906124a9565b61061a90866124c8565b611ad4565b905080861115801561063457508760a0015181105b61067257610666828960e001518a60a001518561065191906124f6565b61065b91906124c8565b808204910615150190565b6001600160a01b031690505b6106878860c00151828a60a001516000611b12565b60a0890182905260e08901516101008a015160020b6000908152600b60205260409020805492975090916006906106cf908490600160301b90046001600160801b031661250a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060008860e001818152505050506107a7565b61071a8660c00151858860a001516000611b12565b60a08701859052925084840361072f57600191505b600a54600160a01b900460020b6000908152600b60205260409020805482919060069061076d908490600160301b90046001600160801b031661250a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550808660e0018181516107a39190612535565b9052505b610100860151600290810b6000908152600b6020526040812090910180548592906107dc9084906001600160801b031661254c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050610a06565b866001600160a01b031683111561082457866001600160a01b031692505b600061083b8660c001518760a00151866000611b12565b9050808660e00151116109085760006108618760e00151600160601b8960c00151611b45565b8760a0015161087091906124c8565b90506108878760c001518860a00151836000611a7a565b60a0880182905260e0880151600a54600160a01b900460020b6000908152600b60205260409020805492965090916006906108d3908490600160301b90046001600160801b031661250a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060008760e0018181525050506109a3565b61091d8660c001518760a00151866000611a7a565b60a08701859052925084840361093257600191505b600a54600160a01b900460020b6000908152600b6020526040812060010180548392906109699084906001600160801b031661250a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550808660e00181815161099f9190612535565b9052505b61010086015160020b6000908152600b6020526040902060010180548491906010906109e0908490600160801b90046001600160801b031661254c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505b610a45827f00000000000000000000000000000000000000000000000000000000000000008760c0015188602001518a8a604001518b60600151611bf7565b60608901526040880152602087019190915295508015610a8d578460c00151600003610a8857610a79856101000151611664565b6001600160a01b031660a08601525b610a96565b50505050610a9f565b50505050610573565b8415610b2d5760a0810151600a80546001600160a01b0319166001600160a01b03909216919091179081905561010082015190600282810b600160b81b909204900b14610b2757600a805462ffffff8316600160b81b0262ffffff60b81b1990911617905560c0820151600280546001600160801b03928316600160801b0292169190911790555b50610b84565b60a0810151600980546001600160a01b039092166001600160a01b0319909216919091179055610100810151600290810b600052600b60205260c082015181546001600160801b03918216600160801b0291161790555b610b978582606001518360400151611c64565b8415610c6d57610bc8867f000000000000000000000000000000000000000000000000000000000000000084611ce5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316876001600160a01b03167fcd3829a3813dc3cdd188fd3d01dcf3268c16be2fdd2dd21d0665418816e460628786604051610c60929190918252602082015260400190565b60405180910390a4610d39565b610c98867f000000000000000000000000000000000000000000000000000000000000000084611ce5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316876001600160a01b03167fcd3829a3813dc3cdd188fd3d01dcf3268c16be2fdd2dd21d0665418816e460628786604051610d30929190918252602082015260400190565b60405180910390a45b506001600055949350505050565b600080600080600054600203610d70576040516303cb96db60e21b815260040160405180910390fd5b60026000908155610d8088611664565b90506000610d8d88611664565b6009546002549192506001600160a01b031690610db2906001600160801b03166119f4565b806001600160a01b0316836001600160a01b031611158015610de55750816001600160a01b0316816001600160a01b0316105b15610e0d57600280546001600160801b038082168b9003166001600160801b03199091161790555b610e3f836001600160a01b0316836001600160a01b0316836001600160a01b03168b6001600160801b03166000611e3a565b6001600160801b0391821698508116965060016001607f1b039089161115610e7a57604051631a93c68960e11b815260040160405180910390fd5b868501868501610e8b338383611ea9565b600a54604051630487c38360e21b8152600b600482015260028e810b60248301528d810b60448301526001600160801b038d166064830152600160a01b90920490910b608482015273__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__9063121f0e0c9060a401602060405180830381865af4158015610f0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f339190612574565b600a805462ffffff92909216600160a01b0262ffffff60a01b19909216919091179055604080518381526020810183905233917f49995e5dd6158cf69ad3e9777c46755a1a826a446c6416992167462dad033b2a910160405180910390a25050505050600160008190555093509350935093565b60008054600203610fcb576040516303cb96db60e21b815260040160405180910390fd5b600260005560208201516060830151610fe49190611eff565b60808201516001600160801b031615801561100a575060a08201516001600160801b0316155b156110285760405163673f032f60e11b815260040160405180910390fd5b816060015160020b826020015160020b126110565760405163673f032f60e11b815260040160405180910390fd5b60006110658360200151611664565b6001600160a01b03169050600061107f8460600151611664565b6001600160a01b031690506000808560c001511561129d576009546001600160a01b031691508184116110c55760405163673f032f60e11b815260040160405180910390fd5b85608001516001600160801b03166000036110f35760405163673f032f60e11b815260040160405180910390fd5b50608085015160405163576365ff60e11b8152600481018590526024810184905260448101839052600060648201526001600160801b039091166084820152829073__$357eccfa53a4e88c122661903e0e603301$__9063aec6cbfe9060a401602060405180830381865af4158015611170573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111949190612591565b600480546005546003548a5160208c01516040808e015160608f0151600a5492516371cd87b360e11b8152600b99810199909952602489019790975260448801959095526001600160a01b039384166064880152600292830b608488015290820b60a487015292810b60c486015292830b60e48501526001600160801b038516610104850152600160a01b90910490910b610124830152841661014482015290955073__$dc25dd3a5fe6a540f35c01c335c2ccfd23$__9063e39b0f669061016401602060405180830381865af4158015611273573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112979190612574565b5061139d565b600a546001600160a01b031691508183106112cb5760405163673f032f60e11b815260040160405180910390fd5b8560a001516001600160801b03166000036112f95760405163673f032f60e11b815260040160405180910390fd5b5060a085015160405163576365ff60e11b81526004810185905260248101849052604481018490526001600160801b03909116606482015260006084820152839073__$357eccfa53a4e88c122661903e0e603301$__9063aec6cbfe9060a401602060405180830381865af4158015611376573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139a9190612591565b94505b60016001607f1b038511156113c557604051631a93c68960e11b815260040160405180910390fd5b6000806113d68686858a6001611e3a565b915091506000806113f9338b602001518c606001518d60c001518d600080612045565b60e08c01516040516314f83a8960e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f00000000000000000000000000000000000000000000000000000000000000001660248201526001600160801b0380891660448301528716606482015290151560848201529193509150339063a7c1d4489060a401600060405180830381600087803b1580156114ab57600080fd5b505af11580156114bf573d6000803e3d6000fd5b5050604080516001600160801b038089168252871660208201523393507f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f92500160405180910390a25050600160005550949695505050505050565b600080600054600203611541576040516303cb96db60e21b815260040160405180910390fd5b600260005560085460016001600160801b0390911611156115cb57600854611574906001906001600160801b031661254c565b600880546001600160801b0319166001908117909155549092506115cb906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160801b038516611ce5565b6008546001600160801b9091046001600160801b0316111561165b5760085461160690600190600160801b90046001600160801b031661254c565b600880546001600160801b03908116600160801b1790915560015491925061165b916001600160a01b0316907f0000000000000000000000000000000000000000000000000000000000000000908416611ce5565b60016000559091565b60008060008360020b1261167b578260020b611688565b8260020b611688906125aa565b9050611697620d89e7196125c6565b62ffffff168111156116bc57604051633e1f710360e21b815260040160405180910390fd5b6000816001166000036116d357600160801b6116e5565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611719576ffff97272373d413259a46990580e213a0260801c5b6004821615611738576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611757576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611776576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611795576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156117b4576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156117d3576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156117f3576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611813576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611833576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615611853576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611873576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611893576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156118b3576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156118d3576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156118f4576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611914576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611933576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611950576b048a170391f7dc42444e8fa20260801c5b60008460020b131561197157806000198161196d5761196d6124e0565b0490505b640100000000810615611985576001611988565b60005b60ff16602082901c0192505050919050565b6401000276a36001600160a01b03821610806119d3575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03821610155b156119f157604051636e4ba61d60e01b815260040160405180910390fd5b50565b600354600160a01b900463ffffffff16428181039114801590611a175750600082115b15611a76576003805463ffffffff60a01b1916600160a01b4263ffffffff160217905581608082901b81611a4d57611a4d6124e0565b600380546001600160a01b03198116939092046001600160a01b03928316019091169190911790555b5050565b60008115611aa957611aa2611a96606087901b86860386611ad4565b85808204910615150190565b9050611acc565b83611abb606087901b86860386611b45565b81611ac857611ac86124e0565b0490505b949350505050565b6000611ae1848484611b45565b90508180611af157611af16124e0565b83850915611b0b576000198110611b0757600080fd5b6001015b9392505050565b60008115611b2b57611aa285858503600160601b611ad4565b611b3c85858503600160601b611b45565b95945050505050565b6000808060001985870985870292508281108382030391505080600003611b7e5760008411611b7357600080fd5b508290049050611b0b565b808411611b8a57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000806000806000611c128c8c62ffffff16620f4240611ad4565b9050611c1e818a6124c8565b9850611c2a818d612535565b611c3490896124c8565b9750611c4581600160801b8c611b45565b611c4f90876124c8565b989c979b509599509697509495505050505050565b8215611cbd57600582905560088054829190601090611c94908490600160801b90046001600160801b031661250a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600482905560088054829190600090611c949084906001600160801b031661250a565b505050565b6001600160a01b038216611d665780471015611d2a5760405163291e1d5560e11b81523060048201526001600160a01b03841660248201526044015b60405180910390fd5b6040516001600160a01b0384169082156108fc029083906000818181858888f19350505050158015611d60573d6000803e3d6000fd5b50505050565b60405163a9059cbb60e01b81526001600160a01b0384811660048301526024820183905283919082169063a9059cbb906044016020604051808303816000875af1158015611db8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ddc91906125e8565b5060003d8015611df75760208114611e005760009150611e0c565b60019150611e0c565b60206000803e60005191505b5080611e335760405163291e1d5560e11b8152306004820152336024820152604401611d21565b5050505050565b600080848611611e5f57611e58611e5385898987611b12565b61223e565b9050611e9f565b868511611e7c57611e75611e5385898987611a7a565b9150611e9f565b611e8b611e5385878987611a7a565b9150611e9c611e5385898887611b12565b90505b9550959350505050565b611ed4837f000000000000000000000000000000000000000000000000000000000000000084611ce5565b611ce0837f000000000000000000000000000000000000000000000000000000000000000083611ce5565b611f297f000000000000000000000000000000000000000000000000000000000000000083612605565b60020b15611f4a576040516333a3bdff60e21b815260040160405180910390fd5b6002611f767f000000000000000000000000000000000000000000000000000000000000000084612627565b611f809190612605565b60020b15611fa157604051637ef8a10160e11b815260040160405180910390fd5b611fcb7f000000000000000000000000000000000000000000000000000000000000000082612605565b60020b15611fec576040516333a3bdff60e21b815260040160405180910390fd5b60026120187f000000000000000000000000000000000000000000000000000000000000000083612627565b6120229190612605565b60020b600003611a765760405163a9778c6360e01b815260040160405180910390fd5b6001600160a01b0387166000908152600c6020908152604080832060028a810b85529083528184209089900b8452825280832087158015855292528220829182906120b557506001810154600285900b6000908152600b60205260409020600401541160055460018301556120dc565b506001810154600285900b6000908152600b60205260409020600301541160045460018301555b60006120e78b611664565b6001600160a01b0316905060006120fd8b611664565b6001600160a01b03169050600061211388611664565b85546001600160a01b039190911691506000908190612141908690869086906001600160801b031685611e3a565b9150915060008c600f0b121561219a5761215a8c612661565b875488906000906121759084906001600160801b031661254c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b60008c600f0b131561222b5786548c9088906000906121c39084906001600160801b031661250a565b82546101009290920a6001600160801b0381810219909316918316021790915588547f0000000000000000000000000000000000000000000000000000000000000000821691161115905061222b5760405163581a12d760e11b815260040160405180910390fd5b5050505050505097509795505050505050565b806001600160801b038116811461225457600080fd5b919050565b6001600160a01b03811681146119f157600080fd5b8060020b81146119f157600080fd5b80356122548161226e565b80151581146119f157600080fd5b803561225481612288565b600080600080608085870312156122b757600080fd5b84356122c281612259565b935060208501356122d28161226e565b925060408501356122e28161226e565b915060608501356122f281612288565b939692955090935050565b6000806000806080858703121561231357600080fd5b843561231e81612259565b9350602085013561232e81612288565b92506040850135915060608501356122f281612259565b80356001600160801b038116811461225457600080fd5b60008060006060848603121561237157600080fd5b833561237c8161226e565b9250602084013561238c8161226e565b915061239a60408501612345565b90509250925092565b60006101008083850312156123b757600080fd5b6040519081019067ffffffffffffffff821181831017156123e857634e487b7160e01b600052604160045260246000fd5b816040526123f58461227d565b81526124036020850161227d565b60208201526124146040850161227d565b60408201526124256060850161227d565b606082015261243660808501612345565b608082015261244760a08501612345565b60a082015261245860c08501612296565b60c082015261246960e08501612296565b60e0820152949350505050565b60006020828403121561248857600080fd5b8135611b0b8161226e565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156124c3576124c3612493565b500290565b600082198211156124db576124db612493565b500190565b634e487b7160e01b600052601260045260246000fd5b600082612505576125056124e0565b500490565b60006001600160801b0380831681851680830382111561252c5761252c612493565b01949350505050565b60008282101561254757612547612493565b500390565b60006001600160801b038381169083168181101561256c5761256c612493565b039392505050565b60006020828403121561258657600080fd5b8151611b0b8161226e565b6000602082840312156125a357600080fd5b5051919050565b6000600160ff1b82016125bf576125bf612493565b5060000390565b60008160020b627fffff1981036125df576125df612493565b60000392915050565b6000602082840312156125fa57600080fd5b8151611b0b81612288565b60008260020b80612618576126186124e0565b808360020b0791505092915050565b60008160020b8360020b8061263e5761263e6124e0565b627fffff1982146000198214161561265857612658612493565b90059392505050565b600081600f0b60016001607f1b031981036125df576125df61249356fea26469706673582212204d9e32c3529858224a267768adfba7cae6991ff98c272f1c096302efb1337ab064736f6c634300080d0033a2646970667358221220df4fe9f165d056a1a3d7d934b49cdb5f41ffaf99fa1a3e154737cea3f854704764736f6c634300080d0033";

type PoolsharkHedgePoolFactoryConstructorParams =
  | [
      linkLibraryAddresses: PoolsharkHedgePoolFactoryLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolsharkHedgePoolFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PoolsharkHedgePoolFactory__factory extends ContractFactory {
  constructor(...args: PoolsharkHedgePoolFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PoolsharkHedgePoolFactory__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PoolsharkHedgePoolFactoryLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

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

    return linkedBytecode;
  }

  deploy(
    _concentratedFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolsharkHedgePoolFactory> {
    return super.deploy(
      _concentratedFactory,
      overrides || {}
    ) as Promise<PoolsharkHedgePoolFactory>;
  }
  getDeployTransaction(
    _concentratedFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_concentratedFactory, overrides || {});
  }
  attach(address: string): PoolsharkHedgePoolFactory {
    return super.attach(address) as PoolsharkHedgePoolFactory;
  }
  connect(signer: Signer): PoolsharkHedgePoolFactory__factory {
    return super.connect(signer) as PoolsharkHedgePoolFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolsharkHedgePoolFactoryInterface {
    return new utils.Interface(_abi) as PoolsharkHedgePoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolsharkHedgePoolFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PoolsharkHedgePoolFactory;
  }
}

export interface PoolsharkHedgePoolFactoryLibraryAddresses {
  ["contracts/libraries/Ticks.sol:Ticks"]: string;
  ["contracts/libraries/DyDxMath.sol:DyDxMath"]: string;
}
