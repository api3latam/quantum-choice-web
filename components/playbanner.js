import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import Swal from "sweetalert2";
import { networkIds,
      getImageUrl } from "../utils/misc";
import { setAddress,
      getTokenStatus,
      getSignedHash,
      setSignedHash } from '../utils/queries';

const Banner = () => {
  /**State for image url */
  const defaultImageUrl = 'https://media.istockphoto.com/photos/question-mark-gold-3d-rendering-illustration-picture-id913510910?k=20&m=913510910&s=170667a&w=0&h=spNaqEvljoCmctQNfs7WKbvnSnc5dz7kDfjiAN5PZlM=';
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
  const [ chainId, setChainId ] = useState(5);
  const [ isInitialized, setInitialization ] = useState(false);

  const { active, account } = useWeb3React();

  let network = "polygon";
  useEffect(() => {
    const chain = localStorage.getItem('networkId');

    console.log('Use Effect - PlayBanner', chain);
    if (chain) {
      setChainId(parseInt(chain));
      initialization();
    }
  }, []);

  const initialization = async () => {
    if ( !isInitialized ) {
      network = networkIds[chainId].name;
      const tokenData = await getTokenStatus(account, network) || [];
      if (tokenData.length > 0) {
        const tokenToSet = await getImageUrl(tokenData[0]['id']);
        setImageUrl(tokenToSet);

        setInitialization(true);
      }
    }
  }

  if (active) {
    initialization();
  };

  const signMessage = async () => {
    try {
      const signedMessage = account + network

      await setSignedHash(
        account,
        network, 
        signedMessage
      );
    } catch (err) {
      console.error(err);
    }
  };

  const verifyMessage = async () => {
    try {
      let verify;

      const hashSignature = await getSignedHash(
        account, 
        network
      ) || false;

      if (hashSignature) {
        verify = hashSignature === account+network 
          ? hashSignature 
          : undefined;
      }

      return verify === undefined ? false : verify;
    } catch (err) {
      console.error(err);
    }
  };

    
  // Add the current user's address to the database
  const addAddress = async () => {
      // TODO: Change alerys with proper UI.
      // Check if wallet is connected
      const hasSigned = await verifyMessage();
      if (localStorage?.getItem("isWalletConnected") === "true") {
          // Add the address to the database
          await setAddress(account, network);
          if (!hasSigned) {
            await signMessage()
          } else if (hasSigned) {
            Swal.fire({
              icon: 'info',
              title: 'You made the choice!',
              text: 'The NFT is being minted! It will appear the page shortly.',
              footer: '<a href="https://api3.org/QRNG">Learn about QRNG!</a>'
            })
          }
      }
      else {
          // Popup to connect wallet
           Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Connect your wallet to continue',
          })
      }
  };


  return (
    <div>
      <div className="banner-area">
        <section class="breadcrumb-area bc-lottery">
          {/* <img class="bc-img" src="/images/navbar/096_GoldenAwards1.png" alt=""/>*/}

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="title" >Quantum Choice</h4>
                <ul class="breadcrumb-list">

                </ul>
             
              </div>
            </div>
            <div className="text-center">
              <div class="row text-center">
                <div class="col-lg-12 m-2">
                  <img src={imageUrl} alt="" width={300} height={300}/>
                </div>
                </div>
                  {imageUrl === defaultImageUrl ? (<button class="btnsi ml-auto" onClick={addAddress} > MINT NFT</button>) : (<h1> NFT MINTED </h1>)}
            </div>
          </div>
        </section>
      </div>

      <section className="lottery-area">
        
        <div class="daily-lottery">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <div class="section-heading">
					<div><h5 class="subtitle">QUANTUM CHOICE</h5></div>
                  
				  <div><h2 class="title">Daily Choice</h2></div>
                  <div> <p class="text">
                    If you get the shinny NFT, contact andres@api.org for a surprise!
                  </p></div>
                  <div> <p class="text">
                    Now you can enter our raffle! 
                  </p></div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
