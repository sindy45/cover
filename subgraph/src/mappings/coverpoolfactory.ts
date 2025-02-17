import { log } from '@graphprotocol/graph-ts'
import { PoolCreated } from '../../generated/CoverPoolFactory/CoverPoolFactory'
import { CoverPoolTemplate } from '../../generated/templates'
import {
    fetchTokenSymbol,
    fetchTokenName,
    fetchTokenDecimals,
} from './utils/helpers'
import { safeLoadCoverPool, safeLoadCoverPoolFactory, safeLoadToken, safeLoadVolatilityTier } from './utils/loads'
import { BigInt } from '@graphprotocol/graph-ts'
import { FACTORY_ADDRESS, ONE_BI } from '../constants/constants'

export function handlePoolCreated(event: PoolCreated): void {
    // grab event parameters
    let feeTierParam = BigInt.fromI32(event.params.fee)
    let tickSpreadParam = BigInt.fromI32(event.params.tickSpread)
    let twapLengthParam = BigInt.fromI32(event.params.twapLength)
    let twapSourceParam = event.params.twapSource.toHex()
    let poolAddressParam = event.params.pool.toHex()

    // load from store
    let loadVolatilityTier = safeLoadVolatilityTier(twapSourceParam, feeTierParam, tickSpreadParam, twapLengthParam)
    let loadCoverPool = safeLoadCoverPool(poolAddressParam)
    let loadCoverPoolFactory = safeLoadCoverPoolFactory(FACTORY_ADDRESS.toLowerCase())
    let loadToken0 = safeLoadToken(event.params.token0.toHexString())
    let loadToken1 = safeLoadToken(event.params.token1.toHexString())
    
    let volatilityTier = loadVolatilityTier.entity
    let token0 = loadToken0.entity
    let token1 = loadToken1.entity
    let pool = loadCoverPool.entity
    let factory = loadCoverPoolFactory.entity

    // fetch info if null
    if (!loadToken0.exists) {
        token0.symbol = fetchTokenSymbol(event.params.token0)
        token0.name = fetchTokenName(event.params.token0)
        let decimals = fetchTokenDecimals(event.params.token0)
        // bail if we couldn't figure out the decimals
        if (decimals === null) {
            log.debug('token0 decimals null', [])
            return
        }
        token0.decimals = decimals
    }

    if (!loadToken0.exists) {
        token1.symbol = fetchTokenSymbol(event.params.token1)
        token1.name = fetchTokenName(event.params.token1)
        let decimals = fetchTokenDecimals(event.params.token1)
        // bail if we couldn't figure out the decimals
        if (decimals === null) {
            log.debug('token1 decimals null', [])
            return
        }
        token1.decimals = decimals
    }

    pool.factory = event.address
    pool.inputPool = event.params.inputPool
    pool.volatilityTier = volatilityTier.id
    pool.token0 = token0.id
    pool.token1 = token1.id
    pool.createdAtBlockNumber = event.block.number
    pool.createdAtTimestamp   = event.block.timestamp
    pool.updatedAtBlockNumber = event.block.number
    pool.updatedAtTimestamp   = event.block.timestamp

    factory.poolCount = factory.poolCount.plus(ONE_BI)
    factory.txnCount  = factory.txnCount.plus(ONE_BI)

    pool.save()
    factory.save()
    token0.save()
    token1.save()

    // create the tracked contract based on the template
    CoverPoolTemplate.create(event.params.pool)
}
