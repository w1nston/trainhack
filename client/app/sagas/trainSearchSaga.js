import { takeEvery } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/trainSearchFormActions';
import { trainhackAPI } from '../services';
import * as types from '../constants';

// TODO spinner !!
export function *fetchTrainData(action) {
  const trainData = yield(call(trainhackAPI.fetchTrainData, action.trainNumber));
  yield put(actions.fetchTrainDataSuccess(trainData));
}

export function *watchFetchTrainData() {
  yield call(takeEvery, types.SEARCH_TRAIN_NUMBER, fetchTrainData); // TODO How to pass in action?
}

export default function *trainSearchSaga() {
  yield [
    fork(watchFetchTrainData),
  ];
}
