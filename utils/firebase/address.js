import { firestore } from ".";

export async function setAddress(userAddress) {
    try {
        // Add a check to see if the address is already in the database
        await firestore
                .collection("users")
                .doc(userAddress)
                .set({
                    address: userAddress,
                    minted: false
                })
    } catch (err) {
        console.error(`Error writing document: ${err}`);
    }
}

async function setTokenId() {
    
}

export async function getTokenStatus() {
    
}