const superAgent = require('superagent');
//const trafikverketDataUrl = 'http://api.trafikinfo.trafikverket.se/v1/data.json'
//const trafikverketStationsUrl = 'http://api.trafikinfo.trafikverket.se/v1/data.json'
const trafikverketDataUrl = 'http://localhost:3030/mock/data'
const trafikverketStationsUrl = 'http://localhost:3030/mock/stations'
const apiKey = 'f2cef9d56c3e42749f57856e48cc2884';


module.exports = {
  fetchFromToLocation: function (response, trainNumber) {
    superAgent.post(trafikverketDataUrl)
      .type('text/xml')
      .send(
        "<REQUEST>" +
        "<LOGIN authenticationkey='"+apiKey+"' />" +
        "<QUERY objecttype='TrainAnnouncement'>" +
        "<FILTER>" +
        "<EQ name='AdvertisedTrainIdent' value='"+trainNumber+"' />" +
        "</FILTER>" +
        "</QUERY>" +
        "</REQUEST>"
      )
      .then(function onSuccessFetchData(data) {
        const dataObject = JSON.parse(data.text);

        fetchStations()
          .then(function onSuccessFetchStations(data) {
            const stationsObject = JSON.parse(data.text);
            const trainStationsResponseObject = stationsObject.RESPONSE.RESULT[0];

            const trainStations = createTrainStationMapping(trainStationsResponseObject);

            dataObject.STATIONS = trainStations



            const finalObject = []

            var results = dataObject.RESPONSE.RESULT[0].TrainAnnouncement

            const sortedResults = results.sort((previous, current) => {
              return Date.parse(previous.AdvertisedTimeAtLocation) > Date.parse(current.AdvertisedTimeAtLocation)
            })

            const filteredResults = sortedResults.filter((result) => {
              return Date.parse(result.AdvertisedTimeAtLocation) < Date.parse("2016-08-25 23:59:00")
                  && Date.parse(result.AdvertisedTimeAtLocation) > Date.parse("2016-08-25 00:00:00")
            })


            for (var i in filteredResults) {
              const result = filteredResults[i];

              finalObject.push({
                //id: i,
                type: result.ActivityType,
                //modified: result.ModifiedTime,
                advertisedTimeAtLocation: result.AdvertisedTimeAtLocation,
                LocationSignature: trainStations[result.LocationSignature],
                from: result.FromLocation.map((location) => {
                  return trainStations[location]
                }),
                to: result.ToLocation.map((location) => {
                  return trainStations[location]
                })
              });
            }

            response.json(finalObject)



            /*const avgang = results.filter((result) => {
              return result.ActivityType === 'Avgang'
            })

            const finalAvgang = avgang.reduce((previous, current) => {
              return Date.parse(previous.ModifiedTime) > Date.parse(current.ModifiedTime)
                  ? previous
                  : current
            }, {})*/

            /*const finalAvgangObject = [
              finalAvgang.ActivityType,
              finalAvgang.ModifiedTime,
              finalAvgang.AdvertisedTimeAtLocation,
              finalAvgang.FromLocation.map((location) => {
                return trainStations[location]
              }),
              finalAvgang.ToLocation.map((location) => {
                return trainStations[location]
              })
            ];*/



            const ankomst = results.filter((result) => {
              return result.ActivityType === 'Ankomst'
            })

            //response.json(avgang)
            //response.json(ankomst)




            response.json(results)
            response.json(finalObject)
          })
          .catch(function onError(error) {
            console.log('error getting train stations!', error);
            response.json({ error: 'wat!?' });
          });

      })
      .catch(function onFailure(data) {
        console.log('error', error);
        response.json({ error: 'wat!?' });
      })
  }

}


function fetchStations () {
  return superAgent.post(trafikverketStationsUrl)
    .type('text/xml')
    .send(
      "<REQUEST>" +
      "<LOGIN authenticationkey='f2cef9d56c3e42749f57856e48cc2884' />" +
      "<QUERY objecttype='TrainStation'>" +
      "<FILTER/>" +
      "<INCLUDE>AdvertisedLocationName</INCLUDE>" +
      "<INCLUDE>LocationSignature</INCLUDE>" +
      "</QUERY>" +
      "</REQUEST>"
    )
}


function createTrainStationMapping(trainStationsResponseObject) {
  return trainStationsResponseObject.TrainStation.reduce(
    (trainStationsObject, currentTrainStation) => {
      trainStationsObject[currentTrainStation.LocationSignature] =
        currentTrainStation.AdvertisedLocationName;
      return trainStationsObject;
    },
    {}
  );
}
