//action creators
export const createUser = (user) =>{
    return {
      type: "CREATE_USER",
      payload:{
        "name": user.name,
        "pass": user.pass,
      }
    }
  }
  
export  const deleteUser = (user) =>{
    return {
      type: "DELETE_USER",
      payload:{
        "name": user.name,
        "pass": user.pass
      }
    }
  }

export const userLoggedIn = user =>{
  return {
    type: "USER_LOGGEDIN",
    payload:{
      name: user.name
    }
  }
}
  