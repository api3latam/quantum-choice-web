import { firestoreClient } from "./auth";
import { getTokenUri } from "../contracts";

/**
 * @notice Returns an array with the URIs from the 
 * tokens owned by the user at the specified network.
 * @dev If the user have no owned token then returns 
 * default value or empty.
 * @param userAddress The address from the user.
 * @param networkName The network which the user is at.
 */
 export async function getTokenStatus(
    userAddress,
    networkName
    ) {
        const doc = await firestoreClient
            .collection("users")
            .doc(userAddress)
            .get();
        const isMinted = doc['minted'][networkName];
        console.log(`isMinted: ${isMinted}`);
        if (isMinted === true) {
            const meta = await firestoreClient
                .collection("address")
                .doc(userAddress)
                .get()
            const tokenIds = meta['network'][networkName];
            console.log(`tokenIds: ${tokenIds}`); 
            const tokenUris = 
                tokenIds.length > 1
                ? tokenIds.map(token => {
                    const individualUri = getTokenUri(token['id']);
                    const isShinny = token['isShinny'];
                    return { id: individualUri, shinny: isShinny };
                })
                : [ { id: getTokenUri(tokenIds[0]['id']),
                        shinny: tokenIds[0]['isShinny'] } ];
            return tokenUris;
        } else {
            // Add alert or default image for loading
            return [];
        }
};

/**
 * @notice Returns the latest tokens minted based
 * on timestamp.
 * @returns 
 */
export async function getTokenId(networkName) {
    const docRef = await firestoreClient
        .collection('address');
    const queryOutput = await docRef
        .orderBy(`lastMinted.${networkName}`)
        .limit(10)
        .get();
    // Filter 
    console.log(queryOutput);
};
