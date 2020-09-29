import React from 'react'
import '../App.css';
import './Hero.css';

//<img src="BeachPictures\aerea_engenhoca_1600x518.jpg" />

function Hero(props) {
  return (
    <div className='hero-container'>
      <img src="BeachPictures\aerea_engenhoca_1600x518.jpg" />
      {/* //<video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>SURF SEARCH</h1>
      <p>Find Your Wave</p>
      
      </div>
  )
}

export default Hero
