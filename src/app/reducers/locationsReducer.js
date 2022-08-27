import {
  FETCH_LOCATIONS_PENDING,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  RESET_LOCATIONS
} from "../actionTypes/locations";

const initialState = {
  locations: [],
  status: null,
  error: null,
};

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS_PENDING:
      return {
        isLoading: true,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations,
        status: action.status,
        isLoading: false,
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case RESET_LOCATIONS:
      return {
        locations: [],
        isLoading: false,
      };
    default:
      return state;
  }
}
