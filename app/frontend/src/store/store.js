import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
//import default_state from './default_state';

const combinedReducers = combineReducers({
  cube: reducers.cube
});

const combinedDefaultState = {
  //cube: default_state.cube
};

//const loggerMiddleware = createLogger();

const store = createStore(
  combinedReducers,
  combinedDefaultState,
  applyMiddleware(
    thunkMiddleware/*,
    loggerMiddleware*/
  )
);

export default store;