import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios'
import { Component } from 'react';
import RedisClient from './RedisClient';
import * as Promise from "bluebird";


const urls = [
  'http://localhost:5000/beaches/Ribeira',
  'http://localhost:5000/beaches/Pontal',
  'http://localhost:5000/beaches/Jeribucacu',
  'http://localhost:5000/beaches/Itacarezinho',
  'http://localhost:5000/beaches/Havaizinho',
  'http://localhost:5000/beaches/Tiririca',
  //'http://localhost:5000/beaches/Engenhoca',
]

const beaches = {}

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // we want this to be the entire object
  // dataPushToState = (allTheData) => {
  //   this.setState(state => ({
  //     beaches: [allTheData]
  //   }))
  //   console.log('Data pulled into state') 
  // }

  // dataPushToState = (allTheData) => {
  //   this.setState({...allTheData})
  // }

  // fetch(urls[1])
  //     .then(response => response.json())
  //     .then(data => beaches.push({ data }))
    
  //   fetch(urls[2])
  //     .then(response => response.json())
  //     .then(data => beaches.push({ data }))
    
  //   fetch(urls[3])
  //     .then(response => response.json())
  //     .then(data => beaches.push({ data }))
    
  //     console.log('i am the beach store')
  //     console.log(beaches)
  //     this.setState({ beaches })
  //     console.log('DidMOunt State')
  //     console.log(this.state)
  beachDataPullFromRedis = (url) => {
    
    axios.get(url)
     .then(response => {
      
      beaches[response.data.name] = {
        "latest": response.data.latest,
        "forecast": response.data.forecast,
        "waterTemp": response.data.waterTemp
      }
     })
     .catch((error) => {
        console.log(error);
        console.log("no data")
     })
    //  return beaches
  }

  componentDidMount() {
    
  //console.log(this.beachDataPullFromRedis(urls[2]))
  urls.forEach(url => this.beachDataPullFromRedis(url))
  console.log(beaches)
  this.setState({...beaches})
}
  
  render () {
    console.log(this.state)
    return (
    <div className='cards'>
      <h1>Welcome to Itacare!!!</h1>
      <p> Check out these EPIC beaches! </p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'> 
          {/* // render from state using map */}
            <CardItem
              src='BeachPictures\igreja_pontal_1600x518.jpg'
              text='The current surf forecast for Sao Jose at 5PM is: 1.3m 8s primary swell from a East-southeast direction and 1.1m 8s secondary swell from a East direction, 0.2m 8s secondary swell from a South-southeast direction (forecast issued at 02:00pm September 25). The wind direction is predicted to be onshore and the swell rating is 2.'
              label='Pontal'
              path='/pontal'
              
            />
            <CardItem
              src='BeachPictures\itacarezinho_restaurante.jpg'
              text='sued at 02:00pm September 25). The wind direction is predicted to be onshore and the swell rating is 2.'
              label='Itacarezinho'
              path='/itacarezinho'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='BeachPictures\banhistas_tiririca_1600x518.jpg'
              text=''
              label='Tiririca'
              path='/Tiririca'
            />
            <CardItem
              src='BeachPictures\surf_ribeira.jpg'
              text=''
              label='Riberia'
              path='/Riberia'
            />
            <CardItem
              src='BeachPictures\havaizinho3.jpg'
              text=''
              label='Havaizinho'
              path='/Havaizinho'
            />
             <CardItem
              src='BeachPictures\jeribu1.jpg'
              text=''
              label='Jeribucacu'
              path='/Jeribucacu'
            />
          </ul>
        </div>
      </div>
    </div>
    )
  ;
}
}