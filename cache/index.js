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

//main();


function getLatest (beachUrl)  {
  request(beachUrl, (error, 
  response, html) => {
    if(!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      
      const beachName = $('.break-header__title > b')
      const latest = $('.forecast-seo-paragraph')
      const waterTemp =$('.temp').html()
      //const forecast = $('.forecast-seo-paragraph')
    
     

      // client.hmset(beachName.text(), {
      //   'name': beachName.text(),
      //   'latest': latest.text(),
      //   'waterTemp': waterTemp,
      //   'forecast': forecast.text()
      // }, function (err, result) {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log(result)
      //   }
      // });

    }
  })
}

function getForecast (beachUrl)  {
  request(beachUrl, (error, 
  response, html) => {
    if(!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      
      const beachName = $('.break-header__title > b')
      const forecast = $('.forecast-seo-paragraph')

      client.hmset(beachName.text(), {
        //   'name': beachName.text(),
        //   'latest': latest.text(),
        //   'waterTemp': waterTemp,
          'forecast': forecast.text()
        }, function (err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log(result)
          }
        });
  
    }
  });
}

app.get('/', function(req, res) {
  //res.send('Welcome to SurfSearch!!!');
  
  const target = "Corals"

  client.HGETALL(target, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    //if no match found
    if (data != null) {
      res.send(data);
    } else {
      //proceed to next middleware function
      res.send('Sorry, nothing stored. Scraping for data now.....')
    }
  });
})

app.get("/beaches/:id", function(req, res) {
  
  const { id } = req.params;

  client.HGETALL(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    //if no match found
    if (data != null) {
      res.send(data);
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

//const id = 'Pontal'
forecastBeachLinks.forEach(getForecast);
latestBeachLinks.forEach(getLatest);
//console.log(client.HGETALL(id))

app.listen(5000, () => {
  console.log(`App is listening on port ${PORT}.`);
});