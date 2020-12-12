// import { event } from 'jquery';
import { useState,useContext  } from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Cart from "../cart/cart";
import Home from "../home/home";
import Account from "../myAccount/account";
import Order from "../order/order";
import Payment from "../payment/payment";
import Product from "../product/product";
import {UserContext} from "../../UserContext";
// import { Grid, Menu, Segment } from 'semantic-ui-react';

function Dashboard(){

    const {user} = useContext(UserContext);
    const [activeItem,setActiveItem]=useState('bio');
    function handleItemClick(e,name){
        setActiveItem(name);
    }
    
    return (
        <BrowserRouter>
            <div className="row">
                <div className="col-sm-1" style={{margin:'inherit',backgroundColor: '#f5f5f5'}}>
                <div className="d-flex flex-column" style={{height: "100vh"}}>
                        <div className="p-2 left0"> 
                            <Link  to="/dashboard/home" >
                                <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="home.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/dashboard/orders">
                                <img sizes="16x16"  style={{ height: "50px",cursor : "pointer"}} src="order.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/dashboard/cart">
                                <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="bag.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/dashboard/payment">
                                <img sizes="16x16"  style={{ height: "50px",cursor : "pointer"}} src="payment.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/dashboard/account">
                                <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="account.png"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-11" style={{padding:'0'}}>
                    <div className="well well-sm" style={{backgroundColor: '#f5f5f5',minHeight:'100vh' }}>
                        <Switch>
                            <Route exact path="/dashboard" render={() => <Home/>}/>
                            <Route exact path="/dashboard/home" render={() => <Home/>}/>
                            <Route exact path="/dashboard/orders" render={() => <Order/>}/>
                            <Route exact path="/dashboard/cart" render={() => <Cart/>}/>
                            <Route exact path="/dashboard/payment" render={() => <Payment/>}/>
                            <Route exact path="/dashboard/account" render={() => <Account/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

}
export default Dashboard;