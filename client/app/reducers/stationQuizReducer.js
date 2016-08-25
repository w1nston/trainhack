import * as types from '../constants';

const initialState = {
  stationName: '',
  isFetching: false,
  questions: [],
};

export function stationQuizReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_STATION_QUESTIONS:
      return {
        stationName: action.stationName,
        isFetching: true,
        questions: state.questions,
      };
    case types.FETCH_STATION_QUESTIONS_SUCCESS:
      return {
        stationName: action.stationName,
        isFetching: false,
        questions: action.questions,
      };
    default:
      return state;
  }
}

export function getStationName(state) {
  const reducer = state.stationQuizReducer;
  if (reducer) {
    return reducer.stationName;
  }
}

export function getFetchingStatus(state) {
  const reducer = state.stationQuizReducer;
  if (reducer) {
    return reducer.isFetching;
  }
}

export function getQuestions(state) {
  const reducer = state.stationQuizReducer;
  if (reducer) {
    return reducer.questions;
  }
}
