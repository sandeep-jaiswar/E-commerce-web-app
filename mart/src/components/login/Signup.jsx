import { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { createUser,loginUser } from "../../actions";
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

function Signup(props){
    const dispatch = useDispatch();
    const [fName, setFName]=useState('');
    const [lName, setLName]=useState('');
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [repass, setRepass]=useState('');
    var history = useHistory();
    const currentUser = useSelector(state => state.currentUser)
    function signupClicked(e){
        e.preventDefault();
        dispatch(createUser({
            email: email,
            pass: pass
        }));
        dispatch(loginUser({
            email: email,
        }));
        
        console.log(props);
        history.push('/dashboard');
        // if(props.currentUser!=null){
        //     history.push('/dashboard');
        // }else{
        //     console.log('bad credentials')
        // }
    }

    useEffect(() => {
        console.log(currentUser)
    }, [])

    
    return (
        <div className="row" style={{height:"100vh"}}>
            <div className="white col-sm-8">
                <div style={{display:"block",margin:"auto auto",paddingTop:"10%"}} >
                    <h3>Create Account</h3>
                    <h6>using</h6>
                    <div>
                    <img style={{marginRight:'2%',cursor :'pointer'}}src="google.png" />
                    <img style={{cursor :'pointer'}} src="facebook.png" />
                    </div><br/>
                    <h6>or use your email for registration</h6>
                    <form onSubmit={signupClicked}>
                        <input type="text" value={fName} onChange={e=>setFName(e.target.value)}  placeholder="First Name"/><br/><br/>
                        <input type="text" value={lName} onChange={e=>setLName(e.target.value)}  placeholder="Last Name"/><br/><br/>
                        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Email"/><br/><br/>
                        <input type="text" value={pass} onChange={e=>setPass(e.target.value)}  placeholder="Password"/><br/><br/>
                        <input type="text" value={repass} onChange={e=>setRepass(e.target.value)}  placeholder="Confirm Password"/><br/><br/>
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