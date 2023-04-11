import React from "react";
import "./feed.css";
import Shear from "../shear/Shear";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWapper">
        <Shear />
        {Posts.map((p) => (
          <Post post={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
