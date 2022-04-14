import React from 'react'
import { MemberCard } from './MemberCard'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon-grey.svg'
import { ReactComponent as FbIcon } from '../../assets/fb-icon.svg'
import { ReactComponent as IgIcon } from '../../assets/ig-icon.svg'
import './OurTeam.css'

const OurTeam = () => {
  return (
  <div id='our-team'>
    <div className='container' >
        <div>
          <img src={'../assets/our-team-heading.png'} />
          <p className='our-team-text'>Our <span className='karma-text' >Team</span></p>
        </div>
        <div className='pt-3 d-flex justify-content-center' >
          <div className="member1">
            <div className=" skew px-0"  >
              <img className="card-img-top" src={'./assets/mem-straight.png'} alt="Card image cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 ">
                  <h5 className="card-title mb-1  text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member2">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-2.png'} alt="Card image cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 ">
                  <h5 className="card-title mb-1  text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member3">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-3.png'} alt="Card image cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 ">
                  <h5 className="card-title mb-1  text text-white">Chad Wagner</h5>
                  <p className=" text mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member4">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-4.png'} alt="Card image cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 ">
                  <h5 className="card-title mb-1 text-l text-white">Chad Wagner</h5>
                  <p className=" text-l mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex justify-content-around pb-2">
                  <FbIcon/>
                  <IgIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member5">
            <div className="px-0"  >
              <img className="card-img-top" src={'./assets/mem-5.png'} alt="Card image cap"/>
              <div className='info-sec'>
                <div className="card-body pb-0 pt-1 ">
                  <h5 className="card-title mb-1  text-l text-white">Chad Wagner</h5>
                  <p className=" text-l mb-2 text-white">CG Artist</p>
                </div>
                <div className="d-flex justify-content-around pb-2">
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