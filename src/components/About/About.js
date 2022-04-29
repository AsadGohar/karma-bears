import React from 'react'
import { ReactComponent as AboutKarma } from '../../assets/about-heading.svg'
import { ReactComponent as Bear } from '../../assets/bear.svg'
import './About.css'

const About = () => {
  return (
    <div id='about'>
        <div className='d-flex justify-content-center'>
            <AboutKarma  className=' img-fluid' />
            <Bear className='p-2 bear'/>
        </div>
        <div className='container-fluid row mx-0 justify-content-center mt-4'  >
            <div className='col-md-8 about-text text-white mt-5 '>
                <p>
                    KARMA BEAR is a collection of 10,000, 1080x1920, computer generated art.
                </p>
                <p>
                    The unique properties were created using a 
                    combination of digital painting and photo 
                    compilation techniques. The Legendary Karma 
                    Bears have, one-of-a-kind, digitally painted, 
                    custom outfits as well as one-of-a-kind 
                    locations no other Karma Bear possesses. 
                 </p>
                 <p>Every Karma Bear is part of the Play2Earn game. Unlike most games, it is not about competition, it is about growth harmonyearning $WISDM through experience, and traversing across the several lives of Karma Bear’s to reach enlightenment.
                </p>
                <p>Take a pilgrimage into the metaverse, learn from their experience and earn. $WISDM is the currency of the Karma BearProject. Generated during pilgrimage, $WISDM accumulation rate will increase with the number of Karma Relicsequipped to your character. Use $WISDM to buy in-game NFTs,breed new character NFTsor swapthe currency for ETH on Uniswap.
                </p>
            </div>
            <div className='col-md-4 right-sec-about'>
                <img alt='world' className='pic1' src={'../assets/about-1.png'} />
                <img alt='world' className='pic2' src={'../assets/about-2.png'} />
                <img alt='world' className='pic3' src={'../assets/about-3.png'} />
                <img alt='world' className='pic4' src={'../assets/about-4.png'} />
            </div>
        </div>
    </div>
  )
}

export default About
