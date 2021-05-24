import React from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/pontal2.jpg';



export default function Pontal() {
  const text = 'Pontal is an exposed beach break that has dependable surf. The surf tends to be best in the spring. The best wind direction is from the west. Tends to receive a mix of groundswells and windswells and the ideal swell angle is from the east. Waves at the beach break both left and right. A fairly popluar wave that can sometimes get crowded. Surfing here means negotiating dangerous rips.'
  return (
    <>
      <Beach title="Pontal" image={image} text={text} />
    </>
  );
}