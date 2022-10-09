import { Contract } from "ethers";

const nftAbi = require("../../public/abis/nft");
const raffleAbi = require("../../public/abis/nft");

export function getAddresses() {
    return { nftAddress: "",
            raffleAddress: ""
        };
};

export async function getContracts(signer) {
    const { nftAddress, raffleAddress } = getAddresses();

    const nft = new Contract(nftAddress, nftAbi, signer);
    const raffle = new Contract(raffleAddress, raffleAbi, signer);
    
    return { nft: nft, raffle: raffle };
};

export * from "./nft";
export * from "./raffle";
