import React from 'react';
import TrainStation from './TrainStation';
import FontAwesome from './FontAwesome';

// function renderTrainStation(trainStation, index) {
//   return <TrainStation stationName={trainStation} key={index} />;
// }

function renderTrainStations(trainStations, isFetching, onClick) {

  return trainStations.map((station, index) => {
    function handleClick(event) {
      event.preventDefault();
      onClick(station);
    }

    return <TrainStation stationName={station} onClick={handleClick} key={index} />;
  });
}

export default function TrainStations({ trainStations, isFetching, onClick }) {
  return (
    <div className="train-stations">
      <table>
        <thead>
        <tr>
          <th>Station</th>
        </tr>
        </thead>
        <tbody>
        {renderTrainStations(trainStations, isFetching, onClick)}
        </tbody>
      </table>
    </div>
  );
}