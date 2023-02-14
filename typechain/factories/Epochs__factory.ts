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
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6139c061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80631497bce414610045578063f12380e31461006e575b600080fd5b6100586100533660046130c3565b61009d565b604051610065919061311b565b60405180910390f35b81801561007a57600080fd5b5061008e610089366004613373565b6100d0565b60405161006593929190613505565b6100a5612fe2565b60006100b636879003870187613613565b90506100c481868686612180565b9150505b949350505050565b60408051610180810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e084018390526101008401839052610120840183905261014084018390526101608401839052845190810185528281529081018290529283015290604080516060810182526000808252602082018190529181019190915263ffffffff431660c0860152604085015160808601516101879160010b90613707565b60020b856040015160010b8561019d9190613707565b60020b036101b2575083915085905084612173565b600185610120018181516101c69190613741565b63ffffffff16905250604080516101408101825260808088018051600290810b84528151810b6020808601919091528251820b60009081528e825286812054830b868801528351830b8152908e90529485205463010000009004810b6060850152905191830191810b9088900b1361023e5786610255565b876040015160010b88608001516102559190613769565b60020b8152602001876080015160020b8760020b1361028a57876040015160010b886080015161028591906137b1565b61028c565b865b60020b8152600060208201819052604082018190526060820181905260809091015290505b87516001600160801b031615610a39576102e88189604001516001600160a01b03168a600001516001600160801b03166001612180565b90506102f2613036565b61068d8a6000846040015160020b60020b81526020019081526020016000206040518060600160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815250508d6000856000015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508e6000866040015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508a61012001518d600001518760c0015188610100015160018f6080015160020b8f60020b13610677578a6080015160020b8b6040015160020b1361281a565b8a6080015160020b8b6040015160020b1261281a565b905080600001518260c001906001600160801b031690816001600160801b03168152505080602001518261010001906001600160801b031690816001600160801b03168152505080604001518a6000846040015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505080606001518c6000846000015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505080608001518c6000846040015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505050610a49565b600060c082018190526101008201525b806080015160020b816040015160020b1315610b285760408181018051600290810b600090815260208d81528482208551606081018752905480850b825263010000008104850b82840152600160301b900463ffffffff1681870152845190930b82528f90529290922054835191518b51610acf9493600f9390930b9291906001612cd8565b600290810b6040850190815291810b84526001600160801b039092168a5251825190820b910b03610b2357604080820151905162a7a77b60e71b815260029190910b60048201526024015b60405180910390fd5b6102b1565b856080015160020b8560020b1315610c9c57806080015160020b816040015160020b14610c9c576040518060600160405280826040015160020b8152602001826000015160020b8152602001600063ffffffff16815250896000836080015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff1602179055509050508060800151896000836040015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff1602179055508060800151896000836000015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b608080820151600290810b600090815260208e8152604091829020825160e0810184528154600f81900b82526001600160801b03600160801b918290048116948301949094526001808401548086169684019690965294819004841660608301529190940154918216948401949094526001600160401b03938104841660a0840152600160c01b900490921660c08201528951610d3b92849190612d38565b608082810151600290810b600090815260208f81526040918290208551918601516001600160801b03928316600160801b9184168202178255928601516060870151908316908316840217600182015585850151908401805460a088015160c090980151929093166001600160c01b0319909316929092176001600160401b03968716909302929092176001600160c01b0316600160c01b959092169490940217909255870151810b9086900b1215610e8c57806080015160020b816040015160020b12610e8c5760408181018051600290810b600090815260208d81528482208551606081018752905480850b825263010000008104850b82840152600160301b900463ffffffff1681870152845190930b82528f90529290922054835191518b51610e739493600f9390930b9291906001612cd8565b600290810b60408501520b82526001600160801b031688525b608081018051600290810b600090815260208e90526040808220548451840b835281832060010180546001600160801b0319166001600160801b03600160801b938490048116919091179091558551850b845282842054955190940b83529082208054919094049092169291610f06908490600f0b6137f8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060008b6000836080015160020b60020b815260200190815260200160002060000160106101000a8154816001600160801b0302191690836001600160801b03160217905550856101200151896000836080015160020b60020b815260200190815260200160002060000160066101000a81548163ffffffff021916908363ffffffff1602179055505b86516001600160801b03161561173e57610fed8188604001516001600160a01b031689600001516001600160801b03166000612180565b9050610ff7613036565b6113928a6000846060015160020b60020b81526020019081526020016000206040518060600160405290816000820160009054906101000a900460020b60020b60020b81526020016000820160039054906101000a900460020b60020b60020b81526020016000820160069054906101000a900463ffffffff1663ffffffff1663ffffffff16815250508c6000856020015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508d6000866060015160020b60020b81526020019081526020016000206040518060e00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016002820160109054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820160189054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250508a61012001518c600001518760e0015188610120015160018f6080015160020b8f60020b1361137c578a60a0015160020b8b6060015160020b1361281a565b8a60a0015160020b8b6060015160020b1261281a565b905080600001518260e001906001600160801b031690816001600160801b03168152505080602001518261012001906001600160801b031690816001600160801b03168152505080604001518a6000846060015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505080606001518b6000846020015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b0316021790555090505080608001518b6000846060015160020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160020160006101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160020160106101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160186101000a8154816001600160401b0302191690836001600160401b031602179055509050505061174e565b600060e082018190526101208201525b8060a0015160020b816060015160020b121561182e5760608181018051600290810b600090815260208d81526040808320815196870182525480850b875263010000008104850b87840152600160301b900463ffffffff1686820152845190930b82528e8152918120549185015192518b516117d29594600f9490940b9392612cd8565b600290810b6060850190815291810b602085019081526001600160801b039093168a529051915191810b91900b0361182957602081015160405163550e7ea560e11b815260029190910b6004820152602401610b1a565b610fb6565b856080015160020b8560020b12156119a2578060a0015160020b816060015160020b146119a2576040518060600160405280826020015160020b8152602001826060015160020b8152602001600063ffffffff168152508960008360a0015160020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff1602179055509050508060a00151896000836020015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff1602179055508060a00151896000836060015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b60a080820151600290810b600090815260208d81526040808320815160e0810183528154600f81900b82526001600160801b03600160801b91829004811695830195909552600183015480861694830194909452928390048416606082015294015491821660808501526001600160401b03908204811694840194909452600160c01b900490921660c08201528851611a3d92849190612d38565b60a082810151600290810b600090815260208e81526040918290208551918601516001600160801b03928316600160801b9184168202178255928601516060870151908316908316840217600182015560808087015191850180549688015160c090980151929093166001600160c01b0319909616959095176001600160401b03968716909302929092176001600160c01b0316600160c01b959092169490940217909255870151810b9086900b1315611cf8578460020b816060015160020b14611c47576040518060600160405280826020015160020b8152602001826060015160020b815260200187610120015163ffffffff168152508960008760020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505084896000836020015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff16021790555084896000836060015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b8060a0015160020b816060015160020b13611ce65760608181018051600290810b600090815260208d81526040808320815196870182525480850b875263010000008104850b87840152600160301b900463ffffffff1686820152845190930b82528e8152918120549185015192518b51611cca9594600f9490940b9392612cd8565b600290810b60608501520b60208301526001600160801b031687525b6000885286516001600160801b031687525b60a081018051600290810b600090815260208d90526040808220548451840b835281832060010180546001600160801b0319166001600160801b03600160801b938490048116919091179091558551850b845282842054955190940b83529082208054919094049092169291611d72908490600f0b6137f8565b82546101009290920a6001600160801b0381810219909316918316021790915560a083018051600290810b600090815260208f8152604080832080549096169095556101208c01519351830b82528e905292909220805469ffffffff0000000000001916600160301b63ffffffff909316929092029190911790556080880151810b9087900b139050611f7957856080015160020b8560020b1215611f79578460020b816000015160020b14611f67576040518060600160405280826040015160020b8152602001826000015160020b815260200187610120015163ffffffff168152508960008760020b60020b815260200190815260200160002060008201518160000160006101000a81548162ffffff021916908360020b62ffffff16021790555060208201518160000160036101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160066101000a81548163ffffffff021916908363ffffffff16021790555090505084896000836040015160020b60020b815260200190815260200160002060000160036101000a81548162ffffff021916908360020b62ffffff16021790555084896000836000015160020b60020b815260200190815260200160002060000160006101000a81548162ffffff021916908360020b62ffffff1602179055505b87516001600160801b03168852600087525b73__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3876040015160010b87611fa69190613769565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015611fe5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612009919061383e565b6001600160a01b03166040808a019190915286015173__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba3906120479060010b886137b1565b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015612086573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120aa919061383e565b6001600160a01b0316604088015260a08601516120cd9063ffffffff1643613862565b63ffffffff1660e0870152600285900b6080870181905260405163986cfba360e01b8152600481019190915273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af4158015612135573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612159919061383e565b6001600160a01b0316610160870152508492508691508590505b9750975097945050505050565b612188612fe2565b826000036121975750836100c8565b600073__$b52f7ddb7db4526c8b5c81c46a9292f776$__63986cfba3846121c25787602001516121c5565b87515b6040516001600160e01b031960e084901b16815260029190910b6004820152602401602060405180830381865af4158015612204573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612228919061383e565b9050600080841561225f57876080015160020b886040015160020b12612252578760400151612258565b87608001515b9050612287565b8760a0015160020b886060015160020b1361227e578760600151612284565b8760a001515b90505b60405163986cfba360e01b8152600282900b600482015273__$b52f7ddb7db4526c8b5c81c46a9292f776$__9063986cfba390602401602060405180830381865af41580156122da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122fe919061383e565b9150508361231757806001600160a01b03168610612324565b806001600160a01b031686115b1561233657806001600160a01b031695505b600080851561245d57604051630e8e499360e21b815260048101889052602481018990526001600160a01b038516604482015273__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af41580156123a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123c99190613879565b604051630b00d01b60e31b815260048101899052602481018a90526001600160a01b038616604482015290915073__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af4158015612432573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124569190613879565b9150612577565b604051630b00d01b60e31b8152600481018890526001600160a01b03851660248201526044810189905273__$357eccfa53a4e88c122661903e0e603301$__9063580680d890606401602060405180830381865af41580156124c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e79190613879565b604051630e8e499360e21b8152600481018990526001600160a01b0386166024820152604481018a905290915073__$357eccfa53a4e88c122661903e0e603301$__90633a39264c90606401602060405180830381865af4158015612550573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125749190613879565b91505b85156126c75760405163554d048960e11b815260048101839052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af41580156125de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126029190613879565b8960c0018181516126139190613892565b6001600160801b031690525060405163554d048960e11b815260048101829052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612680573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126a49190613879565b89610100018181516126b69190613892565b6001600160801b031690525061280d565b60405163554d048960e11b815260048101839052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af4158015612728573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061274c9190613879565b8960e00181815161275d9190613892565b6001600160801b031690525060405163554d048960e11b815260048101829052600160601b60248201526044810188905273__$1b9fef1800622f5f6a93914ffdeb7ba32f$__9063aa9a091290606401602060405180830381865af41580156127ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127ee9190613879565b89610120018181516128009190613892565b6001600160801b03169052505b5096979650505050505050565b612822613036565b60208801516001600160801b0316156128425763ffffffff871660408b01525b6001600160801b03861615612b2e5760208901518951600091612864916137f8565b9050600073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128861288d858c6138b4565b6040516001600160e01b031960e085901b1681526001600160801b03928316600482015291166024820152600160601b6044820152606401602060405180830381865af41580156128e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129069190613879565b9050600073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a09128861292f868d6138b4565b6040516001600160e01b031960e085901b1681526001600160801b03928316600482015291166024820152600160601b6044820152606401602060405180830381865af4158015612984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129a89190613879565b90506000836001600160801b03161180156129d45750826001600160801b0316896001600160801b0316115b15612b2a5773__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a091283600160601b8e604001518d612a099190613892565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526001600160801b03166044820152606401602060405180830381865af4158015612a5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7f9190613879565b975073__$1b9fef1800622f5f6a93914ffdeb7ba32f$__63aa9a091282600160601b8e604001518d612ab19190613892565b6040516001600160e01b031960e086901b168152600481019390935260248301919091526001600160801b03166044820152606401602060405180830381865af4158015612b03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b279190613879565b96505b5050505b60a08901516001600160401b031615612c35576000670de0b6b3a76400008a606001516001600160801b03168b60a001516001600160401b0316612b7291906138dc565b612b7c91906138fb565b9050808a606001818151612b9091906138b4565b6001600160801b0316905250600060a08b0152612bad8187613892565b60c08b01519096506001600160401b031615612c33576000670de0b6b3a76400008b608001516001600160801b03168c60c001516001600160401b0316612bf491906138dc565b612bfe91906138fb565b9050808b608001818151612c1291906138b4565b6001600160801b0316905250600060c08c0152612c2f8187613892565b9550505b505b8215612c57576020890180516001600160801b031660408b01526000808b5290525b8115612c9c578488606001818151612c6f9190613892565b6001600160801b0316905250608088018051859190612c8f908390613892565b6001600160801b03169052505b50506040805160a0810182526001600160801b039485168152929093166020830152509081019590955250506060830191909152608082015290565b6000806000859650600088600f0b1315612cfd57612cf68886613892565b9450612d13565b612d068861390f565b612d1090866138b4565b94505b8315612d225788519550612d2a565b886020015195505b509297949650929450505050565b612d40613087565b826001600160801b0316600003612d585750836100c8565b600082612d69578460e00151612d6f565b8460c001515b90506000670de0b6b3a764000087606001518860a001516001600160401b0316612d999190613935565b612da39190613964565b90506000876060015183612db79190613892565b90506001600160801b03831615612e905787602001516001600160801b0316866001600160801b031603612e2957806001600160801b0316826001600160801b0316670de0b6b3a7640000612e0c91906138dc565b612e1691906138fb565b6001600160401b031660a0890152612e71565b6001600160801b038116612e3d8385613892565b612e58906001600160801b0316670de0b6b3a76400006138dc565b612e6291906138fb565b6001600160401b031660a08901525b8288606001818151612e839190613892565b6001600160801b03169052505b505050600082612ea557846101200151612eac565b8461010001515b90506000670de0b6b3a764000087608001516001600160801b03168860c001516001600160401b0316612edf91906138dc565b612ee991906138fb565b90506000828860800151612efd9190613892565b90506001600160801b03831615612fd65787602001516001600160801b0316866001600160801b031603612f6f57806001600160801b0316826001600160801b0316670de0b6b3a7640000612f5291906138dc565b612f5c91906138fb565b6001600160401b031660c0890152612fb7565b6001600160801b038116612f838385613892565b612f9e906001600160801b0316670de0b6b3a76400006138dc565b612fa891906138fb565b6001600160401b031660c08901525b8288608001818151612fc99190613892565b6001600160801b03169052505b50959695505050505050565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b6040805160a081018252600080825260208083018290528351606080820186528382529181018390528085019290925292820152908101613075613087565b8152602001613082613087565b905290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6000806000808486036101a08112156130db57600080fd5b610140808212156130eb57600080fd5b8695508501359350506101608401359150610180840135801515811461311057600080fd5b939692955090935050565b815160020b81526101408101602083015161313b602084018260020b9052565b506040830151613150604084018260020b9052565b506060830151613165606084018260020b9052565b50608083015161317a608084018260020b9052565b5060a083015161318f60a084018260020b9052565b5060c08301516131aa60c08401826001600160801b03169052565b5060e08301516131c560e08401826001600160801b03169052565b50610100838101516001600160801b03908116918401919091526101209384015116929091019190915290565b60405161018081016001600160401b038111828210171561322357634e487b7160e01b600052604160045260246000fd5b60405290565b60405161014081016001600160401b038111828210171561322357634e487b7160e01b600052604160045260246000fd5b80356001600160801b038116811461327157600080fd5b919050565b6001600160a01b038116811461328b57600080fd5b50565b803561327181613276565b6000606082840312156132ab57600080fd5b604051606081018181106001600160401b03821117156132db57634e487b7160e01b600052604160045260246000fd5b6040529050806132ea8361325a565b81526132f86020840161325a565b6020820152604083013561330b81613276565b6040919091015292915050565b803560ff8116811461327157600080fd5b803561ffff8116811461327157600080fd5b8035600181900b811461327157600080fd5b8035600281900b811461327157600080fd5b803563ffffffff8116811461327157600080fd5b60008060008060008060008789036102c081121561339057600080fd5b8835975060208901359650604089013595506133af8a60608b01613299565b94506133be8a60c08b01613299565b93506101206101808061011f19840112156133d857600080fd5b6133e06131f2565b92506133ed828c01613318565b83526101406133fd818d01613329565b6020850152610160613410818e0161333b565b6040860152613420838e01613329565b60608601526134326101a08e0161334d565b60808601526134446101c08e0161335f565b60a08601526134566101e08e0161335f565b60c08601526134686102008e0161335f565b60e086015261347a6102208e01613329565b61010086015261348d6102408e0161335f565b8486015261349e6102608e0161325a565b828601526134af6102808e0161328e565b90850152509193506134c79150506102a0890161334d565b905092959891949750929550565b80516001600160801b039081168352602080830151909116908301526040908101516001600160a01b0316910152565b835160ff16815261024081016020850151613526602084018261ffff169052565b50604085015161353b604084018260010b9052565b506060850151613551606084018261ffff169052565b506080850151613566608084018260020b9052565b5060a085015161357e60a084018263ffffffff169052565b5060c085015161359660c084018263ffffffff169052565b5060e08501516135ae60e084018263ffffffff169052565b506101008581015161ffff16908301526101208086015163ffffffff1690830152610140808601516001600160801b031690830152610160808601516001600160a01b0316908301526136056101808301856134d5565b6100c86101e08301846134d5565b6000610140828403121561362657600080fd5b61362e613229565b6136378361334d565b81526136456020840161334d565b60208201526136566040840161334d565b60408201526136676060840161334d565b60608201526136786080840161334d565b608082015261368960a0840161334d565b60a082015261369a60c0840161325a565b60c08201526136ab60e0840161325a565b60e08201526101006136be81850161325a565b908201526101206136d084820161325a565b908201529392505050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008160020b8360020b8061371e5761371e6136db565b627fffff19821460001982141615613738576137386136f1565b90059392505050565b600063ffffffff808316818516808303821115613760576137606136f1565b01949350505050565b60008160020b8360020b6000811281627fffff1901831281151615613790576137906136f1565b81627fffff0183138116156137a7576137a76136f1565b5090039392505050565b60008160020b8360020b6000821282627fffff038213811516156137d7576137d76136f1565b82627fffff190382128116156137ef576137ef6136f1565b50019392505050565b600081600f0b83600f0b600082128260016001607f1b0303821381151615613822576138226136f1565b8260016001607f1b03190382128116156137ef576137ef6136f1565b60006020828403121561385057600080fd5b815161385b81613276565b9392505050565b600082821015613874576138746136f1565b500390565b60006020828403121561388b57600080fd5b5051919050565b60006001600160801b03808316818516808303821115613760576137606136f1565b60006001600160801b03838116908316818110156138d4576138d46136f1565b039392505050565b60008160001904831182151516156138f6576138f66136f1565b500290565b60008261390a5761390a6136db565b500490565b600081600f0b60016001607f1b0319810361392c5761392c6136f1565b60000392915050565b60006001600160801b038083168185168183048111821515161561395b5761395b6136f1565b02949350505050565b60006001600160801b038084168061397e5761397e6136db565b9216919091049291505056fea2646970667358221220408c3867a253b346d28d74cac0f56305f5dcc139ac50bd75b35e344936f62f6064736f6c634300080d0033";

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
