import { combineReducers } from "redux";

const initialState={
    loggedInUser : null,
    usersList : []
}

//reducer
export const usersListReducer = (state=initialState.usersList,action) =>{
  switch (action.type) {
    case 'CREATE_USER':
      return [...state,action.payload];
    case 'DELETE_USER':
      return state.filter(e => e===action.payload);
    default:
      return state;
  }
}

const userLoggedInReducer =(state=initialState.loggedInUser,action) => {
  switch (action.type) {
    case 'LOGGEDIN_USER':
      return action.payload
    default:
      return state;
  }
}

export default combineReducers({
  loggedInUser: userLoggedInReducer,
  usersList:usersListReducer
}) 

