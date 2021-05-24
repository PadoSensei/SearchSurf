const express = require('express');
const redis = require('redis');
const cheerio = require("cheerio");
//const { json } = require('express');
const request = require('request');
const cors = require('cors')
const axios = require("axios");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379

const client = redis.createClient(REDIS_PORT);

const app = express();
app.use(cors())

const forecastBeachLinks = [
  'https://www.surf-forecast.com/breaks/Sao-Jose/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Jeribucacu/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Tiririca/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Engenhoca/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Havaizinho/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Pontal/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Bocada-Barra/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Corals/forecasts/latest/six_day',
  'https://www.surf-forecast.com/breaks/Itacarezinho/forecasts/latest/six_day'
];

const latestBeachLinks = [
'https://www.surf-forecast.com/breaks/Sao-Jose/forecasts/latest',
'https://www.surf-forecast.com/breaks/Jeribucacu/forecasts/latest/',
 'https://www.surf-forecast.com/breaks/Tiririca/forecasts/latest',
 'https://www.surf-forecast.com/breaks/Engenhoca/forecasts/latest',
 'https://www.surf-forecast.com/breaks/Havaizinho/forecasts/latest',
 'https://www.surf-forecast.com/breaks/Pontal/forecasts/latest/',
 'https://www.surf-forecast.com/breaks/Bocada-Barra/forecasts/latest',
 'https://www.surf-forecast.com/breaks/Corals/forecasts/latest/',
 'https://www.surf-forecast.com/breaks/Itacarezinho/forecasts/latest',
];

function Beach(name, sixDayForecast, waterTemp, latest) {
  this.name = name;
  this.sixDayForecast = sixDayForecast;
  this.waterTemp = waterTemp;
  this.latest = latest
}


function getLatest (raw, beachOBj)  {

      //const beachName = $('.break-header__title > b')
      const latest = raw('.forecast-seo-paragraph').text()
      const waterTemp =raw('.temp').html()
      beachOBj.latest = latest
      beachOBj.waterTemp = waterTemp
    }

function getForecast (raw, beachOBj)  {

      //const beachName = $('.break-header__title > b')
      const beachName = raw('.break-header__title > b').text()
      const forecast = raw('.forecast-seo-paragraph').text()
      beachOBj.name = beachName
      beachOBj.sixDayForecast = forecast
    }
    
 

// function getForecast (beachUrl, beachOBj)  {
//   request(beachUrl, (error, 
//   response, html) => {
//     if(!error && response.statusCode === 200) {
//       const $ = cheerio.load(html);
      
//       
      
//       arrayOfBeaches.push(beachOBj)
    
//     }
    
//   })
//   console.log("this all of them?..........."  + arrayOfBeaches)
// }

const latestRaw = []
const forecastRaw = []
const fullBeachData = []

const getData = async () => {

  for (let i = 0; i < forecastBeachLinks.length; i++) {
    
    const newBeach = new Beach()
    //getForecast(forecastBeachLinks[i], newBeach)
    //getLatest(latestBeachLinks[i], newBeach)
    const resultLatest = await axios.get(latestBeachLinks[i])
    const resultForecast = await axios.get(forecastBeachLinks[i])
    let $Latest = cheerio.load(resultLatest.data); 
    let $Forecast = cheerio.load(resultForecast.data); 
    latestRaw.push($Latest)
    getLatest($Latest, newBeach)
    forecastRaw.push($Forecast)
    getForecast($Forecast, newBeach)
    fullBeachData.push(newBeach)
    
    console.log(newBeach)
  }
    pushObjToRedis(fullBeachData)
}


      
async function pushObjToRedis(obj) {

  try {
      const key = 'beachData';
      const result = await client.set(key, JSON.stringify(obj));

      // Turn around and bring back Shamu immediately to prove it works.
      const shamuReturns = JSON.parse(await client.get(key));
      console.log(shamuReturns);
  } catch (error) {
      console.error(error);
  }
  //client.disconnect();
}
     
getData()



app.listen(5000, () => {
  console.log(`App is listening on port ${PORT}.`);
});




//Middleware Function to Check Cache
// Calibrate once all paths and functionality are working
// checkCache = (req, res, next) => {
//   const { id } = req.params;

//   redis_client.get(id, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//     //if no match found
//     if (data != null) {
//       res.send(data);
//     } else {
//       //proceed to next middleware function
//       next();
//     }
//   });
// };


// app.get('/', function(req, res) {
//   //res.send('Welcome to SurfSearch!!!');
  
//   const target = "Corals"

//   client.HGETALL(target, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//     //if no match found
//     if (data != null) {
//       res.send(data);
//     } else {
//       //proceed to next middleware function
//       res.send('Sorry, nothing stored. Scraping for data now.....')
//     }
//   });
// })

// app.get("/beaches/:id", function(req, res) {
  
//   const { id } = req.params;

//   client.HGETALL(id, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//     //if no match found
//     if (data != null) {
//       res.send(data);
//     } else {
//       //proceed to next middleware function
//       res.send('Sorry, nothing stored. Scraping for data now.....')
//     }
//   });
// })

// app.get("/latest/:id", async(req, res) => {
  
//   const { id } = req.params;

//   client.get(id, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//     //if no match found
//     if (data != null) {
//       res.send(data);
//     } else {
//       //proceed to next middleware function
//       res.send('Sorry, need to scrape.')
//       latestBeachLinks.forEach(getLatest);
//     }
//   });
// })
