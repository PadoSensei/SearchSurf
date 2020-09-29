import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';
import BeachInfo from '../BeachInfo';

export default function Havaizinho() {
  return (
    <>
      <Hero title='Havaizinho' src='BeachPictures\havaizinho_tarek_1600x518.jpg'/>
      <BeachInfo />
      <Footer />
    </>
  );
}