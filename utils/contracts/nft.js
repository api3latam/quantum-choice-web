import { getContracts } from ".";
import { convertLinkToIpfs } from "../misc";

/**
 * @notice Queries the smart contracts to get the
 * tokenURI based on a given id.
 * @param targetId The onchain tokenId 
 */
export async function getTokenUri(targetId, networkName) {
    const { nft } = await getContracts(networkName);

    const url = await nft.tokenURI(targetId);
    return convertLinkToIpfs(url);
};
