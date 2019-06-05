import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginSubmit = e => {
    const username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Phone number, username, or email"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
