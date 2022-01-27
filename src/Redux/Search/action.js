import {

  GET_USERS_SUCCESS,
} from "./actionTypes";

export const getUserSuccess = (payload) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: payload,
  };
};
