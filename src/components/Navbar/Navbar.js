import React from 'react'
import { ReactComponent as KarmaLogo } from '../../assets/karma-logo.svg'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg'
import detectEthereumProvider from '@metamask/detect-provider'
import { toast } from 'react-toastify';
import { NavHashLink } from 'react-router-hash-link';
import {
  NavLink
} from "react-router-dom";
import './Navbar.css'
import { getAddress, getOwner } from '../../utils/contractUtils'

const Navbar = () => {

  const [user,setUser] = React.useState('')
  const [isOwner,setIsOwner] = React.useState(false)

  React.useEffect(()=> {
    getUser()
  },[])
  
  const getUser = async () => {
    setUser(await getAddress())
    await getAddress() ===  await getOwner() ? setIsOwner(true) : setIsOwner(false)
  }

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
        // console.log(acc[0])
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
					// dispatch(USER_LOGIN(address))
          let owner = await getOwner()
          owner === address ? setIsOwner(true) : setIsOwner(false)          
          var shortAddress = address.substring(0,6)+'...'+address.substring(address.length-4,address.length);
          console.log(shortAddress)
          window.location.reload()
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
              >HOME</NavHashLink>
            </li>
            <li className="nav-item pr-4">
              <NavHashLink
                to="/#about"
              >ABOUT</NavHashLink>
            </li>
            <li className="nav-item pr-4">
              <NavHashLink
                to="/#roadmap"
              >ROADMAP</NavHashLink>
            </li>
            <li className="nav-item pr-4">
              <NavHashLink
                to="/#team"
              >OUR TEAM</NavHashLink>
            </li>
            <li className="nav-item pr-4">
              <NavHashLink
                to="/#faq"
              >FAQs</NavHashLink>
            </li>
            <li className="nav-item pr-4">
              <NavLink
                to="/mint"
              >MINT</NavLink>
            </li>
            <li className="nav-item pr-4">
              <NavLink
                to="/gallery"
                
              >GALLERY</NavLink>
            </li>
            {
              isOwner &&             
              <li className="nav-item pr-4">
                <NavLink
                  to="/admin"
                  activeClassName="selected"
                >ADMIN</NavLink>
              </li>
            }
          </ul>
          <ul className='my-lg-0 navbar-nav pr-4 ml-auto align-items-center'>
            <li className="nav-item pr-4">
              <a target="_blank" 
              href="https://discord.gg/rFYBKgwgpn" 
              className=""
              rel="noreferrer"
              >
                <DiscordIcon/>
              </a>
            </li>
            <li className="nav-item pr-4">
              <a target="_blank" 
              href="https://www.instagram.com/karmabearnft/" 
              className=""
              rel="noreferrer"
              >
                <InstagramIcon/>
              </a>
            </li>
            <li className="nav-item pr-4">
              <a target="_blank" 
              href="https://twitter.com/karmabearnft/" 
              className=""
              rel="noreferrer"
              >
                <TwitterIcon/>
              </a>
            </li>
            {
              user.length > 0  ?
              <h2 className="btn mr-2 connect-btn  mb-0" >Connected</h2>  :
              <button type="submit" onClick={loginWithMetaMask} className="btn connect-btn mr-2">Connect</button> 
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
