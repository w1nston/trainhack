const trainLookup = require('./controller/trainLookup')

module.exports = function (router) {
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Method", "GET")
    next();
  })

  router.get('/trainlookup/:trainNumber', (req, res) => {
    trainLookup.fetchFromToLocation(res, req.params.trainNumber)
  })


  router.post('/mock/data', (req, res) => {
    res.json(require('./mock/dataObject.json'))
  })
  router.post('/mock/stations', (req, res) => {
    res.json(require('./mock/stationObject.json'))
  })

  return router;
}
