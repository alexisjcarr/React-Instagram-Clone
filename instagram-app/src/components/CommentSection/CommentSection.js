import React, { Component } from 'react';
import "./CommentSection.scss";
import Comment from '../Comment/Comment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            username: '',
            text: ''
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      addComment = e => {
        e.preventDefault();
    
        let newComment = {
          id: Date.now(),
          username: 'alexiscarr',
          text: this.state.text,
        };
    
        this.setState(prevState => {
          return {
            comments: [...prevState.comments, newComment]
          }
        });
      };

    render() {
        return (
            <div className="commentSection">
                {this.props.comments.map(comment => (
                    <Comment username={comment.username} text={comment.text} id={comment.id} />
                ))}

                <form onSubmit={this.addComment}>
                    <input 
                    type="text"
                    name="comment"
                    value={this.state.text}
                    onSubmit={this.addComment}
                    placeholder="Add a comment..."
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
};

export default CommentSection;
