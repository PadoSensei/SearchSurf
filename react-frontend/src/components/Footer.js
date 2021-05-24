import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SURFSEARCH
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>SurfSearch © 2020</small>
          <small className='website-rights'>All images from Itacare.com and Tarek Roveran </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;