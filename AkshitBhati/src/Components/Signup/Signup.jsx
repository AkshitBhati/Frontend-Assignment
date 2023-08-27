import React from 'react'
import { PiLinkedinLogo } from 'react-icons/pi'
import "./Signup.css"

const Signup = () => {
  return (
    <div className='signUp'>
        <h1 className='signUp__heading'>Sign Up</h1>
        <p className='signUp__message'>New to LeanPrep? <span>Login</span></p>
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

            <button className='form__btn'>Continue</button>
            <p className='form__or'>or</p>
            
            <div className='form__btn--social'>
            <PiLinkedinLogo className='formBtn__logo'/>
            <p>Continue with Linkedin</p>
            </div>
        </form>

        <p className='signIn__conditions'>By Signing up, you agree our <span>Terms and Condition</span></p>
    </div>
  )
}

export default Signup