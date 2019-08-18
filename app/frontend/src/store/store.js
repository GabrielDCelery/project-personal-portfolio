import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  workHistoryReducer
} from './workHistory';

const combinedReducers = combineReducers({
  workHistory: workHistoryReducer
});

const combinedDefaultState = {};

//const loggerMiddleware = createLogger();

const store = createStore(
  combinedReducers,
  combinedDefaultState,
  applyMiddleware(
    thunkMiddleware
    /*  loggerMiddleware*/
  )
);

export default store;