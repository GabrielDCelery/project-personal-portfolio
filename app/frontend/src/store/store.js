import { applyMiddleware, combineReducers, createStore } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { workHistoryReducer } from './workHistory';
import { competitionsReducer } from './competitions';
import { skillsReducer } from './skills';

const combinedReducers = combineReducers({
  competitions: competitionsReducer,
  skills: skillsReducer,
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
