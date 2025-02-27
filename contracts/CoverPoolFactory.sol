// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

import './CoverPool.sol';
import './interfaces/ICoverPoolFactory.sol';
import './base/events/CoverPoolFactoryEvents.sol';
import './base/structs/CoverPoolFactoryStructs.sol';
import './base/structs/CoverPoolManagerStructs.sol';
import './utils/CoverPoolErrors.sol';

contract CoverPoolFactory is 
    ICoverPoolFactory,
    CoverPoolFactoryStructs,
    CoverPoolFactoryEvents,
    CoverPoolFactoryErrors
{
    address immutable public owner;

    constructor(
        address _owner
    ) {
        owner = _owner;
    }

    function createCoverPool(
        bytes32 sourceName,
        address tokenIn,
        address tokenOut,
        uint16 feeTier,
        int16  tickSpread,
        uint16 twapLength
    ) external override returns (address pool) {
        CoverPoolParams memory params;
        // sort tokens by address
        params.token0 = tokenIn < tokenOut ? tokenIn : tokenOut;
        params.token1 = tokenIn < tokenOut ? tokenOut : tokenIn;
        if (params.token1 == address(0)) revert InvalidPoolTokenAddress();
        // generate key for pool
        bytes32 key = keccak256(abi.encode(
                                            params.token0,
                                            params.token1,
                                            sourceName,
                                            feeTier,
                                            tickSpread,
                                            twapLength
                                ));
        if (coverPools[key] != address(0)) {
            revert PoolAlreadyExists();
        }
        // get twap source
        (params.twapSource, params.curveMath) = ICoverPoolManager(owner).twapSources(sourceName);
        if (params.twapSource == address(0)) revert TwapSourceNotFound();
        // get volatility tier config
        params.owner = owner;
        params.config = ICoverPoolManager(owner).volatilityTiers(sourceName, feeTier, tickSpread, twapLength);
        if (params.config.auctionLength == 0) revert VolatilityTierNotSupported();
        params.tickSpread = tickSpread;
        params.twapLength = twapLength;
        // get reference pool
        params.inputPool  = ITwapSource(params.twapSource).getPool(params.token0, params.token1, feeTier);

        // launch pool and save address
        pool = address(new CoverPool(params));

        coverPools[key] = pool;

        emit PoolCreated(
            pool,
            params.twapSource,
            params.inputPool,
            params.token0,
            params.token1,
            feeTier,
            tickSpread,
            twapLength
        );
    }

    function getCoverPool(
        bytes32 sourceName,
        address tokenIn,
        address tokenOut,
        uint16 feeTier,
        int16  tickSpread,
        uint16 twapLength
    ) external view override returns (address) {
        // set lexographical token address ordering
        address token0 = tokenIn < tokenOut ? tokenIn : tokenOut;
        address token1 = tokenIn < tokenOut ? tokenOut : tokenIn;

        // get pool address from mapping
        bytes32 key = keccak256(abi.encode(token0, token1, sourceName, feeTier, tickSpread, twapLength));

        return coverPools[key];
    }
}
