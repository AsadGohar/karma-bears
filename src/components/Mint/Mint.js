import React from 'react'
import { toast } from 'react-toastify';
import Web3 from 'web3';
import KarmaBear from '../../artifacts/KarmaBears.json'
import { getAddress, isUserWhiteListed, contract } from '../../utils/contractUtils';
import detectEthereumProvider from '@metamask/detect-provider'

import './Mint.css'

const Mint = () => {

    const [mint, setMint] = React.useState(0)
    const [user, setUser] = React.useState('')
    const [isWhiteListed, setIsWhiteListed] = React.useState(false)
    const [verifyDetails, setVerifyDetails] = React.useState()
    const [network, setNetwork] = React.useState()

    let web3 = new Web3(Web3.givenProvider || 'https://rinkeby.infura.io/v3/8f7bb415bf7b4dceb66c27ceea3bfb64', 'web3');

    React.useEffect(() => {
        getUser()
        setNetwork(getNetwork())
    }, [])

    const getNetwork = async () => {
        let network = await web3.eth.net.getId()
        console.log(network)
        return network
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

    const getUser = async (e) => {
        setUser(await getAddress())
        setVerifyDetails(true)
        if (await getAddress()) {
            let white = await contract.methods.isAddressWhitelisted(await getAddress()).call()
            if (!white) {
                toast.warn('User is Not White Listed')
                setVerifyDetails(false)
            } else {
                setVerifyDetails(false)

            }
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

    return (
        <div id='mint' className='container-fluid mx-0'>
            <img src={'./assets/bear-mint.png'} sizes="(max-width: 479px) 80vw, (max-width: 1279px) 70vw, 750px" width="750" data-w-id="512b4af7-5e99-b504-aa31-7f874efbbd66" alt="" className="hero-crystal-image" />

            <div className='mint-div'>
                <h1 className="text-white pt-3 mint-heading text-center">MINT YOUR NFTs</h1>
                <div className='d-flex flex-column mint-opt'>
                {
                    String(user).length > 0 ?  
                    <div className='text-center'>
                        <h5 className='account-heading-text'>Account Address</h5>
                        <p className='text-white address'>{user}</p>
                        <div className='d-flex justify-content-center pt-1'>
                            <button type="button" onClick ={e=>increaseMint(e)} className="btn mr-2 operator">+</button>
                            <button type="button" onClick={e=>mintNfts(e)} className="button mint-btn">Mint</button>
                            <button type="button"  onClick ={e=>decreaseMint(e)} className="btn ml-2 operator">-</button>
                        </div>
                        <p className='text-white pt-3'>Mint Amount : {mint}</p>
                    </div> :
                    <p className='text-center text-white'>MetaMask is not connected</p> 
                }
                </div>
            </div>
        </div>
    )
}

export default Mint
