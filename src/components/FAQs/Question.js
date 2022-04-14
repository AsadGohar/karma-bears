import React from 'react'
import './Question.css'

export const Question = ({id,question}) => {
  const [isActive,setIsActive] = React.useState(false)
  return (
    <div className="accordion accordion-flush pt-4">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button question-heading collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls="collapseOne">
            {question}
          </button>
        </h2>
        <div id={`collapse${id}`} className="accordion-collapse collapse" 
          aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body question-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the 
            collapse plugin adds the appropriate classes that we use to style each element. These classes control 
            the overall appearance, as well as the showing and hiding via CSS transitions. 
            You can modify any of this with custom CSS or overriding our default variables. 
            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  )
}
