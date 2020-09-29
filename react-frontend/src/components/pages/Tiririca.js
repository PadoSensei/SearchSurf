import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';
import CardItem from '../CardItem';
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