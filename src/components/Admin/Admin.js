import React from 'react'
import {
  web3Instance,
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
  mintByAdmin,
  setBaseUri,
  getAddress,
  getUnRevealedURI,
  getBaseUri,
  setUnRevealedURIAdmin,
  giveAwayNFT
} from '../../utils/contractUtils'
import { ReactComponent as RefreshIcon } from '../../assets/refresh-icon.svg'
import Spinner from 'react-bootstrap/Spinner'
import { toast } from 'react-toastify';
import './Admin.css'

const Admin = () => {

  const [mint, setMint] = React.useState(0)
  const [user, setUser] = React.useState('')
  const [isPaused, setIsPaused] = React.useState('')
  const [isRevealed, setIsRevealed] = React.useState('')
  const [publicSaleCost, setPublicSaleCost] = React.useState('')
  const [preSaleCost, setPreSaleCost] = React.useState('')
  const [preSaleValue, setPreSaleValue] = React.useState('')
  const [publicSaleValue, setPublicSaleValue] = React.useState('')
  const [pauseValue, setPauseValue] = React.useState(true)
  const [revealValue, setRevealValue] = React.useState(false)
  const [whiteListAddress, setWhiteListAddress] = React.useState('')
  const [baseURI, setBaseURI] = React.useState('')
  const [baseURIValue, setBaseURIValue] = React.useState('')
  const [unRevealedURI, setUnRevealedURI] = React.useState('')
  const [unRevealedURIValue, setUnRevealedURIValue] = React.useState('')
  const [giveAwayAddress ,setGiveAwayAddress] = React.useState('')
  const [totalMinted, setTotalMinted] = React.useState('')

  React.useEffect(() => {
    getUser()
    setData()
  }, [])

  const getUser = async (e) => {
    setUser(await getAddress())
  }
  const mintNfts = async (e) => {
    e.preventDefault()
    mintByAdmin(mint, user)
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

  const setData = async () => {
    setIsPaused(await getPaused())
    setIsRevealed(await getRevealed())
    setPublicSaleCost(await getPublicSaleCost())
    setPreSaleCost(await getPreSaleCost())
    setUnRevealedURI(await getUnRevealedURI())
    setBaseURIValue(await getBaseUri())
    setTotalMinted(await getTotalMinted())
  }

  const pauseContract = (e) => {
    e.preventDefault()
    setPauseContract(pauseValue === "true" ? true : false, user)
  }

  const revealContract = (e) => {
    e.preventDefault()
    setRevealContract(revealValue === "true" ? true : false, user)
  }

  const setPreSaleValueAdmin = async (e) => {
    e.preventDefault()
    if(preSaleValue.length === 0) {
      toast.warn("Please Enter Presale Value")
    }
    else {
      let value = web3Instance.utils.toWei(preSaleValue, 'ether')
      setPreSaleCostContract(value, user)
    }
  }

  const setPublicSaleValueAdmin = async (e) => {
    e.preventDefault()
    if(publicSaleValue.length === 0) {
      toast.warn("Please Enter Presale Value")
    }
    else {
      let value = web3Instance.utils.toWei(publicSaleValue, 'ether')
      setPublicSaleCostContract(value, user)
    }
  }

  const addUserToWhiteList = (e) => {
    e.preventDefault()
    if(whiteListAddress.length === 0) {
      toast.warn("Please Enter User Address")
    }
    else {
      updateWhiteList(whiteListAddress, user)
    }
  }

  const setBaseUriContract = async (e) => {
    e.preventDefault()
    if(baseURI.length === 0) {
      toast.warn("Please Enter Base URI")
    }
    else {
      setBaseUri(baseURI, user)
    }
  }

  const UpdateUnRevealedURIContract = async (e) => {
    e.preventDefault()
    if(baseURI.length === 0) {
      toast.warn("Please Enter UnRevealed URI")
    }
    else {
      setUnRevealedURIAdmin(unRevealedURIValue, user)
    }
  }

  const giveAway = async (e) => {
    e.preventDefault()
    if(giveAwayAddress.length === 0) {
      toast.warn("Please Enter Give Away Address")
    }
    else {
      giveAwayNFT(giveAwayAddress,user)
    }
  }

  if (user.length === 0) {
    return (
      <div id='admin' className='container-fluid' ></div>
    )
  }

  return (
    <div id='admin' className='container-fluid' >
      <div className='row justify-content-center pt-5'>
        <div className='col-md-7' >
          <div className="input-group mb-3 px-4">
            <ContractInput 
              value={whiteListAddress}
              placeholder='White List Address' 
              setValue={setWhiteListAddress} 
              onClick={addUserToWhiteList}
              text='Add User To Whitelist'
            />
          </div>
          <div className="input-group mb-3 px-4">
            <ContractInput 
              value={baseURI} 
              setValue={setBaseURI}
              placeholder='Base URI' 
              onClick={setBaseUriContract}
              text='Update Base URI'
            />
          </div>
          <div className="input-group mb-3 px-4">
            <ContractInput 
              value={preSaleValue}
              placeholder='Pre Sale Value' 
              setValue={setPreSaleValue} 
              onClick={setPreSaleValueAdmin}
              text='Set Pre Sale Price'
            />
          </div>
          <div className="input-group mb-3 px-4">
            <ContractInput 
              value={publicSaleValue} 
              setValue={setPublicSaleValue}
              placeholder='Public Sale Value' 
              onClick={setPublicSaleValueAdmin}
              text='Set Public Sale Price'
            />
          </div>
          <div className="input-group mb-3 px-4">
            <ContractInput 
              value={unRevealedURIValue}
              placeholder='UnRevealed URI' 
              setValue={setUnRevealedURIValue} 
              onClick={UpdateUnRevealedURIContract}
              text='Set Unrevealed URI'
            />
          </div>
          <div className="input-group mb-3 px-4">
            <ContractInput 
              value={giveAwayAddress}
              placeholder='Enter Giveaway Address' 
              setValue={setGiveAwayAddress} 
              onClick={giveAway}
              text='Give Away Nft'
            />
          </div>
          <div className="input-group mb-3 px-4">
            <select className="form-select select-bg mr-2" id="inputGroupSelect03"
              aria-label="Example select with button addon" value={pauseValue} onChange={e => setPauseValue(e.target.value)} >
              <option>true</option>
              <option defaultValue="1">false</option>
            </select>
            <button className="btn btns" type="button"
              id="button-addon2" onClick={pauseContract} >Set Paused</button>
          </div>
          <div className="input-group mb-3 px-4">
            <select className="form-select select-bg mr-2" value={revealValue} onChange={e => setRevealValue(e.target.value)}
              id="inputGroupSelect03" aria-label="Example select with button addon">
              <option>true</option>
              <option defaultValue="1">false</option>
            </select>
            <button className="btn btns" type="button"
              id="button-addon2" onClick={revealContract}>Set Revealed</button>
          </div>
          {/* values */}
          <div className="input-group px-4 mb-1 text-white">
            <ContractValue title='Base Uri' value={String(baseURIValue)} />
          </div>
          <div className="input-group px-4 mb-1 text-white">
            <ContractValue title='UnRevealed URI :' value={String(unRevealedURI)} />
          </div>
        </div>
        <div className='col-md-5 right-sec row'>
          <div className="input-group mb-1 text-white justify-content-between">
            <p className="static-data data-heading"
              id="button-addon2">Total Minted : <span className='total-minted-value'>{totalMinted}</span>
            </p>
            <p className='px-2 static-data' ></p>
            <RefreshIcon className='refresh-icon' onClick={e => {
              e.preventDefault()
              window.location.reload()
            }} />
          </div>
          <div className="input-group mb-1 text-white">
            <ContractValue title='Revealed' value={String(isRevealed)} />
          </div>
          <div className="input-group mb-1 text-white">
            <ContractValue title='Paused' value={String(isPaused)} />
          </div>
          <div className="input-group mb-1 text-white">
            <ContractValue title='Pre Sale Cost' value={String(preSaleCost)} />
          </div>
          <div className="input-group mb-1 text-white">
            <ContractValue title='Public Sale Cost' value={String(publicSaleCost)} />
          </div>
          <div className="input-group mb-4">
            <button className="btn btn-outline-secondary withdraw-btn" type="button"
              id="button-addon2">Withdraw</button>
          </div>
          {/* admin mint */}
          <hr className='admin-mint-hr' />
          <div className='container-fluid mx-0'>
            <h1 className="admin-mint-heading display-6 text-center text-white pt-1">MINT BY ADMIN</h1>
            <div className='d-flex justify-content-center'>
              <div className='d-flex flex-column admin-mint-opt align-items-center'>
                <div>
                  <p className='text-white text-center mb-0 admin-mint-info'>mint by only paying gas fees</p>
                  <div className='d-flex justify-content-between pt-4'>
                    <button type="button" onClick={e => increaseMint(e)} className="btn operator">+</button>
                    <p className='text-white admin-mint-value mb-0'>{mint}</p>
                    <button type="button" onClick={e => decreaseMint(e)} className="btn operator">-</button>
                  </div>
                  <button type="button" onClick={e => mintNfts(e)} className="btn admin-mint-btn mt-1">MINT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContractValue = ({ title, value }) => {
  return (
    <>
      {
        value.length > 0 ?
          <>
            <p className="static-data data-heading"
              id="button-addon2">{title}</p>
            <p className='px-2 static-data' >{String(value)}</p>
          </> :
          <Spinner className="spinner-border-sm my-2" animation="border" role="status" />
      }
    </>
  ) 
}

const ContractInput = ({ value, setValue , text, onClick, placeholder }) => {
  return (
    <>
      <input value={value} onChange={e => { setValue(e.target.value) }} type="text" className="form-control input-bg mr-2" placeholder={placeholder}
        aria-label="Pre Sale Price" aria-describedby="button-addon2" />
      <button onClick={onClick} className="btn btns" type="button"
        id="button-addon2">{text}</button>
    </>
  )
}

export default Admin
