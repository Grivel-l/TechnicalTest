import {
  CATS_GET_SUCCESS,
  CATS_GET_ERROR
} from "../actions/homescreen";

const initialState = {
  cats: [],
  error: null
};

const homescreen = (state = initialState, {type, payload}) => {
  switch(type) {
  case CATS_GET_SUCCESS:
    console.log("Okay here\n", payload);
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

export default homescreen;

