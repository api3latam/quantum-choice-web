import { firestoreClient } from "./auth";
import { getTokenUri } from "../contracts";
import { getTokenIds } from "../misc";


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
        if (doc.exists) {
            const isMinted = 
                doc.data()['minted'][networkName] === undefined || 
                doc.data()['minted'][networkName] === false
                ? false
                : true;
            console.log(`Is token minted on ${networkName} for ${userAddress}?\
                ${isMinted}`)
            if (isMinted) {
                const tokenIds = await getTokenIds(userAddress, networkName)
                console.log(`tokenIds: ${tokenIds}`); 
                const tokenUris = 
                    tokenIds.length > 1
                    ? await Promise.all(tokenIds.map( async (token) => {
                        const individualUri = await getTokenUri(token, networkName);
                        const isShinny = token <= 100 ? true: false;
                        return { id: individualUri, shinny: isShinny };
                    }))
                    : [ { id: await getTokenUri(tokenIds[0], networkName),
                            shinny: tokenIds[0] <= 100 ? true: false } ];
                return tokenUris;
                }
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
