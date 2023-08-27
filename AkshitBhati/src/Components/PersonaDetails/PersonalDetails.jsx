import React from 'react'
import { PiLinkedinLogo } from 'react-icons/pi'
import "./PersonalDetails.css"

const PersonalDetails = () => {
  return (
    <div className='pdetails'>
        <h1 className='pdetails__heading'>Personal Details</h1>
        <p className='pdetails__message'>We need a few more details to complete the sign up process</p>

        <div className='pdetails__select lang'>
            <label >Language Prefrences</label>
            <select>
                <option >Select</option>
                <option >English</option>
                <option >Hindi</option>
            </select>
        </div>
        <label >Birth Date</label>
        <input type="date"  />

        <div className='pdetails__select '>
            <label >Target Job/Industry</label>
            <select>
                <option >Select</option>
                <option >IT</option>
                <option >Chemical</option>
            </select>
        </div>

        <div className='pdetails__select '>
            <label >Education level</label>
            <select>
                <option >Select</option>
                <option >Graduation</option>
                <option >Post Graduation</option>
            </select>
        </div>

          <label>Preferred Interview mode</label>
          <div className='pdetails__radio--container'>
            <div className='pdetails__radio'>
            <input type="radio" className='pdetails__radio--btn'/>
            <span>Interviewee</span>
            </div>
            <div className='pdetails__radio'>
            <input type="radio" className='pdetails__radio--btn'/>
            <span>Interviewer</span>
            </div>
            <div className='pdetails__radio'>
            <input type="radio" className='pdetails__radio--btn'/>
            <span>Hybrid Mode</span>
            </div>
          </div>

          <button className='form__btn '>Sign up</button>
          <p className='form__or'>or</p>

          <div className='form__btn--social'>
            <PiLinkedinLogo className='formBtn__logo'/>
            <p>Continue with Linkedin</p>
            </div>
            <p className='pdetails__conditions'>By Signing up, you agree our <span>Terms and Condition</span></p>
    </div>
  )
}

export default PersonalDetails