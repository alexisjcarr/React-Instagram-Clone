import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";

import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  render() {
    return (
      <>
        {this.state.data.map(post => (
          <PostContainer post={post} id={post.id} />
        ))}
      </>
    );
  }
}

export default App;
