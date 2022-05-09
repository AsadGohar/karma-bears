import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/newsletter-input.svg'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg'
import { NavHashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="container-fluid mx-0 d-flex justify-content-center align-items-center flex-column px-0 row-margin-0 text-center">
            <div className="row mx-0">
                <div className="col-md-5 mt-md-0 mt-3">
                    <img src={'../assets/karma-white-logo.png'} alt='logo' />
                </div>
            </div>
            <p className='grey-clr mb-4'>KARMA BEAR is a collection of 10,000, 1080x1920, computer generated art</p>
            <div id='footer-links'>
                <ul className="list-unstyled quick-links d-flex">
                    <li>
                        <NavHashLink
                            to="/#home"
                        >HOME</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#about"
                        >ABOUT</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#roadmap"
                        >ROADMAP</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#team"
                        >OUR TEAM</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#faq"
                        >FAQs</NavHashLink>
                    </li>
                </ul>
            </div>
        </div>
        <hr className='footer-hr' />
        <div className="text-center py-3 grey-clr row mx-0 footer-base">
            <div className='col-md-4'>
            <img className='ml-2' src={'./assets/email-icon.png'} /> karmabear@gmail.com
            </div>
            <div className='col-md-4'>
                Copyright © 2022 KarmaBear. All Rights Reserved
            </div>
            <div className='col-md-4 d-flex justify-content-center align-items-center'>
                Follow Us On
                <div>
                    <img className='ml-2' src={'./assets/footer-discord-icon.png'} /> 
                </div>
                <div>
                    <img className='ml-2' src={'./assets/footer-twitter-icon.png'} />    
                </div>
                <div>
                    <img className='ml-2' src={'./assets/footer-ig-icon.png'} /> 
                </div>
            </div>
        </div>
    </footer> 
)}

export default Footer