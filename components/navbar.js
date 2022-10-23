import React, { useEffect } from 'react';
import Link from 'next/link';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import { WalletConnect } from "../components/wallet/connectors";
import Dropdown from "./networkdropdown"

const Navbar = () => {
    const [networkId, setNetworkId] = useState(137);
    const [addy, setAddy] = useState('');

    const { active, account, connector,
            activate, deactivate } =
        useWeb3React();
    
    useEffect(() => {
       const wc = localStorage.getItem('walletconnect');
       
    }, []);
    async function connect() {
        console.log("Connecting...");
        try {
            const walletComponent = WalletConnect(networkId);
            await activate(walletComponent);
            localStorage.setItem("isWalletConnected", true);
           
        } catch (ex) {
         console.log(ex);
        }
    }

    const disconnect = () => {
        if (active) {
            connector = undefined;
            connector = WalletConnect(networkId);
            deactivate();
            localStorage.setItem("isWalletConnected", false);
        }
    }

    /**
     * Function to shorten the address
     * 0x61A8E99597725D76e17DaAFB293734dC0Aa7eBf5 to 0x61A8...7eBf5
     */
    const shortenAddress = (address) => {
        if (address) {
            return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length);
        }
    }



    return (
        <React.Fragment>
            <header className='navbar-container'>
             


                <div className='navbar-area'>
                    <div className='container'>
                        <nav class="navbar position-static navbar-expand-lg ">
                            <div class="container-fluid">

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    <h3 className='text-connect'>Connect here</h3>
                                </button>
                                <a className="navbar-brand" >
                                    <img src='/images/navbar/Frame.png' />
                                </a>

                                <div class="navbar-collapse collapse" id="navbarTogglerDemo01">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link href='/'>
                                            <a className="nav-link"  data-toggle="collapse" data-target="#navbarTogglerDemo01">HOME
                                                <div className="mr-hover-effect"></div></a></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link href='/howto'>
                                            <a className="nav-link"  data-toggle="collapse" data-target="#navbarTogglerDemo01">HOW TO PLAY
                                                <div className="mr-hover-effect"></div></a></Link>
                                        </li>
                                        <li class="nav-item">
                                           <Dropdown />
                                        </li>

                                       
                                         {active ? (  <li>
                                            <a  class="btnsi ml-auto wallet-btn" onClick={disconnect} data-toggle="modal"> Disconnect wallet</a>
                                               <a  class="btnsi ml-auto wallet-btn" >{shortenAddress(account)}</a>
                                           
                                        </li>):(  <li>
                                            <a  class="btnsi ml-auto wallet-btn" onClick={connect} data-toggle="modal"> Connect wallet</a>
                                            
                                        </li>)}
                                         
                                    </ul>

                                </div>
                                <a className="navbar-brand2" href='https://twitter.com/API3Latam'>
                                    <img src='/images/navbar/icon-tw.png' />
                                </a>
                                <a className="navbar-brand2" href='https://qrng.anu.edu.au/' >
                                    <img src='/images/navbar/logo-qr.png' />
                                </a>
                                <a className="navbar-brand2" href='https://api3.org/QRNG'>
                                    <img src='/images/navbar/api3qrng.png' />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

            </header>

            {/* 
            <header className='navbar-container'>
                <div className='top-header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='content'>
                                    <div className='right-content'>
                                        <div className='sign-in '>
                                            <a href='#'>

                                                <i><img src='/images/navbar/Icon_142.png' />Sign In</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className='navbar-area'>                
                    <div className='container'>
                    


                        <div className="row">
                            <div className='col-lg-12'>
                                

                              
                                <nav className="navbar  navbar-expand-lg  navbar-light ">
                                    <a className="navbar-brand" href="#">
                                        <img src='/images/navbar/Frame.png' />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse  navbar-collapse fixed-height" id="main_menu">
                                        <ul className="navbar-nav  ">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">HOME
                                                    <div className="mr-hover-effect"></div></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">PLAY
                                                    <div className="mr-hover-effect"></div></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">CHOICE
                                                    <div className="mr-hover-effect"></div></a>
                                            </li>

                                        </ul>
                                        <a  href="#" className="btnsi ml-auto" data-toggle="modal" data-target="#signin"> Join us</a>
                                    </div>
                                </nav>
                               

                            </div>
                        </div>

                    </div>
                </div>
                
            </header>
*/}


        </React.Fragment>

    );
}

export default Navbar;