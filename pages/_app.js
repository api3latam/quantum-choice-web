
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap.min.css'
import '../styles/responsive.css'
import { useEffect } from 'react';

config.autoAddCss = false

import { Web3ReactProvider } from '@web3-react/core';

import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}


function MyApp({ Component, pageProps }) {
    useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
    },[])
  return (
     <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
