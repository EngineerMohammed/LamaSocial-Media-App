import React from "react";
import "./online.css";

const Online = ({ user }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarprofileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
