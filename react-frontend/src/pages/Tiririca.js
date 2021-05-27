import React, {useState, useEffect } from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/tiririca.jpg';
import axios from "axios";


export default function Tiririca() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const link = 'https://serverless-surf.netlify.app/.netlify/functions/index/tiririca'
  const text ='Tiririca is an exposed beach break that has reliable surf and can work at any time of the year.'

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
      <Beach title='Tiririca' image={image} text={text} latest={data.latest} forecast={data.sixDayForecast} />
    </>
  );
}