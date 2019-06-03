import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.scss";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
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

App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
      })
    })
  )
};

export default App;
