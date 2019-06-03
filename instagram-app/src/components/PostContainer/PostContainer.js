import React from "react";
import "./PostContainer.scss";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return(
      <div className="postContainer">
          <img src={props.post.imageUrl} alt="postImg" />
          <CommentSection comments={props.post.comments} />
      </div>
  );
};

export default PostContainer;
