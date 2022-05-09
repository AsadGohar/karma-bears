import React from 'react'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg'
import detectEthereumProvider from '@metamask/detect-provider'
import { toast } from 'react-toastify';
import { NavHashLink } from 'react-router-hash-link';
import {
  NavLink
} from "react-router-dom";
import { getAddress, getOwner } from '../../utils/contractUtils'
import './Navbar.css'

const Navbar = () => {

  const [user, setUser] = React.useState('')
  const [isOwner, setIsOwner] = React.useState(false)

  React.useEffect(() => {
    getUser()

  }, [])

  const getUser = async () => {
    setUser(await getAddress())
    await getAddress() === await getOwner() ? setIsOwner(true) : setIsOwner(false)
  }

  const loginWithMetaMask = async (e) => {
    e.preventDefault()
    const provider = await detectEthereumProvider();
    if (provider) {
      //   setMetaMaskLoader(true)
      let ethereum;
      if (window.ethereum.providers === undefined) {
        ethereum = window.ethereum;
      } else {
        ethereum = window.ethereum.providers.find((provider) => provider.isMetaMask);
      }
      try {
        // let signer = ethereum.getA

        let acc = await ethereum.request({ method: 'eth_requestAccounts' });
        // console.log(acc[0])
        if (acc[0] == null) {
          ethereum.request({ method: 'eth_accounts' })
            .then((accounts) => {
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
          localStorage.setItem('user', JSON.stringify(address))
          // dispatch(USER_LOGIN(address))
          let owner = await getOwner()
          owner === address ? setIsOwner(true) : setIsOwner(false)
          var shortAddress = address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length);
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
      <nav className={`navbar nav-bg-cust fixed-top navbar-expand-lg`}>
        <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation"><span className="navbar-toggler-icon "></span>
        </button>
        <NavHashLink
          to="/"
        ><img className='navbar-logo' src={'./assets/logo.png'} /></NavHashLink>
        <div id='navbarNav' className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="pr-4">
              <NavHashLink className='cust-nav-link'
                to="/#home"
              >Home</NavHashLink>
            </li>
            <li className="pr-4">
              <NavHashLink className='cust-nav-link'
                to="/#about"
              >About</NavHashLink>
            </li>
            <li className="pr-4">
              <NavHashLink className='cust-nav-link'
                to="/#roadmap"
              >Roadmap</NavHashLink>
            </li>
            <li className="pr-4">
              <NavHashLink className='cust-nav-link'
                to="/#team"
              >Team</NavHashLink>
            </li>
            <li className="pr-4">
              <NavHashLink className='cust-nav-link'
                to="/#faq"
              >FAQ</NavHashLink>
            </li>
          </ul>
          <ul className='my-lg-0 navbar-nav ml-auto align-items-center'>
            <div className="nav-social-links">
              <a href="http://www.twitter.com/karmabearnft" className="social-link-block w-inline-block">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/626e0e0bf813b1548675828a/626efc31bbe6b8377a106701_1.png" alt="" className="social-icon" />
              </a>
              <a href="http://www.instagram.com/karmabearnft" className="social-link-block w-inline-block">
                <img width="33" loading="lazy" src="https://uploads-ssl.webflow.com/626e0e0bf813b1548675828a/626efc652bdea197675a7eae_2.png" alt="" className="social-icon" />
              </a>
              <a href="https://discord.com/invite/rFYBKgwgpn" className="social-link-block w-inline-block">
                <img width="33" loading="lazy" src="https://uploads-ssl.webflow.com/626e0e0bf813b1548675828a/626efc7608c5676e1227c837_3.png" alt="" className="social-icon" />
              </a>
            </div>
            <div className="nav-cta-button-container"><a href="/mint" className="cust-nav-link button w-cust-nav-link" style={{ maxWidth: '1400px' }}>Connect</a></div>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
