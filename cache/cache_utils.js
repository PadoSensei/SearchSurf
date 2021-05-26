const {latest_links, forecast_links} = require('./links')
const cheerio = require("cheerio");
const axios = require("axios");

function Beach(name, sixDayForecast, waterTemp, latest) {
  this.name = name;
  this.sixDayForecast = sixDayForecast;
  this.waterTemp = waterTemp;
  this.latest = latest
}

function getLatest (raw, beachOBj)  {
  const latest = raw('.forecast-seo-paragraph').text()
  const whereIsTarget = latest.indexOf('?')
  const waterTemp =raw('.temp').html()
  beachOBj.latest = latest.slice(whereIsTarget + 1)
  beachOBj.waterTemp = waterTemp
}

function getForecast (raw, beachOBj)  {
  const beachName = raw('.break-header__title > b').text()
  const forecast = raw('.forecast-seo-paragraph').text()
  const whereToStripFrom = forecast.indexOf('days')
  beachOBj.name = beachName
  beachOBj.sixDayForecast = forecast.slice(whereToStripFrom + 5)
}

const scrapeData = async (client) => {

  const latestRaw = [];
  const forecastRaw = [];
  const fullBeachData = [];

  for (let i = 0; i < forecast_links.length; i++) {
    
    // Create Beach Object
    const newBeach = new Beach()
    
    //Get data
    const resultLatest = await axios.get(latest_links[i])
    const resultForecast = await axios.get(forecast_links[i])

    //Load Cheerio with required data
    let $Latest = cheerio.load(resultLatest.data); 
    let $Forecast = cheerio.load(resultForecast.data); 

    latestRaw.push($Latest)
    getLatest($Latest, newBeach)
    forecastRaw.push($Forecast)
    getForecast($Forecast, newBeach)

    fullBeachData.push(newBeach)
    const redisName =newBeach.name
    pushObjToRedis(redisName, newBeach, client)
    
  }
    //push to Redis
    pushObjToRedis('beachData',fullBeachData, client)
   
}

async function pushObjToRedis(key, obj, client) {

  try {
      //const key = 'BeachData';
      await client.set(key, JSON.stringify(obj));

      // Turn around and test immediately to prove it works.
      const response = JSON.parse(await client.get(key));
      if (response){
        console.log('Data passed to Redis successfully')
      }
  } catch (error) {
      console.error(error);
  }
  //client.disconnect();
}

async function getDataFromRedis(client){
 client.get('BeachData', function(err, reply) {
  console.log(reply)
 })
}


module.exports = { Beach, getForecast, getLatest, scrapeData, pushObjToRedis, getDataFromRedis }