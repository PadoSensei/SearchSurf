const cheerio = require("cheerio");
const axios = require("axios");
// We need to be able to pull data from the surf website and display it in the console.

// We need to create an object that will hold the required data.
const beachDataObject = {
  
}


const latestJose = 'https://www.surf-forecast.com/breaks/Sao-Jose/forecasts/latest'
const sixDayJose = 'https://www.surf-forecast.com/breaks/Sao-Jose/forecasts/latest/six_day'
const getBeachLatest = async () => {

  // axios gets the full page from target
  const latestData = await axios.get(sixDayJose)
  // $ signifies cheerios element that can now be s
  const $Scrapped = cheerio.load(latestData.data)
  const latestForecast = $Scrapped('.forecast-seo-paragraph').text()
  beachDataObject.forecast = latestForecast
  //console.log(beachDataObject)
  return latestForecast
}
//getBeachLatest()

const data = getBeachLatest()
const resolved = Promise.resolve(data)
console.log(resolved)