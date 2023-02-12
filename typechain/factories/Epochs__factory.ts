/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Epochs, EpochsInterface } from "../Epochs";

const _abi = [
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
    inputs: [
      {
        components: [
          {
            internalType: "int24",
            name: "nextTickToCross0",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "nextTickToCross1",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "nextTickToAccum0",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "nextTickToAccum1",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "stopTick0",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "stopTick1",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "amountInDelta0",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amountInDelta1",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amountOutDelta0",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amountOutDelta1",
            type: "uint128",
          },
        ],
        internalType: "struct ICoverPoolStructs.AccumulateCache",
        name: "cache",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidity",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPool0",
        type: "bool",
      },
    ],
    name: "rollover",
    outputs: [
      {
        components: [
          {
            internalType: "int24",
            name: "nextTickToCross0",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "nextTickToCross1",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "nextTickToAccum0",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "nextTickToAccum1",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "stopTick0",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "stopTick1",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "amountInDelta0",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amountInDelta1",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amountOutDelta0",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amountOutDelta1",
            type: "uint128",
          },
        ],
        internalType: "struct ICoverPoolStructs.AccumulateCache",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6137cc61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80631497bce414610045578063f12380e31461006e575b600080fd5b610058610053366004612e61565b61009d565b6040516100659190612eb9565b60405180910390f35b81801561007a57600080fd5b5061008e610089366004613111565b6100d0565b60405161006593929190613269565b6100a5612d80565b60006100b636879003870187613342565b90506100c481868686612138565b9150505b949350505050565b60408051610120810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e0840183905261010084018390528451908101855282815290810182905292830152906040805160608101825260008082526020820181905291810191909152846040015160010b85608001516101639190613436565b60020b856040015160010b856101799190613436565b60020b0361018e57508391508590508461212b565b60018560c0018181516101a19190613470565b63ffffffff16905250604080516101408101825260808088018051600290810b84528151810b6020808601919091528251820b60009081528e825286812054830b868801528351830b8152908e90529485205463010000009004810b6060850152905191830191810b9088900b136102195786610230565b876040015160010b88608001516102309190613498565b60020b8152602001876080015160020b8760020b1361026557876040015160010b886080015161026091906134e0565b610267565b865b60020b8152600060208201819052604082018190526060820181905260809091015290505b87516001600160801b031615610a13576102c38189604001516001600160a01b03168a600001516001600160801b03166001612138565b90506102cd612dd4565b6106678a6000846040015160020b60020b81526020019081526020016000206040518060600160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815250508d6000856000015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508e6000866040015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508a60c001518d600001518760c0015188610100015160018f6080015160020b8f60020b13610651578a6080015160020b8b6040015160020b136127d2565b8a6080015160020b8b6040015160020b126127d2565b905080600001518260c001906001600160801b031690816001600160801b03168152505080602001518261010001906001600160801b031690816001600160801b03168152505080604001518a6000846040015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505080606001518c6000846000015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505080608001518c6000846040015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505050610a23565b600060c082018190526101008201525b806080015160020b816040015160020b1315610b025760408181018051600290810b600090815260208d81528482208551606081018752905480850b825263010000008104850b82840152600160301b900463ffffffff1681870152845190930b82528f90529290922054835191518b51610aa99493600f9390930b9291906001612a76565b600290810b6040850190815291810b84526001600160801b039092168a5251825190820b910b03610afd57604080820151905162a7a77b60e71b815260029190910b60048201526024015b60405180910390fd5b61028c565b856080015160020b8560020b1315610c7657806080015160020b816040015160020b14610c76576040518060600160405280826040015160020b8152602001826000015160020b8152602001600063ffffffff16815250896000836080015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff1602179055509050508060800151896000836040015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff1602179055508060800151896000836000015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b608080820151600290810b600090815260208e8152604091829020825160e0810184528154600f81900b82526001600160801b03600160801b918290048116948301949094526001808401548086169684019690965294819004841660608301529190940154918216948401949094526001600160401b03938104841660a0840152600160c01b900490921660c08201528951610d1592849190612ad6565b608082810151600290810b600090815260208f81526040918290208551918601516001600160801b03928316600160801b9184168202178255928601516060870151908316908316840217600182015585850151908401805460a088015160c090980151929093166001600160c01b0319909316929092176001600160401b03968716909302929092176001600160c01b0316600160c01b959092169490940217909255870151810b9086900b1215610e6657806080015160020b816040015160020b12610e665760408181018051600290810b600090815260208d81528482208551606081018752905480850b825263010000008104850b82840152600160301b900463ffffffff1681870152845190930b82528f90529290922054835191518b51610e4d9493600f9390930b9291906001612a76565b600290810b60408501520b82526001600160801b031688525b608081018051600290810b600090815260208e90526040808220548451840b835281832060010180546001600160801b0319166001600160801b03600160801b938490048116919091179091558551850b845282842054955190940b83529082208054919094049092169291610ee0908490600f0b613527565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060008b6000836080015160020b60020b815260200190815260200160002060000160106101000a8154816001600160801b0302191690836001600160801b031602179055508560c00151896000836080015160020b60020b815260200190815260200160002060000160066101000a81548163ffffffff021916908363ffffffff1602179055505b86516001600160801b03161561171657610fc68188604001516001600160a01b031689600001516001600160801b03166000612138565b9050610fd0612dd4565b61136a8a6000846060015160020b60020b81526020019081526020016000206040518060600160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815250508c6000856020015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508d6000866060015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508a60c001518c600001518760e0015188610120015160018f6080015160020b8f60020b13611354578a60a0015160020b8b6060015160020b136127d2565b8a60a0015160020b8b6060015160020b126127d2565b905080600001518260e001906001600160801b031690816001600160801b03168152505080602001518261012001906001600160801b031690816001600160801b03168152505080604001518a6000846060015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505080606001518b6000846020015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505080608001518b6000846060015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505050611726565b600060e082018190526101208201525b8060a0015160020b816060015160020b12156118065760608181018051600290810b600090815260208d81526040808320815196870182525480850b875263010000008104850b87840152600160301b900463ffffffff1686820152845190930b82528e8152918120549185015192518b516117aa9594600f9490940b9392612a76565b600290810b6060850190815291810b602085019081526001600160801b039093168a529051915191810b91900b0361180157602081015160405163550e7ea560e11b815260029190910b6004820152602401610af4565b610f8f565b856080015160020b8560020b121561197a578060a0015160020b816060015160020b1461197a576040518060600160405280826020015160020b8152602001826060015160020b8152602001600063ffffffff168152508960008360a0015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff1602179055509050508060a00151896000836020015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff1602179055508060a00151896000836060015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b60a080820151600290810b600090815260208d81526040808320815160e0810183528154600f81900b82526001600160801b03600160801b91829004811695830195909552600183015480861694830194909452928390048416606082015294015491821660808501526001600160401b03908204811694840194909452600160c01b900490921660c08201528851611a1592849190612ad6565b60a082810151600290810b600090815260208e81526040918290208551918601516001600160801b03928316600160801b9184168202178255928601516060870151908316908316840217600182015560808087015191850180549688015160c090980151929093166001600160c01b0319909616959095176001600160401b03968716909302929092176001600160c01b0316600160c01b959092169490940217909255870151810b9086900b1315611ccf578460020b816060015160020b14611c1e576040518060600160405280826020015160020b8152602001826060015160020b81526020018760c0015163ffffffff168152508960008760020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505084896000836020015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff16021790555084896000836060015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b8060a0015160020b816060015160020b13611cbd5760608181018051600290810b600090815260208d81526040808320815196870182525480850b875263010000008104850b87840152600160301b900463ffffffff1686820152845190930b82528e8152918120549185015192518b51611ca19594600f9490940b9392612a76565b600290810b60608501520b60208301526001600160801b031687525b6000885286516001600160801b031687525b60a081018051600290810b600090815260208d90526040808220548451840b835281832060010180546001600160801b0319166001600160801b03600160801b938490048116919091179091558551850b845282842054955190940b83529082208054919094049092169291611d49908490600f0b613527565b82546101009290920a6001600160801b0381810219909316918316021790915560a083018051600290810b600090815260208f81526040808320805490961690955560c08c01519351830b82528e905292909220805469ffffffff0000000000001916600160301b63ffffffff909316929092029190911790556080880151810b9087900b139050611f4e57856080015160020b8560020b1215611f4e578460020b816000015160020b14611f3c576040518060600160405280826040015160020b8152602001826000015160020b81526020018760c0015163ffffffff168152508960008760020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505084896000836040015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff16021790555084896000836000015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b87516001600160801b03168852600087525b73__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3876040015160010b87611f7b9190613498565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015611fba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fde919061356d565b6001600160a01b03166040808a019190915286015173__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba39061201c9060010b886134e0565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af415801561205b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207f919061356d565b6001600160a01b0316604088810191909152600286900b60808801819052905163986cfba360e01b8152600481019190915273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156120ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612111919061356d565b6001600160a01b0316610100870152508492508691508590505b9750975097945050505050565b612140612d80565b8260000361214f5750836100c8565b600073__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba38461217a57876020015161217d565b87515b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af41580156121bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e0919061356d565b9050600080841561221757876080015160020b886040015160020b1261220a578760400151612210565b87608001515b905061223f565b8760a0015160020b886060015160020b1361223657876060015161223c565b8760a001515b90505b60405163986cfba360e01b8152600282900b600482015273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015612292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122b6919061356d565b915050836122cf57806001600160a01b031686106122dc565b806001600160a01b031686115b156122ee57806001600160a01b031695505b600080851561241557604051630e8e499360e21b815260048101889052602481018990526001600160a01b038516604482015273__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af415801561235d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123819190613591565b604051630b00d01b60e31b815260048101899052602481018a90526001600160a01b038616604482015290915073__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af41580156123ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061240e9190613591565b915061252f565b604051630b00d01b60e31b8152600481018890526001600160a01b03851660248201526044810189905273__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af415801561247b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061249f9190613591565b604051630e8e499360e21b8152600481018990526001600160a01b0386166024820152604481018a905290915073__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af4158015612508573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061252c9190613591565b91505b851561267f5760405163554d048960e11b815260048101839052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125ba9190613591565b8960c0018181516125cb91906135aa565b6001600160801b031690525060405163554d048960e11b815260048101829052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061265c9190613591565b896101000181815161266e91906135aa565b6001600160801b03169052506127c5565b60405163554d048960e11b815260048101839052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af41580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127049190613591565b8960e00181815161271591906135aa565b6001600160801b031690525060405163554d048960e11b815260048101829052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a69190613591565b89610120018181516127b891906135aa565b6001600160801b03169052505b5096979650505050505050565b6127da612dd4565b81156127ed5763ffffffff871660408b01525b60a08901516001600160401b0316156128f4576000670de0b6b3a76400008a606001516001600160801b03168b60a001516001600160401b031661283191906135cc565b61283b91906135eb565b9050808a60600181815161284f91906135ff565b6001600160801b0316905250600060a08b015261286c81876135aa565b60c08b01519096506001600160401b0316156128f2576000670de0b6b3a76400008b608001516001600160801b03168c60c001516001600160401b03166128b391906135cc565b6128bd91906135eb565b9050808b6080018181516128d191906135ff565b6001600160801b0316905250600060c08c01526128ee81876135aa565b9550505b505b6001600160801b03861615612a18576020890151895160009161291691613527565b600f0b9050600081138015612933575080876001600160801b0316115b156129d1576000600f88900b61295183670de0b6b3a7640000613627565b61295b91906136ac565b905061296f81670de0b6b3a76400006136da565b61298a6001600160801b038816670de0b6b3a76400006135cc565b61299491906135eb565b95506129a881670de0b6b3a76400006136da565b6129c36001600160801b038916670de0b6b3a76400006135cc565b6129cd91906135eb565b9650505b8215612a165785896060018181516129e991906135aa565b6001600160801b0316905250608089018051869190612a099083906135aa565b6001600160801b03169052505b505b8215612a3a576020890180516001600160801b031660408b01526000808b5290525b50506040805160a0810182526001600160801b039485168152929093166020830152509081019590955250506060830191909152608082015290565b6000806000859650600088600f0b1315612a9b57612a9488866135aa565b9450612ab1565b612aa48861371b565b612aae90866135ff565b94505b8315612ac05788519550612ac8565b886020015195505b509297949650929450505050565b612ade612e25565b826001600160801b0316600003612af65750836100c8565b600082612b07578460e00151612b0d565b8460c001515b90506000670de0b6b3a764000087606001518860a001516001600160401b0316612b379190613741565b612b419190613770565b90506000876060015183612b5591906135aa565b90506001600160801b03831615612c2e5787602001516001600160801b0316866001600160801b031603612bc757806001600160801b0316826001600160801b0316670de0b6b3a7640000612baa91906135cc565b612bb491906135eb565b6001600160401b031660a0890152612c0f565b6001600160801b038116612bdb83856135aa565b612bf6906001600160801b0316670de0b6b3a76400006135cc565b612c0091906135eb565b6001600160401b031660a08901525b8288606001818151612c2191906135aa565b6001600160801b03169052505b505050600082612c4357846101200151612c4a565b8461010001515b90506000670de0b6b3a764000087608001516001600160801b03168860c001516001600160401b0316612c7d91906135cc565b612c8791906135eb565b90506000828860800151612c9b91906135aa565b90506001600160801b03831615612d745787602001516001600160801b0316866001600160801b031603612d0d57806001600160801b0316826001600160801b0316670de0b6b3a7640000612cf091906135cc565b612cfa91906135eb565b6001600160401b031660c0890152612d55565b6001600160801b038116612d2183856135aa565b612d3c906001600160801b0316670de0b6b3a76400006135cc565b612d4691906135eb565b6001600160401b031660c08901525b8288608001818151612d6791906135aa565b6001600160801b03169052505b50959695505050505050565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b6040805160a081018252600080825260208083018290528351606080820186528382529181018390528085019290925292820152908101612e13612e25565b8152602001612e20612e25565b905290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6000806000808486036101a0811215612e7957600080fd5b61014080821215612e8957600080fd5b86955085013593505061016084013591506101808401358015158114612eae57600080fd5b939692955090935050565b815160020b815261014081016020830151612ed9602084018260020b9052565b506040830151612eee604084018260020b9052565b506060830151612f03606084018260020b9052565b506080830151612f18608084018260020b9052565b5060a0830151612f2d60a084018260020b9052565b5060c0830151612f4860c08401826001600160801b03169052565b5060e0830151612f6360e08401826001600160801b03169052565b50610100838101516001600160801b03908116918401919091526101209384015116929091019190915290565b60405161012081016001600160401b0381118282101715612fc157634e487b7160e01b600052604160045260246000fd5b60405290565b60405161014081016001600160401b0381118282101715612fc157634e487b7160e01b600052604160045260246000fd5b80356001600160801b038116811461300f57600080fd5b919050565b6001600160a01b038116811461302957600080fd5b50565b803561300f81613014565b60006060828403121561304957600080fd5b604051606081018181106001600160401b038211171561307957634e487b7160e01b600052604160045260246000fd5b60405290508061308883612ff8565b815261309660208401612ff8565b602082015260408301356130a981613014565b6040919091015292915050565b803560ff8116811461300f57600080fd5b803561ffff8116811461300f57600080fd5b8035600181900b811461300f57600080fd5b8035600281900b811461300f57600080fd5b803563ffffffff8116811461300f57600080fd5b600080600080600080600087890361026081121561312e57600080fd5b88359750602089013596506040890135955061314d8a60608b01613037565b945061315c8a60c08b01613037565b93506101208061011f198301121561317357600080fd5b61317b612f90565b9150613188818b016130b6565b8252506131986101408a016130c7565b60208201526131aa6101608a016130d9565b60408201526131bc6101808a016130c7565b60608201526131ce6101a08a016130eb565b60808201526131e06101c08a016130fd565b60a08201526131f26101e08a016130fd565b60c08201526132046102008a01612ff8565b60e08201526132166102208a0161302c565b610100820152915061322b61024089016130eb565b905092959891949750929550565b80516001600160801b039081168352602080830151909116908301526040908101516001600160a01b0316910152565b60006101e08201905060ff855116825261ffff6020860151166020830152604085015161329b604084018260010b9052565b5060608501516132b1606084018261ffff169052565b5060808501516132c6608084018260020b9052565b5060a08501516132de60a084018263ffffffff169052565b5060c08501516132f660c084018263ffffffff169052565b5060e085015161331160e08401826001600160801b03169052565b50610100858101516001600160a01b031690830152613334610120830185613239565b6100c8610180830184613239565b6000610140828403121561335557600080fd5b61335d612fc7565b613366836130eb565b8152613374602084016130eb565b6020820152613385604084016130eb565b6040820152613396606084016130eb565b60608201526133a7608084016130eb565b60808201526133b860a084016130eb565b60a08201526133c960c08401612ff8565b60c08201526133da60e08401612ff8565b60e08201526101006133ed818501612ff8565b908201526101206133ff848201612ff8565b908201529392505050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008160020b8360020b8061344d5761344d61340a565b627fffff1982146000198214161561346757613467613420565b90059392505050565b600063ffffffff80831681851680830382111561348f5761348f613420565b01949350505050565b60008160020b8360020b6000811281627fffff19018312811516156134bf576134bf613420565b81627fffff0183138116156134d6576134d6613420565b5090039392505050565b60008160020b8360020b6000821282627fffff0382138115161561350657613506613420565b82627fffff1903821281161561351e5761351e613420565b50019392505050565b600081600f0b83600f0b600082128260016001607f1b030382138115161561355157613551613420565b8260016001607f1b031903821281161561351e5761351e613420565b60006020828403121561357f57600080fd5b815161358a81613014565b9392505050565b6000602082840312156135a357600080fd5b5051919050565b60006001600160801b0380831681851680830382111561348f5761348f613420565b60008160001904831182151516156135e6576135e6613420565b500290565b6000826135fa576135fa61340a565b500490565b60006001600160801b038381169083168181101561361f5761361f613420565b039392505050565b60006001600160ff1b038184138284138082168684048611161561364d5761364d613420565b600160ff1b600087128281168783058912161561366c5761366c613420565b6000871292508782058712848416161561368857613688613420565b8785058712818416161561369e5761369e613420565b505050929093029392505050565b6000826136bb576136bb61340a565b600160ff1b8214600019841416156136d5576136d5613420565b500590565b600080821280156001600160ff1b03849003851316156136fc576136fc613420565b600160ff1b839003841281161561371557613715613420565b50500190565b600081600f0b60016001607f1b0319810361373857613738613420565b60000392915050565b60006001600160801b038083168185168183048111821515161561376757613767613420565b02949350505050565b60006001600160801b038084168061378a5761378a61340a565b9216919091049291505056fea2646970667358221220814c31b9f2c592d50c1bbf802100ba93271bf172a42a53f65bc0df181f1b45d864736f6c634300080d0033";

type EpochsConstructorParams =
  | [linkLibraryAddresses: EpochsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EpochsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Epochs__factory extends ContractFactory {
  constructor(...args: EpochsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Epochs__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: EpochsLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b52f7ddb7db4526c8b5c81c46a9292f776\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/TickMath.sol:TickMath"]
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
  ): Promise<Epochs> {
    return super.deploy(overrides || {}) as Promise<Epochs>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Epochs {
    return super.attach(address) as Epochs;
  }
  connect(signer: Signer): Epochs__factory {
    return super.connect(signer) as Epochs__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EpochsInterface {
    return new utils.Interface(_abi) as EpochsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Epochs {
    return new Contract(address, _abi, signerOrProvider) as Epochs;
  }
}

export interface EpochsLibraryAddresses {
  ["contracts/libraries/TickMath.sol:TickMath"]: string;
  ["contracts/libraries/DyDxMath.sol:DyDxMath"]: string;
  ["contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"]: string;
}
