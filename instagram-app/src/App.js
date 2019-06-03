import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.scss";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => (
          <PostContainer post={post} id={post.id} />
        ))}
      </div>
    );
  }
}

export default App;
