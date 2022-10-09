import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState} from 'react'
import { useWeb3React } from '@web3-react/core'

import { networkIds,
      getImageUrl } from "../utils/misc";
import { setAddress,
      getTokenStatus,
      getSignedHash,
      setSignedHash } from '../utils/queries';

const Banner = () => {
  /**State for image url */
  const [imageUrl, setImageUrl] = useState('https://media.istockphoto.com/photos/question-mark-gold-3d-rendering-illustration-picture-id913510910?k=20&m=913510910&s=170667a&w=0&h=spNaqEvljoCmctQNfs7WKbvnSnc5dz7kDfjiAN5PZlM=');

  const { active, account,
    library,
    chainId } = useWeb3React();

  const initialization = async() => {
    const network = networkIds[chainId].name;
    const tokenData = await getTokenStatus(account, network);
    if (tokenData) {
      const tokenToSet = getImageUrl(tokenData[-1]['id']);
      setImageUrl(tokenToSet);
    }
  }

  if (active) {
    initialization();
  };

  const signatureMessage = "Sign to get your NFT!";

  const signMessage = async () => {
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [signatureMessage, account]
      });
      await setSignedHash(
        networkIds[chainId].name, 
        signature
      );
    } catch (err) {
      console.error(err);
    }
  };

  const verifyMessage = async () => {
    try {
      const hashSignature = await getSignedHash(
        account, 
        networkIds[chainId].name
      );
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signatureMessage, hashSignature]
      });
      return verify === undefined ? false : verify;
    } catch (err) {
      console.error(err);
    }
  };

    
  // Add the current user's address to the database
  const addAddress = () => {
      // TODO: Change alerys with proper UI.
      // Check if wallet is connected
      const hasSigned = verifyMessage();
      if (localStorage?.getItem("isWalletConnected") === "true") {
          // Add the address to the database
          const network = networkIds[chainId];
          setAddress(account, network);
          if (!hasSigned) {
            signMessage()
          }
      }
      else {
          // Popup to connect wallet
          alert("Please connect your wallet to continue");
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
                  <button class="btnsi ml-auto" onClick={addAddress} > MINT NFT</button>
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
