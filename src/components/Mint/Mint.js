import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Web3 from 'web3';
import KarmaBear from '../../artifacts/KarmaBears.json'
import { getAddress } from '../../utils/contractUtils';
import './Mint.css'

const Mint = () => {
    
    const [mint,setMint] = React.useState(0)
    const [user,setUser] = React.useState('')


    let web3 = new Web3(Web3.givenProvider || 'https://rinkeby.infura.io/v3/8f7bb415bf7b4dceb66c27ceea3bfb64','web3');
    
    React.useEffect(()=>{
        getUser()
        const getNetwork = async () => {
            let network = await web3.eth.net.getId()
            console.log(network)
        }
        getNetwork()
        window.addEventListener('load', function() {
            if (typeof web3 !== 'undefined') {
              console.log('web3 is enabled')
              if (web3.currentProvider.isMetaMask === true) {
                console.log('MetaMask is active')
              } else {
                toast.warn('MetaMask is not installed')
              }
            } else {
              console.log('web3 is not found')
            }
        })
    },[])
    
    const getUser = async (e) => {
        setUser(await getAddress())
    }
    // console.log(user)
   const mintNfts = async (e) => {
       e.preventDefault()
        let contract = new web3.eth.Contract(KarmaBear.output.abi,
            '0x369153A761d19bCa87881cD01AabD480c2ED5018')  
        await contract.methods.publicSaleMint(mint).send({from: String(user), value: web3.utils.toWei('0.016', 'ether')},(err)=>{
            if(err !=undefined){
                console.log(err,'err')
                toast.warn(err.message)
            }
        })
   }


    const increaseMint = ()=> {
       setMint(mint+1)
    }

    const decreaseMint = ()=> {
        if(mint === 0){
            setMint(0)
        } else {
            setMint(mint-1)
        }
    }

  return (
    <div id='mint' className='container-fluid mx-0'>
        <h1 className="display-6 text-center text-white py-3">MINT YOUR NFTs</h1>
        <div className='d-flex justify-content-center'>
            <div className='d-flex flex-column mint-opt align-items-center'>
            {
                String(user).length > 0 ?  
                <div>
                    <h3 className='text-center account-heading-text'>Account Address</h3>
                    <p className='text-white text-center '>{user}</p>
                    <div className='d-flex justify-content-center pt-4'>
                        <button type="button" onClick ={e=>increaseMint(e)} className="btn btn-outline-primary mr-2 operator">+</button>
                        <button type="button" onClick={e=>mintNfts(e)} className="btn btn-outline-primary mint-btn">Mint</button>
                        <button type="button"  onClick ={e=>decreaseMint(e)} className="btn btn-outline-primary ml-2 operator">-</button>
                    </div>
                    <p className='text-white text-center pt-2'>Mint Amount : {mint}</p>
                </div> :
                <p className='text-center text-white'>MetaMask is not connected</p> 
            }
            </div>
        </div>
    </div>
  )
}

export default Mint
