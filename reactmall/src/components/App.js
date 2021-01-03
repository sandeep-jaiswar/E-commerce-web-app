import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import { UserProvider } from "../userContext";
const Home = React.lazy(() => import('./Home'));
const MyAccount = React.lazy(() => import('./MyAccount'));
const Orders = React.lazy(() => import('./Orders'));
const Signup = React.lazy(() => import('./Signup'));
const Products = React.lazy(() => import('./Products'));
const Cart = React.lazy(() => import('./Cart'));
const Signin = React.lazy(() => import('./Signin'));



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://serverforapi.herokuapp.com/user/fetchAll')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <UserProvider value={user}>
      <div className="container-fluid">
        <div className="row">
          <Router>
            <Header />
            <Suspense fallback={<div className='spinner' />}>
              <div className="scroll">
                <Switch>
                  <Route exact path="/" render={() => <Signup user={user} setUser={setUser} />} />
                  <Route exact path="/signup" render={() => <Signup  user={user} setUser={setUser}/>} />
                  <Route exact path="/signin" render={() => <Signin user={user} setUser={setUser}/>} />
                  <Route exact path="/products" render={() => <Products user={user} setUser={setUser}/>} />
                  <Route exact path="/home" render={() => <Home user={user} setUser={setUser}/>} />
                  <Route exact path="/cart" render={() => <Cart user={user} setUser={setUser}/>} />
                  <Route exact path="/orders" render={() => <Orders user={user} setUser={setUser} />} />
                  <Route exact path="/account" render={() => <MyAccount user={user} setUser={setUser} />} />
                </Switch>
              </div>
            </Suspense>
          </Router>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
