import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as types from '../actions/ActionTypes';

const initialState = {};
const corona = handleActions(
  {
    [types.GET_CORONA_DATA_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload
    })
  },
  initialState
);

const rootReducer = combineReducers({
  corona
});

export default rootReducer;