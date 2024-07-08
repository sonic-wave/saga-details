import {
    SEARCH_SERVICES_SUCCESS,
    SEARCH_SERVICES_REQUEST,
    SEARCH_SERVICES_FAILURE,
    GO_TO_SERVICE_DETAILS
} from './actionTypes'

export function searchServicesRequest(optional = '') {
    return { type: SEARCH_SERVICES_REQUEST, payload: { optional } }
}

export function searchServicesSuccess(items) {
    return { type: SEARCH_SERVICES_SUCCESS, payload: { items } }
}

export function searchServicesFailure(error) {
    return { type: SEARCH_SERVICES_FAILURE, payload: { error } }
}

export function goToServiceDetails(optional) {
    return { type: GO_TO_SERVICE_DETAILS, payload: {optional} }
}

