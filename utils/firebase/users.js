import { firestore } from ".";

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
};

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
};

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
};
