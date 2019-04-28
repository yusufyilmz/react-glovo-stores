import { combineReducers } from 'redux';
import category from './category-reducer';
import store from './store-reducer';
// import error from './error-reducer';

const rootReducer = combineReducers({
  category,
  store
//   error
});

export default rootReducer;
