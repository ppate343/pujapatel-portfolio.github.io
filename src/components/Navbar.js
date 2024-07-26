import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';
import logo from '../images/logo.jpg'; // Adjust the path based on your project structure

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span>Puja Patel</span>
      </div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>About Me</a></li>
        <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
      </ul>
      <div className="hamburger" onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
