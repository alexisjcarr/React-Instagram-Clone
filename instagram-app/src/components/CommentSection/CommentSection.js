import React from "react";
import "./CommentSection.scss";
import Comment from '../Comment/Comment';

const CommentSection = props => {
  return (
      <div>
          {props.comments.map(comment => (
              <Comment username={comment.username} text={comment.text} />
          ))}
          <form>
              <input 
              type="text"
              placeholder="Add a comment..."
              />
          </form>
      </div>
  );
};

export default CommentSection;
