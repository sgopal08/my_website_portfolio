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
          data-goatcounter-click="nav-logo"
        >
          <span className="logo-mark">SG</span>
          <span className="logo-name">Sanjana Gopalswamy</span>
        </a>
        <button
          className="menu-icon"
          onClick={handleClick}
          aria-label="Toggle navigation"
          aria-expanded={click}
          data-goatcounter-click="nav-menu-toggle"
        >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a
              href="#home"
              className="nav-links"
              onClick={closeMobileMenu}
              data-goatcounter-click="nav-home"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-links"
              onClick={closeMobileMenu}
              data-goatcounter-click="nav-about"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              className="nav-links"
              onClick={closeMobileMenu}
              data-goatcounter-click="nav-experience"
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
              data-goatcounter-click="nav-projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className="nav-links"
              onClick={closeMobileMenu}
              data-goatcounter-click="nav-skills"
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-links nav-contact"
              onClick={closeMobileMenu}
              data-goatcounter-click="nav-contact"
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
