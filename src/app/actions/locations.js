import {
  FETCH_LOCATIONS_PENDING,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  RESET_LOCATIONS,
} from "../actionTypes/locations";

export const locationsPednding = (keyword) => ({
  type: FETCH_LOCATIONS_PENDING,
  keyword,
});

export const locationsSuccess = (locations, status) => ({
  type: FETCH_LOCATIONS_SUCCESS,
  locations,
  status,
});

export const locationsFail = (error) => ({
  type: FETCH_LOCATIONS_FAILURE,
  error,
});

export const resetLocation = () => ({
  type: RESET_LOCATIONS,
});
