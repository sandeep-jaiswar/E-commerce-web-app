import { connect } from "react-redux";


function Login(props){

    return (
        <div className="row" >
            <div style={{height:"100vh"}}  className="green col-sm-4">
                <div style={{paddingTop:"53%"}}>
                <h4>Hello Friend</h4><br/>
                <h6>Enter your personal Info</h6><br/>
                <h6>to start your journey with us</h6><br/>
                <button className="signinupbtn" onClick={()=>props.callview(false)} type="button"> Sign Up </button>
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
                    <form onSubmit={props.signupClicked}>
                        <input placeholder="name"/><br/><br/>
                        <input placeholder="password"/><br/><br/>
                        <button className="frgtpswdbtn">forgot password?</button><br/><br/>
                        <button className="logincrt" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default connect() (Login);