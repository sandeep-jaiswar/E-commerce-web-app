import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Signin(props){
    let history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [emailValidation, setEmailValidation] = useState(true);
    const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);


    function changeHandler(e){
        var id= e.target.id;
        var value=e.target.value;
        setFormData({
            ...formData,
            [id]:value
        })
        if(id==="email"){
            validateEmail(value)
        }
    }

    function validateEmail(value){
        if(value.match(emailformat)){
            setEmailValidation(true);
        }else{
            setEmailValidation(false);
        }
    }

    function signinClicked(e){
        e.preventDefault();
        console.log(formData);
        axios.post('https://serverforapi.herokuapp.com/user/verifyUserCred',formData)
          .then(function (response) {
            console.log(response);
            if(response.data.length>0){
                props.setUser(response.data)
                setSuccess(true);
                setTimeout(redirect, 3000);
            }else{
                setFailure(true);
            }
            
          }).catch(err =>{
              console.log(err);
              
          })
    }

    function redirect(){
        history.push("/home");
    }

    return (
        <div className="row">
            <div className="col-md-2 col-md-offset-5">
                <Card className="text-center" style={{marginTop:"60%"}}>
                {success && <div className="alert alert-success" style={{ padding: "none" }}>Login...</div>}
                {failure && <div className="alert alert-danger" style={{ padding: "none" }}>Inernal Server Error</div>}
                    <Card.Header className="well">Sign In</Card.Header>
                    <Card.Body>
                    <form className="form-group" onSubmit={signinClicked}>
                    <input id="email" value={formData.email} onChange={changeHandler} className="form-control" placeholder="Email"/><br/>
                    {!emailValidation && <div className="alert alert-danger" style={{padding:"none"}}>Email format is invalid</div>}
                        <input id="password" value={formData.password} onChange={changeHandler} className="form-control" placeholder="Password"/><br/>
                        <button className="logincrt" type="submit">Sign in</button>
                    </form>
                    </Card.Body>
                    <Card.Footer className="well">Owner : Sandeep jaiswar</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default Signin