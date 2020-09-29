  
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';
import CardItem from '../CardItem'
import BeachInfo from '../BeachInfo';

export default function Ribeira() {
  return (
    <>
      <Hero title='Ribeira' src='BeachPictures\ribeira_folhagem_1600x518.jpg' />
      <BeachInfo />
      <Footer />
    </>
  );
}