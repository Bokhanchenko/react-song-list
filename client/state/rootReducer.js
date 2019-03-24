// Core
import { combineReducers } from 'redux';

// Reducers
import { userReducer, postsReducer } from './reducer';

export const rootReducer = combineReducers({
  userReducer,
  postsReducer
});