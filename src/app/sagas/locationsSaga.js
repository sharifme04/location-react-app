import { call, put, delay, takeLatest } from "redux-saga/effects";
import { FETCH_LOCATIONS_PENDING } from "../actionTypes/locations";
import { locationsSuccess, locationsFail } from "../actions/locations";
import { api } from "../services/services";

function* fetchLocations(action) {
  yield delay(200);
  const { locations, error, status } = yield call(api.onFetchlocations, action);
  if (locations.length) yield put(locationsSuccess(locations, status));
  else yield put(locationsFail(error));
}

export default function* watchFetchLocations() {
  yield takeLatest(FETCH_LOCATIONS_PENDING, fetchLocations);
}
