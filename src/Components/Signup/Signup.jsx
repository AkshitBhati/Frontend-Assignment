import React from 'react'
import { PiLinkedinLogo } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"

const Signup = () => {
    //FUNCTION FOR NAVIGATION
  const navigate = useNavigate()
  
  const personalDetailsHandler = (e) => {
    e.preventDefault()
    navigate("/auth/personaldetails")
  }

  const loginHandler = () => {
    navigate("/auth/signin")
  }

  return (
    <div className='signUp__wrapper'>
    <div className='signUp'>
        <h1 className='signUp__heading'>Sign Up</h1>
        <p className='signUp__message'>Already a member? <span onClick={loginHandler}>Login</span></p>
        <form >
            <div className="signup__name--container">
                <div className='singUp__name'>
                    <label >First Name</label>
                    <input type="text" className='signUp__fname' />
                </div>
                <div className='singUp__name'>
                    <label >Last Name</label>
                    <input type="text" className='signUp__lname' />
                </div>
            </div>
            
            <div className='form__email'>
                <label >Email Address</label>
                <input type="text" />
            </div>
            
            <div className='form__jobRole'>
                <label htmlFor='jobRole'>Current Job Role</label>
                <select id='jobRole'>
                    <option>Product Manager</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                </select>
            </div>

            <div className='form__password'>
                <label >Set password</label>
                <input type="password" name="" id="" />
            </div>

            <button className='form__btn' onClick={personalDetailsHandler}>Next</button>
            <p className='form__or'>or</p>
            
            <div className='form__btn--social'>
            <PiLinkedinLogo className='formBtn__logo'/>
            <p>Continue with Linkedin</p>
            </div>
        </form>

        <p className='signIn__conditions'>By Signing up, you agree our <span>Terms and Condition</span></p>
    </div>
    </div>
  )
}

export default Signup