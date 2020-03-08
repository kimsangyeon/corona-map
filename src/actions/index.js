import { createAction } from 'redux-actions';
import * as types from './ActionTypes';

export const getCoronaData = createAction(types.GET_CORONA_DATA);