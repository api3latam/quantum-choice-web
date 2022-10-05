import { firestore } from ".";
import { getTokenUri } from "../contracts";

const networkQuerySetter = (networkName) => {
    if (networkName === "rsk") {
        return { rsk: false }
    } else if (networkName === "polygon") {
        return { polygon: false }
    } else if (networkName === "ethereum") {
        return { ethereum: false }
    } else if (networkName === "arbitrum") {
        return { arbitrum: false }
    } else if (networkName === "goerli") {
        return { goerli: false }
    } else {
        throw Error(`The given network ${networkName} is not available`);
    }
};

const networkQueryAppend = (networkName) => {
    if (networkName === "rsk") {
        return { 'minted.rsk': false }
    } else if (networkName === "polygon") {
        return { 'minted.polygon': false }
    } else if (networkName === "ethereum") {
        return { 'minted.ethereum': false }
    } else if (networkName === "arbitrum") {
        return { 'minted.arbitrum': false }
    } else if (networkName === "goerli") {
        return { 'minted.goerli': false }
    } else {
        throw Error(`The given network ${networkName} is not available`);
    }
}

/**
 * @notice Creates a register for new users on the page.
 * @param userAddress The address from the user.
 * @param networkName The target name for the network.
 */
export async function setAddress(userAddress, networkName) {
    try {
        const { docExists, networkExists } = 
            await verifyExistence(userAddress);
        if (!docExists) {
            await firestore
                    .collection("users")
                    .doc(userAddress)
                    .set({
                        address: userAddress,
                        minted: networkQuerySetter(networkName)
                    });
        } else if (docExists && !networkExists) {
            await firestore
                    .collection("users")
                    .doc(userAddress)
                    .update(networkQueryAppend(networkName));
        };
    } catch (err) {
        console.error(`Error writing document: ${err}`);
    }
}

/**
 * @notice Checks wether a document with the given address 
 * already exists. If the document exists, it also checks 
 * wether the given network is already registered.
 * @param address The address to check for.
 * @param network The network name to check for.
 * @returns 
 */
async function verifyExistence(address, network) {
    const doc = await firestore
        .collection("users")
        .doc(address);
    return { dockExists: doc.exists,
        networkExists: false };
}

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
}