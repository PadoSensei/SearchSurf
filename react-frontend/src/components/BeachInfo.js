import React from 'react';

function BeachInfo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.latest}</h3>
      <h3>{props.forecast}</h3>
      <p>{props.waterTemp}</p>
    </>
  );
}

export default BeachInfo;