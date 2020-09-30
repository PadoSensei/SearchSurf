import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import BeachInfo from '../BeachInfo';


export default function Itacarezinho() {
  return (
    <>
      <Hero title='Itacarezinho' src='BeachPictures\itacarezinho_belavista_1600x518.jpg' />
      <BeachInfo title='test' forecast='tests' latest='tetsts' waterTemp='euifdiuegfuig' />
      <Footer />
    </>
  );
}