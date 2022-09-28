import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'

const Banner = () => {
  /**State for image url */
  /**TODO: Replace with NFT Url */
    const [imageUrl, setImageUrl] = useState('https://cdn3.f-cdn.com/contestentries/1233731/27978425/5a61f080ea253_thumb900.jpg');

  
  const { active, account, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);
  
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
                    
                  {active ? (  <li>
                    <a  href="#" class="btnsi ml-auto" onClick={disconnect} data-toggle="modal"> Disconnect wallet</a>
                    <p className="h2 text-white">
                        Connected with <b>{account}</b>
                      </p>
                  </li>):(  <li>
                    <a  href="#" class="btnsi ml-auto" onClick={connect} data-toggle="modal"> Connect wallet</a>
                     <p className="h2 text-white">
                        Not connected
                      </p>
                  </li>)}

                </ul>
             
              </div>
            </div>
            <div className="text-center">
              <div class="row text-center">
                <div class="col-lg-12 m-2">
                  <img src={imageUrl} alt="" width={300} height={300}/>
                </div>
                </div>
                  <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> MINT NFT</a>
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
