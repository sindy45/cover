/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickMath, TickMathInterface } from "../TickMath";

const _abi = [
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
    name: "WaitUntilEnoughObservations",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "getSqrtRatioAtTick",
    outputs: [
      {
        internalType: "uint160",
        name: "getSqrtPriceX96",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "getTickAtSqrtRatio",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
    ],
    name: "validatePrice",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x612a73610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806326c9c807146100505780634f76c0581461006c578063986cfba31461009c575b600080fd5b61006a60048036038101906100659190612808565b6100cc565b005b61008660048036038101906100819190612808565b61028d565b604051610093919061283a565b60405180910390f35b6100b660048036038101906100b1919061284e565b610323565b6040516100c3919061287b565b60405180910390f35b6100f87f3f2b2aaaa917479031a04c9658d8891332aa8bfbae558b02299ff3fd286d931e60001b6103b9565b6101247fc65768f69c612bc74dfe4160670a88ce18ea2a7c5f0c25446334498f46660aec60001b6103b9565b6101507faa4864da8d7d1da27c94357a779622378b348e53866b9494dd3cdbaaa932a4fd60001b6103b9565b6401000276a373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1610806101cf575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1610155b1561025e576102007f6b7cd8730ad5defbd23663e09b946115471f660d51f32002d3f9f4594a75b73260001b6103b9565b61022c7f9e8f4e562de4393c1b6ccb85337c203ba81afda285208c2df0c1621dce718ca360001b6103b9565b6040517f6e4ba61d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028a7f80c2e6c44ea2fe6bf3ab5b6bf4b9edf7bdbc4897a8190c04453dd7723a8dd8de60001b6103b9565b50565b60006102bb7fd9691eccfc870f9513dcc4604a6f7f27221cd6ba9c5149acc12131e2c2b155e960001b6103b9565b6102e77ff9f55e8fd6198b08c7f2afc92ceb8fa671c263c17586be99409646e25513173660001b6103b9565b6103137f3f34bcc4782af22184e517ad618d3625106edb43a16aaa121d48889f441c141f60001b6103b9565b61031c826103bc565b9050919050565b60006103517f19fa77493a1f07a4727d65632e4ba79ea7082dbabeaa562aed6f7a299cf9bf1d60001b6103b9565b61037d7fe50bd1d4fb04e4fb8bd5f31f07df4324ad825c3fe2b474079a42af12d76c895d60001b6103b9565b6103a97fce49b8eb6879a24649c4e655093e0216fc0923dd3fe9405197e4eb1967da942460001b6103b9565b6103b28261104a565b9050919050565b50565b60006103ea7f9044b45f05b14a0023b28039fa0fa6f3fad38a650c2ab0f2509eb6b84089862160001b6103b9565b6104167f62d2febb6a29abee4e11f4a9485bb25039420f92e8d0d2474ed4a314782a789a60001b6103b9565b6104427f671c043cf363a72b0cfd40edb33f74d0a4508fc29b253d87c4a6bd58520aad0f60001b6103b9565b6401000276a373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1610806104c1575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1610155b15610550576104f27fc2f445973072e1507befce988eae68dcf555ad43be6cbc959dd413d4b2dcaf3c60001b6103b9565b61051e7f37d6615ee9a67ff71242c7e1995616210747701f7560327cd651899ce261adae60001b6103b9565b6040517f6e4ba61d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61057c7fefa6f2bdecf4abf7fb51156d02eca6cb04a411467a6d6c1e176cc00fc3322a0c60001b6103b9565b6105a87f99679d1f774d18ef35e731dc296bc52709e087dae3d37a191e80e9099344abda60001b6103b9565b6105d47f8790dd9db363b1e8069e4b289f9293505b6a214effb325b644618e630394d82360001b6103b9565b600060208373ffffffffffffffffffffffffffffffffffffffff16901b905061061f7f0a44a629732ae7169b564c9e788932c2c1a852d543b312fecdad8ed7e3b6ecf960001b6103b9565b61064b7f9d8975ae0db974346aae86af8c85e7d2f141b85e32f3c7e2cb49b50e82e80f2160001b6103b9565b600081905061067c7ff6e2df4009f32bf673d9fbfe2501b9b92b1b77db2bf74d1aad53a1757147ef0560001b6103b9565b6106a87ffe6783aa255cdb2fd4c38df2b3f40bcd52afd81dfb57ac6998cd5a440208453c60001b6103b9565b60006106d67f4c046357007181e2942e576f9344bcc590a9e26d3f67ffe4d5dbdecae334740460001b6103b9565b6fffffffffffffffffffffffffffffffff821160071b808217915082811c9250506107237f38a70b958fdfefb78ad894cd9a9053af437328acfcdf2ac74c056c16fc48f63b60001b6103b9565b67ffffffffffffffff821160061b808217915082811c9250506107687f13136c66073b23d6d26d6dfba8044a860719aaa1fdebe214163fb28f7d19820c60001b6103b9565b63ffffffff821160051b808217915082811c9250506107a97fd1efefdbb6ca50075491b4262b6069851c61f019959fa463bf454dad07cd494f60001b6103b9565b61ffff821160041b808217915082811c9250506107e87f779c1b71952979559ae4bbadf214c2b567e49a2c174a5045f6de5bc54c50b6f860001b6103b9565b60ff821160031b808217915082811c9250506108267f996ff6da72f17c35693fb992ae64a69a5ade841ae6e968306abe43a968f1ec2d60001b6103b9565b600f821160021b808217915082811c9250506108647f3d2b248b5a5cb059284c03056dd49a972d86471559668c9911cd52691875d64d60001b6103b9565b6003821160011b808217915082811c9250506108a27fa7c8ebf2b199afc351025aec1bd4bf0e8dad2b2b8e659217745b0856de5f7d7160001b6103b9565b600182118082179150506108d87f5570646e55863ddf4a9b2baccc2e997fe3149eaa9d033955ab0c158d8d648bc960001b6103b9565b6109047fcf7a1225683f3365dbacd4a2f481e0c196b495d1d6d7aab85519243747924f0a60001b6103b9565b6080811061097b576109387fd87cea948ff9a825a75a68c612b029bd2b20075f3d86aabef343aa76898ff03560001b6103b9565b6109647fb8ff499de7ed8f98a82831e85af125abee7ee1802e99c31bd7f6abc7c6ac7b6860001b6103b9565b607f8161097191906128aa565b83901c91506109e6565b6109a77fdf800545bec2c11866efd3bc2c5e8a2d3f8dc3bfea8b6fd4830bbf531111292d60001b6103b9565b6109d37ffceb58f2b4439fd4d74663e323eefb727f74d6ddab4b718170c220fc85e8a38960001b6103b9565b80607f6109e091906128aa565b83901b91505b610a127fc0572afdca92c90d666fbaa028ed8c5049e5ea857aa5fe971b439aa7d5e3932f60001b6103b9565b610a3e7f48f1254e3971050ad0c1c852d77e0161170e15ef3bd78194c3ce3cb768e1937860001b6103b9565b60006040608083610a4f91906128c8565b901b9050610a7f7fb14eeebc2a35839c262d3d3d80a2c42d15ff094676030fbf67658163c07eefa960001b6103b9565b828302607f1c92508260801c80603f1b8217915083811c935050610ac57f7c54409244e32479cf8d440304518cbc0bb08afe22f9f14feb56ae926424476d60001b6103b9565b828302607f1c92508260801c80603e1b8217915083811c935050610b0b7fe702b332f69d700367a1c61dc411a6a2756c65ca30e5dfbb25ad68910759767e60001b6103b9565b828302607f1c92508260801c80603d1b8217915083811c935050610b517ff855a8a0a0c1cca558f5135bb5c10d1aab8da2b1426afe335d0eee735e6919ca60001b6103b9565b828302607f1c92508260801c80603c1b8217915083811c935050610b977f6c40e8c95d1c1caa37fcd2b43652bb176d4af84b93d46af29076190f157dc77460001b6103b9565b828302607f1c92508260801c80603b1b8217915083811c935050610bdd7f8e9a5a30c0e326e5af16f4f33ce72d0e3171a5b86430dfd2252131fd08e3bcf960001b6103b9565b828302607f1c92508260801c80603a1b8217915083811c935050610c237fda069094b9ac872447f434402e16cc7b2e2f709febd82780aee55f84080e685e60001b6103b9565b828302607f1c92508260801c8060391b8217915083811c935050610c697fbad4866c9cb4bbe75415c64bcfe7d6cb1421c13c0b0de6ebadf134b2cafc1d5c60001b6103b9565b828302607f1c92508260801c8060381b8217915083811c935050610caf7fbbadd8e93900fdc5824cd5e51f6334e9aa7726f020e191a67b0ff2be6013f2af60001b6103b9565b828302607f1c92508260801c8060371b8217915083811c935050610cf57f9e5d9853338cd38e3d4beca40463d8825aab2a14a677c1a50be38e1d251000d960001b6103b9565b828302607f1c92508260801c8060361b8217915083811c935050610d3b7f0fc00b3cf8942562e5d2df8a65cd028f25bb2d1c52f7b09fad92a39f4b42cbb860001b6103b9565b828302607f1c92508260801c8060351b8217915083811c935050610d817fc38302f0e34da571af9674f42d65411d96bca13a1d9f207254d18264763dd34060001b6103b9565b828302607f1c92508260801c8060341b8217915083811c935050610dc77f26093514946ddb0ba7b8e59488d282946b13d7f124815aca6dfac1976a18407760001b6103b9565b828302607f1c92508260801c8060331b8217915083811c935050610e0d7f6540a609ffe74443c33b3caf785249378f40e3e5946ef98507380bc1a52e131660001b6103b9565b828302607f1c92508260801c8060321b8217915050610e4e7fcc7e63b53b96f75bebbce8aabce9359f9546ecd7a548e79790305295d025c78860001b6103b9565b610e7a7f5ec20a7807cd7eefb16bc21c9c161bd96709c12511c712193964422a0b49d06060001b6103b9565b6000693627a301d71055774c8582610e92919061290e565b9050610ec07f40f751714dc05bbdf78a5c06a10b6f4b772437de504eff5fbafdcbdcc10756b160001b6103b9565b610eec7f16cfee76855f7ef45e145cf2137b25e443033d69ff4f5274823e404add10b68b60001b6103b9565b600060806f028f6481ab7f045a5af012a19d003aaa83610f0c91906128c8565b901d9050610f3c7fe34cce40f4fb875c2a62489e95b8a3ae5c0cb7d569f77dff1b51282a40f8d61360001b6103b9565b610f687f884cc184436aa53deb587399f9f4b040f825efa2d5133fc88f76acf8fb8116c660001b6103b9565b600060806fdb2df09e81959a81455e260799a0632f84610f88919061299a565b901d9050610fb87f2b0dff3245d8b201a7cbc33c7e9fc0474c33084b285966e4d3b4701a8f98547260001b6103b9565b610fe47f08ceb493075fac6170877ab47f76a99d2d383cbc6dffde0545f44ad5e47101e560001b6103b9565b8060020b8260020b1461103a578873ffffffffffffffffffffffffffffffffffffffff166110118261104a565b73ffffffffffffffffffffffffffffffffffffffff1611156110335781611035565b805b61103c565b815b975050505050505050919050565b60006110787fc8c87258b5945c1df5459a308664b645d62dd1e96d5964fe2cbbf6c04752c88360001b6103b9565b6110a47fe4c30eb7a3a5d2165d5e15c9806a7d661815f29698088c407e04f2ed538b0bbc60001b6103b9565b6110d07fd524d56d7cddf3578d57b1546b233c91dd08f3d072b6cfe1a93bc1de5b05f34660001b6103b9565b6000808360020b126110e5578260020b6110f3565b8260020b6110f2906129e0565b5b90506111217f0c974c1d60b83b7538dc1642087ac8cd07dca8a9e3e44eebc6111ab84441d1a660001b6103b9565b61114d7fd0e80ee0318c36ed288971d5f86001379fbf60f58dddbb0db55427466c2c844f60001b6103b9565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761861117790612a01565b62ffffff168111156111e1576111af7f484e0355a838344f4fffa4e5d0d35fc3fbc584447bb159f24d69107a335c6f3160001b6103b9565b6040517ff87dc40c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61120d7fc24c0f180853f4b6948b2ec546dafc1a0d07e51c9c6ae8f835ec65b1946013ed60001b6103b9565b6112397f5ad562aea7bad8a29ffd970624a8745a9ac9438684dd46ed36f4d89d50c8891160001b6103b9565b6112657f32b322e0517813db9520649f8437a8701a75b96f79e75bfe36b40802dc2a2e5e60001b6103b9565b6112917f3258683979bee008304e222e940a2ea635a6cbeebe092c2841f3d2c91e0ad83260001b6103b9565b60008060018316036112b4577001000000000000000000000000000000006112c6565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506113077fea99ac508ba8bded5a4cafa6d1025258e8a0dd2f79c3098c54ca857280323ca060001b6103b9565b6113337fd2807afa2f8402b5f5cc2f5b3e7fb1e854e828bbfae1e712d1d2692eac1d6c0860001b6103b9565b600060028316146113b45761136a7f7e7a03abff28c012ee95201bff7296a052687773dcfe08152b91052924069cb360001b6103b9565b6113967f4d47a95992a59e3be0866bae8c7feaac947a707770b3554de8d8a71cef354ef260001b6103b9565b60806ffff97272373d413259a46990580e213a8202901c90506113e1565b6113e07f620dcfef4515a01819d1f16d0aca6d6fabc80a6da8437e542571938535157c4460001b6103b9565b5b61140d7fbdc0ad41a7687c272c4d6629cfc6570d96f8a8b6f2edcb2fcd40c410c8a26d8d60001b6103b9565b6114397f84c06ff98658cc67c927b86f9932c606af67e12a840bd8519674f24b0bbdfe1e60001b6103b9565b600060048316146114ba576114707fb1734e09f69b1092060cb3e99eaad73535c5b800346ef60076526eca4daba1ad60001b6103b9565b61149c7f61836736e3827cacbbe47c6c4b20cd193c0ac8cfad3ed040e1fa37315ba1deee60001b6103b9565b60806ffff2e50f5f656932ef12357cf3c7fdcc8202901c90506114e7565b6114e67fca2110a5e599be4025b1db33b2fa70c4b8495160a358dad10e08c511fe7d098c60001b6103b9565b5b6115137f8c1e0e99b1eac81f0a09a1456afe02c382e90cd96f23d02c1b5432f3e207ccec60001b6103b9565b61153f7f9145c20c637350312fe630ea1b2f4b892dd9a62e0b44790c2b6bcb767ffc415760001b6103b9565b600060088316146115c0576115767fa0916b49d0d57b996ec05dc0faab88290ca80574d238f11839e14b7aa3b7b25a60001b6103b9565b6115a27f707082fa665d2a721f2235454b947184515919ec8e4db0670073314c50810f6e60001b6103b9565b60806fffe5caca7e10e4e61c3624eaa0941cd08202901c90506115ed565b6115ec7f8b93387d38d38bf7012c80f73225794346ce1e2f96a24474b6da1736b0d6242d60001b6103b9565b5b6116197feae8c99a8ddb2eeb5ab0dbfa83bc3510f6a97dc33a84f0141345a9f5f798312f60001b6103b9565b6116457fa36d7b043115b3504790e0644f1f4cbf7e6c1ab544d526edd0b3cdd09c03925660001b6103b9565b600060108316146116c65761167c7f6c0653ca824c8ec86fd3fec72d84a0f89158f08ebf7ce70163f3a7f97c5c8b6660001b6103b9565b6116a87fba8765bd7cd0f71dee2a4751f90d87d53e8c44b9f9d1f88e7f74874013ec0c0560001b6103b9565b60806fffcb9843d60f6159c9db58835c9266448202901c90506116f3565b6116f27ff4de1cf5550449fdf5caf64daa3334aec190f7ff5c29bbfbf74fd9aecb31e63460001b6103b9565b5b61171f7fea67c6cf2b574a3a5726d038e01333309fc4753dcc14755f7058c709b7fe072560001b6103b9565b61174b7fa61cee0c956c54a5106d968ad88dd92fb95553f44a488e4e4c76c89b85b9aa9b60001b6103b9565b600060208316146117cc576117827f6b8e221e1a8887bd698538e36795e9f55595c6f6792a8a0332ed620fe29bde3260001b6103b9565b6117ae7fb59113b53c32d420a7b74b64b6ad2a93eaa155a9d87569d5fb6cb149aa900c7160001b6103b9565b60806fff973b41fa98c081472e6896dfb254c08202901c90506117f9565b6117f87fc5730f1f8fa81dfc106db5ee5fb5e97d2caa2c324e322d6df7b9c09b909615c560001b6103b9565b5b6118257f505fcb92102250b3340b35a0410a4a6f4de8ee777327dd3341fdd96dc397778e60001b6103b9565b6118517fc92b1bc7faf6b96394a5def7e4265271c548e6f22dc9b7735e4d297229bf902060001b6103b9565b600060408316146118d2576118887f94071591cc6e038fb1fbf5bc143a695d46e56c353ef129c11d0612dfc977740d60001b6103b9565b6118b47fb3e630bfa4db0b1bc3fb1d97435a61d7ae2a914f0134224233b1fc9e8bec8a6c60001b6103b9565b60806fff2ea16466c96a3843ec78b326b528618202901c90506118ff565b6118fe7f4348a4b8061b9bb42339fa9d3825f64cfef1c9b3dd32ae7f84e6c3268bf0a69c60001b6103b9565b5b61192b7f2d0c7535dee60998025988e8a0d12a6764237597e567118211b7e67f7e5721cc60001b6103b9565b6119577f4a7042276049aa7438b2d2fe0c12f1cafe8fee218713109cf6ca46b51eb0785560001b6103b9565b600060808316146119d85761198e7f24bc8e64a2717ee37758680cee780922d0f70b8097341218e98c935add3b9a3860001b6103b9565b6119ba7f1e1a76af9fb62a39674b13c4d454a47cbf8a03fa3526d0761cee04374127997060001b6103b9565b60806ffe5dee046a99a2a811c461f1969c30538202901c9050611a05565b611a047f0824518db307641457d5609a5358a47a1fb768d535e74337ca7f19bd574965f460001b6103b9565b5b611a317fccec64c38e894498359363101aa76bd682052d994559d31028f784e8ec293dbb60001b6103b9565b611a5d7f78ce66dcf431a8c4c2287cad046b845994dfbac2301496e534efc9aee525115660001b6103b9565b6000610100831614611adf57611a957fb7f28f8445cee4cadd3999f6916143a6bc9fc11af22b30e3ddf8710db86f922360001b6103b9565b611ac17fda87a81d6a20bbf22a88d26b0b99336a437dc76296a67dba6b7803136509a6b860001b6103b9565b60806ffcbe86c7900a88aedcffc83b479aa3a48202901c9050611b0c565b611b0b7f3157473d9305c165e09638d58d135d5bfb58a08f1ceed271fc65630e12f00a3760001b6103b9565b5b611b387fe5cb28da410befbb0270762057126a47bc74cc72bc3a300370cef9b72fda1e3c60001b6103b9565b611b647f5234e0f226486be8b780095ba88868b17fcc436430f4bfb02ccfd59ec5dd601d60001b6103b9565b6000610200831614611be657611b9c7f32b9878c9b9cf66858e60966f901f50c5c1e8b4dbc2086eb0a1a61ec1246918760001b6103b9565b611bc87fe9375396e140e3af1ddbfebb42560e0f451473ff8e018b03ccfaaefcd47674a260001b6103b9565b60806ff987a7253ac413176f2b074cf7815e548202901c9050611c13565b611c127f884f22d4f6c734752081239c14ce8d7cab337a1e3b5e988a227a8ddc2af28cf960001b6103b9565b5b611c3f7fe69d1480c785182f031566f9fe58f5bf2f77060b75591606ade8390324425a6460001b6103b9565b611c6b7f3a4d36e7047028fff1eb0a594346e8cb969b6202cafcc58d227d66ca052f959e60001b6103b9565b6000610400831614611ced57611ca37feb4e804e42b5589fe51267426409b384a97f119a9a5a6e23c3d4b080a2c430a060001b6103b9565b611ccf7f380cd50d04e93ac5db108130a2c57e134d4ef9ee837d1afa5c6998198d5e852a60001b6103b9565b60806ff3392b0822b70005940c7a398e4b70f38202901c9050611d1a565b611d197f6c60b93af58afc98a115a5a814f0936439679400d487777e067ab45a28002a2b60001b6103b9565b5b611d467f66221733610f01b644d84aa25537598ae1794615da88d27f9b1de3656a57f77f60001b6103b9565b611d727f326ed8cd9097f5696991a979a9907ef3d4d0c39afda66bdf60077232feb061ee60001b6103b9565b6000610800831614611df457611daa7f3a1a11d6e98a4bd26b75bfd28c1afab19ca92bcdb08ed512da22e34ca87c1c8760001b6103b9565b611dd67fe35fb5c3304a887f85c7ee09141b8de1465dd76283791bdaf00e147adfb33faf60001b6103b9565b60806fe7159475a2c29b7443b29c7fa6e889d98202901c9050611e21565b611e207f890cd98897ca8b4738c5a36dd177b463e28c4dcfb912c8f711c47e6408bfcad960001b6103b9565b5b611e4d7f2f25894ae4c8059bc10e45d551a67821e8fb2ebee35f7c132964c7df444817d760001b6103b9565b611e797f74d19df836945ccc70fd8cd802fffc06e3ca92f6775d6a780385dbf95fe3b69960001b6103b9565b6000611000831614611efb57611eb17f6d3e72b739e9dc41be8fd1d68c3528a744134ae1ed91e36fd98c804898141aa960001b6103b9565b611edd7fc2aa328f6c6d4ebfd5d8e89d2683e7746e97dbd46155c92a0ed8be4e2a11e5a460001b6103b9565b60806fd097f3bdfd2022b8845ad8f792aa58258202901c9050611f28565b611f277f7f3c9be9ab7e2a90a754ec095a55ce28ad7249f26adf82727b911d85ccaa501160001b6103b9565b5b611f547f78dda05c2669c674a5549e3edb0b6160274ffc164565e7affb5196beb235ccee60001b6103b9565b611f807f7c9b41d52be35bf0b622980f7cc346a16edfb505a995bd1de37c4e8958f4ffbe60001b6103b9565b600061200083161461200257611fb87f0634ceac629ff31a3d2edc6df966e1f2d3229333419dc1ef955cbd0fcd59679d60001b6103b9565b611fe47f81df5e8100a8d214223a4d3304dcae9c23ce038d6610c259a51735372d0ca3dd60001b6103b9565b60806fa9f746462d870fdf8a65dc1f90e061e58202901c905061202f565b61202e7f3f764e34424bc9240515d4e756b818fffd14f4ea406fef57ab1fefaa8f4c752360001b6103b9565b5b61205b7f5f78a263a534171f51e3e742c594b09d2dcf97cac5280704a9a44c5b9733146460001b6103b9565b6120877f4f5bd88929d2b0ffcacd5923189fe3e802550999050d5d0a6acd590eaae35d1560001b6103b9565b6000614000831614612109576120bf7fabaee1ec0e916f47d475f93ee9cd9bc1d69cdb29a2fc3f67ce0c8bf04929692e60001b6103b9565b6120eb7f4ec95295a7a2459d077e6e6fe5833ad0fe8bab38e7af9b475390d98e438a9c9760001b6103b9565b60806f70d869a156d2a1b890bb3df62baf32f78202901c9050612136565b6121357fceb69307bdab1a2d300a6e0d05f39cf45a299206dd5050fdbcd626c1488a37dc60001b6103b9565b5b6121627f86ff306a412cd33d90c94fc4be5ba42c43dcd8ce12f80a32bc07160644c0458460001b6103b9565b61218e7fd1f4f459281a0439d903eac7600c4cc6e92e56cc04b5e865973f447a4e94448b60001b6103b9565b6000618000831614612210576121c67f2b8f2285382f9de69a8169dde169d590f628511dbac93c6bf4089b0401821a1a60001b6103b9565b6121f27f24f58485c41c7452f51d66fa1f32553b9daf6eaa04dd70714a5d8f815222887260001b6103b9565b60806f31be135f97d08fd981231505542fcfa68202901c905061223d565b61223c7f6d1aeadd5cbfd1b94bb307b4451480539417cf814ff7e406ec2b5407b5e29a8f60001b6103b9565b5b6122697f5f2afb138fa40284ec43a661e5dcd875d2a0861d130472794fd72e2d6baaeb4360001b6103b9565b6122957fbaae6a582be2b5bc7e7ccad2f9c984c41dae880a6e5265b776aea1b53d7db53160001b6103b9565b600062010000831614612318576122ce7f714c9bc4ccc64331581fd7a0c7c596abdc05c41eef3e40b2ba343d92942a87bc60001b6103b9565b6122fa7fc4a351bac4d1f5fe6916d0e9af0e8215a53ef4336a0ad4e3e2f9aa670ab878e760001b6103b9565b60806f09aa508b5b7a84e1c677de54f3e99bc98202901c9050612345565b6123447f2aa3d2346acd329565d5f312627d860b19253394159c5d2ae87a376fe6c8b38160001b6103b9565b5b6123717fd4eb9328ede7aba382ca6b95f7eff30d44c503f39b4243ae887bac6ff9ea71a760001b6103b9565b61239d7fc367bb20158ff84617149bc84f556c583a941067cb780ea294150d73a81ffc7b60001b6103b9565b60006202000083161461241f576123d67f914b3280e09cde5743397d7a0d207c70503bb6ccf21a8343256c8c65795c768060001b6103b9565b6124027fc703b43733f6bff61c33a0f8bdfd5540508bde01113b177edda986bb32f32abe60001b6103b9565b60806e5d6af8dedb81196699c329225ee6048202901c905061244c565b61244b7f365cb1bfa3ef0ace26e5c5a11c6aa0c6135095e820846df7b3d593672bfc359260001b6103b9565b5b6124787f7bcf03c66a862590a2027242f62c2ea4dc353213afbddcabaff3c137feabce6360001b6103b9565b6124a47f32a164cb8fbd4e58bf214a4cd0e6e653872dd954b43614bb2f7272d9df5a5a4960001b6103b9565b600062040000831614612525576124dd7fe21081008086e0487ce8be3c4790308b549c930e7bf6ec798ebd8b7c6ee5995d60001b6103b9565b6125097fdc911133121ad5764572920a8afd5cd18bcc563a20d821255ad6c57a2bb7cf1860001b6103b9565b60806d2216e584f5fa1ea926041bedfe988202901c9050612552565b6125517ff6a50e01d1596bbdb4fb536d2741210f613f7c46bdfdc23459bba8e60270442860001b6103b9565b5b61257e7f13268d8f4514674c02eecd900b29c33962c66aa89713be42306fae0d3e224f4360001b6103b9565b6125aa7fe18757ba2003a47e0638e56ab3f5e3ac25ca2ce4f65755ef1b314d8556593af860001b6103b9565b600062080000831614612629576125e37f93e034fe69e4980a27cda504c72c6820ec57cc761279fcf38d2307fc63748b0d60001b6103b9565b61260f7f18efe9760f106a382f71412f1ee00f6e48bf767baf96bda28858e116620233db60001b6103b9565b60806b048a170391f7dc42444e8fa28202901c9050612656565b6126557f892fc7ec57b414c0bb9868f8becb4e387af5b682687e85306aafc1db11bb8eeb60001b6103b9565b5b6126827f91d1046c3cfd29e9db2367c52a63efbf8ceb3e7a992cc615926fbbc1399a483a60001b6103b9565b6126ae7f707f173916c1e6be736d45f577180a98f96db3a3f863aae4030db87b4e3abf0b60001b6103b9565b60008460020b131561274a576126e67f9726768c4b1d373bf5bac37b83d2b3dd62178470e8de8882eaf4ffc08e85042260001b6103b9565b6127127f5ddaae8638c68785e332ce6dd7ce09a14e8b216de645f5f0cb786e6ba093425260001b6103b9565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8161274257612741612a27565b5b049050612777565b6127767fd0822020715fd3857c9e5c7b696b2be929d02bdfa8af9a100cce93077598956760001b6103b9565b5b6127a37fc49f0ab37e6b2cc7dfd2be937bbe787e94d92ef312943d68545b11145ff271d360001b6103b9565b6127cf7fa6b7e9b3b60a9a413571ee70281c9e16857b794c7ab9053b91281cae2861a58b60001b6103b9565b600064010000000082816127e6576127e5612a27565b5b06146127f35760016127f6565b60005b60ff16602082901c0192505050919050565b60006020828403121561281a57600080fd5b813560018060a01b038116811461283057600080fd5b8091505092915050565b60006020820190508260020b825292915050565b60006020828403121561286057600080fd5b81358060020b811461287157600080fd5b8091505092915050565b600060208201905060018060a01b038316825292915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156128bd576128bc612894565b5b828203905092915050565b600080831283600160ff1b018312811516156128e7576128e6612894565b5b8360018060ff1b0301831381161561290257612901612894565b5b50828203905092915050565b600060018060ff1b0360008413600084138583048511828216161561293657612935612894565b5b600160ff1b600087128682058812818416161561295657612955612894565b5b6000871292508782058712848416161561297357612972612894565b5b8785058712818416161561298a57612989612894565b5b5050505050828202905092915050565b60008082128260018060ff1b03038413811516156129bb576129ba612894565b5b82600160ff1b0384128116156129d4576129d3612894565b5b50828201905092915050565b6000600160ff1b82036129f6576129f5612894565b5b816000039050919050565b60008160020b627fffff198103612a1b57612a1a612894565b5b80600003915050919050565b634e487b7160e01b600052601260045260246000fdfea2646970667358221220886f9ef049c4bd36b0c65bc447353556ad2bb644317f3b334b009bf420a144c864736f6c634300080d0033";

export class TickMath__factory extends ContractFactory {
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
  ): Promise<TickMath> {
    return super.deploy(overrides || {}) as Promise<TickMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickMath {
    return super.attach(address) as TickMath;
  }
  connect(signer: Signer): TickMath__factory {
    return super.connect(signer) as TickMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickMathInterface {
    return new utils.Interface(_abi) as TickMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMath {
    return new Contract(address, _abi, signerOrProvider) as TickMath;
  }
}
