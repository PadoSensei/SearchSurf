  
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';
import CardItem from '../CardItem';
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