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
];

const _bytecode =
  "0x61435261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80634d97e98e1461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004613d51565b610072565b60405161006993929190613ed1565b60405180910390f35b60408051610180810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e08401839052610100840183905261012084018390526101408401839052610160840183905284519081018552828152908101829052928301529060408051606081018252600080825260208201819052918101919091526101608401516040808601519051634fc65aeb60e11b81526001600160a01b03909216600483015261ffff16602482015260009073__$657d9a64028a7d57fe1695a914827e9925$__90639f8cb5d690604401602060405180830381865af4158015610176573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019a9190613fe3565b63ffffffff431660c0870152602086015160808701519192506101c39160019190910b90614033565b60020b856020015160010b826101d99190614033565b60020b036101f05784878793509350935050612a6d565b60018561010001818151610204919061406d565b63ffffffff16905250604080516101408101825260808088018051600290810b84528151810b6020808601919091528251820b60009081528e825286812054830b868801528351830b8152908e90529485205463010000009004810b6060850152905191830191810b9085900b1361027c5783610293565b876020015160010b88608001516102939190614095565b60020b8152602001876080015160020b8460020b136102c857876020015160010b88608001516102c391906140dd565b6102ca565b835b60020b815260208a8101516001600160801b0390811682840152908a015116604082015260006060820181905260809091015290505b6103278189604001516001600160a01b03168a600001516001600160801b03166001612a79565b9050610331613b66565b6106fb8a6000846040015160020b60020b81526020019081526020016000206040518060800160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600a9054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508d6000856000015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508e6000866040015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508a61010001518d600001518760c0015188610100015160018f6080015160020b8c60020b136106e5578a6080015160020b8b6040015160020b136131b3565b8a6080015160020b8b6040015160020b126131b3565b905080600001518260c001906001600160801b031690816001600160801b03168152505080602001518261010001906001600160801b031690816001600160801b03168152505080604001518a6000846040015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600a6101000a8154816001600160401b0302191690836001600160401b0316021790555090505080606001518c6000846000015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505080608001518c6000846040015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505060008a6000846000015160020b60020b8152602001908152602001600020600001600a6101000a8154816001600160401b0302191690836001600160401b03160217905550816080015160020b826040015160020b1315610c7e57610c258a6000846040015160020b60020b81526020019081526020016000206040518060800160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600a9054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508d6000856040015160020b60020b815260200190815260200160002060000160009054906101000a9004600f0b846000015185604001518d6000015160016136ab565b600290810b6040860190815291810b85526001600160801b039092168b5251835190820b910b03610c7957604080830151905162a7a77b60e71b815260029190910b60048201526024015b60405180910390fd5b610c84565b50610c8a565b50610300565b856080015160020b8260020b1315610e3b57806080015160020b816040015160020b14610e3b576040518060800160405280826040015160020b8152602001826000015160020b8152602001600063ffffffff16815260200160006001600160401b0316815250896000836080015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600a6101000a8154816001600160401b0302191690836001600160401b031602179055509050508060800151896000836040015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff1602179055508060800151896000836000015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b60008b6000836080015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250509050611064818b6000856080015160020b60020b81526020019081526020016000206040518060800160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600a9054906101000a90046001600160401b03166001600160401b03166001600160401b031681525050848c60000151600161370b565b608080850151600290810b600090815260208f81526040918290208551815492870151938701516060909701516001600160401b0316600160501b0267ffffffffffffffff60501b1963ffffffff909816600160301b029790971671ffffffffffffffffffffffff0000000000001962ffffff95861663010000000265ffffffffffff1990951695909216949094179290921791909116919091179390931790925589015191925090810b9084900b12156113d657816080015160020b826040015160020b126112435761122a8a6000846040015160020b60020b81526020019081526020016000206040518060800160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600a9054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508d6000856040015160020b60020b815260200190815260200160002060000160009054906101000a9004600f0b846000015185604001518d6000015160016136ab565b600290810b60408601520b83526001600160801b031689525b8260020b826000015160020b146113d6576040518060800160405280836040015160020b8152602001836000015160020b815260200188610100015163ffffffff16815260200160006001600160401b03168152508a60008560020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600a6101000a8154816001600160401b0302191690836001600160401b03160217905550905050828a6000846040015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff160217905550828a6000846000015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b60208101516001600160801b03161561143f576114196040518060400160405280600f81526020016e064656c7461206d696e7573203e203608c1b815250613a79565b611429826080015160020b613abf565b61143f81602001516001600160801b0316613b04565b8060200151816040018181516114559190614124565b6001600160801b0316905250602081015181518290611475908390614146565b915090600f0b9081600f0b81525050600081602001906001600160801b031690816001600160801b031681525050808c6000846080015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b031602179055509050508661010001518a6000846080015160020b60020b815260200190815260200160002060000160066101000a81548163ffffffff021916908363ffffffff160217905550505b86516001600160801b031615611e6f5761167d8188604001516001600160a01b031689600001516001600160801b03166000612a79565b9050611687613b66565b611a518a6000846060015160020b60020b81526020019081526020016000206040518060800160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600a9054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508c6000856020015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508d6000866060015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508a61010001518c600001518760e0015188610120015160018f6080015160020b8c60020b13611a3b578a60a0015160020b8b6060015160020b136131b3565b8a60a0015160020b8b6060015160020b126131b3565b905080600001518260e001906001600160801b031690816001600160801b03168152505080602001518261012001906001600160801b031690816001600160801b03168152505080604001518a6000846060015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600a6101000a8154816001600160401b0302191690836001600160401b0316021790555090505080606001518b6000846020015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505080608001518b6000846060015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505060008a6000846020015160020b60020b8152602001908152602001600020600001600a6101000a8154816001600160401b0302191690836001600160401b0316021790555050611e7f565b600060e082018190526101208201525b8060a0015160020b816060015160020b1215611f785760608181018051600290810b600090815260208d815260408083208151608081018352905480860b825263010000008104860b82850152600160301b810463ffffffff1682840152600160501b90046001600160401b031696810196909652845190930b82528e8152918120549185015192518b51611f1c9594600f9490940b93926136ab565b600290810b6060850190815291810b602085019081526001600160801b039093168a529051915191810b91900b03611f7357602081015160405163550e7ea560e11b815260029190910b6004820152602401610c70565b611646565b856080015160020b8260020b1215612129578060a0015160020b816060015160020b14612129576040518060800160405280826020015160020b8152602001826060015160020b8152602001600063ffffffff16815260200160006001600160401b03168152508960008360a0015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600a6101000a8154816001600160401b0302191690836001600160401b031602179055509050508060a00151896000836020015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff1602179055508060a00151896000836060015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b60008a60008360a0015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250509050612352818b60008560a0015160020b60020b81526020019081526020016000206040518060800160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600a9054906101000a90046001600160401b03166001600160401b03166001600160401b031681525050848b60000151600061370b565b60a0840151600290810b600090815260208e81526040918290208451815492860151938601516060909601516001600160401b0316600160501b0267ffffffffffffffff60501b1963ffffffff909716600160301b029690961671ffffffffffffffffffffffff0000000000001962ffffff95861663010000000265ffffffffffff19909516959092169490941792909217919091169190911792909217909155608089015191925090810b9084900b131561265c578260020b826060015160020b1461259b576040518060800160405280836020015160020b8152602001836060015160020b815260200188610100015163ffffffff16815260200160006001600160401b03168152508a60008560020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600a6101000a8154816001600160401b0302191690836001600160401b03160217905550905050828a6000846020015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff160217905550828a6000846060015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b8160a0015160020b826060015160020b136126535760608281018051600290810b600090815260208e815260408083208151608081018352905480860b825263010000008104860b82850152600160301b810463ffffffff1682840152600160501b90046001600160401b031696810196909652845190930b82528f8152918120549186015192518c516126379594600f9490940b93926136ab565b600290810b60608601520b60208401526001600160801b031688525b60008952612661565b600088525b8060200151816040018181516126779190614124565b6001600160801b0316905250602081015181518290612697908390614146565b915090600f0b9081600f0b81525050600081602001906001600160801b031690816001600160801b031681525050808b60008460a0015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b031602179055509050508661010001518a60008460a0015160020b60020b815260200190815260200160002060000160066101000a81548163ffffffff021916908363ffffffff1602179055505073__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3876020015160010b846128949190614095565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af41580156128d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128f7919061418c565b6001600160a01b03166040890152602086015173__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba3906129339060010b856140dd565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015612972573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612996919061418c565b6001600160a01b0316604088015260006020808a0182905288015260a08601516129c69063ffffffff16436141a9565b63ffffffff1660e0870152600282900b6080870181905260405163986cfba360e01b8152600481019190915273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015612a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a52919061418c565b6001600160a01b031661014087015250849350869250859150505b96509650969350505050565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282600003612ad95750836131ab565b600073__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba384612b04578760200151612b07565b87515b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015612b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b6a919061418c565b90506000808415612ba157876080015160020b886040015160020b12612b94578760400151612b9a565b87608001515b9050612bc9565b8760a0015160020b886060015160020b13612bc0578760600151612bc6565b8760a001515b90505b60405163986cfba360e01b8152600282900b600482015273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015612c1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c40919061418c565b9150508315612c7f57806001600160a01b031686118015612c695750816001600160a01b031686105b612c7a57806001600160a01b031695505b612cb0565b806001600160a01b031686108015612c9f5750816001600160a01b031686115b612cb057806001600160a01b031695505b6000808515612de557604051639026147360e01b815260048101889052602481018990526001600160a01b03851660448201526000606482015273__$357eccfa53a4e88c122661903e0e603301$__90639026147390608401602060405180830381865af4158015612d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d4a91906141c0565b604051630724718960e41b815260048101899052602481018a90526001600160a01b03861660448201526000606482015290915073__$357eccfa53a4e88c122661903e0e603301$__90637247189090608401602060405180830381865af4158015612dba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dde91906141c0565b9150612f0d565b604051630724718960e41b8152600481018890526001600160a01b0385166024820152604481018990526000606482015273__$357eccfa53a4e88c122661903e0e603301$__90637247189090608401602060405180830381865af4158015612e52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e7691906141c0565b604051639026147360e01b8152600481018990526001600160a01b0386166024820152604481018a90526000606482015290915073__$357eccfa53a4e88c122661903e0e603301$__90639026147390608401602060405180830381865af4158015612ee6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f0a91906141c0565b91505b851561305d5760405163554d048960e11b815260048101839052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f9891906141c0565b8960c001818151612fa99190614124565b6001600160801b031690525060405163554d048960e11b815260048101829052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015613016573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061303a91906141c0565b896101000181815161304c9190614124565b6001600160801b03169052506131a3565b60405163554d048960e11b815260048101839052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af41580156130be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130e291906141c0565b8960e0018181516130f39190614124565b6001600160801b031690525060405163554d048960e11b815260048101829052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015613160573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061318491906141c0565b89610120018181516131969190614124565b6001600160801b03169052505b889450505050505b949350505050565b6131bb613b66565b600088602001516001600160801b03161180156131d55750815b156131e75763ffffffff871660408b01525b6001600160801b03861615613501576020890151895160009161320991614146565b9050600073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a091288613232858c6141d9565b6040516001600160e01b031960e085901b1681526001600160801b03928316600482015291166024820152600160601b6044820152606401602060405180830381865af4158015613287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132ab91906141c0565b9050600073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a0912886132d4868d6141d9565b6040516001600160e01b031960e085901b1681526001600160801b03928316600482015291166024820152600160601b6044820152606401602060405180830381865af4158015613329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061334d91906141c0565b90506000836001600160801b03161180156133795750826001600160801b0316896001600160801b0316115b156134fd576133ac6040518060400160405280600d81526020016c64696c7574652064656c74617360981b815250613a79565b73__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a091283600160601b8e604001518d6133dc9190614124565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526001600160801b03166044820152606401602060405180830381865af415801561342e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061345291906141c0565b975073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a091282600160601b8e604001518d6134849190614124565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526001600160801b03166044820152606401602060405180830381865af41580156134d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134fa91906141c0565b96505b5050505b60a08901516001600160401b031615613608576000670de0b6b3a76400008a606001516001600160801b03168b60a001516001600160401b03166135459190614201565b61354f9190614220565b9050808a60600181815161356391906141d9565b6001600160801b0316905250600060a08b01526135808187614124565b60c08b01519096506001600160401b031615613606576000670de0b6b3a76400008b608001516001600160801b03168c60c001516001600160401b03166135c79190614201565b6135d19190614220565b9050808b6080018181516135e591906141d9565b6001600160801b0316905250600060c08c01526136028187614124565b9550505b505b821561362a576020890180516001600160801b031660408b01526000808b5290525b811561366f5784886060018181516136429190614124565b6001600160801b0316905250608088018051859190613662908390614124565b6001600160801b03169052505b50506040805160a0810182526001600160801b039485168152929093166020830152509081019590955250506060830191909152608082015290565b6000806000859650600088600f0b13156136d0576136c98886614124565b94506136e6565b6136d988614234565b6136e390866141d9565b94505b83156136f557885195506136fd565b886020015195505b509297949650929450505050565b613713613bc0565b604080516080810182526000808252602082018190529181018290526060810191909152836001600160801b0316600003613752575085905084613a6f565b600083613763578560e00151613769565b8560c001515b90506000670de0b6b3a764000089606001518a60a001516001600160401b0316613793919061425a565b61379d9190614289565b905060008960600151836137b19190614124565b90506001600160801b0383161561388a5789602001516001600160801b0316876001600160801b03160361382357806001600160801b0316826001600160801b0316670de0b6b3a76400006138069190614201565b6138109190614220565b6001600160401b031660a08b015261386b565b6001600160801b0381166138378385614124565b613852906001600160801b0316670de0b6b3a7640000614201565b61385c9190614220565b6001600160401b031660a08b01525b828a60600181815161387d9190614124565b6001600160801b03169052505b50505060008361389f578561012001516138a6565b8561010001515b90506000670de0b6b3a764000089608001516001600160801b03168a60c001516001600160401b03166138d99190614201565b6138e39190614220565b90506000828a608001516138f79190614124565b90506001600160801b038316156139d05789602001516001600160801b0316876001600160801b03160361396957806001600160801b0316826001600160801b0316670de0b6b3a764000061394c9190614201565b6139569190614220565b6001600160401b031660c08b01526139b1565b6001600160801b03811661397d8385614124565b613998906001600160801b0316670de0b6b3a7640000614201565b6139a29190614220565b6001600160401b031660c08b01525b828a6080018181516139c39190614124565b6001600160801b03169052505b505050602087015187516000916139e691614146565b6001600160801b031690508015613a67576000670de0b6b3a76400008289606001516001600160401b0316613a1b9190614201565b613a259190614220565b905081613a3b6001600160801b038816836142af565b613a4d90670de0b6b3a7640000614201565b613a579190614220565b6001600160401b03166060890152505b878792509250505b9550959350505050565b613abc81604051602401613a8d91906142c7565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052613b45565b50565b613abc81604051602401613ad591815260200190565b60408051601f198184030181529190526020810180516001600160e01b0316632d5b6cb960e01b179052613b45565b613abc81604051602401613b1a91815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6040805160a081018252600080825260208083018290528351608081018552828152908101829052808401829052606081019190915290918201908152602001613bae613bc0565b8152602001613bbb613bc0565b905290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b60405161018081016001600160401b0381118282101715613c2d57634e487b7160e01b600052604160045260246000fd5b60405290565b80356001600160801b0381168114613c4a57600080fd5b919050565b6001600160a01b0381168114613abc57600080fd5b8035613c4a81613c4f565b600060608284031215613c8157600080fd5b604051606081018181106001600160401b0382111715613cb157634e487b7160e01b600052604160045260246000fd5b604052905080613cc083613c33565b8152613cce60208401613c33565b60208201526040830135613ce181613c4f565b6040919091015292915050565b803560ff81168114613c4a57600080fd5b8035600181900b8114613c4a57600080fd5b803561ffff81168114613c4a57600080fd5b8060020b8114613abc57600080fd5b8035613c4a81613d23565b803563ffffffff81168114613c4a57600080fd5b6000806000806000808688036102a0811215613d6c57600080fd5b873596506020880135955060408801359450613d8b8960608a01613c6f565b9350613d9a8960c08a01613c6f565b92506101206101808061011f1984011215613db457600080fd5b613dbc613bfc565b9250613dc9828b01613cee565b8352610140613dd9818c01613cff565b6020850152610160613dec818d01613d11565b6040860152613dfc838d01613d11565b6060860152613e0e6101a08d01613d32565b6080860152613e206101c08d01613d3d565b60a0860152613e326101e08d01613d3d565b60c0860152613e446102008d01613d3d565b60e0860152613e566102208d01613d3d565b610100860152613e696102408d01613c33565b84860152613e7a6102608d01613c64565b82860152613e8b6102808d01613c64565b8186015250505050809150509295509295509295565b80516001600160801b039081168352602080830151909116908301526040908101516001600160a01b0316910152565b835160ff16815261024081016020850151613ef1602084018260010b9052565b506040850151613f07604084018261ffff169052565b506060850151613f1d606084018261ffff169052565b506080850151613f32608084018260020b9052565b5060a0850151613f4a60a084018263ffffffff169052565b5060c0850151613f6260c084018263ffffffff169052565b5060e0850151613f7a60e084018263ffffffff169052565b506101008581015163ffffffff1690830152610120808601516001600160801b031690830152610140808601516001600160a01b03908116918401919091526101608087015190911690830152613fd5610180830185613ea1565b6131ab6101e0830184613ea1565b600060208284031215613ff557600080fd5b815161400081613d23565b9392505050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008160020b8360020b8061404a5761404a614007565b627fffff198214600019821416156140645761406461401d565b90059392505050565b600063ffffffff80831681851680830382111561408c5761408c61401d565b01949350505050565b60008160020b8360020b6000811281627fffff19018312811516156140bc576140bc61401d565b81627fffff0183138116156140d3576140d361401d565b5090039392505050565b60008160020b8360020b6000821282627fffff038213811516156141035761410361401d565b82627fffff1903821281161561411b5761411b61401d565b50019392505050565b60006001600160801b0380831681851680830382111561408c5761408c61401d565b600081600f0b83600f0b600082128260016001607f1b03038213811516156141705761417061401d565b8260016001607f1b031903821281161561411b5761411b61401d565b60006020828403121561419e57600080fd5b815161400081613c4f565b6000828210156141bb576141bb61401d565b500390565b6000602082840312156141d257600080fd5b5051919050565b60006001600160801b03838116908316818110156141f9576141f961401d565b039392505050565b600081600019048311821515161561421b5761421b61401d565b500290565b60008261422f5761422f614007565b500490565b600081600f0b60016001607f1b031981036142515761425161401d565b60000392915050565b60006001600160801b03808316818516818304811182151516156142805761428061401d565b02949350505050565b60006001600160801b03808416806142a3576142a3614007565b92169190910492915050565b600082198211156142c2576142c261401d565b500190565b600060208083528351808285015260005b818110156142f4578581018301518582016040015282016142d8565b81811115614306576000604083870101525b50601f01601f191692909201604001939250505056fea26469706673582212208755d1b81a1e23dd06799fa1985617286dc482aa317a174f0ce3606e922b954964736f6c634300080d0033";

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
      new RegExp("__\\$657d9a64028a7d57fe1695a914827e9925\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/TwapOracle.sol:TwapOracle"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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
  ["contracts/libraries/TwapOracle.sol:TwapOracle"]: string;
  ["contracts/libraries/TickMath.sol:TickMath"]: string;
  ["contracts/libraries/DyDxMath.sol:DyDxMath"]: string;
  ["contracts/libraries/FullPrecisionMath.sol:FullPrecisionMath"]: string;
}
