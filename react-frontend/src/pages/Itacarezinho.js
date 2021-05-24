import React from 'react';
import '../App.css';
import image from '../images/itacarezinho.jpg'
import Beach from '../components/Beach'


export default function Itacarezinho() {
  const text = 'Itacarezinho is an exposed beach and reef break that has pretty consitent surf. Summer offers the best conditions for surfing. The best wind direction is from the west northwest. Tends to receive a mix of groundswells and windswells and the best swell direction is from the east southeast. The beach break offers both left and right hand waves. Even when there are waves, unlikley to be crowded. Dangerous rips are a hazard of surfing here.'
  return (
    <>
      <Beach title="Itacarezinho" image={image} text={text}/>
    </>
  );
}