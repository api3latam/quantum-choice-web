import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { networkIds } from "../../utils/misc";

export const WalletConnect = (chainId) => {
  const key = process.env[`NEXT_PUBLIC_${
    (networkIds[chainId].name).toUpperCase()
  }`];
  const rpc = networkIds[chainId].rpc;
  
  return new WalletConnectConnector({
    rpcUrl: rpc + key,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });
}
