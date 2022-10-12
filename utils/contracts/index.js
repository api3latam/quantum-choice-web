import { Contract, providers } from "ethers";
import { networkIds } from "../misc";

import nftAbi from "../../public/abis/nft";
import raffleAbi from "../../public/abis/raffle";

export function getAddresses(networkName) {
    const addresses = {
        polygon: {
            nft: "0x0904593F8886f20761f9610aBc8789B86ad386f3",
            raffle: ""
        },
        optimism: {
            nft: "0xcC0f0d89146ce1B01948E421E90d2aeAa47718f7",
            raffle: ""
        },
        arbitrum: {
            nft: "0x6F7951a45B87Df328927e07CEA5771539013B812",
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
