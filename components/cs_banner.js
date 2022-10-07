import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import BannerSingleItem from './bannerSingleItem'

const Banner = () => {
  /**State for image url */
  const [imageUrl, setImageUrl] = useState('/images/banner/NFTs.png');
  const singleItem1 ={image:imageUrl}
 
  
  return (
    <div>
      <div className="cs-banner-area">
        <section class="cs-breadcrumb-area">
          {/* <img class="bc-img" src="/images/navbar/096_GoldenAwards1.png" alt=""/>*/}

          <div class="cs-container">
          
          </div>
        </section>
      </div>


    </div>
  );
};

export default Banner;
