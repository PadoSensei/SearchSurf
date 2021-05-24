import React from 'react'
import '../App.css';
import './Beach.css';

function Beach({title}) {
  return (
    <div className='hero-container'>
      <video src="/videos/intro-loop.mp4" autoPlay loop muted />
      <div className="beach-overlay">
        <div className="beach-container">
          <div className="beach-img container">
          <p>Image goes here</p>
        </div>
        <div className="beach-info">
          <h1>{title}</h1>
          <p>This is info about the beach.</p>
          <p>This is the latest surf info.</p>
          <p>This is the 6 day forecast.</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Beach
