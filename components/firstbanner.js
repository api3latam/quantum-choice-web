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

import 'animate.css'


const Fullbanner = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDownDate = new Date("Oct 15, 2022 23:59:59").getTime();
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    if (distance < 0) {
      clearInterval(countdown);
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  }, 1000);

  return (
    <div>
      <div className="banner-area-p ">
        <section class="breadcrumb-area bc-lottery">
          {/* <img class="bc-img" src="/images/navbar/096_GoldenAwards1.png" alt=""/>*/}

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div className="banner1-text">
                  <img src="/images/banner/logo-qc-banner2.webp" alt="" className="img-fluid animate__animated  animate__backInUp "/>
                </div>
                 <div className="banner1-text">
                  <img src="/images/banner/1-banner-qc3.webp" alt="" className="img-fluid animate__animated  animate__backInUp "/>
                  
                </div>
                <div className="banner1-text-support2 animate__animated  animate__backInUp ">
                    <h3>Enter to win the first on-chain Quantum Raffle NFT</h3>
                </div>
                <div className="banner1-text-support animate__animated animate__backInUp">
                    <h1 className="count-prin">{days}D : {hours}H : {minutes}M : {seconds}S</h1>
                </div>
             
              </div>
            </div>
            
          </div>
        </section>
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
                  {/* TODO: ADD NETWORKS LOGO*/}
                  <div class="right">
                    <h4 class="title">Polygon</h4>
                    <div class="count">
                        <img src="/images/banner/Group50.png" />
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
                    <h4 class="title">Optimism</h4>
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
                    <h4 class="title">Arbitrium</h4>
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

      </section>
      </div>

     
    </div>
  );
};

export default Fullbanner;
