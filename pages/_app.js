
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap.min.css'
import '../styles/responsive.css'
import { useEffect,useState } from 'react';
import Navbar from '../components/navbar'


config.autoAddCss = false

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import { WalletConnect } from '../components/wallet/connectors';

function getLibrary(provider) {
  return new Web3Provider(provider);
}


function MyApp({ Component, pageProps }) {
    useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
    },[])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  return (
    
     <div>
        {loading ? (<div className='loader-container'>
          <div className='spinner'></div>
        </div>):(
         <div>
           <Web3ReactProvider
          getLibrary={getLibrary}
        >
          <Navbar />
          <Component {...pageProps} />
      </Web3ReactProvider>
         </div>)}
     </div>
  )
}

export default MyApp
