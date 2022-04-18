import React from 'react'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon-grey.svg'
import { ReactComponent as FbIcon } from '../../assets/fb-icon.svg'
import { ReactComponent as IgIcon } from '../../assets/ig-icon.svg'
import './OurTeam.css'

const OurTeam = () => {
  return (
  <div id='team'>
    <div className='container' >
        <div className='d-flex justify-content-center'>
          <img alt='headind' src={'../assets/our-team-heading.png'} />
          <p className='our-team-text'>Our <span className='karma-text' >Team</span></p>
        </div>
        <div className='mem-container pt-3' >
          <div className="member1 box-shadow-container">
            <div className=" px-0"  >
              <img className="card-img-top" src={'./assets/mem-straight.png'} alt="Card cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex icon-sec justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member2 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-2.png'} alt="Card cap2"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex icon-sec justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member3 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-3.png'} alt="Card cap3"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex justify-content-center pb-2">
                  <div className='mr-2'>
                    <FbIcon/>
                  </div>
                  <div className='mr-2'>
                    <IgIcon/>
                  </div>
                  <div className='mr-2'>
                    <TwitterIcon/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="member4 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-4.png'} alt="Card cap4"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text-l text-white">Chad Wagner</h5>
                  <p className=" text-l mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex icon-sec justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member5 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-5.png'} alt="Card cap5"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text-l text-white">Chad Wagner</h5>
                  <p className=" text-l mb-2 text-white">CG Artist</p>
                </div>
                <div className="icon-sec d-flex justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default OurTeam