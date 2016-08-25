import * as types from '../constants';

const initialState = {
  trainNumber: ''
};

export function trainSearchFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_TRAIN_NUMBER:
      return {
        trainNumber: '',
      };
    case types.TRAIN_NUMBER_INPUT_CHANGED:
      return {
        trainNumber: action.trainNumber,
      };
    default:
      return state;
  }
}

export function getTrainSearchFormState(state) {
  const reducer = state.trainSearchFormReducer;
  if (reducer) {
    return reducer;
  }
}
