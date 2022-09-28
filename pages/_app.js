
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap.min.css'
import '../styles/responsive.css'
import { useState, useEffect } from 'react';
import Script from 'next/script'

config.autoAddCss = false

import { Web3ReactProvider } from '@web3-react/core';
import { providers } from "ethers";

function getLibrary(provider, connector) {
  return new providers.Web3ReactProvider(provider);
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
