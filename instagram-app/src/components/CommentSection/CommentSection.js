import React, { Component } from 'react';
import "./CommentSection.scss";
import Comment from '../Comment/Comment';

/* 
id: 1,
        username: "twitch",
        text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
*/

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 5,
            username: 'alexisjcarr',
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
          text: this.state.text,
        };
    
        this.setState(prevState => {
          return{
            text: [...prevState.text, newComment]
          }
        });
      };

    render() {
        return (
            <div>
                {this.props.comments.map(comment => (
                    <Comment username={comment.username} text={comment.text} />
                ))}
                <form>
                    <input 
                    type="text"
                    placeholder="Add a comment..."
                    onChange={this.handleChange}
                    addComment={this.addComment}
                    />
                </form>
            </div>
        );
    }
};

export default CommentSection;
