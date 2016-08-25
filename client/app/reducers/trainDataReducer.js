import * as types from '../constants';

const initialState = {
  trainStations: [],
  isFetching: false,
};

export function trainDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_TRAIN_NUMBER:
      return {
        trainStations: state.trainStations,
        isFetching: true,
      };
    case types.FETCH_TRAIN_DATA_SUCCESS:
      console.log('REDUCE BABY!', action);
      return {
        trainStations: action.trainStations,
        isFetching: false,
      };
    default:
      return state;
  }
}

export function getTrainStations(state) {
  const reducer = state.trainDataReducer;
  if (reducer) {
    return reducer.trainStations;
  }
}

export function getFetchingStatus(state) {
  const reducer = state.trainDataReducer;
  if (reducer) {
    return reducer.isFetching;
  }
}
