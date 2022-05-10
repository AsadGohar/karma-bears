import React from 'react'
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon-grey.svg'
import { ReactComponent as FbIcon } from '../../assets/fb-icon.svg'
import { ReactComponent as IgIcon } from '../../assets/ig-icon.svg'

import './MemberCard.css'

export const MemberCard = () => {
  return (
    <div className="ml-3 row row-margin-0 member">
        <div className=" skew px-0"  >
            <img className="card-img-top" src={'./assets/mem-straight.png'} alt="card  cap"/>
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
  )
}
