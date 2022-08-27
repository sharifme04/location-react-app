import { all } from "redux-saga/effects";
import watchFetchLocations from "./locationsSaga";
import watchFetchTripSearch from "./tripSearchSaga";

export default function* rootSaga() {
  yield all([watchFetchLocations(), watchFetchTripSearch()]);
}
