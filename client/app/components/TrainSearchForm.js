import React from 'react';
import TrainNumberInput from '../containers/TrainNumberInput';
import SubmitButton from './SubmitButton';

export default function TrainSearchForm({ trainNumber, onSubmit }) {
  function handleSubmit() {
    onSubmit(trainNumber);
  }

  return (
    <div className="train-search-form">
      <TrainNumberInput />
      <SubmitButton onSubmit={handleSubmit} label="Search" />
    </div>
  );
}
