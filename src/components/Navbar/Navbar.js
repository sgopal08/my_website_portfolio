import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      // handle responsive behavior here if needed
    } 
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/my_website_portfolio/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='/my_website_portfolio/images/logo.png' alt='logo' className='navbar-logo-img' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#home" className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href="#about" className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href="#experience" className='nav-links' onClick={closeMobileMenu}>
                Experience
              </a>
            </li>
            <li className='nav-item'>
              <a href="#skills" className='nav-links' onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a href="#portfolio" className='nav-links' onClick={closeMobileMenu}>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href="#contact" className='nav-links' onClick={closeMobileMenu}>
                Contact
              </a>
            </li>   
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
