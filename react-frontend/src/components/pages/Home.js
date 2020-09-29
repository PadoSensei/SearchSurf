import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';



function Home() {
  return (
    <>
      <Hero title='Surf Search' src="BeachPictures\aerea_engenhoca_1600x518.jpg"  />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;