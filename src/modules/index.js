import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import corona, { coronaSaga } from './corona';

const rootReducer = combineReducers({
  corona
});

export function* rootSaga() {
  yield all([coronaSaga()]);
}

export default rootReducer;