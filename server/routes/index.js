var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/message', function(req, res, next) {
  res.json('Welcome To React');
});

router.get('/worst-parking-lots', (req, resp) => {
  const url = `https://api.yelp.com/v3/businesses/search?location=${req.params.location}&term=parking&sort_by=rating`;
  // todo: store API key in env var
  // todo: validation for location
  axios.get(url, {headers: {
    'Authorization': 'Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx',
    'Accept': '*/*'
  }})
  .then(yelpResponse => {
    const body = Object.assign({}, yelpResponse.data);
    body.businesses = body.businesses.reverse();
    resp.json(body);
  }).catch(e => {
    // todo: actual error handling
    console.log(e);
    resp.status(500).send(e);
  });
});

module.exports = router;
