import React from 'react';
import TrainStation from './TrainStation';
import FontAwesome from './FontAwesome';

// function renderTrainStation(trainStation, index) {
//   return <TrainStation stationName={trainStation} key={index} />;
// }

function renderTrainStations(trainStations, isFetching, onClick) {
  if (isFetching === true) {
    return (
      <tr>
        <td colSpan="2">
          <FontAwesome icons={['spinner', 'spin', '3x', 'fw']} />
        </td>
      </tr>
    );
  }

  return trainStations.map((station, index) => {
    function handleClick(event) {
      event.preventDefault();
      console.log(station);
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