import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this path is correct

function Navbar() {
  // State to manage the icon toggle
  const [click, setClick] = useState(false);

  // Function to handle click event
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img 
            src={process.env.PUBLIC_URL + 'TimeCAp logo and font 1,2.png'} 
            alt='TimeCap logo'
            className='navbar-logo-img'
            
          />
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <img 
            src={click ? process.env.PUBLIC_URL + '/white Cross.png' 
                            : process.env.PUBLIC_URL + '/Menu White.png'} 
            alt='Menu icon'
            className='menu-icon-img'
          />
        </div>
        <ul className={click ? '' : ''}>
          <li className='nav-items'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Your Capsule
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
