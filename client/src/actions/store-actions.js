import * as actionTypes from '../constants/actionTypes';
import { NO_STORE, ERROR_OCCURED } from '../constants/messages';
import { storeHelper } from '../Helpers/storeHelper';

export const fetchStore = (type) => async (dispatch, getState) => {

  const stores = storeHelper.getStoresWithType(getState().category.items, type)

  if (stores) {
    dispatch(success(stores));
  }
  else {
    dispatch(fail(ERROR_OCCURED));
  }

  function success(data) { return { type: actionTypes.FETCH_STORE_SUCCESS, payload: data } }
  function fail(error) { return { type: actionTypes.FETCH_STORE_ERROR, payload: error } }
};



export const filterStores = (tag, storeName) => async (dispatch, getState) => {

  const store = getState().category.items.find(item => item.name === storeName);
  const foundStores = storeHelper.getStoresWithTag(store, tag)

  if (foundStores && foundStores.length > 0) {
    dispatch(success(foundStores));
  }
  else {
    dispatch(fail(NO_STORE));
  }

  function success(data) { return { type: actionTypes.FILTER_STORE_SUCCESS, payload: data } }
  function fail(error) { return { type: actionTypes.FILTER_STORE_ERROR, payload: error } }
};

