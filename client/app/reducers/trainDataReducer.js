import * as types from '../constants';

const initialState = {
  // ??
};

export function trainDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_TRAIN_DATA_SUCCESS:
      console.log('dafuq?', action);
      return state;
    default:
      return state;
  }
}
