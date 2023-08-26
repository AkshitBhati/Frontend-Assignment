import React from 'react'
import "./SignIn.css"


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
            <button className='form__btn--social'>Continue with facebook</button>
            <button className='form__btn--social'>Continue with Google</button>
            <button className='form__btn--social'>Continue with Linkedin</button>
        </form>
        <p>By Signing up, you agree our <span>Terms and Condition</span></p>
    </div>
  )
}

export default SignIn