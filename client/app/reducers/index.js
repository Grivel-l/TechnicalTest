import {combineReducers} from "redux";

import auth from "./auth";
import homescreen from "./homescreen";

export default combineReducers({
  auth,
  homescreen
});
