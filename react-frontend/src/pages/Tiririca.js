import React from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/tiririca.jpg';

export default function Tiririca() {
  const text ='Tiririca is an exposed beach break that has reliable surf and can work at any time of the year.'
  return (
    <>
      <Beach title='Tiririca' image={image} text={text} />
    </>
  );
}