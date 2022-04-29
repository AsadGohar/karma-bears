import React from 'react'
// import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon-grey.svg'
// import { ReactComponent as FbIcon } from '../../assets/fb-icon.svg'
// import { ReactComponent as IgIcon } from '../../assets/ig-icon.svg'
import './OurTeam.css'

const OurTeam = () => {
  return (
  <div id='team'>
    <div className='container-fluid' >
        <div className='d-flex justify-content-center'>
          <img alt='headind' src={'../assets/our-team-heading.png'} />
          <p className='our-team-text'>Our <span className='karma-text' >Team</span></p>
        </div>
        <div className='mem-container pt-3' >
          <div className="member box-shadow-container">
            <div>
              <img className="card-img-top" src={'./assets/community-manager.png'} alt="Card cap"/>
              <div className=''>
                <div className="card-body text-white member-details-sec">
                  <h5 className="card-title name-text">Chad Wagner</h5>
                  <p className="name-text">Community Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="member box-shadow-container">
            <div>
              <img className="card-img-top" src={'./assets/coo.png'} alt="Card cap2"/>
              <div className=''>
                <div className="card-body text-white member-details-sec">
                  <h5 className="card-title name-text">Larry Young</h5>
                  <p className="name-text">COO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="member box-shadow-container">
            <img className="card-img-top" src={'./assets/ceo.png'} alt="Card cap2"/>
            <div className=''>
              <div className="card-body text-white member-details-sec">
                <h5 className="card-title name-text">Johnny Cunningham</h5>
                <p className="name-text">CEO</p>
              </div>
            </div>
          </div>
          <div className="member box-shadow-container">
            <img className="card-img-top" src={'./assets/cto.png'} alt="Card cap2"/>
            <div className=''>
              <div className="card-body text-white member-details-sec">
                <h5 className="card-title name-text">Joan Williamson</h5>
                <p className="name-text">CTO</p>
              </div>
            </div>
          </div>
          <div className="member box-shadow-container">
            <img className="card-img-top" src={'./assets/marketing-manager.png'} alt="Card cap2"/>
            <div className=''>
              <div className="card-body text-white member-details-sec">
                <h5 className="card-title name-text">Eugene Young</h5>
                <p className="name-text">Maketing Manager</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default OurTeam
