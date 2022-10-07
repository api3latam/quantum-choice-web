import React from "react";
import Image from "next/image";

const fullbanner = () => {

 
  
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
       </div>
    </div>
  );
};

export default fullbanner;
