import React, {useState, useEffect } from 'react';
import '../App.css';
import image from '../images/itacarezinho.jpg'
import Beach from '../components/Beach'
import axios from "axios";


export default function Itacarezinho() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const text = 'Itacarezinho is an exposed beach and reef break that has pretty consitent surf. Summer offers the best conditions for surfing. The best wind direction is from the west northwest. Tends to receive a mix of groundswells and windswells and the best swell direction is from the east southeast. The beach break offers both left and right hand waves. Even when there are waves, unlikley to be crowded. Dangerous rips are a hazard of surfing here.'
  const link = 'https://serverless-surf.netlify.app/.netlify/functions/index/itacarezinho'

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
  
  return (
    <>
      <Beach title="Itacarezinho" image={image} text={text} latest={data.latest} forecast={data.sixDayForecast}/>
    </>
  );
}