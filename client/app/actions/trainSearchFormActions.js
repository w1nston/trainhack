import * as types from '../constants';

export function trainNumberInputChanged(trainNumber) {
  return {
    type: types.TRAIN_NUMBER_INPUT_CHANGED,
    trainNumber,
  };
}

export function searchForTrain(trainNumber) {
  return {
    type: types.SEARCH_TRAIN_NUMBER,
    trainNumber,
  };
}
