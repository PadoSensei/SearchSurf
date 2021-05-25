const express = require('express');
const redis = require('redis');

const cors = require('cors')

const { getData } = require('./cache_utils')

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379

const client = redis.createClient(REDIS_PORT);

const app = express();
app.use(cors())

//Check Redis for key 'BeachData'

//Pass Redis to data scraping app
getData(client)


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


