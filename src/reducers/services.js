import {
    SEARCH_SERVICES_SUCCESS,
    SEARCH_SERVICES_REQUEST,
    SEARCH_SERVICES_FAILURE,
} from '../actions/actionTypes'

const initialState = { items: [], loading: false, error: null };

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SERVICES_REQUEST:
            return { ...state, loading: true, error: null };
        case SEARCH_SERVICES_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case SEARCH_SERVICES_SUCCESS:
            const { items } = action.payload;
            return { ...state, items, loading: false, error: null };
        default:
            return state;
    }
}