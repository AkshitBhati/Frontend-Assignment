import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import './LandingNavbar.css'

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="menu-btn" onClick={toggleMenu}>
          <AiOutlineMenu />
        </div>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <div className="logo">
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
