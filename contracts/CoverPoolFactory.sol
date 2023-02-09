// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./CoverPool.sol";
import "./interfaces/ICoverPoolFactory.sol";
import "./interfaces/IRangeFactory.sol";

contract CoverPoolFactory is 
    ICoverPoolFactory
{
    error IdenticalTokenAddresses();
    error InvalidTokenDecimals();
    error PoolAlreadyExists();
    error FeeTierNotSupported();
    error WaitUntilEnoughObservations();
    
    constructor(
        address _rangePoolFactory
    ) {
        owner = msg.sender;
        rangePoolFactory = _rangePoolFactory;
    }

    function createCoverPool(
        address fromToken,
        address destToken,
        uint256 swapFee,
        uint24  tickSpread,
        uint16  twapLength
    ) external override returns (address pool) {
        // validate input value range
        //TODO: check twapLength > 5
        // validate token pair
        if (fromToken == destToken) {
            revert IdenticalTokenAddresses();
        }
        address token0 = fromToken < destToken ? fromToken : destToken;
        address token1 = fromToken < destToken ? destToken : fromToken;
        if(ERC20(fromToken).decimals() == 0) revert InvalidTokenDecimals();
        if(ERC20(destToken).decimals() == 0) revert InvalidTokenDecimals();

        // generate key for pool
        bytes32 key = keccak256(abi.encode(token0, token1, swapFee, tickSpread, twapLength));
        if (poolMapping[key] != address(0)){
            revert PoolAlreadyExists();
        }

        // check fee tier exists and get tick spacing
        int24 tickSpacing = IRangeFactory(rangePoolFactory).feeTierTickSpacing(uint24(swapFee));
        if (tickSpacing == 0) {
            revert FeeTierNotSupported();
        }

        address inputPool = getInputPool(token0, token1, swapFee);

        // launch pool and save address
        pool =  address(
                    new CoverPool(
                        inputPool,
                        uint24(swapFee),
                        int24(tickSpread),
                        twapLength
                    )
                );

        poolMapping[key] = pool;
        poolList.push(pool);

        // emit event for indexers
        emit PoolCreated(token0, token1, uint24(swapFee), int24(tickSpread), twapLength, pool);
    }

    function getCoverPool(
        address fromToken,
        address destToken,
        uint256 fee,
        uint24  tickSpread,
        uint16  twapLength
    ) public override view returns (address) {

        // set lexographical token address ordering
        address token0 = fromToken < destToken ? fromToken : destToken;
        address token1 = fromToken < destToken ? destToken : fromToken;

        // get pool address from mapping
        bytes32 key = keccak256(abi.encode(token0, token1, fee, tickSpread, twapLength));

        return poolMapping[key];
    }

    function getInputPool(
        address fromToken,
        address destToken,
        uint256 swapFee
    ) internal view returns (address) {
        return IRangeFactory(rangePoolFactory).getPool(fromToken, destToken, uint24(swapFee));
    }
}