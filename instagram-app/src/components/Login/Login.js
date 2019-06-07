import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo1.png";
import "./Login.scss";

const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin: auto;
  margin-top: 5%;
  border: 1px solid #E6E6E6;
`;

const Img = styled.img`
  heigth: auto;
  width: auto;
`;

const Input = styled.input`
  font-family: sans-serif;
  font-size: 12px;
  padding: 10px;
  width: 50%;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 25%;
  color: white;
  font-family: sans-serif;
  font-size: 12px;
  background-color: #3897ef;
  padding: 10px;
  border-radius: 8px;
`;

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
      <Form className="login" onSubmit={this.handleLoginSubmit}>
        <Img src={logo} alt="" />
        <br />
        <Input
          type="text"
          name="username"
          placeholder="Phone number, username, or email"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br />
        <Button className="loginButton" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
