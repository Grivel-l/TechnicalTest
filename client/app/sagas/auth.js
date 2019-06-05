import {
  put,
  all,
  call,
  takeLatest
} from "redux-saga/effects";

import {
  AUTH_ERROR,
  AUTH_LOGIN,
  AUTH_SUCCESS,
  AUTH_REGISTER
} from "../actions/auth";
import {loginApi, registerApi} from "../api/auth";

function* login({payload}) {
  const result = yield call(loginApi, payload);
  console.log("Login: ", result);
}

function* register({payload}) {
  const result = yield call(registerApi, payload);
  if (result.error === undefined) {
    console.log("Sending success...\n");
    yield put({payload: result, type: AUTH_SUCCESS});
  } else {
    yield put({type: AUTH_ERROR});
  }
}

function* flow(socketClient) {
  yield all([
    takeLatest(AUTH_LOGIN, login),
    takeLatest(AUTH_REGISTER, register)
  ]);
}

export default flow;
