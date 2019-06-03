import React from 'react';
import "./Comment.scss";

const Comment = props => {
    return (
        <div className="comment">
            <span className="username">{props.username}</span> <span className="comment">{props.text}</span>
        </div>
    );
}
 
export default Comment;