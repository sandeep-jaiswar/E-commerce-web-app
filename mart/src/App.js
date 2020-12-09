import './App.css';
import Store from  "./store/Store";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import { useState } from 'react';
import  Dashboard  from "./components/dashboard/Dashboard";
import 'semantic-ui-css/semantic.min.css'
import { userLoggedIn } from "./actions";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import { UserContext } from "./UserContext";

// import $ from "jquery";

function App() {
  const store =Store();
  const [user,setUser]=useState({});
  const unsubscribe = store.subscribe(()=>console.log(store.getState()));
  store.dispatch(userLoggedIn({email: 'sandeep'}));

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={user}>
            <Route exact path="/" render={() => <Signup setUser={setUser}  />}/>
            <Route exact path="/signin" render={() => <Login setUser={setUser} />}/>
            <Route exact path="/signup" render={() => <Signup setUser={setUser} store={store}/>}/>
            <Route exact path="/dashboard" render={() => <Dashboard setUser={setUser} />}/>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;
