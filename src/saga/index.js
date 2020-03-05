import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as api from '../lib/api';
import * as types from '../actions/ActionTypes';

function* getCoronaDataSaga() {
  try {
    const { data } = yield call(api.getCoronaData);
    yield put({
      type: types.GET_CORONA_DATA_SUCCESS,
      payload: data[0]
    });
  } catch(e) {
    console.error(e);
  }
}

function* coronaSaga() {
  yield takeLatest(types.GET_CORONA_DATA, getCoronaDataSaga);
}

export function* rootSaga() {
  yield all([coronaSaga()]);
}