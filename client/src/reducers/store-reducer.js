import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_STORE_SUCCESS:
            return {
                ...state,
                items: action.payload,
                error: null
            };
        case actionTypes.FILTER_STORE_SUCCESS:
            return {
                ...state,
                error: null,
                items: action.payload,
            };
        case actionTypes.FILTER_STORE_ERROR:
        case actionTypes.FETCH_STORE_ERROR:
            return {
                ...state,
                error: action.payload,
                items: [],
            };
        default:
            return state;

    }
}