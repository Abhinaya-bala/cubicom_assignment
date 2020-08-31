import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { } = this.props
        return (
            <div>
                <div><img src="" alt="" /></div>
                <div>
                    <div>

                        <h1>Welcome to <span><img src="cubicom" alt="" /></span></h1>

                        <p>We make easy for everyone to manage logistics operations.</p>

                        <form action="">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter Email" />

                            <label htmlFor="">Password</label>
                            <input type="text" placeholder="Enter Password" />

                            <input type="checkbox" name="Remember me" id="" />

                            <a href="http://">Forgetpassword?</a>

                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;