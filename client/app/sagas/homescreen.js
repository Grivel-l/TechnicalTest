import {
  put,
  all,
  call,
  takeLatest
} from "redux-saga/effects";

import {
  CATS_GET,
  CATS_GET_ERROR,
  CATS_GET_SUCCESS
} from "../actions/homescreen";
import {getCatsApi} from "../api/homescreen";

function* getCats({payload}) {
  const result = yield call(getCatsApi, {authToken: payload});
  console.log("Got cats: ", result);
  if (result.error === undefined) {
    yield put({payload: result, type: CATS_GET_SUCCESS});
  } else {
    yield put({type: CATS_GET_ERROR, payload: result.error});
  }
}

function* flow(socketClient) {
  yield all([
    takeLatest(CATS_GET, getCats)
  ]);
}

export default flow;
