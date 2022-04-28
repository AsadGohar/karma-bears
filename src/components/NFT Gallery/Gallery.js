import React from 'react'
import Nft from './Nft'
import './Gallery.css'

const Gallery = () => {
  return (
    <div id='gallery' className='container-fluid mx-0'>
        <h1 className="display-6 text-center text-white py-3">NFT GALLERY</h1>
        <div className='row justify-content-center' >
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
          <Nft/>
        </div>
    </div>
  )
}

export default Gallery