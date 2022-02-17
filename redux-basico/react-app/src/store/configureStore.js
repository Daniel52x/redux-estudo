import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contador from './contador';
import login from './login';
import modal from './modal';
// import logger from './middleware/logger';
import localStorage from './middleware/localStorage';

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({ reducer, middleware });

export default store;
