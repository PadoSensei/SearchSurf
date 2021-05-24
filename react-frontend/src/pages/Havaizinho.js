import React from 'react';
import '../App.css';
import Beach from '../components/Beach'
import image from '../images/havaizinho.jpg'

export default function Havaizinho() {
  return (
    <>
      <Beach title='Havaizinho' image={image}/>
    </>
  );
}