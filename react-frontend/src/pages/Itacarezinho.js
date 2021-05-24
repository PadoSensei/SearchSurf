import React from 'react';
import '../App.css';
import image from '../images/itacarezinho.jpg'
import Beach from '../components/Beach'


export default function Itacarezinho() {
  return (
    <>
      <Beach title="Itacarezinho" image={image} />
    </>
  );
}