import React from 'react'
// import { ReactComponent as TimelineImg } from '../../assets/timeline.svg'
import { ReactComponent as TimelineImgMobile } from '../../assets/roadmap-mobile.svg'
import { useMediaQuery } from 'react-responsive'
import './Timeline.css'

const Timeline = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 650px)'
  })

  return (
    <div id='roadmap' className='mx-0'>
      <div className='d-flex justify-content-center'>
        <img alt='headind' src={'../assets/roadmap-heading.png'} />
        <p className='our-team-text'>Road<span className='karma-text' >Map</span></p>
      </div>
      <div className='container-fluid'>
        {
          isMobile ? 

            <TimelineImgMobile className='mobile-timeline'/>   :
          
          <img className='img-fluid' alt='timeline' src={'./assets/roadmap.png'} />
        }
      </div> 
    </div>
  )
}

export default Timeline
