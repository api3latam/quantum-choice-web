import { firestoreClient } from "./auth";

const networkQuerySetter = (networkName) => {
    if (networkName === "polygon") {
        return { polygon: false }
    } else if (networkName === "optimism") {
        return { optimism: false }
    } else if (networkName === "arbitrum") {
        return { arbitrum: false }
    } else if (networkName === "goerli") {
        return { goerli: false }
    } else {
        throw Error(`The given network ${networkName} is not available`);
    }
};

const networkQueryAppend = (networkName) => {
    if (networkName === "polygon") {
        return { 'minted.polygon': false }
    } else if (networkName === "optimism") {
        return { 'minted.optimism': false }
    } else if (networkName === "arbitrum") {
        return { 'minted.arbitrum': false }
    } else if (networkName === "goerli") {
        return { 'minted.goerli': false }
    } else {
        throw Error(`The given network ${networkName} is not available`);
    }
};

const networkSignedAppend = (
    networkName,
    signature
) => {
    if (networkName === "polygon") {
        return { 'signature.polygon': signature }
    } else if (networkName === "optimism") {
        return { 'minted.optimism': signature }
    } else if (networkName === "arbitrum") {
        return { 'minted.arbitrum': signature }
    } else if (networkName === "goerli") {
        return { 'minted.goerli': signature }
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
            await firestoreClient
                    .collection("users")
                    .doc(userAddress)
                    .set({
                        address: userAddress,
                        minted: networkQuerySetter(networkName)
                    });
        } else if (docExists && !networkExists) {
            await firestoreClient
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
 */
async function verifyExistence(address, network) {
    // Pending add network verification
    const doc = await firestoreClient
        .collection("users")
        .doc(address);
    return { dockExists: doc.exists,
        networkExists: false };
};

/**
 * @notice Look up if there's an already signed hashed for
 * the given address at the specified network.
 * @param address The address to check for.
 * @param network The network name to check for.
 */
export async function getSignedHash(address, network) {
    try {
        const doc = await firestoreClient
            .collection("users")
            .doc(address)
            .where(`signature.${network}`)
            .get();
        if (doc.exists) {
            return doc[`signature.${network}`];
        } else {
            return "";
        }
    } catch (err) {
        console.error(err);
    }
}

/**
 * @notice Set signature hash for minting from a given user at 
 * an specific address.
 * @param address The address to check for.
 * @param network The network name to use.
 * @param signature The actual signature string.
 */
export async function setSignedHash(
    address, 
    network,
    signature
) {
    try {
        await firestoreClient
            .collection("users")
            .doc(address)
            .update(
                networkSignedAppend(
                    network, 
                    signature
                )
            );
    } catch (err) {
        console.error(`Error writing document: ${err}`);
    }
}
