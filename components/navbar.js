import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script"

import { useEffect, useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'
import { WalletConnect } from "../components/wallet/connectors";

const Navbar = () => {
    const [networkId, setNetworkId] = useState(137);

    const { active, account, activate, deactivate } =
        useWeb3React();

    async function connect() {
        try {
        await activate(WalletConnect(networkId));
        localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
        console.log(ex);
        }
    }

    async function disconnect() {
        try {
        deactivate();
        localStorage.setItem("isWalletConnected", false);
        } catch (ex) {
        console.log(ex);
        }
    }

    // useEffect(() => {
    //     const connectWalletOnPageLoad = async () => {
    //     if (localStorage?.getItem("isWalletConnected") === "true") {
    //         try {
    //         await activate(WalletConnect);
    //         localStorage.setItem("isWalletConnected", true);
    //         } catch (ex) {
    //         console.log(ex);
    //         }
    //     }
    //     };
    //     connectWalletOnPageLoad();
    // }, []);

    return (
        <React.Fragment>
            <header className='navbar-container'>
             


                <div className='navbar-area'>
                    <div className='container'>
                        <nav class="navbar sticky-top navbar-expand-lg ">
                            <div class="container-fluid">

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <a className="navbar-brand" href="/">
                                    <img src='/images/navbar/Frame.png' />
                                </a>

                                <div class="navbar-collapse collapse" id="navbarTogglerDemo01">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a className="nav-link" href="/" data-toggle="collapse" data-target="#navbarTogglerDemo01">HOME
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="/play" data-toggle="collapse" data-target="#navbarTogglerDemo01">PLAY
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="choice" data-toggle="collapse" data-target="#navbarTogglerDemo01">CHOICE
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                         {active ? (  <li>
                                            <a  href="#" class="btnsi ml-auto wallet-btn" onClick={disconnect} data-toggle="modal"> Disconnect wallet</a>
                                            <p className="h2 text-white">
                                                Connected with <b>{account}</b>
                                            </p>
                                        </li>):(  <li>
                                            <a  href="#" class="btnsi ml-auto wallet-btn" onClick={connect} data-toggle="modal"> Connect wallet</a>
                                            <p className="h2 text-white">
                                                Not connected
                                            </p>
                                        </li>)}

                                    </ul>

                                </div>
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