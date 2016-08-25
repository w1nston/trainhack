import { combineReducers } from 'redux';
import { trainSearchFormReducer } from './trainSearchFormReducer';
import { trainDataReducer } from './trainDataReducer';
import { stationQuizReducer } from './stationQuizReducer';

const rootReducer = combineReducers({
  trainSearchFormReducer,
  trainDataReducer,
  stationQuizReducer,
});

export default rootReducer;
