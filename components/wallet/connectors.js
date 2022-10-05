import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { networkIds } from "../../utils/misc";

/**
 * List of connectors
 * 5: Goerli
 * 1: ETH Mainnet
 * 137: Polygon mainnet
 * 42161: Arbitrum
 * 30: RSK
 * More: https://chainid.network/
 */
export const injected = new InjectedConnector({
  supportedChainIds: [1,5, 137, 42161, 30],
});

export const WalletConnect = (chainId) => {
  const key = process.env[`NEXT_PUBLIC_${
    (networkIds[chainId].name).toUpperCase()
  }`];
  const rpc = networkIds[chainId].rpc;
  
  new WalletConnectConnector({
    rpcUrl: rpc + key,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });
}
