import React from 'react'
import './Admin.css'

const Admin = () => {
  return (
    <div id='admin' className='container-fluid' >
      <h1 className="display-6 text-center text-white py-3">ADMIN</h1>
      <div className='row justify-content-center'>
        <div className='col-md-7' >
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Whitelist Address" 
            aria-label="Pre Sale Price" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Add User To Whitelist</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Base URI" 
            aria-label="Public Sale Price" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Update Base URI</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Pre Sale Price" 
            aria-label="Pre Sale Price" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Set Pre Sale Price</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Public Sale Price" 
            aria-label="Public Sale Price" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Set Public Sale Price</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Owner Mint" 
            aria-label="Owner Mint" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Owner Mint</button>
          </div>
          <div className="input-group mb-3 px-4">
            <input type="text" className="form-control input-bg" placeholder="Unrevealed URI" 
            aria-label="Public Sale Price" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Set Unrevealed URI</button>
          </div>
          <div className="input-group mb-3 px-4">
              <button className="btn btn-outline-secondary btns" type="button" 
              id="button-addon2">Set Paused</button>
              <select className="form-select select-bg" id="inputGroupSelect03" aria-label="Example select with button addon">
              <option selected>true</option>
              <option value="1">false</option>
              </select>
            </div>
          <div className="input-group mb-3 px-4">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Set Revealed</button>
            <select className="form-select select-bg" id="inputGroupSelect03" aria-label="Example select with button addon">
              <option selected>true</option>
              <option value="1">false</option>
            </select>
          </div>
        </div>
        <div className='col-md-5 right-sec'>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Get Total Minted</button>
            <p className='input-bg px-2 mint-user' >150</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">is Revealed?</button>
            <p className='input-bg px-2 mint-user' >true</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">is Paused?</button>
            <p className='input-bg px-2 mint-user' >false</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">Get Total Minted</button>
            <p className='input-bg px-2 mint-user' >150</p>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary btns" type="button" 
            id="button-addon2">is Paused?</button>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary withdraw-btn" type="button" 
            id="button-addon2">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin