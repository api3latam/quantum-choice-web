import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [5, 137]
});

export const WalletConnect = new WalletConnectConnector({
 rpcUrl: process.env['NEXT_PUBLIC_ALCHEMY'],
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});
