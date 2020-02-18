import { combineReducers } from 'redux';

import { addedReducer } from './addedReducer';
import { additionalReducer } from './additionalReducer';

export const rootReducer = combineReducers({
  addedReducer,
  additionalReducer
});