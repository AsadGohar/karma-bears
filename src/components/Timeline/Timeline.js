import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

import { ReactComponent as Line } from '../../assets/line.svg'
import { ReactComponent as MobileLine } from '../../assets/mobile-line-2.svg'

import './Timeline.css'


const Timeline = () => {
  const options = {
    delay: 1,
    duration: 2000,
    rotate: {
      x: 0,
      y: 500,
      z: 0,
    },
  }
  useEffect(() => {
    ScrollReveal().reveal('.roadmap-single-div', options)
  }, [])

  return (
    <div className='container-fluid roadmap-wrapper justify-content-center d-flex' id='roadmap'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <img alt='headind' src={'../assets/roadmap-heading.png'} />
          <p className='our-team-text'>Road<span className='karma-text' >Map</span></p>
        </div>
        <div className='row mx-0 mt-5' id='webView'>
          <div className='col-sm-5 rm-left'>
            <div className='roadmap-single-div' id='rm2'>
              <p className='heading2'>Finding the first holders</p>
              <p className='basic-text2'>Giving away the first Whitelist spots to the followers</p>
              <p className='basic-text2'>Creating a qualifying whitelist and conducting a presale of Karma Bears</p>
            </div>
            <div className='roadmap-single-div' id='rm4'>
              <p className='heading2'>Developing the life force of Karma Bears</p>
              <p className='basic-text2'>Developing the life-force of Karma Bears, the $WISDM token</p>
              <p className='basic-text2'>Tying the tokens to the liquidity pool to incentivize the holders. Allowing $WISDM tokens to be swapped for ETH</p>
              <p className='basic-text2'>Listing the bears on Rarity. Tools to unlock the true value of Karma Bear NFTs</p>
              <p className='basic-text2'>Putting the bears in action with the first animated trailer</p>
            </div>
            <div className='roadmap-single-div' id='rm6'>
              <p className='heading2'>KarmaBear: Revelations</p>
              <p className='basic-text2'>The development will begin on the first game: “KarmaBear Revelations”</p>
              <p className='basic-text2'>10,000 Karma relic NFTs will become available for pre purchase</p>
              <p className='basic-text2'>30,000 Karma RelicNFTs will become discoverable in game while on pilgrimage, increasing the $WISDM collecting power of the Karma bears</p>
            </div>
            <div className='roadmap-single-div' id='rm8'>
              <p className='heading2'>Into the Metaverse</p>
              <p className='basic-text2'>Utilities will be created for $WISDM and NFTs with new Web3.0 products</p>
              <p className='basic-text2'>Karma Bear will enter the metaverse. Explore the breathtaking environment, take pilgrimage across the metaverse, zen out, earn and spend $WISDM</p>
              <p className='basic-text2'>30,000 Karma RelicNFTs will become discoverable in game while on pilgrimage, increasing the $WISDM collecting power of the Karma bears</p>
            </div>
          </div>
          <div className='col-sm-2 rm-mid justify-content-center'>
            <Line className='line-icon' />
          </div>
          <div className='col-sm-5 rm-right '>
            <div className='roadmap-single-div' id='rm1'>
              <p className='heading2'>Putting the first word out</p>
              <p className='basic-text2'>Introducing Karma Bears – the Playable NFT Characters through the website</p>
              <p className='basic-text2'>Putting the word out about the project on social media platforms</p>
              <p className='basic-text2'>Deploying a marketing team to foster bonds with NFT enthusiasts and creatives to create a community</p>
            </div>
            <div className='roadmap-single-div' id='rm3'>
              <p className='heading2'>Letting the Karma Bear NFTs loose</p>
              <p className='basic-text2'>Launching a whitelist! Listing the qualifiers’ names of the presale participants</p>
              <p className='basic-text2'>Letting the Karma bears finally out for the world to mint</p>
            </div>
            <div className='roadmap-single-div' id='rm5'>
              <p className='heading2'>Recruitment of Karma Disciples</p>
              <p className='basic-text2'>Launch of the 3333 Karma disciplesNFTs. Gifting a web portal to the Karma Bear holders so that they can recruit(breed) Karma Disciples(6666) with their $WISDM.</p>
            </div>
            <div className='roadmap-single-div' id='rm7'>
              <p className='heading2'>Karma Critters</p>
              <p className='basic-text2'>Karma Revelations will become more inclusive with the Launch of Karma Critters NFT – giving alow entryprice point to welcome newcomers in the ecosystem</p>
              <p className='basic-text2'>Karma Critters NFTs have the lowest $WISDM earning rate and can only equip one Karma Relic NFT</p>
              <p className='basic-text2'>Research and development to integrate VR to the Karma Bear Project will begin</p>
            </div>
          </div>
        </div>
        {/* ONLY FOR MOBILE DISPLAY */}
        <div className='row mx-0 mt-5' id='mobileView'>
          <div className='col-2 rm-left'>
            <MobileLine className='line-icon' />
          </div>
          <div className='col-10 rm-right '>
            <div className='roadmap-single-div' id='rm1'>
              <p className='heading2'>Putting the first word out</p>
              <p className='basic-text2'>Introducing Karma Bears – the Playable NFT Characters through the website</p>
              <p className='basic-text2'>Putting the word out about the project on social media platforms</p>
              <p className='basic-text2'>Deploying a marketing team to foster bonds with NFT enthusiasts and creatives to create a community</p>
            </div>
            <div className='roadmap-single-div' id='rm2'>
              <p className='heading2'>Finding the first holders</p>
              <p className='basic-text2'>Giving away the first Whitelist spots to the followers</p>
              <p className='basic-text2'>Creating a qualifying whitelist and conducting a presale of Karma Bears</p>
            </div>
            <div className='roadmap-single-div' id='rm3'>
              <p className='heading2'>Letting the Karma Bear NFTs loose</p>
              <p className='basic-text2'>Launching a whitelist! Listing the qualifiers’ names of the presale participants</p>
              <p className='basic-text2'>Letting the Karma bears finally out for the world to mint</p>
            </div>
            <div className='roadmap-single-div' id='rm4'>
              <p className='heading2'>Developing the life force of Karma Bears</p>
              <p className='basic-text2'>Developing the life-force of Karma Bears, the $WISDM token</p>
              <p className='basic-text2'>Tying the tokens to the liquidity pool to incentivize the holders. Allowing $WISDM tokens to be swapped for ETH</p>
              <p className='basic-text2'>Listing the bears on Rarity. Tools to unlock the true value of Karma Bear NFTs</p>
              <p className='basic-text2'>Putting the bears in action with the first animated trailer</p>
            </div>
            <div className='roadmap-single-div' id='rm5'>
              <p className='heading2'>Recruitment of Karma Disciples</p>
              <p className='basic-text2'>Launch of the 3333 Karma disciplesNFTs. Gifting a web portal to the Karma Bear holders so that they can recruit(breed) Karma Disciples(6666) with their $WISDM.</p>
            </div>
            <div className='roadmap-single-div' id='rm6'>
              <p className='heading2'>KarmaBear: Revelations</p>
              <p className='basic-text2'>The development will begin on the first game: “KarmaBear Revelations”</p>
              <p className='basic-text2'>10,000 Karma relic NFTs will become available for pre purchase</p>
              <p className='basic-text2'>30,000 Karma RelicNFTs will become discoverable in game while on pilgrimage, increasing the $WISDM collecting power of the Karma bears</p>
            </div>
            <div className='roadmap-single-div' id='rm7'>
              <p className='heading2'>Karma Critters</p>
              <p className='basic-text2'>Karma Revelations will become more inclusive with the Launch of Karma Critters NFT – giving alow entryprice point to welcome newcomers in the ecosystem</p>
              <p className='basic-text2'>Karma Critters NFTs have the lowest $WISDM earning rate and can only equip one Karma Relic NFT</p>
              <p className='basic-text2'>Research and development to integrate VR to the Karma Bear Project will begin</p>
            </div>
            <div className='roadmap-single-div' id='rm8'>
              <p className='heading2'>Into the Metaverse</p>
              <p className='basic-text2'>Utilities will be created for $WISDM and NFTs with new Web3.0 products</p>
              <p className='basic-text2'>Karma Bear will enter the metaverse. Explore the breathtaking environment, take pilgrimage across the metaverse, zen out, earn and spend $WISDM</p>
              <p className='basic-text2'>30,000 Karma RelicNFTs will become discoverable in game while on pilgrimage, increasing the $WISDM collecting power of the Karma bears</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
