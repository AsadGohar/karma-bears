import React from 'react'
import { 
  contract,
  getPaused, 
  getPreSaleCost, 
  getPublicSaleCost, 
  getRevealed, 
  getTotalMinted,
  setPauseContract,
  setRevealContract,
  setPreSaleCostContract,
  setPublicSaleCostContract,
  updateWhiteList,
  mintByAdmin
 } from '../../utils/contractUtils'
import { useSelector } from 'react-redux'
import './Admin.css'

const Admin = () => {
  
  let {user}  = useSelector(state=>state.user)

  const [mint,setMint] = React.useState(0)
  const [isPaused,setIsPaused] = React.useState(false)
  const [isRevealed,setIsRevealed] = React.useState(false)
  const [publicSaleCost,setPublicSaleCost] = React.useState('')
  const [preSaleCost,setPreSaleCost] = React.useState('') 
  const [preSaleValue,setPreSaleValue] = React.useState('') 
  const [publicSaleValue,setPublicSaleValue] = React.useState('') 
  const [pauseValue,setPauseValue] = React.useState(true) 
  const [revealValue,setRevealValue] = React.useState(false) 
  const [whiteListAddress,setWhiteListAddress] = React.useState('')
  const [baseUri,setBaseUri] = React.useState('')
  const [totalMinted,setTotalMinted] = React.useState(false)
  // const [isRevealed,setIsRevealed] = React.useState(false)

  React.useEffect(()=>{
    // console.log(await getPaused())
    setData()
  },[])

  const mintNfts = async (e) => {
    e.preventDefault()
    mintByAdmin(mint,user)
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

  const setData = async () => {
    setIsPaused(await getPaused())
    setIsRevealed(await getRevealed())
    setPublicSaleCost(await getPublicSaleCost())
    setPreSaleCost(await getPreSaleCost())
    // setTotalMinted(await getTotalMinted())
  }

  const pauseContract = (e) => {
    e.preventDefault()
    setPauseContract(pauseValue,user)
    // setData()
  }

  const revealContract = (e) => {
    e.preventDefault()
    setRevealContract(revealValue,user)
    // setData()
  }
  
  const getPausedValue = async () => {
    setIsPaused(await getPaused())
  }

  const getRevealedValue = async () => {
    setIsRevealed(await getRevealed())
  }

  const setPreSaleValueAdmin = async () => {
    setPreSaleCostContract(preSaleValue,user)
  }

  const setPublicSaleValueAdmin = async () => {
    setPublicSaleCostContract(publicSaleValue,user)
  }

  const getPreSaleValueAdmin = async () => {
    setPreSaleCost(await getPreSaleCost())
  }

  const getPublicSaleValueAdmin = async () => {
    setPublicSaleCost(await getPublicSaleCost())
  }

  const addUserToWhiteList = () => {
    updateWhiteList(whiteListAddress,user)
  }

  const setBaseUriContract = async () => {
    setBaseUri(baseUri,user)
  }

  return (
    <div id='admin' className='container-fluid' >
      <h1 className="display-6 text-center text-white py-3">ADMIN</h1>
      <div className='row justify-content-center'>
        <div className='col-md-7' >
          <div className="input-group mb-3 px-4">
            <input value={whiteListAddress} onChange={e=>{setWhiteListAddress(e.target.value)}} type="text" className="form-control input-bg" placeholder="Whitelist Address" 
              aria-label="Pre Sale Price" aria-describedby="button-addon2"/>
            <button onClick={addUserToWhiteList} className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Add User To Whitelist</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input value={baseUri} onChange={e=>setBaseUri(e.target.value)} type="text" className="form-control input-bg" placeholder="Base URI" 
            aria-label="Public Sale Price" aria-describedby="button-addon2"/>
            <button onClick={setBaseUri} className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Update Base URI</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input value={preSaleValue} onChange={e=>setPreSaleValue(e.target.value)} type="text" className="form-control input-bg" placeholder="Pre Sale Price" 
            aria-label="Pre Sale Price" aria-describedby="button-addon2"/>
            <button onClick={setPreSaleValueAdmin} className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Set Pre Sale Price</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input value={publicSaleValue} onChange={e=>setPublicSaleValue(e.target.value)} type="text" className="form-control input-bg" placeholder="Public Sale Price" 
            aria-label="Public Sale Price" aria-describedby="button-addon2"/>
            <button onClick={setPublicSaleValueAdmin} className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Set Public Sale Price</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Unrevealed URI" 
            aria-label="Public Sale Price" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Set Unrevealed URI</button>
          </div>
          <div className="input-group mb-3 px-4">
              <button className="btn btn-outline-secondary btns" type="button" 
                id="button-addon2" onClick={pauseContract} >Set Paused</button>
              <select className="form-select select-bg" id="inputGroupSelect03" 
                aria-label="Example select with button addon" value={pauseValue} onChange={e=>setPauseValue(e.target.value)} >
              <option selected>true</option>
              <option defaultValue="1">false</option>
              </select>
            </div>
          <div className="input-group mb-3 px-4">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2" onClick={revealContract}>Set Revealed</button>
            <select className="form-select select-bg" value={revealValue} onChange={e=>setRevealValue(e.target.value)} 
              id="inputGroupSelect03" aria-label="Example select with button addon">
              <option selected>true</option>
              <option defaultValue="1">false</option>
            </select>
          </div>
        </div>
        <div className='col-md-5 right-sec row'>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Get Total Minted</button>
            <p className='input-bg px-2 mint-user' >{}</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
              onClick={getRevealedValue} id="button-addon2">Get Is Revealed</button>
            <p className='input-bg px-2 mint-user' >{String(isRevealed)}</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
              onClick={getPausedValue}  id="button-addon2">Get Is Paused</button>
            <p className='input-bg px-2 mint-user' >{String(isPaused)}</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
              onClick={getPreSaleValueAdmin}  id="button-addon2">Get Pre Sale Cost</button>
            <p className='input-bg px-2 mint-user' >{String(preSaleCost)+' eth'}</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
              onClick={getPublicSaleValueAdmin} id="button-addon2">Get Public Sale Cost</button>
            <p className='input-bg px-2 mint-user' >{String(publicSaleCost)+' eth'}</p>
          </div>
          <div className="input-group mb-4">
            <button className="btn btn-outline-secondary withdraw-btn" type="button" 
              id="button-addon2">Withdraw</button>
          </div>
          <hr className='admin-mint-hr'/>
          <div className='container-fluid mx-0'>
            <h1 className="mint-heading display-6 text-center text-white pt-1 pb-2">MINT BY ADMIN</h1>
            <div className='d-flex justify-content-center'>
              <div className='d-flex flex-column admin-mint-opt align-items-center'>
                <div>
                  <p className='text-white text-center mb-0 admin-mint-info'>Mint by only paying gas fees</p>
                  <div className='d-flex justify-content-center pt-4'>
                    <button type="button" onClick ={e=>increaseMint(e)}  className="btn btn-outline-primary mr-2 operator">+</button>
                    <button type="button" onClick={e=>mintNfts(e)} className="btn btn-outline-primary admin-mint-btn">Mint</button>
                    <button type="button" onClick ={e=>decreaseMint(e)} className="btn btn-outline-primary ml-2 operator">-</button>
                  </div>
                  <p className='text-white text-center pt-2 admin-mint-info'>Mint Amount :{mint} </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin