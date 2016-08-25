import React from 'react';
import TrainSearchForm from '../containers/TrainSearchForm';
import TrainStations from '../containers/TrainStations';

export default function TrainhackApp() {
  return (
    <div>
      <TrainSearchForm />
      <TrainStations />
    </div>
  );
}
