import { applyMiddleware, combineReducers, createStore } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  competitionsReducer,
  skillsReducer,
  workHistoryReducer
} from './reducers';

const combinedReducers = combineReducers({
  competitions: competitionsReducer,
  skills: skillsReducer,
  workHistory: workHistoryReducer
});

const combinedDefaultState = {};

//const loggerMiddleware = createLogger();

export const store = createStore(
  combinedReducers,
  combinedDefaultState,
  applyMiddleware(
    thunkMiddleware
    /*  loggerMiddleware*/
  )
);
