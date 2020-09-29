import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';
import CardItem from '../CardItem'
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