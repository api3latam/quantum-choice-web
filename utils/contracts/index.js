import { Contract, providers } from "ethers";
import { networkIds } from "../misc";

import nftAbi from "../../public/abis/nft";
import raffleAbi from "../../public/abis/raffle";

export function getAddresses(networkName) {
    const addresses = {
        polygon: {
            nft: "",
            raffle: ""
        },
        optimism: {
            nft: "",
            raffle: ""
        },
        arbitrum: {
            nft: "",
            raffle: ""
        },
        goerli: {
            nft: "0x759934c1BA49D14B4961c7B7fde86948160a4359",
            raffle: ""
        }
    }
    return { 
        nftAddress: addresses[networkName]['nft'],
        raffleAddress: addresses[networkName]['raffle'] 
    };
};

const getProvider = (network) => {
    if (network === "polygon") {
        return new providers.JsonRpcProvider(
            networkIds[137].rpc
            + process.env['NEXT_PUBLIC_POLYGON']
        )
    } else if (network === "optimism") {
        return new providers.JsonRpcProvider(
            networkIds[10].rpc
            + process.env['NEXT_PUBLIC_OPTIMISM']
        )
    } else if (network === "arbitrum") {
        return new providers.JsonRpcProvider(
            networkIds[42161].rpc
            + process.env['NEXT_PUBLIC_ARBITRUM']
        )
    } else if (network === "goerli") {
        return new providers.JsonRpcProvider(
            networkIds[5].rpc
            + process.env['NEXT_PUBLIC_GOERLI']
        )
    } else {
        throw Error(`The given network ${network} is not enable`);
    }
}

export async function getContracts(networkName) {
    const { nftAddress, 
        raffleAddress } = getAddresses(networkName);
    const provider = getProvider(networkName);

    const nft = new Contract(nftAddress, nftAbi, provider);
    const raffle = new Contract(raffleAddress, raffleAbi, provider);
    
    return { nft: nft, raffle: raffle };
};

export * from "./nft";
export * from "./raffle";
