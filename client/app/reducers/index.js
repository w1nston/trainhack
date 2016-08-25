import { combineReducers } from 'redux';
import { trainSearchFormReducer } from './trainSearchFormReducer';
import { trainDataReducer } from './trainDataReducer';

const rootReducer = combineReducers({
  trainSearchFormReducer,
  trainDataReducer,
});

export default rootReducer;
