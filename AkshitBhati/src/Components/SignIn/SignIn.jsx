import React from 'react'
import "./SignIn.css"
import { PiFacebookLogo } from "react-icons/pi"
import { PiGoogleLogoThin } from "react-icons/pi"
import { PiLinkedinLogo } from "react-icons/pi"


const SignIn = () => {
  return (
    <div className='signIn'>
        <h1 className='signIn__heading'>Sign in</h1>
        <p className='signIn__message'>New to LeanPrep? <span>Signup</span></p>

        <form >
            <label >Email Address</label>
            <input type="text" />
            <label >Password</label>
            <input type="password" />
            <button className='form__btn'>Continue</button>
            <p className='form__or'>or</p>
            
            <div className='form__btn--social'>
            <PiFacebookLogo className='formBtn__logo'/>
            <p>Continue with Facebook</p>
            </div>

            <div className='form__btn--social'>
            <PiGoogleLogoThin className='formBtn__logo'/>
            <p>Continue with Google</p>
            </div>
            <div className='form__btn--social'>
            <PiLinkedinLogo className='formBtn__logo'/>
            <p>Continue with Linkedin</p>
            </div>
            
            
        </form>
        <p className='signIn__conditions'>By Signing up, you agree our <span>Terms and Condition</span></p>
    </div>
  )
}

export default SignIn