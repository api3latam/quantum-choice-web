export * from "./ipfs";
export * from "./signer";
export * from "./alchemy";

export const networkIds = {
    137: {
        name: "polygon",
        rpc: "https://polygon-mainnet.g.alchemy.com/v2/"
    },
    1: {
        name: "ethereum",
        rpc: "https://mainnet.infura.io/v3/"
    },
    42161: {
        name: "arbitrum",
        rpc: "https://arb-mainnet.g.alchemy.com/v2/"
    },
    5: {
        name: "goerli",
        rpc: "https://eth-goerli.g.alchemy.com/v2/"
    },
    30: {
        name: "rsk",
        rpc: "https://rsk.getblock.io/mainnet/?api_key="
    }
}
