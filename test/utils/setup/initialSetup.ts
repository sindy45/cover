import { expect } from "chai";
import { BigNumber, ContractReceipt } from "ethers";
import { once } from "events";
import { getNonce, writeDeploymentsFile } from "../../../tasks/utils";
import { Token20__factory, PoolsharkHedgePoolFactory__factory, ConcentratedFactoryMock__factory, Ticks__factory, TickMath__factory } from "../../../typechain";

export class InitialSetup {

    private token0Decimals = 18;
    private token1Decimals = 18;

    constructor() {}

    public async initialHedgePoolSetup(nonce: number): Promise<number> {

        const tokenA = await new Token20__factory(hre.props.alice).deploy(
            "Token20A",
            "TOKEN20A",
            this.token0Decimals,
            {nonce: nonce}
        );
        nonce += 1;
        const tokenB = await new Token20__factory(hre.props.alice).deploy(
            "Token20B",
            "TOKEN20B",
            this.token1Decimals,
            {nonce: nonce}
        );

        nonce += 1;
        const tokenOrder = tokenA.address.localeCompare(tokenB.address);
        if(tokenOrder < 0) {
            hre.props.token0 = tokenA;
            hre.props.token1 = tokenB;
        }
        else{
            hre.props.token0 = tokenB;
            hre.props.token1 = tokenA;
        }

        writeDeploymentsFile(
            "Token0",
            hre.props.token0.address,
            hre.network.config.chainId
        );
        writeDeploymentsFile(
            "Token1",
            hre.props.token1.address,
            hre.network.config.chainId
        );

        hre.props.concentratedFactoryMock = await new ConcentratedFactoryMock__factory(hre.props.alice)
                                                        .deploy(
                                                            hre.props.token0.address,
                                                            hre.props.token1.address,
                                                            {nonce: nonce}
                                                        )
        nonce += 1;

        hre.props.hedgePoolFactory = await new PoolsharkHedgePoolFactory__factory(
                                         hre.props.alice
                                    ).deploy(hre.props.concentratedFactoryMock.address, {nonce: nonce});
        nonce += 1;

        writeDeploymentsFile(
            "PoolSharkHedgePoolFactory",
            hre.props.hedgePoolFactory.address,
            hre.network.config.chainId
        );

        const createPoolTxn = await hre.props.hedgePoolFactory.createHedgePool(
                                    hre.props.token0.address,
                                    hre.props.token1.address,
                                    "500"
                                );
        await createPoolTxn.wait();
        
        const hedgePoolAddress = await hre.props.hedgePoolFactory.getHedgePool(
                                    hre.props.token0.address,
                                    hre.props.token1.address,
                                    "500"
                                );
        hre.props.hedgePool = await hre.ethers.getContractAt("PoolsharkHedgePool", hedgePoolAddress);

        return nonce;
    }

    
};
