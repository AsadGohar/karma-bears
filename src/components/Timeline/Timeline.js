import React from 'react'
// import { ReactComponent as TimelineImg } from '../../assets/timeline.svg'
import { ReactComponent as TimelineImgMobile } from '../../assets/timeline-mobile-5.svg'
import { useMediaQuery } from 'react-responsive'
import './Timeline.css'

const Timeline = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 550px)'
  })

  return (
    <div id='roadmap'>
      <div className='d-flex justify-content-center'>
        <img alt='headind' src={'../assets/roadmap-heading.png'} />
        <p className='our-team-text'>Road<span className='karma-text' >Map</span></p>
      </div>
      {
        isMobile ? 
        <div >
          <TimelineImgMobile className='px-2'/>  
        </div> :
        
        <img className='img-fluid' alt='timeline' src={'./assets/timeline.png'} />
      } 
    </div>
  )
}

export default Timeline