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

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();

    const newComment = {
      username: localStorage.getItem("username"),
      text: this.state.text
    };
    console.log(newComment);

    const commentz = this.state.comments.slice();
    commentz.push(newComment);

    this.setState({
      comments: commentz,
      text: ""
    }, () => {this.setComments()}
    )};

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
