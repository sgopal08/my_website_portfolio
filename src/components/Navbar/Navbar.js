import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMobileMenu}
          aria-label="Go to home"
        >
          <span className="logo-mark">SG</span>
          <span className="logo-name">Sanjana Gopalswamy</span>
        </a>
        <button
          className="menu-icon"
          onClick={handleClick}
          aria-label="Toggle navigation"
          aria-expanded={click}
        >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-links nav-contact"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
