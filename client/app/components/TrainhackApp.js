import React from 'react';
import TrainSearchForm from '../containers/TrainSearchForm';
import TrainStations from '../containers/TrainStations';
import StationQuiz from '../containers/StationQuiz';

export default function TrainhackApp() {
  return (
    <div>
      <div className="left">
        <TrainSearchForm />
        <TrainStations />
      </div>
      <StationQuiz />
    </div>
  );
}
