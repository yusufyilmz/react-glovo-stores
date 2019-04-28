import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                error: null,
                items: action.payload
            };
        case actionTypes.FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}