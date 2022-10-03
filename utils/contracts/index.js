import { Contract } from "ethers";
import { getSigner } from "../misc";

const nftAbi = require("../../public/abis/nft");
const raffleAbi = require("../../public/abis/nft");

function getAddresses() {
    return { nftAddress: "",
            raffleAddress: ""
        };
};

export async function getContracts() {
    const signer = await getSigner();
    const { nftAddress, raffleAddress } = getAddresses();

    const nft = new Contract(nftAddress, nftAbi, signer);
    const raffle = new Contract(raffleAddress, raffleAbi, signer);
    
    return { nft: nft, raffle: raffle };
};

export * from "./nft";
export * from "./raffle";
