const express = require('express');
const redis = require('redis');
const cheerio = require("cheerio");
const { json } = require('express');
const request = require('request');
const cors = require('cors')

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379

const client = redis.createClient(REDIS_PORT);

const app = express();
app.use(cors())

const forecastBeachLinks =[
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
 'https://www.surf-forecast.com/breaks/Itacarezinho/forecasts/latest',
 'https://www.surf-forecast.com/breaks/Engenhoca/forecasts/latest',
'https://www.surf-forecast.com/breaks/Havaizinho/forecasts/latest',
'https://www.surf-forecast.com/breaks/Pontal/forecasts/latest/',
'https://www.surf-forecast.com/breaks/Bocada-Barra/forecasts/latest',
'https://www.surf-forecast.com/breaks/Corals/forecasts/latest/'
];


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

function getLatest (beachUrl)  {
  request(beachUrl, (error, 
  response, html) => {
    if(!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      
      const beachName = $('.break-header__title > b')
      const latest = $('.forecast-seo-paragraph')
      const waterTemp =$('.temp')
      const forecast = $('.forecast-seo-paragraph')

      const beach = {

        name: beachName.text(),
        latestReport: latest.text(),
        water: waterTemp.html(),
        //forecastReport: forecast.text()  Needs to scrape from other URL
      }

      async function sendToRedis() {
    
        try {
            const key = beachName.text();
            const result = await client.set(key, JSON.stringify(beach));
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    }
    sendToRedis();
    }
  });
};


// Needs to send forecast info to Object
function getForecast (beachUrl)  {
  request(beachUrl, (error, 
  response, html) => {
    if(!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      
      const beachName = $('.break-header__title > b')
      const forecast = $('.forecast-seo-paragraph')
  
    }
  });
};

app.get('/', function(req, res) {
  //res.send('Welcome to SurfSearch!!!');
  
  const target = "Corals"

  client.get(target, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    //if no match found
    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      //proceed to next middleware function
      res.send('Sorry, nothing stored. Scraping for data now.....')
    }
  });
})

app.get("/beaches/:id", function(req, res) {
  
  const { id } = req.params;

  client.get(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    //if no match found
    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      //proceed to next middleware function
      res.send('Sorry, nothing stored. Scraping for data now.....')
    }
  });
})

app.get("/latest/:id", async(req, res) => {
  
  const { id } = req.params;

  client.get(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    //if no match found
    if (data != null) {
      res.send(data);
    } else {
      //proceed to next middleware function
      res.send('Sorry, need to scrape.')
      latestBeachLinks.forEach(getLatest);
    }
  });
})

//forecastBeachLinks.forEach(getForecast);
latestBeachLinks.forEach(getLatest);


app.listen(5000, () => {
  console.log(`App is listening on port ${PORT}.`);
});