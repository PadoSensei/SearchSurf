  
import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import BeachInfo from '../BeachInfo';

export default function Jeribucacu() {
  return (
    <>
      <Hero title='Jeribucau' src='BeachPictures\jeribucacu_1280x425.jpg' />
      <BeachInfo />
      
      <Footer />
    </>
  );
}