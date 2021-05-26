import React, {useState, useEffect } from 'react';
import '../App.css';
import Beach from '../components/Beach';
import image from '../images/ribeira.jpg';
import axios from "axios";

export default function Corals() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const text = 'A lovely beach surrounded by tropical rainforest, Riberia is the last beach on main road to Itacare and the most visited beach during the weekends and high season.'
  const link = 'http://localhost:5000/corals'
  
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
      <Beach title='Corals' image={image} text={text} latest={data.latest} forecast={data.sixDayForecast} />
    </>
  );
}