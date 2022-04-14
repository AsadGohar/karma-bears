import React from 'react'
import { ReactComponent as KarmaLogo } from '../../assets/karma-logo.svg'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id="nav">
        <nav className="navbar navbar-expand-lg bg">
            <a className="ml-4 navbar-brand" href="x">
                <KarmaLogo/>
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item pr-4 active">
                        <a className="nav-link" href="x">HOME<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="x">ABOUT</a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="x">ROADMAP</a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="x">TEAM</a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="x">FAQs</a>
                    </li>
                </ul>
                <ul className='my-lg-0 navbar-nav pr-4 ml-auto'>
                    <li className="nav-item pr-4">
                        <DiscordIcon/>
                    </li>
                    <li className="nav-item pr-4">
                        <InstagramIcon/>
                    </li>
                    <li className="nav-item pr-4">
                        <TwitterIcon/>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar