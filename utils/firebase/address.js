import { firestore } from ".";
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
        const isMinted = await firestore
            .collection("users")
            .doc(userAddress)
            .get(`minted.${networkName}`);
        if (isMinted === true) {
            const tokenIds = await firestore
                .collection("address")
                .doc(userAddress)
                .get(`network.${networkName}`)
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
const getTokenId = async () => {
    //TODO: Get the addy from account state 

    let docRef = await firestore.collection("users").doc(account)
    let doc = await docRef.get();
    if (doc.exists) {
        console.log("Document data:", doc.data());
        let network = networkIds[chainId].name
        //let network2 = 'polygon'
        return doc.data().signature[network]
    } else {
      //TODO: handle error correctly, now it just for debugging
      console.log("Error, document does not exist");
    }
};
