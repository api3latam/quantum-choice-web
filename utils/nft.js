import { getContracts } from "./contracts";

export async function generateToken(targetAddress) {
    const { nft } = await getContracts();

    await nft.requestToken(targetAddress);
}
