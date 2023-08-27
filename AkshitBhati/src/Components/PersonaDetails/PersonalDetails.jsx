import React from 'react'
import "./PersonalDetails.css"

const PersonalDetails = () => {
  return (
    <div className='pdetails'>
        <h1 className='pdetails__heading'>Personal Details</h1>
        <p className='pdetails__message'>We need a few more details to complete the sign up process</p>

        <div className='pdetails__lang'>
            <label >Language Prefrences</label>
            <select>
                <option >Select</option>
                <option >English</option>
                <option >Hindi</option>
                
            </select>
        </div>
    </div>
  )
}

export default PersonalDetails