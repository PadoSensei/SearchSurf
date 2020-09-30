import React from 'react'
import '../App.css';
import './Hero.css';

//<img src="BeachPictures\aerea_engenhoca_1600x518.jpg" />

function Hero(props) {
  return (
    <div className='hero-container'>
     {/* // <img src={props.src} /> */}
      <video src="/videos/intro-loop.mp4" autoPlay loop muted />
      <h1>{props.title}</h1>
      <p>Find Your Wave!</p>
      
      </div>
  )
}

export default Hero
