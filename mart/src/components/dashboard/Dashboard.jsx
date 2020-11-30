// import { event } from 'jquery';
import { useState } from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Cart from "../cart/cart";
import Home from "../home/home";
import Account from "../myAccount/account";
import Order from "../order/order";
import Payment from "../payment/payment";
import Product from "../product/product";
// import { Grid, Menu, Segment } from 'semantic-ui-react';

function Dashboard(){
    const [activeItem,setActiveItem]=useState('bio');
    function handleItemClick(e,name){
        setActiveItem(name);
    }
    
    return (
        <BrowserRouter>
            <div className="row">
                <div className="col-sm-1">
                    <div className="d-flex flex-column" style={{height: "100vh"}}>
                        <div className="p-2 left0"> 
                            <Link  to="/home" >
                                <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="home.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/orders">
                                <img sizes="16x16"  style={{ height: "50px",cursor : "pointer"}} src="order.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/cart">
                                <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="bag.png"/>
                            </Link>
                        </div>
                        <div className="p-2 left0" style={{ marginTop: "15%"}}>
                            <Link to="/payment">
                                <img sizes="16x16"  style={{ height: "50px",cursor : "pointer"}} src="payment.png"/>
                            </Link>
                        </div>
                        <div className="p-2 bottom0 left0">
                            <Link to="/account">
                                <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="account.png"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-11">
                    <div className="well well-sm" style={{backgroundColor: '#f5f5f5'}}>
                        <Switch>
                            <Route exact path="/home" render={() => <Home/>}/>
                            <Route exact path="/orders" render={() => <Order/>}/>
                            <Route exact path="/cart" render={() => <Cart/>}/>
                            <Route exact path="/payment" render={() => <Payment/>}/>
                            <Route exact path="/account" render={() => <Account/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

}
export default Dashboard;