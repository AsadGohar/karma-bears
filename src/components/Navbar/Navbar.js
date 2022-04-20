import React from 'react'
import { ReactComponent as KarmaLogo } from '../../assets/karma-logo.svg'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg'
import detectEthereumProvider from '@metamask/detect-provider'
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux'
import { USER_LOGIN } from '../../redux/userSlice'
import {
  Link
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
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item pr-4 active">
                        <a className="nav-link" href="#home">HOME<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="#roadmap">ROADMAP</a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="#team">TEAM</a>
                    </li>
                    <li className="nav-item pr-4">
                        <a className="nav-link" href="#faq">FAQs</a>
                    </li>
                    <li className="nav-item pr-4">
											<Link  to="/admin" className="nav-link">
												Admin
											</Link>
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
											<h2 className="btn btn-primary mr-2" >Connected</h2>:
											<button type="submit" onClick={loginWithMetaMask} className="btn btn-primary mr-2">Connect</button> 
										}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar