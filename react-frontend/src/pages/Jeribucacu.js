  
import React from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/jeribucacu.jpg';

export default function Jeribucacu() {
  const text = 'Surfable waves that hold up well for longer rides in prevailing cross-offshore, offshore or light wind conditions.'
  return (
    <>
      <Beach title="Jeribucacu" image={image} text={text}/>
    </>
  );
}