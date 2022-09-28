import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'
import BannerSingleItem from '../components/bannerSingleItem'

const Banner = () => {
  const singleItem1 ={image:'/images/banner/NFTs.png'}
 
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

                  <li>
                    <div className="slider p-4">
                    <div className="bannerItems">
                      <BannerSingleItem data={singleItem1}/>
                    </div>
                 
                    </div>
                  </li>
                </ul>
              
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="lottery-area">
        <div class="lottery-staticstics">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="single-staticstics">
                  <div class="left">
                    <div class="icon">
                      <img src="/images/navbar/_17-2.png" />
                    </div>
                  </div>
                  <div class="right">
                    <h4 class="title">Choice Jackpot</h4>
                    <div class="count">
                      <img src="/images/navbar/ethereum-gold.png" />
                      <span>1.4888</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-staticstics">
                  <div class="left">
                    <div class="icon">
                      <img src="/images/banner/vectorticket.png" />
                    </div>
                  </div>
                  <div class="right">
                    <h4 class="title">Purchased Choice</h4>
                    <div class="count">
                      <img src="/images/banner/Group50.png" />
                      <span>120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-staticstics">
                  <div class="left">
                    <div class="icon">
                      <img src="/images/banner/vectorticket.png" />
                    </div>
                  </div>
                  <div class="right">
                    <h4 class="title">My Choice</h4>
                    <div class="count">
                      <img src="/images/banner/Group50.png" />
                      <span>02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="daily-lottery">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <div class="section-heading">
					<div><h5 class="subtitle">Try to check out our</h5></div>
                  
				  <div><h2 class="title">Daily Choice</h2></div>
                  <div> <p class="text">
                    We update our site regularly; more and more winners are
                    added every day! To locate the most recent winner's
                    information
                  </p></div>
                 
                </div>
              </div>
            </div>
             <div class="row">
              <div class="col-lg-12">
                <div class="draw-time">
                  <div class="subtitle" id="subtitleid">Lottery Draw Starts In:</div>
                  <div class="draw-counter">
                    <div>00D : 00H : 00M : 00S</div>
                  </div>
                  <div className="image-daily-lottery">
                    <img src="/images/banner/Logo-QRNG.png" alt="image counter" />
                  </div>
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
