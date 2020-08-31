import React, { Component } from "react";

import loginImage from '../../Assets/login.png';
import logo from '../../Assets/logo.svg';

import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return (
            <div className="container login-page-wrapper">
                <div className="hero-image-wrapper"><img src={loginImage} alt="" /></div>
                <div className="login-form-wrapper">
                    <div className="login-form">

                        <h1 className="form-title">Welcome to <span><img src={logo} alt="" /></span></h1>

                        <p className="form-subtitle">We make easy for everyone to manage logistics operations.</p>

                        <form className="form-group-wrapper">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="text" placeholder="Enter Password" />
                            </div>
                            <div className="form-group flex justify-space-between">
                                <div className="flex">
                                    <input type="checkbox" name="Remember me" id="" />
                                    <label className="checkbox-label">Remember me</label>
                                </div>
                                <div>
                                    <a href="http://" className="btn-link">Forget password?</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="primary-btn" type="submit">Login</button>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;