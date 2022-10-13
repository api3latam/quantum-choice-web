import { getAddresses } from "../contracts";

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

export const openseaUrls = {
    polygon: `https://opensea.io/assets/matic/${getAddresses('polygon')['nftAddress']}/`,
    optimism: `https://opensea.io/assets/optimism/${getAddresses('optimism')['nftAddress']}/`,
    arbitrum: `https://opensea.io/assets/arbitrum/${getAddresses('arbitrum')['nftAddress']}/`
}

export * from "./ipfs";
export * from "./alchemy";
