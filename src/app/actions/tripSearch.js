import {
  FETCH_TRIP_SEARCH_PENDING,
  FETCH_TRIP_SEARCH_FAILURE,
  FETCH_TRIP_SEARCH_SUCCESS,
} from "../actionTypes/tripSearch";

export const tripSearchPednding = (origin, destination) => ({
  type: FETCH_TRIP_SEARCH_PENDING,
  origin,
  destination,
});

export const tripSearchSuccess = (tripSearch, status) => ({
  type: FETCH_TRIP_SEARCH_SUCCESS,
  status,
  tripSearch,
});

export const tripSearchFail = (error) => ({
  type: FETCH_TRIP_SEARCH_FAILURE,
  error,
});
