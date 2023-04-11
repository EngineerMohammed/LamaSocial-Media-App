import { MoreVert } from "@mui/icons-material";
import "./post.css";
import React, { useState } from "react";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [Like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? Like - 1 : Like + 1);
    setisLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfilImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post?.desc}</span>
        <img className="postImg" src={post.photo} alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            src="assets/like.png"
            alt=""
            className="likeIcon"
            onClick={likeHandler}
          />
          <img
            src="assets/heart.png"
            alt=""
            className="likeIcon"
            onClick={likeHandler}
          />
          <span className="postLikeCounter">{Like}</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
