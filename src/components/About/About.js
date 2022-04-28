import React from 'react'
import { ReactComponent as AboutKarma } from '../../assets/about-heading.svg'
import { ReactComponent as Bear } from '../../assets/bear.svg'
// import { ReactComponent as World } from '../assets/about-world.svg'
import './About.css'

const About = () => {
  return (
    <div id='about'>
        <div className='d-flex justify-content-center'>
            <AboutKarma  className='p-4 img-fluid' />
            <Bear className='p-2 bear'/>
        </div>
        <div className='row mx-0 px-4 ml-4 pt-4  d-flex justify-content-around align-items-center'  >
            <div className='col d-flex justify-content-center flex-column text-white about-text'>
                <p>Karma Bear NFT is a collection of 10,000 digital artworks. Digitally generated with a 
                    random combination of 120hand-drawn traits, each unique bear has been designed 
                    from a spiritual point of view. When they reach enlightenment, their mouths open 
                    and show a revelation containing the secrets of the universe
                </p>
                <p>Every Karma Bear is part of the Play2Earn game. Unlike most games, it is not about competition, it is about growth harmonyearning $WISDM through experience, and traversing across the several lives of Karma Bear’s to reach enlightenment.
                </p>
                <p>Take a pilgrimage into the metaverse, learn from their experience and earn. $WISDM is the currency of the Karma BearProject. Generated during pilgrimage, $WISDM accumulation rate will increase with the number of Karma Relicsequipped to your character. Use $WISDM to buy in-game NFTs,breed new character NFTsor swapthe currency for ETH on Uniswap.
                </p>
                <p>There are a few lives where Karma Bear plays an essential role in history and becomes LegendaryThese legendary characters are the prodigies of the Karma Bear world and have the highest earning rate of $WISDMThese bears have one-of-a-kind outfits and feature locations no other bear has gone before.
                </p>
                <p>
                Live the Life of a Karma Bear, Become Legendary, and Traverse through the Karma Bear gaming universe
                </p>
                <p>
                    If you are fortunate enough to reach the highest levels of ascension, you may catch a glimpse of the ALL BEAR. The one-of-kind Karma Bear who experiences all lives at once! 
                    Now It’s the time to zen out.

                </p>
            </div>

                <img alt='world' className='world-img' src={'../assets/about-world-1.png'} />
        </div>
    </div>
  )
}

export default About
