import React, { useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios'
import { Component } from 'react';
// import RedisClient from './RedisClient.js'

const waveInfo = 'things I want to say about wave'

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  } 

  componentDidMount() {
    axios.get('http://localhost:5000/beaches/Pontal')
     .then(response => {
       this.setState(response.data);
       console.log("We got data to the frontend console!!")
       console.log(this.state)
     })
     .catch((error) => {
        console.log(error);
        console.log("no data")
     })
    //RedisClient();
     
    //  axios.get('http://localhost:5000/beaches/Corals')
    //  .then(response => {
    //   this.setState(prevState => {
    //     const beach = [...prevState, response.data]
    //   }
    //   )
    //    console.log("We got data to the frontend console!!")
    //    console.log(this.state)
    //  })
    //  .catch((error) => {
    //     console.log(error);
    //     console.log("no data")
    //  })
  }

  render () {
    return (
    <div className='cards'>
      <h1>Check out these EPIC Beaches!</h1>
      <p> Welcome to Itacare, where the temprature is currently....</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='BeachPictures\igreja_pontal_1600x518.jpg'
              text='The current surf forecast for Sao Jose at 5PM is: 1.3m 8s primary swell from a East-southeast direction and 1.1m 8s secondary swell from a East direction, 0.2m 8s secondary swell from a South-southeast direction (forecast issued at 02:00pm September 25). The wind direction is predicted to be onshore and the swell rating is 2.'
              label='Pontal'
              path='/pontal'
            />
            <CardItem
              src='BeachPictures\saojose_aerea.jpg'
              text={waveInfo}
              label='Sao Jose'
              path='/corals'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='BeachPictures\banhistas_tiririca_1600x518.jpg'
              text={this.state.name}
              label='Tiririca'
              path='/Tiririca'
            />
            <CardItem
              src='BeachPictures\surf_ribeira.jpg'
              text='Report'
              label='Riberia'
              path='/Riberia'
            />
            <CardItem
              src='BeachPictures\havaizinho_tarek_1600x518.jpg'
              text={this.state.latestReport}
              label='Havaizinho'
              path='/Havaizinho'
            />
          </ul>
        </div>
      </div>
    </div>
    )
  ;
}
}
