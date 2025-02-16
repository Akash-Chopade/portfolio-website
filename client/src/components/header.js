import React, { useState } from 'react';
import '../styles/style.css';
import DP from '../assets/images/dp.JPG';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header-container'>
      <nav className='header-block'>
        <ul className='profile'>
          <li className='profile-photo'>
            <img src={DP} alt='Profile' />
          </li>
          <li className='name'>Akash Chopade</li>
        </ul>
        <ul className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experince" onClick={closeMenu}>Experince</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;