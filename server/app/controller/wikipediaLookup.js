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
    console.log(stationName)
    stationName = stationName.replace(" C", "");
    superAgent.get(baseUrl)
      .set({
        Accept: 'application/json'
      })
      .query({
        action: 'query',
        prop: 'revisions',
        rvprop: 'content',
        format: 'json',
        titles: stationName,
        rvsection: '0'
      })
      .then(function onSuccess(data) {
        const respObj = JSON.parse(data.text);
        const pages = respObj.query.pages;

        const infoboxText = getInfoboxTextFromPage(getFirstPageFromResponse(pages));

        const findArea = /\|län\s*\=\s*\[\[(.*)\]\]/
        const foundArea = infoboxText.match(findArea)

        const findZip = /\|postnummer\s*\=\s*([\d\s]*\d)*/
        const foundZip = infoboxText.match(findZip)

        const findRikt = /\|riktnummer\s*\=\s*([\d]*)/
        const foundRikt = infoboxText.match(findRikt)

        const findFounded = /\|grundades\s*\=\s*(\d*)/
        const foundFounded = infoboxText.match(findFounded)

        console.log('infoboxText: ', infoboxText);
        response.json({
          county: foundArea[1],
          zip: foundZip[1],
          phoneCode: findRikt[1],
          founded: foundFounded[1],
        })
      })
      .catch(function onError(error) {
        // TODO
        console.error('ERROR! error!', error);
        response.json({ error: error });
      });
  }
};
