import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
//import BeachInfo from '../BeachInfo';
import Navbar from '../components/Navbar';


export default function Itacarezinho() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero title='Itacarezinho' src='BeachPictures\itacarezinho_belavista_1600x518.jpg' /> */}
      {/* <BeachInfo title='Itacarezinho' forecast='The first swell is forecast to arrive on Wednesday (Sep 30) at 3PM. The primary swell is predicted to be 0.9m and 8s period with a secondary swell of 0.1m and 15s. The wind is predicted to be onshore as the swell arrives.' latest='The current surf forecast for Itacarezinho at 12PM is: 0.9m 8s primary swell from a East direction and 0.1m 15s secondary swell from a South direction (forecast issued at 08:00am September 30). The wind direction is predicted to be onshore.' waterTemp='The water is 23 degrees.' /> */}
      <Footer />
    </>
  );
}