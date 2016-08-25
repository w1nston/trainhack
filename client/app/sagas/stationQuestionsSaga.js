import { takeEvery } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/trainSearchFormActions';
import { trainhackAPI } from '../services';
import * as types from '../constants';

export function *fetchStationQuestions(action) {
  const questions = yield(call(trainhackAPI.fetchStationQuiz, action.stationName));
  yield put(actions.fetchStationQuestionsSuccess(questions));
}

export function *watchFetchStationQuestions() {
  yield call(takeEvery, types.FETCH_STATION_QUESTIONS, fetchStationQuestions);
}

export default function *stationQuestionsSaga() {
  yield [
    fork(watchFetchStationQuestions),
  ];
}
