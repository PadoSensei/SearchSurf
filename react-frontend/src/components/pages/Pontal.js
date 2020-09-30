import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import BeachInfo from '../BeachInfo';


export default function Pontal() {
  return (
    <>
      <Hero title='Pontal' src='BeachPictures\aerea_pontal_1600x518.jpg' />
      <BeachInfo />

      <Footer />
    </>
  );
}