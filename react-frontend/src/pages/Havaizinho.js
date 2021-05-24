import React from 'react';
import '../App.css';
import Beach from '../components/Beach'
import image from '../images/havaizinho.jpg'

export default function Havaizinho() {
  const text='Havaizinho offers both left and right hand waves. Rarely crowded here. Hazards include rocks and rips.'
  return (
    <>
      <Beach title='Havaizinho' image={image} text={text}/>
    </>
  );
}