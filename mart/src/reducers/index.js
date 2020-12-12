import { combineReducers } from "redux";
import { userConstants } from "../constants/user.constants";
const initialState={
    usersList : [],
    currentUser : null
}

//reducer
export const userActionReducer = (state=initialState.usersList,action) =>{
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return [...state,action.payload]
    default:
      return [...state];
  }
}

export const userLoginReducer = (state=initialState.currentUser,action) =>{
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      if(initialState.usersList.filter(e => e.email===action.payload.email)){
        return action.payload.email
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  usersList:userActionReducer,
  currentUser:userLoginReducer
}) 

