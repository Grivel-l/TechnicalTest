import {
  CATS_GET_SUCCESS,
  CATS_GET_ERROR
} from "../actions/auth";

const initialState = {
  cats: [],
  error: null
};

const auth = (state = initialState, {type, payload}) => {
  switch(type) {
  case CATS_GET_SUCCESS:
    return {
      ...state,
      cats: payload
    };
  case CATS_GET_ERROR:
    return {
      ...state,
      error: payload
    };
  default:
    return state;
  }
};

export default auth;

