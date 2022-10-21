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
      <div className="banner-area-p">
        <section class="breadcrumb-area bc-lottery">
          {/* <img class="bc-img" src="/images/navbar/096_GoldenAwards1.png" alt=""/>*/}

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div className="banner1-text">
                  <img src="/images/banner/logo-qc-banner2.png" alt="" className="img-fluid"/>
                </div>
                 <div className="banner1-text">
                  <img src="/images/banner/1-banner-qc3.png" alt="" className="img-fluid"/>
                  
                </div>
                <div className="banner1-text-support2">
                    <h3>Enter to win the first on-chain Quantum Raffle NFT</h3>
                </div>
                <div className="banner1-text-support">
                    <h1 className="count-prin">{days}D : {hours}H : {minutes}M : {seconds}S</h1>
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
