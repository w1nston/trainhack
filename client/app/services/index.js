import 'whatwg-fetch';

// const url = 'http://10.7.64.110:3030/trainlookup/';
// const url = 'http://10.101.2.124:3030/trainlookup/';
const trainDataUrl = 'http://localhost:3030/trainlookup/';
const stationQuestionUrl = 'http://localhost:3030/questions/';

function parseJSONFromResponse(response) {
  return response
    .filter(station => station.type === 'Avgang')
    .map(station => station.LocationSignature);
}

function parseResponse(response) {
  return response.json().then(parseJSONFromResponse);
}

function errorLogger(error) {
  console.log(error);
}

function parseJSONFromQuestionsResponse(response) {
  return response;
}

function parseQuestionsResponse(response) {
  return response.json()
    .then(parseJSONFromQuestionsResponse)
    .catch(errorLogger);
}

export const trainhackAPI = {
  fetchTrainData(trainNumber) {
    return fetch(trainDataUrl + trainNumber)
      .then(parseResponse)
      .catch(errorLogger);
  },
  fetchStationQuiz(stationName) {
    return fetch(stationQuestionUrl + stationName)
      .then(parseQuestionsResponse)
      .catch(errorLogger)
  },
};