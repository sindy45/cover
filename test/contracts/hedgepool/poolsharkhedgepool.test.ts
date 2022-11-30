/* global describe it before ethers */
const hardhat = require('hardhat');
const { expect } = require("chai");
import { gBefore } from '../../utils/hooks.test';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { hrtime } from "process";
import { BigNumber } from 'ethers';
import { gasUsed } from '../../utils/blocks';
import { TEXT_COLOR } from '../../utils/colors';
import { mintSigners20 } from '../../utils/token';
import { validateMint, Position, Q64x96, BN_ZERO } from '../../utils/contracts/hedgepool/hedgepool';

alice: SignerWithAddress;
describe('PoolsharkHedgePool Basic Tests', function () {

  let token0Amount: BigNumber;
  let token1Amount: BigNumber;
  let token0Decimals: number;
  let token1Decimals: number;
  let currentPrice: BigNumber;

  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let carol: SignerWithAddress;

  const liquidityAmount = BigNumber.from('199760153929825488153727');

  before(async function () {
    await gBefore();
    let currentBlock = await ethers.provider.getBlockNumber();
    //TODO: maybe just have one view function that grabs all these
    //TODO: map it to an interface
    const liquidity           = await hre.props.hedgePool.liquidity();
    const secondsGrowthGlobal = await hre.props.hedgePool.secondsGrowthGlobal();
    const lastBlockNumber     = await hre.props.hedgePool.lastBlockNumber();
    const feeGrowthGlobal     = await hre.props.hedgePool.feeGrowthGlobal();
    const feeGrowthGlobalLast = await hre.props.hedgePool.feeGrowthGlobalLast();
    const latestTick          = await hre.props.hedgePool.latestTick();
    const nearestTick         = await hre.props.hedgePool.nearestTick();

    expect(liquidity).to.be.equal(BN_ZERO);
    expect(secondsGrowthGlobal).to.be.equal(BN_ZERO);
    expect(lastBlockNumber).to.be.equal(currentBlock);
    expect(feeGrowthGlobal).to.be.equal(BN_ZERO);
    expect(feeGrowthGlobalLast).to.be.equal(BN_ZERO);
    expect(latestTick).to.be.equal(BN_ZERO);
    expect(nearestTick).to.be.equal(BN_ZERO);

    // console.log("sqrt price:", await (await hre.props.hedgePool.sqrtPrice()).toString());
    currentPrice = await hre.props.hedgePool.sqrtPrice();
    token0Decimals = await hre.props.token0.decimals();
    token1Decimals = await hre.props.token1.decimals();
    token0Amount = ethers.utils.parseUnits("100", token0Decimals);
    token1Amount = ethers.utils.parseUnits("100", token1Decimals);
    alice = hre.props.alice;
    bob   = hre.props.bob;
    carol = hre.props.carol;

    await mintSigners20(
      hre.props.token0,
      token0Amount.mul(10),
      [hre.props.alice, hre.props.bob]
    )

    await mintSigners20(
      hre.props.token1,
      token1Amount.mul(10),
      [hre.props.alice, hre.props.bob]
    )
  });

  this.beforeEach(async function () {

  });

  it('Should mint new LP position', async function () {
    const lowerOld = hre.ethers.utils.parseUnits("0", 0);
    const lower    = hre.ethers.utils.parseUnits("20", 0);
    const upperOld = hre.ethers.utils.parseUnits("887272", 0);
    const upper    = hre.ethers.utils.parseUnits("30", 0);
    await hre.props.token1.approve(hre.props.hedgePool.address, token1Amount);
    const txn = await hre.props.hedgePool.mint(
      {
        lowerOld: lowerOld,
        lower: lower,
        upperOld: upperOld,
        upper: upper,
        amountDesired: token1Amount,
        zeroForOne: false,
        native: false
      }
    );
    await txn.wait();
    
    let token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    expect(token1Balance).to.be.equal(token1Amount.mul(9));
    // validate position
    const position: Position = await hre.props.hedgePool.positions(
      hre.props.alice.address,
      lower,
      upper
    );
    //TODO: add math to validate liquidity amount
    expect(position.liquidity).to.be.equal(
      liquidityAmount
    );
    
    // validate upper and lower ticks
    const lowerTick = await hre.props.hedgePool.ticks(
      lower
    );
    const upperTick = await hre.props.hedgePool.ticks(
      upper
    );
    // console.log("lower", lowerTick.toString());
    // console.log("upper:", upperTick.toString());

    expect(lowerTick.previousTick).to.be.equal(lowerOld);
    expect(lowerTick.nextTick).to.be.equal(upper);
    expect(lowerTick.amountIn).to.be.equal(BN_ZERO);
    expect(lowerTick.liquidity).to.be.equal(liquidityAmount);

    expect(upperTick.previousTick).to.be.equal(lower);
    expect(upperTick.nextTick).to.be.equal(upperOld);
    expect(upperTick.amountIn).to.be.equal(BN_ZERO);
    expect(upperTick.liquidity).to.be.equal(liquidityAmount);
  });

  it('Should swap with zero output', async function () {
    const lowerOld = hre.ethers.utils.parseUnits("0", 0);
    const lower    = hre.ethers.utils.parseUnits("20", 0);
    const upperOld = hre.ethers.utils.parseUnits("887272", 0);
    const upper    = hre.ethers.utils.parseUnits("30", 0);
    const amount   = hre.ethers.utils.parseUnits("100", await hre.props.token0.decimals());
    await hre.props.token0.approve(hre.props.hedgePool.address, token0Amount);
    let txn = await hre.props.hedgePool.swap(
      hre.props.alice.address,
      true,
      token0Amount.div(10),
      currentPrice
    );
    // validate upper and lower ticks
    const lowerTick = await hre.props.hedgePool.ticks(
      lower
    );
    const upperTick = await hre.props.hedgePool.ticks(
      upper
    );
    // console.log("lower", lowerTick.toString());
    // console.log("upper:", upperTick.toString());

    expect(lowerTick.previousTick).to.be.equal(lowerOld);
    expect(lowerTick.nextTick).to.be.equal(upper);
    expect(lowerTick.amountIn).to.be.equal(BN_ZERO);
    expect(lowerTick.liquidity).to.be.equal(liquidityAmount);

    expect(upperTick.previousTick).to.be.equal(lower);
    expect(upperTick.nextTick).to.be.equal(upperOld);
    expect(upperTick.amountIn).to.be.equal(BN_ZERO);
    expect(upperTick.liquidity).to.be.equal(liquidityAmount);
  });

  it('Should burn LP position and withdraw all liquidity', async function () {
    const lowerOld = hre.ethers.utils.parseUnits("-887272", 0);
    const lower    = hre.ethers.utils.parseUnits("20", 0);
    const upperOld = hre.ethers.utils.parseUnits("887272", 0);
    const upper    = hre.ethers.utils.parseUnits("30", 0);
    const amount   = hre.ethers.utils.parseUnits("100", await hre.props.token0.decimals());
    let upperTick = await hre.props.hedgePool.ticks(
      upper
    );
    let token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    expect(token1Balance).to.be.equal(token1Amount.mul(9));
    const txn = await hre.props.hedgePool.burn(
      lower,
      upper,
      lower,
      liquidityAmount
    );
    await txn.wait();
    upperTick = await hre.props.hedgePool.ticks(
      upper
    );
    // console.log(await hre.props.hedgePool.positions(
    //   hre.props.alice.address,
    //   lower,
    //   upper
    // ));
    token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    expect(token1Balance).to.be.equal(token1Amount.mul(10).sub(1));
    // validateMint(

    // )
  });

  it('Should move TWAP and do a successful swap', async function () {
    const lowerOld = hre.ethers.utils.parseUnits("0", 0);
    const lower    = hre.ethers.utils.parseUnits("20", 0);
    const upperOld = hre.ethers.utils.parseUnits("887272", 0);
    const upper    = hre.ethers.utils.parseUnits("30", 0);
    const amount   = hre.ethers.utils.parseUnits("100", await hre.props.token0.decimals());
    let token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    await hre.props.token1.approve(hre.props.hedgePool.address, token1Amount);
    expect(token1Balance).to.be.equal(token1Amount.mul(10).sub(1));
    let txn = await hre.props.hedgePool.mint(
      {
        lowerOld: lowerOld,
        lower: lower,
        upperOld: upperOld,
        upper: upper,
        amountDesired: token1Amount,
        zeroForOne: false,
        native: false
      }
    );
    await txn.wait();
    token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    expect(token1Balance).to.be.equal(token1Amount.mul(9).sub(1));
    txn = await hre.props.concentratedPoolMock.setTickCumulatives(
      6000,
      3000
    );
    await hre.props.token0.approve(hre.props.hedgePool.address, token0Amount);
    txn = await hre.props.hedgePool.swap(
      hre.props.alice.address,
      true,
      token0Amount,
      currentPrice
    );
    console.log((await hre.props.token0.balanceOf(hre.props.alice.address)).toString())
    // validateMint(

    // )
  });

  it('Should claim entire range', async function () {
    const lowerOld = hre.ethers.utils.parseUnits("0", 0);
    const lower    = hre.ethers.utils.parseUnits("20", 0);
    const upperOld = hre.ethers.utils.parseUnits("887272", 0);
    const upper    = hre.ethers.utils.parseUnits("30", 0);
    const amount   = hre.ethers.utils.parseUnits("100", await hre.props.token0.decimals());
    const feeTaken = hre.ethers.utils.parseUnits("5", 16);
    let token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    expect(token1Balance).to.be.equal(token1Amount.mul(10).sub(2).sub(feeTaken));
    let txn = await hre.props.hedgePool.burn(
      lower,
      upper,
      upper,
      liquidityAmount
    );
    await txn.wait();
    token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
    expect(token1Balance).to.be.equal(token1Amount.mul(10).sub(2).sub(feeTaken));
    await hre.props.token0.approve(hre.props.hedgePool.address, token0Amount);
    txn = await hre.props.hedgePool.swap(
      hre.props.alice.address,
      true,
      token0Amount,
      currentPrice
    );
    console.log((await hre.props.token0.balanceOf(hre.props.alice.address)).toString())
    // validateMint(

    // )
  });

  // it('Should fail on second claim', async function () {
  //   const lowerOld = hre.ethers.utils.parseUnits("0", 0);
  //   const lower    = hre.ethers.utils.parseUnits("20", 0);
  //   const upperOld = hre.ethers.utils.parseUnits("887272", 0);
  //   const upper    = hre.ethers.utils.parseUnits("30", 0);
  //   const amount   = hre.ethers.utils.parseUnits("100", await hre.props.token0.decimals());
  //   let token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
  //   await hre.props.token1.approve(hre.props.hedgePool.address, token1Amount);
  //   //expect(token1Balance).to.be.equal(token1Amount.mul(10).sub(2));
  //   let txn = await hre.props.hedgePool.burn(
  //     lower,
  //     upper,
  //     upper,
  //     liquidityAmount
  //   );
  //   await txn.wait();
  //   token1Balance = await hre.props.token1.balanceOf(hre.props.alice.address);
  //   // expect(token1Balance).to.be.equal(token1Amount.mul(9).sub(1));
  //   txn = await hre.props.hedgePool.swap(
  //     hre.props.alice.address,
  //     true,
  //     token0Amount,
  //     currentPrice
  //   );
  //   console.log((await hre.props.token0.balanceOf(hre.props.alice.address)).toString())
  //   // validateMint(

  //   // )
  // });

  //TODO: set tickCumulatives before and after mint
  // // TODO: move TWAP and do a successful swap; add in swap fee - DONE


  // // TODO: claim liquidity filled
  //TODO: empty swap at price limit higher than current price
  // // TODO: move TWAP again and fill remaining
  // // TODO: claim final amount and burn LP position
  // // TODO: mint LP position with priceLower < currentPrice
  // // TODO: P1 larger range; P2 smaller range; execute swap and validate amount returned by claiming
  // // TODO: smaller range claims first; larger range claims first
  // // TODO: move TWAP down and allow for new positions to be entered

  // it('Should mint new LP position swap and then claim', async function () {
  //   const lowerOld = hre.ethers.utils.parseUnits("0", 0);
  //   const lower    = hre.ethers.utils.parseUnits("20", 0);
  //   const upperOld = hre.ethers.utils.parseUnits("887272", 0);
  //   const upper    = hre.ethers.utils.parseUnits("30", 0);
  //   const amount   = hre.ethers.utils.parseUnits("100", await hre.props.token0.decimals());
  //   const txn = await hre.props.hedgePool.mint(
  //     {
  //       lowerOld: lowerOld,
  //       lower: lower,
  //       upperOld: upperOld,
  //       upper: upper,
  //       amountDesired: amount,
  //       zeroForOne: false,
  //       native: false
  //     }
  //   );
  //   await txn.wait();
  //   console.log(await hre.props.hedgePool.positions(
  //     hre.props.alice.address,
  //     lower,
  //     upper
  //   ));
  //   // validateMint(

  //   // )
  // });

  // mint at different price ranges
  // mint then burn at different price ranges
  // mint swap then burn
  // collect
})