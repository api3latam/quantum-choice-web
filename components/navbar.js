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
                        <nav class="navbar">
                            <div class="container-fluid">
                                
                                <div id="navbarTogglerDemo01">
                                    <Link href='/'>
                                        <img className="navbar-brand"  src='/images/navbar/Frame.png' />
                                    </Link>
                                    <ul class="navbar-nav2">
                                        <li class="nav-item">
                                            <Link href='/howto'>
                                            <a className="nav-link">RULES
                                            <div className="mr-hover-effect"></div></a></Link>
                                        </li>
                                                                           
                                         
                                    </ul>
                                    <div className='btnju d-flex'>
                                         <Dropdown />
                                        {active ? (  <div>
                                                <a  class="btnsi ml-auto wallet-btn nav-rgt" onClick={disconnect}> Disconnect wallet</a>
                                                <a  class="btnsi ml-auto wallet-btn" >{shortenAddress(account)}</a>
                                            
                                            </div>):(  <div>
                                                <a  class="btnsi ml-auto wallet-btn nav-rgt" onClick={connect}> Connect wallet</a>
                                                
                                            </div>)}
                                    </div>
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