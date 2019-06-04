import {all, fork} from "redux-saga/effects";

import auth from "./auth";

function* root() {
  yield all([
    fork(auth)
  ]);
}

export default root;

