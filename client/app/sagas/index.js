import {all, fork} from "redux-saga/effects";

import auth from "./auth";
import homescreen from "./homescreen";

function* root() {
  yield all([
    fork(auth),
    fork(homescreen)
  ]);
}

export default root;

