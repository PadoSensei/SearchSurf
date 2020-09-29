import React from 'react';


function CardItem(props) {
  return (
    <>
      <h1>{props.title}</h1>
      
      <p>{props.latest} </p>

      <p>{props.forecast} </p>

      <p> The water temperature is {props.waterTemp}. </p>
    </>
  );
}

export default CardItem;