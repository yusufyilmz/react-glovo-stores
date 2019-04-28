import categoryReducer from '../category-reducer';
import * as actionTypes from '../../constants/actionTypes';
import data from '../../../../files/categories.json';
import { ERROR_OCCURED } from './../../constants/messages';

describe('CATEGORY REDUCERS', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      items: [],
      error: null
    };
  });

  describe('INITIAL STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      expect(categoryReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCH CATEGORIES SUCCESS', () => {
    test('returns correct state', () => {
      const payload = data.categories;
      const action = { type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload };
      expect(categoryReducer(undefined, action)).toEqual({
        ...initialState, items: payload
      });
    });
  });

  describe('FETCH CATEGORIES ERROR', () => {
    test('returns correct state', () => {
      const payload = ERROR_OCCURED;
      const action = { type: actionTypes.FETCH_CATEGORIES_ERROR, payload };
      expect(categoryReducer(undefined, action)).toEqual({
        ...initialState, error: payload
      });
    });
  });
});
