import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <>
    <div className='landing'>
      <div className='landing__vector'></div>
      <div className="landing__text--container">
        <h1 className="landing__text">Don't let nerves get the best of you –<br /><span>practice makes perfect! </span></h1>
      
        <p className="landing__para">Welcome to <span>LeanPrep</span>! The ultimate destination for honing your interview skills. Whether you're a fresh graduate, career changer, or seasoned professional, we've got you covered. Our <span>comprehensive library</span> of mock interview questions and <span>expert tips</span> will help you <span>ace any job interview.</span> </p>
     
        <button className='landing__btn'>Join Our Program</button>
        <p className='landing__message'>Already a member? <span>Login</span></p>
      </div>
      <div className='landing__vector--blob'>
        <div className="landing__blob--svg"></div>
      </div>
    </div>
    </>
  )
}


export default LandingPage