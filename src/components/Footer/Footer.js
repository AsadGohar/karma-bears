import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/newsletter-input.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer' className="page-footer font-small blue pt-4 container-fluid">
        <div className="container-fluid row-margin-0 text-center text-md-left">
            <div className="row row-margin-0">
                <div className="col-md-5 mt-md-0 mt-3">
                    <img src={'../assets/karma-white-logo.png'} alt='logo' />
                    <p className='text-white logo-sec-text' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 mt-2">
                    <p className="footer-heading">Quick Links</p>
                    <ul className="list-unstyled quick-links">
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <li>
                            <a href="#!">Roadmap</a>
                        </li>
                        <li>
                            <a href="#!">Team</a>
                        </li>
                        <li>
                            <a href="#!">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 mb-3 mt-2">
                    <p className="footer-heading">Newsletter</p>
                    <p className='text-white newsletter-text'>
                        Signup for our newsletter to get the latest news in your inbox. 
                        Your email is safe with us. We don't spam.
                    </p>
                    <div className="d-flex justify-content-center align-items-center form-sec mr-2">
                        <input className="form-input form-control" placeholder='Email Address'  min='0' type="email"/>
                        <ArrowIcon className='arrow-icon'/>
                    </div>
                    <div className='start-sec' >
                        <img alt='x' src={'../assets/newsletter-start.png'} />
                        <img alt='x' src={'../assets/newsletter-start.png'} />
                        <img alt='x' src={'../assets/newsletter-start.png'} />
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-copyright text-center py-3 text-white">Copyright © 2022 KarmaBear.
         All Rights Reserved
        </div>
    </footer> 
)}

export default Footer