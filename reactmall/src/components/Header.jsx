import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../userContext';

function Header() {
    const user = useContext(UserContext);
    return (
        <div className="navbar navbar-default">
            <div className="navbar-header">
            <Link id="homeLink" className="navbar-brand" to="/home">ReactMall</Link>
            </div>
            <ul className="nav navbar-nav">
                {user!==null &&<li>
                    <Link id="homeLink" to="/products">Products</Link>
                </li>}
                {user!==null &&<li>
                    <Link id="homeLink" to="/cart">Cart</Link>
                </li>}
                {user!==null &&<li>
                    <Link id="homeLink" to="/orders">Orders</Link>
                </li>}
                {user!==null &&<li>
                    <Link id="homeLink" to="/account">MyAccount</Link>
                </li>}
                {user===null &&<li>
                    <Link id="homeLink" to="/signin">Login</Link>
                </li>}
                {user===null &&<li>
                    <Link id="homeLink" to="/signup">Signup</Link>
                </li>}
            </ul>
            <ul className="nav navbar-nav navbar-right mr-1">
                {user!==null &&<li>
                    <Link id="homeLink" to="/account">Logout</Link>
                </li>}
            </ul>
        </div>
    )
}

export default Header