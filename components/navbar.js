import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script"
const Navbar = () => {


    return (
        <React.Fragment>

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
                        <nav class="navbar sticky-top navbar-expand-lg ">
                            <div class="container-fluid">

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <a className="navbar-brand" href="#">
                                    <img src='/images/navbar/Frame.png' />
                                </a>

                                <div class="navbar-collapse collapse" id="navbarTogglerDemo01">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" data-target="#navbarTogglerDemo01">HOME
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" data-target="#navbarTogglerDemo01">PLAY
                                                <div className="mr-hover-effect"></div></a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" data-target="#navbarTogglerDemo01">CHOICE
                                                <div className="mr-hover-effect"></div></a>
                                        </li>

                                        <li class="nav-item btnju">
                                            <a href="#" className="btnsi ml-auto" data-toggle="collapse" data-target="#navbarTogglerDemo01"> Join us</a>
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