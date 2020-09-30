import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SURFSEARCH
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/itacarezinho' className='nav-links' onClick={closeMobileMenu}>
                Itacarezinho
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/jeribucacu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Jeribucacu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pontal'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pontal
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/havaizinho'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Havaizinho
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tiririca'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tiririca
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ribeira'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ribeira
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;