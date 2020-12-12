import { userConstants } from "../constants/user.constants";

//action creators
export const createUser = (user) =>{
    return {
      type: userConstants.REGISTER_REQUEST,
      payload:{
        "email": user.email,
        "pass": user.pass,
      }
    }
  }

export const loginUser = (user) =>{
  return {
    type: userConstants.LOGIN_REQUEST,
    payload:{
      "email": user.email,
    }
  }
}