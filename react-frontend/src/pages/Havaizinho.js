import React, {useState, useEffect } from 'react';
import '../App.css';
import Beach from '../components/Beach'
import image from '../images/havaizinho.jpg'
import axios from "axios";

export default function Havaizinho() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const text='Havaizinho offers both left and right hand waves. Rarely crowded here. Hazards include rocks and rips.'
  const link='https://serverless-surf.netlify.app/.netlify/functions/index/havaizinho'

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
      <Beach title='Havaizinho' image={image} text={text} latest={data.latest} forecast={data.sixDayForecast}/>
    </>
  );
}