import React from 'react'
import '../App.css';
import './Hero.css';

function Hero({title}) {
  return (
    <div className='hero-container'>
     {/* // <img src={props.src} /> */}
      <video src="/videos/intro-loop.mp4" autoPlay loop muted />
      <h1>{title}</h1>
      <p>Find Your Wave!</p>    
    </div>
  )
}

export default Hero
