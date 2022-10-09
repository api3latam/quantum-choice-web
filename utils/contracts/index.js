import { Contract } from "ethers";

const nftAbi = require("../../public/abis/nft");
const raffleAbi = require("../../public/abis/nft");

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
            nft: "",
            raffle: ""
        }
    }
    return { 
        nftAddress: addresses[networkName]['nft'],
        raffleAddress: addresses[networkName]['raffle'] 
    };
};

export async function getContracts(
    signer, 
    networkName
) {
    const { nftAddress, 
        raffleAddress } = getAddresses(networkName);

    const nft = new Contract(nftAddress, nftAbi, signer);
    const raffle = new Contract(raffleAddress, raffleAbi, signer);
    
    return { nft: nft, raffle: raffle };
};

export * from "./nft";
export * from "./raffle";
