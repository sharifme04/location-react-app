import { combineReducers } from "redux";
import locationsReducer from "./locationsReducer";
import tripSearchReducer from "./tripSearchReducer";

export default combineReducers({
  locationsReducer,
  tripSearchReducer,
});
