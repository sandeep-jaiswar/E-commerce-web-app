import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Login(props){
    const [name, setName]=useState('');
    const [pass, setPass]=useState('');
    function signinClicked(e){
        e.preventDefault();
        console.log(name);
        props.setUser({
            name: name,
            pass : pass
        })
    }

    return (
        <div className="row" >
            <div style={{height:"100vh"}}  className="green col-sm-4">
                <div style={{paddingTop:"53%"}}>
                <h4>Hello Friend</h4><br/>
                <h6>Enter your personal Info</h6><br/>
                <h6>to start your journey with us</h6><br/>
                <Link to="/signup">
                    <button className="signinupbtn" type="button"> Sign Up </button>
                </Link>
                </div>
            </div>
            <div style={{height:"100vh"}} className="white col-sm-8">
                <div style={{paddingTop:"20%"}}>
                    <h3>Sign Into Mart</h3><br/>
                    <div>
                    <i className="fal fa-circle"></i>
                    <i className="fal fa-circle"></i>
                    <i className="fal fa-circle"></i>
                    </div><br/>
                    {/* <h6>or use your email for regiistration</h6> */}
                    <form onSubmit={signinClicked}>
                        <input value={name} onChange={e=>setName(e.target.value)} placeholder="name"/><br/><br/>
                        <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="password"/><br/><br/>
                        <button className="frgtpswdbtn">forgot password?</button><br/><br/>
                        <button className="logincrt" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Login;