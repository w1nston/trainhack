import React from 'react';
import TrainStation from './TrainStation';
import FontAwesome from './FontAwesome';

function renderTrainStation(trainStation, index) {
  return <TrainStation stationName={trainStation} key={index} />;
}

function renderTrainStations(trainStations, isFetching ) {
  if (isFetching === true) {
    return (
      <tr>
        <td colSpan="2">
          <FontAwesome icons={['spinner', 'spin', '3x', 'fw']} />
        </td>
      </tr>
    );
  }
  return trainStations.map(renderTrainStation);
}

export default function TrainStations({ trainStations, isFetching }) {
  return (
    <table>
      <thead>
      <tr>
        <th>Station</th>
      </tr>
      </thead>
      <tbody>
      {renderTrainStations(trainStations, isFetching)}
      </tbody>
    </table>
  );
}