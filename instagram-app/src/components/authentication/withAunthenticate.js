import React, { Component } from "react";

const withAuthenticate = PostsPage => LoginPage =>
  class extends Component {
    render() {
      if(localStorage.getItem('username')) {
          return <PostsPage />
      } else {
          return <LoginPage />
      }
    }
  };

export default withAuthenticate;
