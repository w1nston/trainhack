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

export function fetchTrainDataSuccess(trainStations) {
  return {
    type: types.FETCH_TRAIN_DATA_SUCCESS,
    trainStations,
  };
}
