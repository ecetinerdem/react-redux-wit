import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { usersReducers } from './reducucers/usersReducer';
import { settingsReducer } from './reducucers/settingsReducer';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';

const reducers = combineReducers({
  users: usersReducers,
  settings: settingsReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk, logger));
