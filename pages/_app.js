
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap.min.css'
import '../styles/responsive.css'
config.autoAddCss = false

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}


function MyApp({ Component, pageProps }) {
  return (
     <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
