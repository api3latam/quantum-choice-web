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

const Banner = () => {
  /**State for image url */
  const defaultImageUrl = 'https://media.istockphoto.com/photos/question-mark-gold-3d-rendering-illustration-picture-id913510910?k=20&m=913510910&s=170667a&w=0&h=spNaqEvljoCmctQNfs7WKbvnSnc5dz7kDfjiAN5PZlM=';
  const [ imageUrl, setImageUrl ] = useState(defaultImageUrl);
  const [ videoUrl, setVideoUrl ] = useState("");
  const [ chainId, setChainId ] = useState(137);
  const [ isInitialized, setInitialization ] = useState(false);
  const [ isVideo, setIsVideo ] = useState(false);

  const { active, account } = useWeb3React();

  let network = "polygon";
  useEffect(() => {
    const chain = localStorage.getItem('networkId');

    console.log('Use Effect - PlayBanner', chain);
    if (chain) {
      setChainId(parseInt(chain));
      initialization();
    }
  }, []);

  const initialization = async () => {
    if ( !isInitialized ) {
      network = networkIds[chainId].name;
      const tokenData = await getTokenStatus(account, network) || [];
      if (tokenData.length > 0) {
        const targetTokenid = tokenData[tokenData.length - 1]['id'];
        const tokenToSet = await getImageUrl(targetTokenid);
        const tokenId = targetTokenid.split('/');
        if (Number(tokenId[tokenId.length - 1]) > 100) {
          setImageUrl(tokenToSet);
        } else {
          setImageUrl("");
          setIsVideo(true);
          setVideoUrl(tokenToSet);
        }
        setInitialization(true);
      }
    }
  }

  if (active) {
    initialization();
  };

  const signMessage = async () => {
    try {
      const signedMessage = account + network

      await setSignedHash(
        account,
        network, 
        signedMessage
      );
    } catch (err) {
      console.error(err);
    }
  };

  const verifyMessage = async () => {
    try {
      let verify;

      const hashSignature = await getSignedHash(
        account, 
        network
      ) || false;

      if (hashSignature) {
        verify = hashSignature === account+network 
          ? hashSignature 
          : undefined;
      }

      return verify === undefined ? false : verify;
    } catch (err) {
      console.error(err);
    }
  };

    
  // Add the current user's address to the database
  const addAddress = async () => {
      // TODO: Change alerys with proper UI.
      // Check if wallet is connected
      const hasSigned = await verifyMessage();
      if (localStorage?.getItem("isWalletConnected") === "true") {
          // Add the address to the database
          await setAddress(account, network);
          if (!hasSigned) {
            await signMessage()
          } else if (hasSigned) {
            Swal.fire({
              icon: 'info',
              title: 'You made the choice!',
              text: 'The NFT is being minted! It will appear the page shortly.',
              footer: '<a href="https://api3.org/QRNG">Learn about QRNG!</a>'
            })
          }
      }
      else {
          // Popup to connect wallet
           Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Connect your wallet to continue',
          })
      }
  };


  return (
    <div>
      <div className="banner-area">
        <section class="breadcrumb-area bc-lottery">
          {/* <img class="bc-img" src="/images/navbar/096_GoldenAwards1.png" alt=""/>*/}

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div className="banner1-text">
                  <img src="/images/banner/54_1.png" alt=""/>
                </div>
                <div className="banner1-text-support">
                    <h3>The first On-Chain Quantum Raffle</h3>
                </div>
             
              </div>
            </div>
            <div className="text-center">
              <div class="row text-center">
                <div class="col-lg-12 m-2">
                  {isVideo ? (<video class="video-fluid z-depth-1" autoplay loop controls muted style={{ width: '200px', height: '600px' }}>
                    <source src={videoUrl} type="video/mp4" />
                  </video>):(<img src={imageUrl} alt="" className="img-fluid"/>)}
                  
                </div>
                </div>
                  {(imageUrl === defaultImageUrl || (imageUrl === '' && videoUrl === '') ) 
                  ? (<button class="btnsi ml-auto" onClick={addAddress} > MINT NFT</button>) 
                  : (<h1 className="text-white"> NFT MINTED </h1>)}
            </div>
          </div>
        </section>
      </div>

     
    </div>
  );
};

export default Banner;
