import { firestore } from ".";
import { getTokenUri } from "../contracts";

export async function setAddress(userAddress) {
    try {
        // Add a check to see if the address is already in the database
        await firestore
                .collection("users")
                .doc(userAddress)
                .set({
                    address: userAddress,
                    minted: {
                        polygon: false,
                        rsk: false,
                        arbitrum: false
                    }
                })
    } catch (err) {
        console.error(`Error writing document: ${err}`);
    }
}

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
                ? tokenIds.map(getTokenUri)
                : getTokenUri(tokenIds[0]);
            return tokenUris;
        } else {
            // Add alert or default image for loading
            return [];
        }
}