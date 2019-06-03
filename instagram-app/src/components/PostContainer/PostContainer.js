import React from "react";
import "./PostContainer.scss";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return(
      <div className="postContainer">
          <span className="user"><img className="profileImg" src={props.post.thumbnailUrl} alt="profileimg" /> <p className="username">{props.post.username}</p></span>
          <img src={props.post.imageUrl} alt="postImg" />
          <br />
          <span className="icons">&#9825;</span>
          <br />
          <span className="likes">{props.post.likes} likes</span>
          <CommentSection comments={props.post.comments} />
          <p className="time">2 HOURS AGO</p>
      </div>
  );
};

export default PostContainer;
