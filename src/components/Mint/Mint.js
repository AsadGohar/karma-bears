import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import './Mint.css'

const Mint = () => {

    let {user}  = useSelector(state=>state.user)

    const [mint,setMint] = React.useState(0)

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
                    <p className='text-white text-center '>0x241534t61346y3451714</p>
                    <div className='d-flex justify-content-center pt-4'>
                        <button type="button" onClick ={e=>increaseMint(e)} className="btn btn-outline-primary mr-2 operator">+</button>
                        <button type="button" className="btn btn-outline-primary mint-btn">Mint</button>
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
