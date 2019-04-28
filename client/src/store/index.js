import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import logger from 'redux-logger'
import reducer from '../reducers';

const middleware = [ReduxThunkMiddleware, ReduxPromiseMiddleware, logger];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);


const store = createStore(reducer, enhancer);

export default store;
