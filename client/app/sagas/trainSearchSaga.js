import { takeEvery } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/trainSearchFormActions';
import { trainhackAPI } from '../services';
import * as types from '../constants';

// export function *fetchBooks() {
  // const books = yield call(bookshelfApi.getBooks);
  // yield put(actions.receiveBooks(books));
// }

// export function *createBook(action) {
//   const success = yield call(bookshelfApi.createBook, action.title, action.author);
//   yield put(actions.createdBook(success));
// }

// export function *watchCreateBook() {
//   yield call(takeEvery, ADD_BOOK, createBook);
// }

// export function *watchFetchBooks() {
//   yield call(takeEvery, FETCH_ALL_BOOKS, fetchBooks);
// }

export default function *trainSearchSaga() {
  // yield [
    // fork(watchFetchBooks),
    // fork(watchCreateBook),
  // ];
}
