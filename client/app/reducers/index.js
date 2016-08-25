import { combineReducers } from 'redux';
import { trainSearchFormReducer } from './trainSearchFormReducer';

const rootReducer = combineReducers({
  trainSearchFormReducer,
});

export default rootReducer;
