import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const BannerSingleItem = (props) => {
  return (
    <div className="slideBanner">

      <div className="itemImageBanner">
        <img src={props.data.image} alt="" />
      </div>

      <div className="buttonItemPart mt-4">
        <a	href="#" class="btnsi" data-toggle="modal" data-target="#signin" >
					Activa
				</a>  
      </div>      
            
    </div>
  );
};

export default BannerSingleItem;
