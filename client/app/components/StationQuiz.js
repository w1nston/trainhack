import React from 'react';

export default function StationQuiz({ stationName, questions, isFetching }) {

  return (
    <div className="station-quiz">
      <p>Quiz</p>
      <div>{ stationName }</div>
      
    </div>
  );
}
