import 'whatwg-fetch';

// const url = 'http://10.7.64.110:3030/trainlookup/';
const url = 'http://10.101.2.124:3030/trainlookup/';

function parseJSONFromResponse(response) {
  response
  console.log('WIHO:', response);
}

function parseResponse(response) {
  return response.json().then(parseJSONFromResponse);
}

export const trainhackAPI = {
  fetchTrainData(trainNumber) {
    return fetch(url + trainNumber)
      .then(parseResponse)
      .catch(error => console.log('error!', error));
  }
};