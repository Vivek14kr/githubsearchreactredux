import { REGISTER_FAIL, REGISTER_REQ, REGISTER_SUCCESS } from "./actionTypes";

const init = {
  isLoading: false,
  message: "",
  isError: false,
};

export const regreducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_REQ:
      return {
        isLoading: true,
        isError: false,
      };
    case REGISTER_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        message: payload,
      };
    case REGISTER_FAIL:
      return {
        isLoading: false,
        message:payload,
        isError: true,
      };
    default:
      return state;
  }
};
