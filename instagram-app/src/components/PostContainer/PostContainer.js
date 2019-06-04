import React from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import * as moment from 'moment';

const PostContainer = props => {
  return(
      <div className="postContainer">
          <span className="user"><img className="profileImg" src={props.post.thumbnailUrl} alt="profileimg" /> <p className="username">{props.post.username}</p></span>
          <img src={props.post.imageUrl} alt="postImg" />
          <br />
          <span className="icons"> <FontAwesomeIcon icon={faHeart} />&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} /></span>
          <br />
          <span className="likes">{props.post.likes} likes</span>
          <CommentSection comments={props.post.comments} />
          <p className="time">{moment(props.post.timestamp, "LLL").fromNow()}</p>
      </div>
  );
};

export default PostContainer;
