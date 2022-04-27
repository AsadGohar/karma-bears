import React from 'react'
import './Question.css'

export const Question = ({id,question,answer}) => {

  const [isActive,setIsActive] = React.useState(false)
  let activeHeading = "accordion-button collapsed  question-heading text-white"
  let unactiveHeading = "accordion-button collapsed  question-heading"

  return (
    <div className="container mx-0">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={unactiveHeading}
              // className="accordion-button question-heading text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${id}`}
              aria-expanded="false"
              aria-controls='collapse-manufacturers'
              // onClick={e=>setIsActive(!isActive)}
            >
              {question}
            </button>
          </h2>
          <div
            id={`collapse${id}`}
            // className={isActive ? activeBody : unactiveBody }
            className="accordion-collapse collapse  question-body"
            aria-labelledby="heading-manufacturers"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

