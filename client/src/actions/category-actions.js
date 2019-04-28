import * as actionTypes from '../constants/actionTypes';
import { GlovoAPI } from '../api/glovoAPI';
import { ERROR_OCCURED } from '../constants/messages';
import { storeStateHelper } from '../Helpers/storeStateHelper';

export const fetchCategories = () => async (dispatch, getState) => {

  GlovoAPI.fetchCategories()
    .then(data => {
      return GlovoAPI.fetchStores(data.categories)
    })
    .then(data => {
      dispatch(success(storeStateHelper.getCategoryStoreStates(data)));
    })
    .catch((error) => {
      if (getState().category.items.length === 0) {
        dispatch(fail(ERROR_OCCURED));
      }
    });

  function success(data) { return { type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: data } }
  function fail(error) { return { type: actionTypes.FETCH_CATEGORIES_ERROR, payload: error } }

};


