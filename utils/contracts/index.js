import { Contract } from "ethers";
import { getSigner, loadJson } from "../misc";

const nftAbi = loadJson('public/abis/nft.json');
const raffleAbi = loadJson("public/abis/raffle.json");

function getAddresses() {
    const addresses = loadJson("public/addresses.json");
    return { nftAddress: addresses['nft'],
            raffleAddress: addresses['raffle']
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
