import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from 'react';
import  Dashboard  from "./components/dashboard/Dashboard";
import 'semantic-ui-css/semantic.min.css'
import { createUser,deleteUser,loggedInUser } from "./actions";
// import $ from "jquery";

function App() {
  const [viewLogin,setViewLogin]=useState(true);
  function callview(flag){
    setViewLogin(flag);
  }
  

  

  function signupClicked(){

  }

  return (
    <div className="container-fluid">
        <Dashboard></Dashboard>
        {/* {viewLogin && <Login callview={callview} viewLogin={viewLogin}></Login>}
        {!viewLogin && <Signup callview={callview} signupClicked={signupClicked} viewLogin={viewLogin}></Signup>} */}
    </div>
  );
}

export default App;
