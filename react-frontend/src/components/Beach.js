import React from 'react'
import '../App.css';
import './Beach.css';

function Beach({title, image, text, latest, forecast}) {
  return (
    <div className='hero-container'>
      <video src="/videos/intro-loop.mp4" autoPlay loop muted />
      <div className="beach-overlay">
        <div className="beach-container">
          <div className="beach-img-container">
            <img className="beach-img" src={image} height="15%" width="100%" alt="Beach"/>
            <div className="beach-info">
              <h1 className="beach-title">{title}</h1>
              <br />
              <p>{latest}</p>
              <br />
              <p>{forecast}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Beach
