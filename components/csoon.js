import React from "react";
import Image from "next/image";

const Fullbanner = () => {

 
  
  return (
    <div className="bg-image-wrapper">

       <div className="cs-text">
         <Image
        src="/images/navbar/cs-text.png"
        alt="Cartoon graduates jump with happiness"
        quality="100"
        width={5000}
        height={1000}
        layout="responsive"
        />
        <div>
          <a className="btnsi ml-auto" href="https://api3-1.gitbook.io/api-latam-user-documentation/products/randomness-as-a-public-good" target="_blank"> Documentation</a>
        </div>

       
       </div>

      
    </div>
  );
};

export default Fullbanner;
