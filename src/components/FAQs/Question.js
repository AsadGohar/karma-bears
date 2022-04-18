import React from 'react'
import './Question.css'

export const Question = ({id,question}) => {
  const [isActive,setIsActive] = React.useState(false)

  let activeHeading = "accordion-button collapsed question-heading text-white"
  let unactiveHeading = "accordion-button collapsed question-heading"

  let activeBody = "accordion-body question-body text-white"
  let unactiveBody = "accordion-body question-body"

  return (
    <div className="accordion accordion-flush pt-4">
      <div class="accordion accordion-flush" id="product-filter-accordion">
        <div id="product-filter-sidebar-manufacturers" class="product-filter-sidebar widget-area accordion-item" role="complementary">
          <h3 id="heading-manufacturers" class="accordion-header">
            <button data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-controls="collapse-manufacturers" 
            aria-expanded="false" class={isActive ? activeHeading : unactiveHeading} onClick={e=>setIsActive(!isActive)} type="button">{question}</button>
          </h3>
          <div id={`collapse${id}`} aria-labelledby="heading-manufacturers" data-bs-parent="#product-filter-accordion" class="accordion-collapse collapse">
            <div class={isActive ? activeBody : unactiveBody }>You no more have to click twice to see the accordion body content :)</div>
          </div>
        </div>
      </div>
      {/* <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button question-heading" type="button" data-bs-toggle="collapse" 
            data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls="collapseOne">
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
      </div> */}
    </div>
  )
}
