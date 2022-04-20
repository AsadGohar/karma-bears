import React from 'react'
import About from '../About/About'
import FAQ from '../FAQs/FAQ'
import Home from '../Home/Home'
import OurTeam from '../OurTeam/OurTeam'
import Timeline from '../Timeline/Timeline'

const LandingPage = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Timeline/>
        <OurTeam/>
        <FAQ/>
    </div>
  )
}

export default LandingPage