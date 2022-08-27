import {
  FETCH_TRIP_SEARCH_PENDING,
  FETCH_TRIP_SEARCH_FAILURE,
  FETCH_TRIP_SEARCH_SUCCESS,
} from "../actionTypes/tripSearch";

const initialState = {
  tripSearch: {},
  status: null,
  error: null,
};

export default function tripSearchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRIP_SEARCH_PENDING:
      return {
        isLoading: true,
      };
    case FETCH_TRIP_SEARCH_SUCCESS:
      return {
        ...state,
        tripSearch: action.tripSearch,
        status: action.status,
        isLoading: false,
      };
    case FETCH_TRIP_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
