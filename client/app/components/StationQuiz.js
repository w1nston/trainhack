import React from 'react';

export default function StationQuiz({ stationName, questions, isFetching }) {
  return (
    <div className="station-quiz">
      { questions.map(() => <div>hej</div>) }
    </div>
  );
}
