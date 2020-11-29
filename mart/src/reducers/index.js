import { combineReducers } from "redux";

//reducer
export const userHistory = (oldListOfUser=[],action) =>{
  switch (action.type) {
    case 'CREATE_USER':
      return [...oldListOfUser,action.payload];
    case 'DELETE_USER':
      return oldListOfUser.filter(e => e===action.payload);
    default:
      return oldListOfUser;
  }
  }

const oldListOfUser =() => {
  return [
    { name : 'sandeep', type :'admin', pass : 'pass'},
    { name : 'deepa', type :'customer', pass : 'pass'}
  ]
}

const loggedInUserReducer =(loggedInUser=null,action) => {
  switch (action.type) {
    case 'LOGGEDIN_USER':
      return action.payload
    default:
      return loggedInUser;
  }
}

export default combineReducers({
    activeUserList : oldListOfUser,
    currentUser: loggedInUserReducer
}) 

