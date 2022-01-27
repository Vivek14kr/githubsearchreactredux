import { REGISTER_FAIL, REGISTER_REQ, REGISTER_SUCCESS } from "./actionTypes";

export const Regrequest = ()=>{
    return {
        type:REGISTER_REQ
    }
}

export const Regsucess = (message)=>{
    return {
        type:REGISTER_SUCCESS,

        payload:message
    }
}

export const Regfail = (err) => {
  return {
    type: REGISTER_FAIL,
    payload: err
  };
};