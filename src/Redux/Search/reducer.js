import {

  GET_USERS_SUCCESS,

} from "./actionTypes";

const init = {
  data: [],

};
export const searchReducer = (state = init, { type, payload }) => {
  switch (type) {
  
    case GET_USERS_SUCCESS:
      return {
        isloading: false,
        data: payload,
        isError: false,
      };
    default:
      return state;
  }
};
