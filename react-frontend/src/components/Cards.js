import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios'
import { Component } from 'react';

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
              text='Pontal is an exposed beach break that has dependable surf. The surf tends to be best in the spring. The best wind direction is from the west. Tends to receive a mix of groundswells and windswells and the ideal swell angle is from the east. Waves at the beach break both left and right. A fairly popluar wave that can sometimes get crowded. Surfing here means negotiating dangerous rips.'
              label='Pontal'
              path='/pontal'
              
            />
            <CardItem
              src='BeachPictures\itacarezinho_restaurante.jpg'
              text='Itacarezinho in South Bahia is an exposed beach and reef break that has pretty consitent surf. Summer offers the best conditions for surfing. The best wind direction is from the west northwest. Tends to receive a mix of groundswells and windswells and the best swell direction is from the east southeast. The beach break offers both left and right hand waves. Even when there are waves, unlikley to be crowded. Dangerous rips are a hazard of surfing here.'
              label='Itacarezinho'
              path='/itacarezinho'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='BeachPictures\banhistas_tiririca_1600x518.jpg'
              text='Tiririca is an exposed beach break that has reliable surf and can work at any time of the year.'
              label='Tiririca'
              path='/Tiririca'
            />
            <CardItem
              src='BeachPictures\surf_ribeira.jpg'
              text='The current temperature is 25 degrees.'
              label='Riberia'
              path='/Riberia'
            />
            <CardItem
              src='BeachPictures\havaizinho3.jpg'
              text='Havaizinho offers both left and right hand waves. Rarely crowded here. Hazards include rocks and rips.'
              label='Havaizinho'
              path='/Havaizinho'
            />
             <CardItem
              src='BeachPictures\jeribu1.jpg'
              text='Surfable waves that hold up well for longer rides in prevailing cross-offshore, offshore or light wind conditions.'
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