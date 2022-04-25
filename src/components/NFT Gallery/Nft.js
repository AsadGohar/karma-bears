import React from 'react'
import './Nft.css'

const Nft = () => {
  return (
    <div className="card card-border mt-4 ml-4 p-0" style={{width:'12rem'}}>
        <img src={'../assets/placeholder.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body  d-flex flex-column align-items-center">
            <h5 className="card-title text-center text-white">Unnamed NFT</h5>
            <a href="x" className="btn opensea-btn">View On OpenSea</a>
        </div>
    </div>  
  )
}

export default Nft