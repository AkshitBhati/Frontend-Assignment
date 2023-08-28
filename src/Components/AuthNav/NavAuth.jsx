import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NavAuth.css"

const NavAuth = () => {
  //FUNCTION FOR NAVIGATION
  const navigate = useNavigate()
  const homeHandler = () => {
    navigate("/")
  }
  return (
    <header>
      <h1 className='navAuth__heading' onClick={homeHandler}>Learn<span>Prep</span></h1>
    </header>
  )
}

export default NavAuth