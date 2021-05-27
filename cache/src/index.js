const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors')
const {getCorals, getHavaizinho, getPontal, getJeribucacu, getTirica, getItacarezinho, checkCache} = require('./middleware')

const app = express();
app.use(cors());
app.use(checkCache)

const router = express.Router();

router.get('/pontal', getPontal,() => {
});

router.get('/corals', getCorals,() => { 
});

router.get('/havaizinho', getHavaizinho,() => {
});

router.get('/itacarezinho', getItacarezinho,() => {
});

router.get('/jeribucacu', getJeribucacu,() => {
});

router.get('/tiririca', getTirica,() => {
});


app.use('/.netlify/functions/index', router);

module.exports.handler = serverless(app);
