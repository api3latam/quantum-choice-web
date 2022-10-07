import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import BannerSingleItem from '../components/bannerSingleItem'

const Banner = () => {
  /**State for image url */
  const [imageUrl, setImageUrl] = useState('/images/banner/NFTs.png');
  const singleItem1 ={image:imageUrl}
 
  
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
