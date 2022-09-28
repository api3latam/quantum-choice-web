import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Navbar = () => {

    return (
        <React.Fragment>
            <div className='navbar-container '>
                <div className='top-navbar'>
                    <div className='container'>
                        
                    </div>
                </div>

                <div className='navbar-area'>

                
                    <div className='container'>
                    


                        <div className="row">
                            <div className='col-lg-12'>
                                

                              
                                <nav class="navbar  navbar-expand-lg  navbar-light ">
                                    <a class="navbar-brand" href="#">
                                        <img src='/images/navbar/Frame.png' />
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse  navbar-collapse fixed-height" id="main_menu">
                                        <ul class="navbar-nav  ">
                                            <li class="nav-item">
                                                <a class="nav-link" href="/">HOME
                                                    <div class="mr-hover-effect"></div></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/play">PLAY
                                                    <div class="mr-hover-effect"></div></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/choice">CHOICE
                                                    <div class="mr-hover-effect"></div></a>
                                            </li>

                                        </ul>
                                        <div className='float-right'>
                                            <a  href="#" class="btnsi ml-2" > Join us</a>
                                        </div>
                                    </div>
                                </nav>
                               

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}

export default Navbar;