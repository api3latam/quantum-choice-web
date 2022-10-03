import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState} from 'react'
import { useWeb3React } from '@web3-react/core'

import { networkIds,
      getImageUrl } from "../utils/misc";
import { setAddress,
      getTokenStatus } from '../utils/firebase';

const Banner = () => {
  /**State for image url */
  const [imageUrl, setImageUrl] = useState('https://media.istockphoto.com/photos/question-mark-gold-3d-rendering-illustration-picture-id913510910?k=20&m=913510910&s=170667a&w=0&h=spNaqEvljoCmctQNfs7WKbvnSnc5dz7kDfjiAN5PZlM=');

  // Function to get the current user's address
  const { active, account,
    library,
    chainId } = useWeb3React();

  if (active) {
    const network = networkIds[chainId];
    const tokenData = getTokenStatus(account, network)
    if (tokenData) {
      const tokenToSet = getImageUrl(tokenData[-1]['id']);
      setImageUrl(tokenToSet);
    }
  };
    
  // Add the current user's address to the database
  const addAddress = () => {
      // TODO: Change alerys with proper UI. Add metamask sign.
      // Check if wallet is connected
      if (localStorage?.getItem("isWalletConnected") === "true") {
          // Add the address to the database
          setAddress(account);
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
                <h4 class="title">Quantum Choice</h4>
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
