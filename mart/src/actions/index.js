//action creators
export const createUser = (user) =>{
    return {
      type: "CREATE_USER",
      payload:{
        "email": user.email,
        "pass": user.pass,
      }
    }
  }
  
export  const deleteUser = (user) =>{
    return {
      type: "DELETE_USER",
      payload:{
        "email": user.email,
        "pass": user.pass
      }
    }
  }

export const userLoggedIn = user =>{
  return {
    type: "USER_LOGGEDIN",
    payload:{
      email: user.email
    }
  }
}
  