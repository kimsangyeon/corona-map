import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api'

const GET_CORONA_DATA = 'GET_CORONA_DATA';
const GET_CORONA_DATA_SUCCESS = 'GET_CORONA_DATA_SUCCESS';
export const getCoronaData = createAction(GET_CORONA_DATA);

function* getCoronaDataSaga() {
  try {
    const { data } = yield call(api.getCoronaData);
    yield put({
      type: GET_CORONA_DATA_SUCCESS,
      payload: data[0]
    });
  } catch(e) {
    console.error(e);
  }
}

export function* coronaSaga() {
  yield takeLatest(GET_CORONA_DATA, getCoronaDataSaga);
}

const initialState = {};
const corona = handleActions(
  {
    [GET_CORONA_DATA_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload
    })
  },
  initialState
);

export default corona;