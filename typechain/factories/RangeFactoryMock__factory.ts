/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RangeFactoryMock,
  RangeFactoryMockInterface,
} from "../RangeFactoryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "feeTierTickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "getPool",
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
  "0x60806040523480156200001157600080fd5b506040516200220238038062002202833981810160405281019062000037919062000705565b6200006b7fddccb0162ff729e3bc93ba1863124c6b483bda831e06f13dd5f83723f8a0548360001b6200068a60201b60201c565b6200009f7f03f22256c51a443a5af09c0122f8a635c78bb5a8e1bd61f05efd78cd126ef86d60001b6200068a60201b60201c565b620000d37f3620bbe47c931f268bcd59dea8e3ac6a040b2933398d4eaadcea77ad6e185e5360001b6200068a60201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001487f18fc9cbe9dcb5f0f0709127877256c73f3b6eac72d4505bd9f6a5dd2cc8327a060001b6200068a60201b60201c565b6200017c7f96288f91012cff4e1abd7409fec4b3dfc7cef9ec8e3345f682e1e46c1128169b60001b6200068a60201b60201c565b620001b07f1e8b037b2b71a7d96d749b6744d5ccdd104b4f955d8af095f7cd080652cf530460001b6200068a60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161062000221576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200021890620007ad565b60405180910390fd5b620002557f865b291211fafc1f866de816f1c3c4178cd04b4e5c0d7161ccd2f9ec2d5ee5e660001b6200068a60201b60201c565b620002897f1bf6c84aa194aa7c3b6080dffa8663dbdc45e87736c1243193ba130c7d936c0460001b6200068a60201b60201c565b620002bd7f654041c642ad70d02628a38b1a5ff5bcefac79c2f89ef59baa9151f6f6abb29e60001b6200068a60201b60201c565b600a600260006101f462ffffff16815260200190815260200160002060006101000a81548162ffffff021916908360020b62ffffff1602179055506200032c7f4f37da31b1a326da12c5d930c16fec9375055242a971ceba326433b8dd23658e60001b6200068a60201b60201c565b620003607f1fafcf2650f5f909b2dcce55a6d55c612839e7329da646725f17b56fed9f2b1160001b6200068a60201b60201c565b603c60026000610bb862ffffff16815260200190815260200160002060006101000a81548162ffffff021916908360020b62ffffff160217905550620003cf7fafac11370e042b3c3ea4997247dec6ee821c2b1bb919e71f26a4fee22bd21ee160001b6200068a60201b60201c565b620004037f86a610b69705eb1a574e4079498e34829d5ff411520436cd026d823950d658f860001b6200068a60201b60201c565b60c86002600061271062ffffff16815260200190815260200160002060006101000a81548162ffffff021916908360020b62ffffff160217905550620004727f164ae111ed534f1d59270f87faef6bcaf3ed9b3a670e49045b8f7c2b30fca5d060001b6200068a60201b60201c565b620004a67f11576485ee8ab649de5f1329428d2436d88623817efbcbe7fe26b874a579d52460001b6200068a60201b60201c565b81816101f4600a604051620004bb906200068d565b620004ca94939291906200088c565b604051809103906000f080158015620004e7573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200055b7f86cc359485cb4af9d33463bf021cf3b83fa14fbf80e310abf7d0db9c7e294bd260001b6200068a60201b60201c565b6200058f7f8ceec6b45f5fa2de52e4350003e33756399dd469ea3b2c024c6b198431b84c8860001b6200068a60201b60201c565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101f462ffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620008d9565b50565b61165a8062000ba883390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620006cd82620006a0565b9050919050565b620006df81620006c0565b8114620006eb57600080fd5b50565b600081519050620006ff81620006d4565b92915050565b600080604083850312156200071f576200071e6200069b565b5b60006200072f85828601620006ee565b92505060206200074285828601620006ee565b9150509250929050565b600082825260208201905092915050565b7f77726f6e6720746f6b656e206f72646572000000000000000000000000000000600082015250565b6000620007956011836200074c565b9150620007a2826200075d565b602082019050919050565b60006020820190508181036000830152620007c88162000786565b9050919050565b620007da81620006c0565b82525050565b6000819050919050565b600062ffffff82169050919050565b6000819050919050565b6000620008246200081e6200081884620007e0565b620007f9565b620007ea565b9050919050565b620008368162000803565b82525050565b6000819050919050565b60008160020b9050919050565b6000620008746200086e62000868846200083c565b620007f9565b62000846565b9050919050565b620008868162000853565b82525050565b6000608082019050620008a36000830187620007cf565b620008b26020830186620007cf565b620008c160408301856200082b565b620008d060608301846200087b565b95945050505050565b6102bf80620008e96000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631698ee821461003b5780637b12f2701461006b575b600080fd5b610055600480360381019061005091906101a8565b61009b565b604051610062919061020a565b60405180910390f35b61008560048036038101906100809190610225565b6100ea565b604051610092919061026e565b60405180910390f35b6003602052826000526040600020602052816000526040600020602052806000526040600020600092509250509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915054906101000a900460020b81565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061013a8261010f565b9050919050565b61014a8161012f565b811461015557600080fd5b50565b60008135905061016781610141565b92915050565b600062ffffff82169050919050565b6101858161016d565b811461019057600080fd5b50565b6000813590506101a28161017c565b92915050565b6000806000606084860312156101c1576101c061010a565b5b60006101cf86828701610158565b93505060206101e086828701610158565b92505060406101f186828701610193565b9150509250925092565b6102048161012f565b82525050565b600060208201905061021f60008301846101fb565b92915050565b60006020828403121561023b5761023a61010a565b5b600061024984828501610193565b91505092915050565b60008160020b9050919050565b61026881610252565b82525050565b6000602082019050610283600083018461025f565b9291505056fea264697066735822122073db9d700269b28f4de6b9a03abd4d2b37025a99093e3c6e6a557525b515f52a64736f6c634300080d003360806040523480156200001157600080fd5b506040516200165a3803806200165a8339818101604052810190620000379190620006a3565b6200006b7f6646581b76c127fb244e6812f8c2744a08b6946f0bc03e057fe34846f715b4b760001b620005b860201b60201c565b6200009f7f70161ba57bb26c0725cfd48b193fced83f40b1a46c6cd4609ca2d9be38f75aa460001b620005b860201b60201c565b620000d37f0d3a5bce96c7404adfec59642fc62bdd9a3a549d398d561278229652a60c698160001b620005b860201b60201c565b620001077fd0f7dd6cf9c7d632bedf0f186904151d814221e1ff270bb2c2733a115d8baafa60001b620005b860201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161062000178576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016f9062000776565b60405180910390fd5b620001ac7fcbdc3dff2abfbdcebaf68bf9b0a6f2f523ad40108df1480412722b8e69b8935360001b620005b860201b60201c565b620001e07fcf394e934872211abd6487ade902e1a124563d049b6d50d78f8486a4b010289d60001b620005b860201b60201c565b620002147f8df2bb828083d1e2b3ae5667ef65debd5e31a4dd779846fa88fdad829322b27c60001b620005b860201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002887ff494f6a31f9453ede8ba346c5f8532fdaed15b51de12904d80456e5bb05708ce60001b620005b860201b60201c565b620002bc7fe535669438c654dd4653c8e05216b22938b57d220f2d2bfdd52dd1187cc8510560001b620005b860201b60201c565b83600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620003317f350e385cf88e668cf67ff70c7e5c4d6c1e6a751225b9f979a0517655e134a73460001b620005b860201b60201c565b620003657f35116e2f7db572343388d866f6a582f0d663dc271d7dab8aa323464a047d2f4760001b620005b860201b60201c565b82600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620003da7f63f3344101d4c108324dcf46fcf5b5ed6b6a916f91dcedfa3f27dc6e75dd559660001b620005b860201b60201c565b6200040e7f27b3e4f70e844f1defd4b35bb32de4b378fd152b9c821bc94e55a2e60abe239060001b620005b860201b60201c565b8162ffffff166003819055506200044e7fec15baa25a69510a1d951525890813efcba35dd72584c3f721a0e0ab3951b01e60001b620005b860201b60201c565b620004827f71391b34ad79b1e36e1bc317fa9721e464467631f23da2091955c8699eb5227c60001b620005b860201b60201c565b80600260146101000a81548162ffffff021916908360020b62ffffff160217905550620004d87f368ea702087499a39051dbfdc236ba2de66cfabdb5dde3cb066ad4a72f035d3660001b620005b860201b60201c565b6200050c7f642f28dea2fdb2aa71cf42955f8852a1e522291d8d8edbf245811596f9497d4360001b620005b860201b60201c565b60048060006101000a81548161ffff021916908361ffff1602179055506200055d7f8d7082ac19bc7d4a8779bb6047b7250d1758a9458ca529c3b58e0e7a313be35c60001b620005b860201b60201c565b620005917f5662e1f26ee3654e6ac20fb795ec3bd9b38253af1187a719fe75c6959378e70660001b620005b860201b60201c565b60048060026101000a81548161ffff021916908361ffff1602179055505050505062000798565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005ed82620005c0565b9050919050565b620005ff81620005e0565b81146200060b57600080fd5b50565b6000815190506200061f81620005f4565b92915050565b600062ffffff82169050919050565b6200063f8162000625565b81146200064b57600080fd5b50565b6000815190506200065f8162000634565b92915050565b60008160020b9050919050565b6200067d8162000665565b81146200068957600080fd5b50565b6000815190506200069d8162000672565b92915050565b60008060008060808587031215620006c057620006bf620005bb565b5b6000620006d0878288016200060e565b9450506020620006e3878288016200060e565b9350506040620006f6878288016200064e565b925050606062000709878288016200068c565b91505092959194509250565b600082825260208201905092915050565b7f77726f6e6720746f6b656e206f72646572000000000000000000000000000000600082015250565b60006200075e60118362000715565b91506200076b8262000726565b602082019050919050565b6000602082019050818103600083015262000791816200074f565b9050919050565b610eb280620007a86000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063915a48881161005b578063915a48881461011c578063d0c93a7c14610138578063d21220a714610156578063eb25c51f1461017457610088565b80630dfe16811461008d57806332148f67146100ab5780633850c7bd146100c7578063883bdbfd146100eb575b600080fd5b610095610190565b6040516100a291906109b9565b60405180910390f35b6100c560048036038101906100c09190610a18565b6101b6565b005b6100cf61025a565b6040516100e29796959493929190610ab6565b60405180910390f35b61010560048036038101906101009190610b8a565b610337565b604051610113929190610d60565b60405180910390f35b61013660048036038101906101319190610a18565b610765565b005b610140610809565b60405161014d9190610d97565b60405180910390f35b61015e61081c565b60405161016b91906109b9565b60405180910390f35b61018e60048036038101906101899190610dde565b610842565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101e27f86906d301c6080bf011c0186c7e8e9e0db5239186a76e97a720bb8409acb81fa60001b610975565b61020e7fd52ffe4c47e0e33091cd5dee7863f8afac901869937ebcf16960b4f9977072ae60001b610975565b61023a7f5993c014a737d8152223c4524c57084521c341aff93e15919ef1a75579ce4e9560001b610975565b80600460026101000a81548161ffff021916908361ffff16021790555050565b60008060008060008060006102917f7bf7396583afa74ce2a1bad0e70d4bdca0853f8216b554e70de26ab861dd6ac060001b610975565b6102bd7fd182920d441b88c6815a3270a4b65594527a06b7be19bf123461ad8a647c6fd560001b610975565b6102e97ffcdf74383a545aa4de75a4108b19890a70abf78b21403a40e10411c2d02af77b60001b610975565b6c01000000000000000000000000600060048060009054906101000a900461ffff16600460029054906101000a900461ffff1660646001965096509650965096509650965090919293949596565b6060806103667f100b9b38559b4f67e5928620f89a861d53a5ee8ceb6b8a37d2079b64be0d6f8a60001b610975565b6103927f1c1c8b8510440c0bd44c7309468daa4cb1ca319a2c1c92a12aa2405c73e3df7860001b610975565b6103be7fdf2082976045ee7d8e2643a805bac885d65eb1abf5b33fba3ed0c8c18afe358160001b610975565b6103ea7f7220a88cae656aeb07440e0513ab3c47a8e84bd89debca0c9610c5df9162d95860001b610975565b8383905067ffffffffffffffff81111561040757610406610e1e565b5b6040519080825280602002602001820160405280156104355781602001602082028036833780820191505090505b5091506104647f1aebcc1ed6be47a7a20673a9e1e338fa26bcdc04bdcfc0c3a1b5239e412c0fb960001b610975565b6104907f1eec5431ca1138f07f494430a38a2a30ff9c560307bcd24d349b18f2b1240cce60001b610975565b60048054906101000a900460060b826000815181106104b2576104b1610e4d565b5b602002602001019060060b908160060b815250506104f27fd6d8d2c4cb438c2d10f23bdfec4809950f4502b105504b82c627ccc70a5981ed60001b610975565b61051e7fb2ccdcee78357f2e90b508e823a3791bcc934c7f78888ab7b6680f9c963a551d60001b610975565b6004600b9054906101000a900460060b8260018151811061054257610541610e4d565b5b602002602001019060060b908160060b815250506105827fd3bdb00f8d770e0ff965e05d518ad2fb9b72f53c59cd288dec5a272e30a53d2460001b610975565b6105ae7f8359e3b2e3b316680632948d2d996541031bb14bb61eeffd79f81b1d98004d0c60001b610975565b8383905067ffffffffffffffff8111156105cb576105ca610e1e565b5b6040519080825280602002602001820160405280156105f95781602001602082028036833780820191505090505b5090506106287f56777c292f0b48a37246708d1bff2b7565e0309ee6771246e70e91a1c24518b360001b610975565b6106547fe498a9bd8b9aeb26e5c12496637e2c932c29b857c548af30459cfc4b827b014160001b610975565b69c91435798c9226a0e6d78160008151811061067357610672610e4d565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506106d97f83a0932c00c4b1eb52949214428098390c9a82e231bf13c24f39d54bf41ebd0b60001b610975565b6107057f5a7906aec769c9ed0f81f2dba3201c5e662277a6bd4a05bdea34383252dea59060001b610975565b69c914354b931643013aeb8160018151811061072457610723610e4d565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250509250929050565b6107917fa3fb8e33772e2a0ee77af93e864dde0de5090e490c0544d6961fdd5e27ad542860001b610975565b6107bd7f8591fbf98a29723a1e30c9f6a06e06cf89b3391289952e667a5e46d55d3f6b0660001b610975565b6107e97f974a30f722e0d025d4cd90f8782c9c8bb4ead43af86ff51ae6df6551f8bbf44d60001b610975565b80600460006101000a81548161ffff021916908361ffff16021790555050565b600260149054906101000a900460020b81565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61086e7f0b6ccd01957698015150c0daa7cae413315cb5b3d23ea4511aa6efaec0f2aa4a60001b610975565b61089a7f89f6c75e683d635abda662a8a0371b0d0ee1de9938427aee026e32a4dfa7096060001b610975565b6108c67f9eab492116f76accaeb6fc9d4cfb85d821c421621d34d5c95c406e8d7f1f4d0560001b610975565b816004806101000a81548166ffffffffffffff021916908360060b66ffffffffffffff16021790555061091b7f5f62b9f3eb560eb3f1e1edcb5c8ab48bd27c51ec96755f9a7624d51aee60232d60001b610975565b6109477fc77d1eccf5a06245c69a9ab3e81012f9870755a0213af151c652b3bc6ee8085760001b610975565b806004600b6101000a81548166ffffffffffffff021916908360060b66ffffffffffffff1602179055505050565b50565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109a382610978565b9050919050565b6109b381610998565b82525050565b60006020820190506109ce60008301846109aa565b92915050565b600080fd5b600080fd5b600061ffff82169050919050565b6109f5816109de565b8114610a0057600080fd5b50565b600081359050610a12816109ec565b92915050565b600060208284031215610a2e57610a2d6109d4565b5b6000610a3c84828501610a03565b91505092915050565b610a4e81610978565b82525050565b60008160020b9050919050565b610a6a81610a54565b82525050565b610a79816109de565b82525050565b600060ff82169050919050565b610a9581610a7f565b82525050565b60008115159050919050565b610ab081610a9b565b82525050565b600060e082019050610acb600083018a610a45565b610ad86020830189610a61565b610ae56040830188610a70565b610af26060830187610a70565b610aff6080830186610a70565b610b0c60a0830185610a8c565b610b1960c0830184610aa7565b98975050505050505050565b600080fd5b600080fd5b600080fd5b60008083601f840112610b4a57610b49610b25565b5b8235905067ffffffffffffffff811115610b6757610b66610b2a565b5b602083019150836020820283011115610b8357610b82610b2f565b5b9250929050565b60008060208385031215610ba157610ba06109d4565b5b600083013567ffffffffffffffff811115610bbf57610bbe6109d9565b5b610bcb85828601610b34565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008160060b9050919050565b610c1981610c03565b82525050565b6000610c2b8383610c10565b60208301905092915050565b6000602082019050919050565b6000610c4f82610bd7565b610c598185610be2565b9350610c6483610bf3565b8060005b83811015610c95578151610c7c8882610c1f565b9750610c8783610c37565b925050600181019050610c68565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610cd781610978565b82525050565b6000610ce98383610cce565b60208301905092915050565b6000602082019050919050565b6000610d0d82610ca2565b610d178185610cad565b9350610d2283610cbe565b8060005b83811015610d53578151610d3a8882610cdd565b9750610d4583610cf5565b925050600181019050610d26565b5085935050505092915050565b60006040820190508181036000830152610d7a8185610c44565b90508181036020830152610d8e8184610d02565b90509392505050565b6000602082019050610dac6000830184610a61565b92915050565b610dbb81610c03565b8114610dc657600080fd5b50565b600081359050610dd881610db2565b92915050565b60008060408385031215610df557610df46109d4565b5b6000610e0385828601610dc9565b9250506020610e1485828601610dc9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122015b2fc057fea2d1b8aa30e52284996fc72e59bb5427cde701f22065e5d871ba864736f6c634300080d0033";

export class RangeFactoryMock__factory extends ContractFactory {
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
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RangeFactoryMock> {
    return super.deploy(
      tokenA,
      tokenB,
      overrides || {}
    ) as Promise<RangeFactoryMock>;
  }
  getDeployTransaction(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenA, tokenB, overrides || {});
  }
  attach(address: string): RangeFactoryMock {
    return super.attach(address) as RangeFactoryMock;
  }
  connect(signer: Signer): RangeFactoryMock__factory {
    return super.connect(signer) as RangeFactoryMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RangeFactoryMockInterface {
    return new utils.Interface(_abi) as RangeFactoryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RangeFactoryMock {
    return new Contract(address, _abi, signerOrProvider) as RangeFactoryMock;
  }
}
