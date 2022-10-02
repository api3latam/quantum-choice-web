import { getContracts } from ".";
import { convertLinkToIpfs } from "../misc";

export async function getTokenUri(targetId) {
    const { nft } = await getContracts();

    const url = await nft.tokenURI(targetId);
    return convertLinkToIpfs(url);
};
