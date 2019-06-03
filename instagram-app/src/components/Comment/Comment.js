import React from 'react';

const Comment = props => {
    return (
        <div>
            <span className="username">{props.username}</span> <span className="comment">{props.text}</span>
        </div>
    );
}
 
export default Comment;