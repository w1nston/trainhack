import React from 'react';
import TextInput from './TextInput';

export default function TrainNumberInput(props) {
  return (
    <TextInput
      name="trainNumber"
      placeholder="Train number"
      text={props.text}
      type="number"
      onChange={props.onChange}
    />
  );
}
