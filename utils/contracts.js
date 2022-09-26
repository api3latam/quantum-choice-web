import { Contract } from "ethers";
import { getSigner } from "./signer";

const nftAbi = require("../public/abis/nft.json");
const raffleAbi = require("../public/abis/raffle.json");

export async function getContracts() {
    const signer = await getSigner();
    
    const nft = new Contract("NFT", nftAbi, signer);
    const raffle = new Contract("Raffle", raffleAbi, signer);
    
    return { nft: nft, raffle: raffle };
};
