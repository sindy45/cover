// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

abstract contract CoverPoolFactoryStructs {
    struct CoverPoolParams {
        address inputPool;
        int16   tickSpread;
        uint16  twapLength;
        uint16  auctionLength;
        uint16  minPositionWidth;
        uint128 minAuctionAmount; // based on 18 decimals and then converted based on token decimals
    }
}




