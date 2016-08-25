const superAgent = require('superagent');
const baseUrl = 'http://sv.wikipedia.org/w/api.php';

function getFirstPropertyOf(pages) {
  return Object.keys(pages)[0];
}

function getFirstPageFromResponse(pages) {
  return pages[getFirstPropertyOf(pages)];
}

function getInfoboxTextFromPage(page) {
  return page.revisions[0]['*'];
}

function fetchFromToLocation(response, trainStations) {
  superAgent.post('http://api.trafikinfo.trafikverket.se/v1/data.json')
    .type('text/xml')
    .send(
      "<REQUEST>" +
      "<LOGIN authenticationkey='f2cef9d56c3e42749f57856e48cc2884' />" +
      "<QUERY objecttype='TrainAnnouncement'>" +
      "<FILTER>" +
      "<EQ name='AdvertisedTrainIdent' value='535' />" +
      "</FILTER>" +
      "</QUERY>" +
      "</REQUEST>"
    )
    .then(function onSuccess(data) {
      const responseObject = JSON.parse(data.text);

      console.log('success! responseObject.RESPONSE.RESULT', responseObject.RESPONSE.RESULT);

      responseObject.RESPONSE.RESULT[0].TrainAnnouncement.forEach(wat => {
        console.log('WAT!?', wat.FromLocation);
      });


      // console.log('success! responseObject.RESPONSE.RESULT[0]', responseObject.RESPONSE.RESULT[0]);
      // console.log('success! responseObject.RESPONSE.RESULT[0].TrainAnnouncement[0]', responseObject.RESPONSE.RESULT[0].TrainAnnouncement[0]);

      // const fromArray = responseObject.RESPONSE.RESULT[0].TrainAnnouncement[0].FromLocation;
      // const toArray = responseObject.RESPONSE.RESULT[0].TrainAnnouncement[0].ToLocation;
      //
      // console.log('fromArray', fromArray);
      // console.log('toArray', toArray);
      // fromArray.forEach(location => console.log('from: ', trainStations[location]));
      // toArray.forEach(location => console.log('to: ', trainStations[location]));

      response.json({ message: '42' });
    })
    .catch(function onError(error) {
      console.log('error', error);
      response.json({ error: 'wat!?' });
    });
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

module.exports = function wikipediaController() {
  return {
    getPageByTitle(request, response) {
      // console.log('wikipediaController getPageByTitle', request.query.city);
      // '?action=query&prop=revisions&rvprop=content&format=json&titles=skee&rvsection=0'

      superAgent.post('http://api.trafikinfo.trafikverket.se/v1/data.json')
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
        .then(function onSuccess(data) {
          const responseObject = JSON.parse(data.text);
          const trainStationsResponseObject = responseObject.RESPONSE.RESULT[0];

          const trainStations = createTrainStationMapping(trainStationsResponseObject);


          var fetchFromToLocation(response, trainStations);
          response.json({ message: '42' });
        })
        .catch(function onError(error) {
          console.log('error getting train stations!', error);
          response.json({ error: 'wat!?' });
        });

      // TODO below
      /*superAgent.get(baseUrl)
       .set({
       Accept: 'application/json'
       })
       .query({
       action: 'query',
       prop: 'revisions',
       rvprop: 'content',
       format: 'json',
       titles: request.query.city,
       rvsection: '0'
       })
       .then(function onSuccess(data) {
       const respObj = JSON.parse(data.text);
       const pages = respObj.query.pages;

       const infoboxText = getInfoboxTextFromPage(getFirstPageFromResponse(pages));
       console.log('infoboxText: ', infoboxText);

       response.json(infoboxText);
       })
       .catch(function onError(error) {
       // TODO
       console.error('ERROR! error!', error);
       response.json({ error: error });
       });*/

    }
  };
};
