import React from 'react'
import { ReactComponent as AboutKarma } from '../../assets/about-karma.svg'
import { ReactComponent as Bear } from '../../assets/bear.svg'
// import { ReactComponent as World } from '../assets/about-world.svg'
import './About.css'

const About = () => {
  return (
    <div id='about'>
        <div>
            <AboutKarma className='p-3'/>
            <p className='what-text'>What is <span className='karma-text'>Karma Bear</span> ?</p>
            <Bear className='p-2 bear'/>
        </div>
        <div className='row row-margin-0 px-4 ml-4 pt-4' >
            <div className='d-flex justify-content-center flex-column col text-white about-text'>
                <p>KARMA BEAR is a collection of 10,000, 
                1080x1920, computer generated art.
                </p>
                <p>The unique properties were created using a 
                    combination of digital painting and photo 
                    compilation techniques. The Legendary Karma 
                    Bears have, one-of-a-kind, digitally painted, 
                    custom outfits as well as one-of-a-kind 
                    locations no other Karma Bear possesses.
                </p>
            </div>
            <div className='col'>
                <img alt='world' className='world-img' src={'../assets/about-world.png'} />
            </div>
        </div>
    </div>
  )
}

export default About