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
  if (result.error === undefined) {
    console.log("Result: ", result);
    yield put({payload: result.cats, type: CATS_GET_SUCCESS});
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
