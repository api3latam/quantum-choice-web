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
                    <h1 className="count-prin">03D : 08H : 58M : 88S</h1>
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
