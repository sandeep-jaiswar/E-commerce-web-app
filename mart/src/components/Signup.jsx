import { connect } from "react-redux";

const mapStateToProp = (state) =>{
    console.log(state);
    return state;
}

function Signup(props){
    return (
        <div className="row" style={{height:"100vh"}}>
            <div className="white col-sm-8">
                <div style={{paddingTop:"20%",margin:"auto auto"}} >
                    <h3>Create Account</h3><br/>
                    <form onSubmit={props.signupClicked}>
                        <input placeholder="name"/><br/><br/>
                        <input placeholder="password"/><br/><br/>
                        <input placeholder="confirm password"/><br/><br/>
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
                    <button className="signinupbtn" onClick={()=>props.callview(true)} type="button"> Sign In </button>
                </div>
            </div>
        </div>
    )
}
export default connect(mapStateToProp) (Signup);