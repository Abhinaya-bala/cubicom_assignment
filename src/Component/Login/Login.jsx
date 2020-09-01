import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import loginImage from '../../Assets/login.png';
import logo from '../../Assets/logo.svg';

import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { "email": "", "password": "" }
    }


    handleInput = (e, key) => {
        const obj = {}
        obj[key] = e.target.value;
        this.setState(obj)
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log("am clicked")
        axios.post(`https://api-stage.kyte.app/network-app/oauth/token`,
            qs.stringify({ username: this.state.email, password: this.state.password, grant_type: 'password' }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                auth: {
                    username: 'cubicom',
                    password: 'password',
                }
            }

        ).then((response) => {
            console.log("Login Success", response)
            this.props.history.push('/dashboard');
        }).catch(() => {
            console.log("Login Failure")
            alert('Invalid Credentials')
            this.setState({ email: "", password: "" })
        })
    }
    render() {
        return (
            <div className="container login-page-wrapper">
                <div className="hero-image-wrapper"><img src={loginImage} alt="" /></div>
                <div className="login-form-wrapper">
                    <div className="login-form">

                        <h1 className="form-title">Welcome to <span><img src={logo} alt="" /></span></h1>

                        <p className="form-subtitle">We make easy for everyone to manage logistics operations.</p>

                        <form className="form-group-wrapper" onSubmit={(e) => this.onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="Enter Email" value={this.state.email} onChange={(e) => this.handleInput(e, "email")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="Enter Password" value={this.state.password} onChange={(e) => this.handleInput(e, "password")} />
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