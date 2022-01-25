import Web3Ctx from "../components/Context/Web3Ctx";
import { useMemo, useContext } from 'react'
import { getContract } from '../utils'

import ZOOM_ABI from '../abi/Zoom.json'
import EC_ABI from '../abi/EtherCards.json'
import TODDLER_COMMUNITY_ABI from '../abi/ToddlerCommunity.json'
import TODDLER_SALE_ABI from '../abi/SkeletonCrew.json'

import {
    ZOOM_ADDRESSES,
    EC_ADDRESSES,
    TODDLER_COMMUNITY_ADDRESSES,
    TODDLER_SALE_ADDRESSES
} from '../abi/constants/addresses'

// returns null on errors
export function useContract(
    addressOrAddressMap,
    ABI,
    withSignerIfPossible = true) {
    const { defaultProvider: deployedLibrary, ethersProvider: library, address: account, chainId, isCorrectNetwork, defaultChainId } = useContext(Web3Ctx);

    return useMemo(() => {
        if (!isCorrectNetwork && (!deployedLibrary || !defaultChainId)) return null
        if (isCorrectNetwork && (!addressOrAddressMap || !ABI || !library || !chainId)) return null
        let address
        if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
        else address = addressOrAddressMap[isCorrectNetwork ? chainId : defaultChainId]
        if (!address) return null
        let provider
        if (isCorrectNetwork) provider = library
        else provider = deployedLibrary
        try {
            return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account, deployedLibrary, isCorrectNetwork])
}

export function useZoomContract() {
    return useContract(ZOOM_ADDRESSES, ZOOM_ABI, false)
}
export function useEcContract() {
    return useContract(EC_ADDRESSES, EC_ABI, false)
}

export function useCommunityContract() {
    return useContract(TODDLER_COMMUNITY_ADDRESSES, TODDLER_COMMUNITY_ABI, true)
}
export function useSaleContract() {
    return useContract(TODDLER_SALE_ADDRESSES, TODDLER_SALE_ABI, true)
}