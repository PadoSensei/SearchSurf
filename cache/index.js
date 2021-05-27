const express = require('express');
require("dotenv").config();
const redis = require('redis');

const cors = require('cors')

const { scrapeData } = require('./cache_utils')

const PORT = process.env.PORT || 5000;
//const REDIS_PORT = process.env.REDIS_PORT || 6379

//const client = redis.createClient(REDIS_PORT);

const client = redis.createClient({
  host: process.env.REDIS_HOSTNAME,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

const app = express();
app.use(cors())


app.get('/pontal', (req, res) => {
  client.get('Pontal', function(err, reply){
    res.send(reply)
  })
})

app.get('/itacarezinho', (req, res) => {
  client.get('Itacarezinho', function(err, reply){
    res.send(reply)
  })
})

app.get('/jeribucacu', (req, res) => {
  client.get('Jeribucacu', function(err, reply){
    res.send(reply)
  })
})

app.get('/tiririca', (req, res) => {
  client.get('Tiririca', function(err, reply){
    res.send(reply)
  })
})

app.get('/corals', (req, res) => {
  client.get('Corals', function(err, reply){
    res.send(reply)
  })
})

app.get('/havaizinho', (req, res) => {
  client.get('Havaizinho', function(err, reply){
    res.send(reply)
  })
})

app.get('/beachdata', (req, res) => {
  client.get('BeachData', function(err, reply){
    res.send(reply)
  })
})

app.listen(5000, () => {
  console.log(`App is listening on port ${PORT}.`);
});


//Pass Redis to data scraping app
scrapeData(client)

// Redis PW
// KCF4P553bcLMjivPchXJSW68zAmMlWBL
// Redis Endpoint
// redis-18321.c247.eu-west-1-1.ec2.cloud.redislabs.com:18321

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


