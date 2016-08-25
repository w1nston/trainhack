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

module.exports = {
  fetchQuestions(response, stationName) {
    superAgent.get(baseUrl)
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
      });
  }
};
