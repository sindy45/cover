// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import './CoverPool.sol';
import './interfaces/ICoverPoolFactory.sol';
import './interfaces/IRangeFactory.sol';

contract CoverPoolFactory is ICoverPoolFactory {
    error IdenticalTokenAddresses();
    error InvalidTokenDecimals();
    error PoolAlreadyExists();
    error FeeTierNotSupported();
    error InvalidTickSpread();
    error TickSpreadNotMultipleOfTickSpacing();
    error TickSpreadNotAtLeastDoubleTickSpread();

    constructor(address _rangePoolFactory) {
        owner = msg.sender;
        rangePoolFactory = _rangePoolFactory;
    }

    function createCoverPool(
        address fromToken,
        address destToken,
        uint16 feeTier,
        int16 tickSpread,
        uint16 twapLength,
        uint16 auctionLength
    ) external override returns (address pool) {
        // validate input value range
        //TODO: check twapLength > 5
        // validate token pair
        if (fromToken == destToken) {
            revert IdenticalTokenAddresses();
        }
        address token0 = fromToken < destToken ? fromToken : destToken;
        address token1 = fromToken < destToken ? destToken : fromToken;
        if (ERC20(fromToken).decimals() == 0) revert InvalidTokenDecimals();
        if (ERC20(destToken).decimals() == 0) revert InvalidTokenDecimals();

        // generate key for pool
        bytes32 key = keccak256(abi.encode(token0, token1, feeTier, tickSpread, twapLength, auctionLength));
        if (poolMapping[key] != address(0)) {
            revert PoolAlreadyExists();
        }

        // check fee tier exists and get tick spacing
        int24 tickSpacing = IRangeFactory(rangePoolFactory).feeTierTickSpacing(uint24(feeTier));
        if (tickSpacing == 0) {
            revert FeeTierNotSupported();
        }
        int24 tickMultiple = tickSpread / tickSpacing;
        if (tickMultiple * tickSpacing != tickSpread) {
            revert TickSpreadNotMultipleOfTickSpacing();
        } else if (tickMultiple < 2) {
            revert TickSpreadNotAtLeastDoubleTickSpread();
        }

        address inputPool = getInputPool(token0, token1, feeTier);

        // launch pool and save address
        pool = address(new CoverPool(inputPool, tickSpread, twapLength, auctionLength));

        poolMapping[key] = pool;
        poolList.push(pool);

        emit PoolCreated(
            token0,
            token1,
            feeTier,
            tickSpread,
            twapLength,
            auctionLength,
            pool
        );
    }

    function getCoverPool(
        address fromToken,
        address destToken,
        uint16 feeTier,
        int16  tickSpread,
        uint16 twapLength,
        uint16 auctionLength
    ) public view override returns (address) {
        // set lexographical token address ordering
        address token0 = fromToken < destToken ? fromToken : destToken;
        address token1 = fromToken < destToken ? destToken : fromToken;

        // get pool address from mapping
        bytes32 key = keccak256(abi.encode(token0, token1, feeTier, tickSpread, twapLength, auctionLength));

        return poolMapping[key];
    }

    function getInputPool(
        address fromToken,
        address destToken,
        uint256 feeTier
    ) internal view returns (address) {
        return IRangeFactory(rangePoolFactory).getPool(fromToken, destToken, uint24(feeTier));
    }
}
