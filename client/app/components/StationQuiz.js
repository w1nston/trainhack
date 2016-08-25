import React from 'react';

export default function StationQuiz({ stationName, questions, isFetching }) {
  return (
    <div className="station-quiz">
      <h1>Trivia</h1>
      <h2>{ stationName }</h2>
      <p><b>County:</b> {questions.county}</p>
      <p><b>Zip:</b> {questions.zip}</p>
      <p><b>Phone area code:</b> {questions.phoneCode}</p>
      <p><b>Founded in:</b> {questions.founded}</p>
    </div>
  );
}
// {county: "Västra Götalands län", zip: "40", phoneCode: "031", founded: "1621"}