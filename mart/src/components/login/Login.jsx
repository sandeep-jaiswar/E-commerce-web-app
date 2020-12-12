import { useState } from 'react';
import { Link } from "react-router-dom";
import { loginUser } from "../../actions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function Login(props){
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    var history = useHistory();
    function signinClicked(e){
        e.preventDefault();
        props.dispatch(loginUser({
            email: email,
        }));
        history.push('/dashboard');
        // if(this.props.currentUser!=null){
        //     history.push('/dashboard');
        // }else{
        //     console.log('bad credentials')
        // }
        
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
                    <h3>Sign Into Mart</h3>
                    <h6>using</h6>
                    <div>
                    <img style={{marginRight:'2%',cursor :'pointer'}}src="google.png" />
                    <img style={{cursor :'pointer'}} src="facebook.png" />
                    </div><br/>
                    <h6>or use your registered email</h6>
                    <form onSubmit={signinClicked}>
                        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email"/><br/><br/>
                        <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="password"/><br/><br/>
                        <button className="frgtpswdbtn">forgot password?</button><br/><br/>
                        <button className="logincrt" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        usersList: state.usersList,
        currentUser : state.currentUser
    }
  }

export default connect(mapStateToProps)(Login);