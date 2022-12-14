import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useState} from 'react'

const Navbar = () => {
    const [networkId, setNetworkId] = useState(137);

    const { active, account, activate, deactivate } =
       
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

    async function disconnect() {
        try {
            deactivate();
            localStorage.setItem("isWalletConnected", false);
        } catch (ex) {
        console.log(ex);
        }
    }

    return (
        <React.Fragment>
            <header className='navbar-container'>
             


                <div className='navbar-area'>
                    <div className='container'>
                        <nav class="navbar">
                            <div class="container-fluid">
                                <a className="navbar-brand" href="/">
                                    <img src='/images/navbar/Frame.png' />
                                </a>

                                <div class="" id="navbarTogglerDemo01">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a className="nav-link" href="/">HOME
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="#">PLAY
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="#">CHOICE
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                         
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