import { call, put, delay, takeLatest } from "redux-saga/effects";
import _ from 'lodash';
import { FETCH_TRIP_SEARCH_PENDING } from "../actionTypes/tripSearch";
import { tripSearchSuccess, tripSearchFail } from "../actions/tripSearch";
import { api } from "../services/services";


function* fetchTrip(action) {
  yield delay(200);
  const { tripSearch, error, status } = yield call(api.onFetchtrip, action);
  if (!_.isEmpty(tripSearch)) yield put(tripSearchSuccess(tripSearch, status));
  else yield put(tripSearchFail(error));
}

export default function* watchFetchTripSearch() {
  yield takeLatest(FETCH_TRIP_SEARCH_PENDING, fetchTrip);
}
