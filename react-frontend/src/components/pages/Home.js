import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Hero from '../Hero';
import Footer from '../Footer';

//src="BeachPictures\aerea_engenhoca_1600x518.jpg"

function Home() {
  return (
    <>
      <Hero title='Surf Search'   />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;