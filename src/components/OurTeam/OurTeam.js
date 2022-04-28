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
              <img className="card-img-top" src={'./assets/community-manager.png'} alt="Card cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">Community Manager</p>
                </div>
                <div className="d-flex icon-sec justify-content-center pb-2">
                  <div>
                    <FbIcon className='ml-3'/>
                  </div>
                  <div>
                    <IgIcon className='ml-3'/>  
                  </div>
                  <div>
                    <TwitterIcon className='ml-3'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="member2 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/coo.png'} alt="Card cap2"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text text-white">Larry Young</h5>
                  <p className=" text mb-2 text-white">COO</p>
                </div>
                <div className="d-flex icon-sec justify-content-center pb-2">
                <div>
                    <FbIcon className='ml-3'/>
                  </div>
                  <div>
                    <IgIcon className='ml-3'/>  
                  </div>
                  <div>
                    <TwitterIcon className='ml-3'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-shadow-container-3">
            <div className="member3">
              <div className="px-0"  >
                <img className="card-img-top" src={'./assets/ceo.png'} alt="Card cap3"/>
                <div className='info-sec'>
                  <div className="card-body pb-0 pt-1 member-details-sec">
                    <h5 className="card-title mb-1 text-center text-white">Johnny Cunningham</h5>
                    <p className=" text mb-2 text-white">CEO</p>
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
          </div>
          <div className="member4 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/cto.png'} alt="Card cap4"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text-center text-l text-white">Joan Williamson</h5>
                  <p className=" text-l mb-2 text-white">CTO</p>
                </div>
                <div className="d-flex icon-sec justify-content-center pb-2">
                  <div>
                    <FbIcon className='ml-3'/>
                  </div>
                  <div>
                    <IgIcon className='ml-3'/>  
                  </div>
                  <div>
                    <TwitterIcon className='ml-3'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="member5 box-shadow-container">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/marketing-manager.png'} alt="Card cap5"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 member-details-sec">
                  <h5 className="card-title mb-1 text-l text-white">Eugene Young</h5>
                  <p className=" text-l mb-2 text-white">Maketing Manager</p>
                </div>
                <div className="icon-sec d-flex justify-content-center pb-2">
                  <div>
                    <FbIcon className='ml-3'/>
                  </div>
                  <div>
                    <IgIcon className='ml-3'/>  
                  </div>
                  <div>
                    <TwitterIcon className='ml-3'/>
                  </div>
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
