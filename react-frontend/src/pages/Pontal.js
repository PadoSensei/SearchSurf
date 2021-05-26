import React, {useState, useEffect } from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/pontal2.jpg';
import axios from "axios";

const link = 'http://localhost:5000/pontal'

export default function Pontal() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(link)
    }, []);

  async function getData(link) {
    await axios(link)
    .then((response) => {
    console.log(response.data)
    setData(response.data);
    
    })
    .catch((error) => {
    console.error("Error fetching data: ", error);
    setError(error);
    })
    .finally(() => {
    setLoading(false);
    });
  }

  if (loading) return "Loading...";
  if (error) return "Error!";

  const text = 'Pontal is an exposed beach break that has dependable surf. The surf tends to be best in the spring. The best wind direction is from the west. Tends to receive a mix of groundswells and windswells and the ideal swell angle is from the east. Waves at the beach break both left and right. A fairly popluar wave that can sometimes get crowded. Surfing here means negotiating dangerous rips.'
    
  return (
    <>
      <Beach title="Pontal" image={image} text={text} latest={data.latest} forecast={data.sixDayForecast} />
    </>
  );
}