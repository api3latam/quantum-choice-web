import { getContracts } from ".";

export async function generateToken(targetAddress) {
    const { nft } = await getContracts();

    await nft.requestToken(targetAddress);
};
