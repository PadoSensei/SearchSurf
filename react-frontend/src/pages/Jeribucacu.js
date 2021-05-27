import React, {useState, useEffect } from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/jeribucacu.jpg';
import axios from "axios";


export default function Jeribucacu() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const text = 'Surfable waves that hold up well for longer rides in prevailing cross-offshore, offshore or light wind conditions.'
  const link= 'https://serverless-surf.netlify.app/.netlify/functions/index/Jeribucacu'

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
      <Beach title="Jeribucacu" image={image} text={text} latest={data.latest} forecast={data.sixDayForecast} />
    </>
  );
}