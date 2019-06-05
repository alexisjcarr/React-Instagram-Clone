import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() { 
        return (
            <form>
                <input 
                    type="text"
                    name="username"
                    placeholder="Phone number, username, or email"
                />
                <br />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <br />
                <button>Login</button>
            </form>
        );
    }
}
 
export default Login;