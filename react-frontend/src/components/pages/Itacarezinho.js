import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';
import CardItem from '../CardItem';
import BeachInfo from '../BeachInfo';


export default function Itacarezinho() {
  return (
    <>
      <Hero title='Itacarezinho' src='BeachPictures\itacarezinho_belavista_1600x518.jpg' />
      <BeachInfo title='test' forecast='tests' latest='tetsts' waterTemp='euifdiuegfui' />
      <Footer />
    </>
  );
}