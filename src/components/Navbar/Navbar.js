import React from 'react'
import { ReactComponent as KarmaLogo } from '../../assets/karma-logo.svg'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg'
import detectEthereumProvider from '@metamask/detect-provider'
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux'
import { USER_LOGIN } from '../../redux/userSlice'
import { NavHashLink } from 'react-router-hash-link';
import {
  NavLink
} from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

	let dispatch = useDispatch()

  let {user}  = useSelector(state=>state.user)
	console.log(user,'user')
	
  const loginWithMetaMask = async (e) => {
    console.log('here')
    e.preventDefault()
    const provider = await detectEthereumProvider();
    if (provider) {
    //   setMetaMaskLoader(true)
      let ethereum;
      if (window.ethereum.providers===undefined){
         ethereum = window.ethereum;
      }else {
        ethereum = window.ethereum.providers.find((provider) => provider.isMetaMask);
      }
      try {
        // let signer = ethereum.getA

        let acc = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log(acc[0])
        if(acc[0] == null) {
          ethereum.request({ method: 'eth_accounts' })
          .then((accounts)=>{
            if (accounts.length === 0) {
                toast.warn('Please connect to MetaMask.', {
                    position: toast.POSITION.TOP_LEFT
                })
            //   console.log('Please connect to MetaMask.');
            } 
          })
          .catch((err) => {
            console.error(err);
          });
        }
        if (acc[0] != null) {
          var address = acc[0];
         	localStorage.setItem('user',JSON.stringify(address))
					dispatch(USER_LOGIN(address))
          var shortAddress = address.substring(0,6)+'...'+address.substring(address.length-4,address.length);
          console.log(shortAddress)
        //   loginProviderRequest(address,shortAddress,setMetaMaskLoader)
        }
    } catch (error) {
        console.log(error);
        // setMetaMaskLoader(false)
    }
    } else {
      toast.error('Please Install MetaMask', {
            position: toast.POSITION.TOP_LEFT
        })
    }
  }

  return (
    <div id="nav">
        <nav className="navbar navbar-expand-lg bg">
            <a className="ml-4 navbar-brand" href="x">
                <KarmaLogo/>
            </a>
           
            <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" 
              data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation"><span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item pr-4 active">
                        <NavHashLink
                          to="/#home"
                          activeClassName="selected"
                        >HOME</NavHashLink>
                    </li>
                    <li className="nav-item pr-4">
                        <NavHashLink
                          to="/#about"
                          activeClassName="selected"
                        >ABOUT</NavHashLink>
                    </li>
                    <li className="nav-item pr-4">
                        <NavHashLink
                          to="/#roadmap"
                          activeClassName="selected"
                        >ROADMAP</NavHashLink>
                    </li>
                    <li className="nav-item pr-4">
                        <NavHashLink
                          to="/#team"
                          activeClassName="selected"
                        >OUR TEAM</NavHashLink>
                    </li>
                    <li className="nav-item pr-4">
                      <NavHashLink
                        to="/#faq"
                        activeClassName="selected"
                      >FAQs</NavHashLink>
                    </li>
                    <li className="nav-item pr-4">
                      <NavLink
                        to="/mint"
                        activeClassName="selected"
                      >MINT</NavLink>
                    </li>
                    <li className="nav-item pr-4">
                      <NavLink
                        to="/gallery"
                        activeClassName="selected"
                      >GALLERY</NavLink>
                    </li>
                    <li className="nav-item pr-4">
                      <NavLink
                        to="/admin"
                        activeClassName="selected"
                      >ADMIN</NavLink>
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
                    {
											String(user).length > 0 ?
											<h2 className="btn mr-2 connect-btn" >Connected</h2>:
											<button type="submit" onClick={loginWithMetaMask} className="btn connect-btn mr-2">Connect</button> 
										}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar