import { useState } from 'react';
import { Link } from "react-router-dom";
import { createUser } from "../../actions";

function Signup(props){
    const [name, setName]=useState('');
    const [pass, setPass]=useState('');
    const [repass, setRepass]=useState('');
    function signupClicked(e){
        e.preventDefault();
        console.log(name);
        props.store.dispatch(createUser({
            name: name,
            pass: pass
        }));
        props.setUser({
            name: name,
            pass : pass
        })
    }
    
    return (
        <div className="row" style={{height:"100vh"}}>
            <div className="white col-sm-8">
                <div style={{paddingTop:"20%",margin:"auto auto"}} >
                    <h3>Create Account</h3><br/>
                    <form onSubmit={signupClicked}>
                        <input type="text" value={name} onChange={e=>setName(e.target.value)}  placeholder="name"/><br/><br/>
                        <input type="text" value={pass} onChange={e=>setPass(e.target.value)}  placeholder="password"/><br/><br/>
                        <input type="text" value={repass} onChange={e=>setRepass(e.target.value)}  placeholder="confirm password"/><br/><br/>
                        <button className="frgtpswdbtn" >forgot password?</button><br/><br/>
                        <button className="logincrt" type="submit">Sign Up</button>         
                    </form>
                </div>
            </div>
            <div className="green col-sm-4">
                <div style={{paddingTop:"53%",margin:"auto auto"}}>
                    <h4>Welcome Back</h4><br/>
                    <h6>To keep connected with us</h6><br/>
                    <h6>login with your details</h6><br/>
                    <Link to="/signin">
                    <button className="signinupbtn" type="button"> Sign In </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;