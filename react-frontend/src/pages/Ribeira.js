  
import React from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/ribeira.jpg';

export default function Ribeira() {
  const text = 'A lovely beach surrounded by tropical rainforest, Riberia is the last beach on main road to Itacare and the most visited beach during the weekends and high season.'
  return (
    <>
      <Beach title='Ribeira' image={image} text={text} />
    </>
  );
}