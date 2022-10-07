import { Network, Alchemy } from "alchemy-sdk";
import { utils } from "ethers";
import { getAddresses } from "../contracts";

const alchemyConfigs = (networkName) => {
    if (networkName === "polygon") {
        return { apiKey: process.env['NEXT_PUBLIC_POLYGON'],
            network: Network.MATIC_MAINNET }
    } else if (networkName === "ethereum") {
        return { apiKey: process.env['NEXT_PUBLIC_ETH'],
            network: Network.ETH_MAINNET }
    } else if (networkName === "arbitrum") {
        return { apiKey: process.env['NEXT_PUBLIC_ARBITRUM'] ,
            network: Network.ARB_MAINNET}
    } else {
        throw Error(`The given network ${networkName} is not available`);
    }
};

export async function getTokenIds(userAddress, network) {
    const alchemy = new Alchemy(alchemyConfigs(network));

    const { nftAddress } = getAddresses();
    const contractAddr = utils.getAddress(nftAddress);

    const nftsForOwner = await alchemy.nft.getNftsForOwner(userAddress);
    const ownedNfts = nftsForOwner.ownedNfts;
    
    const filter = ownedNfts.filter((token) => {
        if (utils.getAddress(token.contract.address) === contractAddr) {
            return token
        }
    });

    const output = filter.map((token) => {
        return token.tokenId 
    });
    
    return output;
};
