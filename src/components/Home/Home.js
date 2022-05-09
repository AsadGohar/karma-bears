import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div id="home" className='container-fluid'>
      <div className='home-info-sec' >
        <img className='logo-img-home' src={'./assets/logo-home.png'} />
        <p className='text-white text-center subheading mb-4'>1 BEAR...10,000 LIVES</p>
        <div className='d-flex justify-content-center'>
          <button type="button" className="btn btn-primary opensea ">View On OpenSea</button>
          <button type="button" className="btn btn-primary mint ml-2">Mint Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home