  
import React from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/ribeira.jpg';

export default function Ribeira() {
  return (
    <>
      <Beach title='Ribeira' image={image} />
    </>
  );
}