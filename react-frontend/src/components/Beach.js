import React from 'react'
import '../App.css';
import './Beach.css';

function Beach({title, image, text}) {
  return (
    <div className='hero-container'>
      <video src="/videos/intro-loop.mp4" autoPlay loop muted />
      <div className="beach-overlay">
        <div className="beach-container">
          <div className="beach-img-container">
            <img className="beach-img" src={image} height="15%" width="100%" />
            <div className="beach-info">
              <h1 className="beach-title">{title}</h1>
              <p>{text}</p>
              <br />
              <p>This is the latest surf info.</p>
              <br />
              <p>This is the 6 day forecast.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Beach
