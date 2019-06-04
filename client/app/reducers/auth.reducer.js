import {AUTH_SUCCESS} from "../actions/auth";

const initialState = {
  authToken: null
};

const auth = (state = initialState, {type, payload}) => {
  switch(type) {
  case AUTH_SUCCESS:
    return {
      ...state,
      authToken: payload.token
    };
  default:
    return state;
  }
};

export default auth;

