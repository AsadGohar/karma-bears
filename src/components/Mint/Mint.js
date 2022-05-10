import React from 'react'
import { toast } from 'react-toastify';
import Web3 from 'web3';
import KarmaBear from '../../artifacts/KarmaBears.json'
import { getAddress } from '../../utils/contractUtils';
import detectEthereumProvider from '@metamask/detect-provider'
import { motion } from "framer-motion"

import './Mint.css'

const Mint = () => {

    const [mint, setMint] = React.useState(0)
    const [user, setUser] = React.useState('')

    let web3 = new Web3(Web3.givenProvider || 'https://rinkeby.infura.io/v3/8f7bb415bf7b4dceb66c27ceea3bfb64', 'web3');

    React.useEffect(() => {
        getUser()
    }, [])

    const getUser = async (e) => {
        setUser(await getAddress())
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
                    var shortAddress = address.substring(0, 6) + '...' +
                        address.substring(address.length - 4, address.length);
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


    // console.log(user)
    const mintNfts = async (e) => {
        e.preventDefault()
        if (await web3.eth.net.getId() !== 4) {
            toast.warn('You Need to be on Rinkby Testnet')
        }
        else if (mint === 0) {
            toast.warn('Mint Amount is Zero')
        }
        else {
            let contract = new web3.eth.Contract(KarmaBear.output.abi,
                '0x369153A761d19bCa87881cD01AabD480c2ED5018')
            await contract.methods.publicSaleMint(mint).send({ from: String(user), value: web3.utils.toWei('0.016', 'ether') }, (err) => {
                if (err !== undefined) {
                    console.log(err, 'err')
                    toast.warn(err.message)
                }
            })
        }
    }

    const increaseMint = () => {
        setMint(mint + 1)
    }

    const decreaseMint = () => {
        if (mint === 0) {
            setMint(0)
        } else {
            setMint(mint - 1)
        }
    }

    const bounceTransition = {
        y: {
            duration: 1,
            yoyo: 3,
            ease: "easeOut"
        }
    };

    return (
        <div id='mint' className='container-fluid mx-0'>
            <div className='mint-div'>
                <img alt='logo' className='logo' src={'./assets/n-logo.png'} />
                <motion.img
                    transition={bounceTransition}
                    // animate={{
                    //     y: ["10%", "0%"],
                    // }}
                    whileTap={{
                        y: ["-10%", "80%"],
                    }}
                    className='mint-bear'
                    src={'./assets/mint-bear.png'} />
                <div className=''>
                    {
                        String(user).length > 0 ?
                            <div className='text-center'>
                                <div className='d-flex justify-content-between pt-1'>
                                    <button type="button" onClick={e => increaseMint(e)} className="btn operator">+</button>
                                    <p className='text-white mint-value mb-0'>{mint}</p>
                                    <button type="button" onClick={e => decreaseMint(e)} className="btn operator">-</button>
                                </div>
                                <button type="button" onClick={e => mintNfts(e)} className="btn mint-btn mt-1">MINT</button>
                            </div> :
                            <p className='text-center text-white'>MetaMask is not connected</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Mint
