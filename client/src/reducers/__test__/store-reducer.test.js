import storeReducer from '../store-reducer';
import * as actionTypes from '../../constants/actionTypes';
import data from '../../../../files/snacks.json';
import { ERROR_OCCURED } from './../../constants/messages';

describe('STORE REDUCERS', () => {
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
      expect(storeReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCH STORES SUCCESS', () => {
    test('returns correct state', () => {
      const payload = data.stores;
      const action = { type: actionTypes.FETCH_STORE_SUCCESS, payload };
      expect(storeReducer(undefined, action)).toEqual({
        ...initialState, items: payload
      });
    });
  });

  describe('FETCH STORES ERROR', () => {
    test('returns correct state', () => {
      const payload = ERROR_OCCURED;
      const action = { type: actionTypes.FETCH_STORE_ERROR, payload };
      expect(storeReducer(undefined, action)).toEqual({
        ...initialState, error: payload
      });
    });
  });
});
