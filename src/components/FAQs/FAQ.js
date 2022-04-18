import React from 'react'
import { Question } from './Question'
// import { ReactComponent as FAQs } from '../../assets/faqs-headings.svg'
import './FAQ.css'

const FAQ = () => {
  return (
    <div id='faq'>
        <div className='d-flex justify-content-center'>
            <img src={'../assets/faq-heading.png'} alt='heading' />
            <p className='faq-text'>FAQs</p>
        </div>
        <div className='faq-sec' >
            <Question id='One' question={'How Are You ?'}/>
            <Question id='Two' question={'How Are You ?'}/>
            <Question id='Three' question={'How Are You ?'}/>
        </div>
    </div>
  )
}

export default FAQ