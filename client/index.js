import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import TrainhackApp from './app/components/TrainhackApp';
import rootReducer from './app/reducers';
import trainSearchSaga from './app/sagas/trainSearchSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(trainSearchSaga);

ReactDOM.render(
  <Provider store={store}>
    <TrainhackApp />
  </Provider>,
  document.getElementById('root')
);
