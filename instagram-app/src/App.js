import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import withAuthenticate from "./components/authentication/withAunthenticate";

const ComponentfromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  render() { 
    return (
      <div>
        <ComponentfromWithAuthenticate />
      </div>
    );
  }
}
 
export default App;
