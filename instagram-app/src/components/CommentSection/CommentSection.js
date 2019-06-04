import React, { Component } from "react";
import "./CommentSection.scss";
import Comment from "../Comment/Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      text: ''
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
        text: ''
      };
    });
  };

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
