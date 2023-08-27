import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import './LandingNavbar.css'

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav__container">
      <div className="nav__row">
        <div className="nav__menu-btn" onClick={toggleMenu}>
          <AiOutlineMenu />
        </div>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <div className="nav__logo">
            <h1>Learn<span>Prep</span></h1>
          </div>
          <ul className="main-menu">
            <li className="list-items">About</li>
            <li className="list-items">Services</li>
            <li className="list-items">Contact</li>
           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LandingNavbar;
