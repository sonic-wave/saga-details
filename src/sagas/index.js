import { takeLatest, put, spawn, call } from "redux-saga/effects"
import { searchServicesRequest, searchServicesSuccess, searchServicesFailure } from "../actions/actionCreators"
import {
  SEARCH_SERVICES_REQUEST,
} from "../actions/actionTypes"
import { searchServices } from "../api"

function* handleSearchServicesSaga(action) {
  try {
    const optional = action.payload.optional || '';
    const data = yield call(searchServices, optional);

    yield put(searchServicesSuccess(data));
  } catch (e) {
    yield put(searchServicesFailure(e.message));
  }
}

function* watchSearchServicesSaga() {
  yield takeLatest(SEARCH_SERVICES_REQUEST, handleSearchServicesSaga)
}

export default function* saga() {
  yield spawn(watchSearchServicesSaga)
  yield put(searchServicesRequest(''))
}
