import './App.css';
import { useState,useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";

import  Dashboard  from "./components/dashboard/Dashboard";
import 'semantic-ui-css/semantic.min.css'
import Actions from "./actions";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import { UserContext } from "./UserContext";

// import $ from "jquery";

function App() {

  const dispatch = useDispatch();
  const [user,setUser]=useState({});
  const loggedInUser = useSelector(state => state.loggedInUser);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={user}>
            <Route exact path="/" render={() => <Signup/>}/>
            <Route exact path="/signin" render={() => <Login/>}/>
            <Route exact path="/signup" render={() => <Signup/>}/>
            <Route exact path="/dashboard" render={() => <Dashboard/>}/>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;
