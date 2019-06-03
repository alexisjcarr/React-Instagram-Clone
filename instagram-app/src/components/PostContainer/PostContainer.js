import React from "react";
import "./PostContainer.scss";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return(
      <div className="postContainer">
          <span><img className="profileImg" src={props.post.thumbnailUrl} /> <p className="username">{props.post.username}</p></span>
          <img src={props.post.imageUrl} alt="postImg" />
          <p className="likes">{props.post.likes} likes</p>
          <CommentSection comments={props.post.comments} />
          <p className="time">2 HOURS AGO</p>
      </div>
  );
};

export default PostContainer;
