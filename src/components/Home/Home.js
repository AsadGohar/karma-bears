import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div id="home" className='container-fluid'>
      <div className='home-info-sec' >
        <h1 className='text-white text-center mb-4' >Welcome to the Karma Bears</h1>
        <p className='text-white text-center subheading mb-4'>KARMA BEAR is a collection of 10,000,1080x1920, computer generated art</p>
        <div className='d-flex justify-content-center'>
          <button type="button" class="btn btn-primary opensea ">View On OpenSea</button>
          <button type="button" class="btn btn-primary mint ml-2">Mint Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home