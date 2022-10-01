import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [5, 137]
});

/**TODO:
 * Change RPC URL to alchemy url for mainnet and matic
 */
export const WalletConnect = new WalletConnectConnector({
 rpcUrl: "https://mainnet.infura.io/v3/19e79f85fa2046c7af50f6aea9497ba7",
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});
