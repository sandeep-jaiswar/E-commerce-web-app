import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { UserProvider } from "../userContext";

function Signup(props) {
    let history = useHistory();
    const [emailValidation, setEmailValidation] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    function changeHandler(e) {
        var id = e.target.id;
        var value = e.target.value;
        setFormData({
            ...formData,
            [id]: value
        });
        if (id === "email") {
            validateEmail(value);
        } else if (id === "password") {
            validatePasswords(value, formData.confirmPassword)
        } else if (id === "confirmPassword") {
            validatePasswords(formData.password, value)
        }
    }

    function validateEmail(value) {
        if (value.match(emailformat)) {
            setEmailValidation(true);
        } else {
            setEmailValidation(false);
        }
    }

    function validatePasswords(pass, confPass) {
        console.log(pass);
        console.log(confPass);
        if (pass === confPass) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }

    function signupClicked(e) {
        e.preventDefault();
        setSuccess(false);
        setFailure(false);
        axios.post('https://serverforapi.herokuapp.com/user/create', formData)
            .then(function (response) {
                console.log(response);
                props.setUser(response.data)
                setSuccess(true);
                setTimeout(redirect, 3000);
            }).catch(err => {
                console.log(err);
                setFailure(true);
            })
    }

    function redirect() {
        history.push("/home");
    }

    return (
        <UserProvider>
            <div className="row">
                <div className="col-md-2 col-md-offset-5">
                    <Card className=" text-center" style={{ marginTop: "40%" }}>
                        {success && <div className="alert alert-success" style={{ padding: "none" }}>User is created</div>}
                        {failure && <div className="alert alert-danger" style={{ padding: "none" }}>Inernal Server Error</div>}
                        <Card.Header className="well">Create Account</Card.Header>
                        <Card.Body>
                            <form className="form-group" onSubmit={signupClicked}>
                                <input id="firstName" value={formData.firstName} onChange={changeHandler} className="form-control" placeholder="First Name" /><br />
                                <input id="lastName" value={formData.lastName} onChange={changeHandler} className="form-control" placeholder="Last Name" /><br />
                                <input id="email" value={formData.email} onChange={changeHandler} className="form-control" placeholder="Email" /><br />
                                {!emailValidation && <div className="alert alert-danger" style={{ padding: "none" }}>Email format is invalid</div>}
                                <input id="password" value={formData.password} onChange={changeHandler} className="form-control" placeholder="Password" /><br />
                                {!passwordMatch && <div className="alert alert-danger" style={{ padding: "none" }}>Password and ConfirmPassword do not match</div>}
                                <input id="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} className="form-control" placeholder="Confirm Password" /><br />
                                {!passwordMatch && <div className="alert alert-danger" style={{ padding: "none" }}>Password and ConfirmPassword do not match</div>}
                                <button className="logincrt" type="submit">Sign Up</button>
                            </form>
                        </Card.Body>
                        <Card.Footer className="well">Owner : Sandeep jaiswar</Card.Footer>
                    </Card>
                </div>
            </div>
        </UserProvider>
    )
}

export default Signup