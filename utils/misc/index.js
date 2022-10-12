export * from "./ipfs";
export * from "./alchemy";

export const networkIds = {
    137: {
        name: "polygon",
        rpc: "https://polygon-mainnet.g.alchemy.com/v2/"
    },
    10: {
        name: "optimism",
        rpc: "https://opt-mainnet.g.alchemy.com/v2/"
    },
    42161: {
        name: "arbitrum",
        rpc: "https://arb-mainnet.g.alchemy.com/v2/"
    }
}
