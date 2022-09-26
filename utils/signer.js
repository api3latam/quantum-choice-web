import { Wallet, providers } from "ethers";

export async function getSigner(networkName) {
    require('dotenv').config();

    const provider = providers.AlchemyProvider(
        networkName !== undefined ? networkName : "goerli", 
        process.env['NEXT_PUBLIC_ALCHEMY']
    );

    return new Wallet(
        process.env['NEXT_PUBLIC_PK'],
        provider
    );
}