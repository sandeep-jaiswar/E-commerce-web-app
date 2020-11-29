//action creators
export const createUser = (name,pass,type) =>{
    return {
      type: "CREATE_USER",
      payload:{
        "name": name,
        "pass": pass,
        "type":type
      }
    }
  }
  
export  const deleteUser = (name,pass) =>{
    return {
      type: "DELETE_USER",
      payload:{
        "name": name,
        "pass": pass
      }
    }
  }

export const loggedInUser = user =>{
  return {
    type: "LOGGEDIN_USER",
    payload:user
  }
}
  