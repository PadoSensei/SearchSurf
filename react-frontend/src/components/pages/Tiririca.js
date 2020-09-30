import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import BeachInfo from '../BeachInfo';


export default function Tiririca() {
  return (
    <>
      <Hero title='Tiririca' src='BeachPictures\tiririca_aereo_tarek.jpg'/>
      <BeachInfo />
      <Footer />
    </>
  );
}