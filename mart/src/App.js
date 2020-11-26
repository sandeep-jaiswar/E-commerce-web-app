import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from 'react';

function App() {
  const [viewLogin,setViewLogin]=useState(true);
  function callview(flag){
    setViewLogin(flag);
  }

  function signupClicked(){

  }

  return (
    <div className="container-fluid">
        {viewLogin && <Login callview={callview} viewLogin={viewLogin}></Login>}
        {!viewLogin && <Signup callview={callview} signupClicked={signupClicked} viewLogin={viewLogin}></Signup>}
    </div>
  );
}

export default App;
