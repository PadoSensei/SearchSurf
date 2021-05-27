const { scrapeData } = require('./cache_utils')
const client = require('./redis')

const checkCache = (req, res, next) => {
  client.get('beachData', (err, reply) =>{
    if(!reply){
      scrapeData()
      console.log("Scraping Data...")
    }else {
      console.log('Data already in Redis!')
    }
    next();
  })
}

const getPontal = (req, res, next) => {
  client.get('Pontal', function(err, reply){
    res.send(reply)
    console.log(reply)
  })
  next();
}
const getItacarezinho = (req, res, next) => {
  client.get('Itacarezinho', function(err, reply){
    res.send(reply)
    console.log(reply)
  })
  next();
}
const getJeribucacu = (req, res, next) => {
  client.get('Jeribucacu', function(err, reply){
    res.send(reply)
  })
  next();
}
const getTirica = (req, res, next) => {
  client.get('Tiririca', function(err, reply){
    res.send(reply)
  })
  next();
}
const getCorals = (req, res, next) => {
  client.get('Corals', function(err, reply){
    res.send(reply)
  })
  next();
}
const getHavaizinho = (req, res, next) => {
  client.get('Havaizinho', function(err, reply){
    res.send(reply)
  })
  next();
}

module.exports = {getCorals, getHavaizinho, getPontal, getJeribucacu, getTirica, getItacarezinho, checkCache}