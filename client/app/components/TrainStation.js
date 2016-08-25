import React from 'react';

export default function TrainStation({ stationName }) {
  return (
    <tr>
      <td>
        <a href="#">{ stationName }</a>
      </td>
    </tr>
  );
}
