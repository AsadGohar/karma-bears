import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/newsletter-input.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer' className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row row-margin-0">
                <div className="col-md-5 mt-md-0 mt-3">
                    <img src={'../assets/karma-white-logo.png'} />
                </div>
                <hr className="clearfix w-100 d-md-none pb-3"/>
                <div className="col-md-3 mb-md-0 mb-3">
                    <p className="footer-heading">Quick Links</p>
                    <ul className="list-unstyled quick-links">
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <li>
                            <a href="#!">Team</a>
                        </li>
                        <li>
                            <a href="#!">Roadmap</a>
                        </li>
                        <li>
                            <a href="#!">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 mb-3">
                    <p className="footer-heading">Newsletter</p>
                    <p className='text-white newsletter-text'>
                        Signup for our newsletter to get the latest news in your inbox. 
                        Your email is safe with us. We don't spam.
                    </p>
                    <div className="d-flex justify-content-center align-items-center form-sec">
                        <input className="form-input form-control"  min='0' type="email"/>
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
        <div className="footer-copyright text-center py-3 text-white">Copyright © 2022 KarmaBear.
         All Rights Reserved
        </div>
    </footer> 
)}

export default Footer