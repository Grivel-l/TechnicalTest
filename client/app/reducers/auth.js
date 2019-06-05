import {
  AUTH_SUCCESS,
  AUTH_ERROR
} from "../actions/auth";

const initialState = {
  authToken: null,
  error: null
};

const auth = (state = initialState, {type, payload}) => {
  switch(type) {
  case AUTH_SUCCESS:
    return {
      ...state,
      authToken: payload.token
    };
  case AUTH_ERROR:
    return {
      ...state,
      error: payload
    };
  default:
    return state;
  }
};

export default auth;

