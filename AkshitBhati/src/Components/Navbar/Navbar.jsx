import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='nav__heading'>Learn<span >Prep</span></h1>
        <div className='nav__menu'>
          <p>About us</p>
          <p>Pricing</p>
          <p>Demo</p>
        </div>
    </div>
  )
}

export default Navbar