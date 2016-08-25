import React from 'react';

export default function TrainStation({ stationName, onClick }) {
  return (
    <tr>
      <td>
        <a href="#" onClick={onClick}>{ stationName }</a>
      </td>
    </tr>
  );
}
