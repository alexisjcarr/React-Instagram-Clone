import React, { Component } from "react";
import "./CommentSection.scss";
import Comment from "../Comment/Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      text: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();

    const newComment = {
      id: Date.now(),
      username: "alexiscarr",
      text: this.state.text
    };
    console.log(newComment);

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        text: ""
      };
    });
  };

  // saveStateToLocalStorage = () => {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // };

  // hydrateStateWithLocalStorage = () => {
  //   // for all items in state
  //   for (let key in this.state) {
  //     // if the key exists in localStorage
  //     if (localStorage.hasOwnProperty(key)) {
  //       // get the key's value from localStorage
  //       let value = localStorage.getItem(key);

  //       // parse the localStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // };

  // componentDidMount = () => {
  //   this.hydrateStateWithLocalStorage();

  //   // add event listener to save state to localStorage
  //   // when user leaves/refreshes the page
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

  //   // saves if component has a chance to unmount
  //   this.saveStateToLocalStorage();
  // };

  render() {
    return (
      <div className="commentSection">
        {this.state.comments.map(comment => (
          <Comment
            username={comment.username}
            text={comment.text}
            id={comment.id}
          />
        ))}

        <form onSubmit={this.addComment}>
          <input
            placeholder="Add a comment..."
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
