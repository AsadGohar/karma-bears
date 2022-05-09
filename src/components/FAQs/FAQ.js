import React from 'react'
import { Question } from './Question'
import {questionsArr,questionsArrTwo} from '../../utils/faqUtils'
import './FAQ.css'

const FAQ = () => {
  return (
    <div id='faq'>
        <div className='d-flex justify-content-center'>
            <img src={'../assets/faq-heading.png'} alt='heading' />
            <p className='faq-text'>FAQs</p>
        </div>
        <div className='faq-sec row mx-0' >
          <div className='col-md-6'>
          {
            questionsArr.map(item => {
              return (
                <Question key={item.id} id={item.id} question={item.question} answer={item.answer} />
              )
            })
          }
          </div>
          <div className='col-md-6'>
          {
            questionsArrTwo.map(item => {
              return (
                <Question key={item.id} id={item.id} question={item.question} answer={item.answer} />
              )
            })
          }
          </div>
        </div>
    </div>
  )
}

export default FAQ