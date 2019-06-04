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
      data: [],
      filteredPosts: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchPosts = e => {
    this.setState(prevState => {
      const filteredArray = prevState.data.filter(post => {
        post.username.includes(prevState.searchTerm);
      });
      return { filteredPosts: filteredArray };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPosts}
          searchTerm={this.state.searchTerm}
        />
        {(this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
          : this.state.data
        ).map(post => (
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

// saveStateToLocalStorage = () => {
//   for (let key in this.state) {
//     localStorage.setItem(key, JSON.stringify(this.state[key]));
//   }
// };

// hydrateStateWithLocalStorage = () => {
//   for (let key in this.state) {
//     if (localStorage.hasOwnProperty(key)) {
//       let value = localStorage.getItem(key);

//       try {
//         value = JSON.parse(value);
//         this.setState({ [key]: value });
//       } catch (e) {
//         this.setState({ [key]: value });
//       }
//     }
//   }
// };

// componentDidMount = () => {
//   this.hydrateStateWithLocalStorage();

//   window.addEventListener(
//     "beforeunload",
//     this.saveStateToLocalStorage.bind(this)
//   );
// };

// componentWillUnmount = () => {
//   window.removeEventListener(
//     "beforeunload",
//     this.saveStateToLocalStorage.bind(this)
//   );

//   this.saveStateToLocalStorage();
// };
