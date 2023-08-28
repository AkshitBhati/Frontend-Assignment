import React, { useState } from 'react'
import { BsCameraVideo } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import "./LandingNavbar.css"

const LandingNavbar = () => {
  //STATE FOR DISPLAYING THE MOBILE-RESPONSIVE NAVBAR 
  const [active, setActive] = useState(false)

  //FUNCTION FOR DISPLAYING THE NAV-ITEMS IN MOBILE 
  const handleShowNavbar = () => {
    setActive(!active)
    console.log("hey")
  }
  //FUNCTION FOR NAVIGATION
  const navigate = useNavigate()
  const homeHandler = () => {
    navigate("/")
  }
  return (
    <div className="container">
  <div className="row">
    <div className="menu-btn" onClick={handleShowNavbar}>
      <i className="fa-solid fa-bars"></i>
    </div>
    <nav className="navbar">
      <div >

        <h1 className="nav__heading" onClick={homeHandler}>Learn<span>Prep</span></h1>
      </div>
      <ul className={`main-menu ${active && 'show'}`}>
        <li className="list-items">About us</li>
        <li className="list-items">Pricing</li>
        <li className="list-items demo">Demo <span><BsCameraVideo className='demo-logo'/></span></li>
        
      </ul>
    </nav>
  </div>

</div>

  )
}

export default LandingNavbar