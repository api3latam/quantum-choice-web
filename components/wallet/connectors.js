import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

/**
 * List of connectors
 * 5: Goerli
 * 1: ETH Mainnet
 * 137: Polygon mainnet
 * 80001: Matic Mumbai
 * 42161: Arbitrum
 * 30: RSK
 * 31: RSK Testnet
 * More: https://chainid.network/
 */
export const injected = new InjectedConnector({
  supportedChainIds: [1,5, 137, 80001, 42161, 30, 31],
});

export const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://eth-goerli.g.alchemy.com/v2/${process.env["NEXT_PUBLIC_GOERLI"]}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});
