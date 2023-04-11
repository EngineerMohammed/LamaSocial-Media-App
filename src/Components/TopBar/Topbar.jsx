import React from "react";
import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div>
      <div className="TopbarContainer">
        <div className="TopbarLeft">
          <span className="logo">LamaSocial</span>
        </div>
        <div className="TopbarCenter">
          <div className="searchbar">
            <Search className="searchicon" />
            <input
              placeholder="search for Video, map, Friend"
              className="searchinput"
            />
          </div>
        </div>
        <div className="TopbarRight">
          <div className="TopbarLinks">
            <span className="TopbarLink">Home Page</span>
            <span className="TopbarLink">TimeLime</span>
          </div>
          <div className="TopbarIcons">
            <div className="TopbarIconItem">
              <Person />
              <span className="TopbarIconBadge">1</span>
            </div>
            <div className="TopbarIconItem">
              <Chat />
              <span className="TopbarIconBadge">1</span>
            </div>
            <div className="TopbarIconItem">
              <Notifications />
              <span className="TopbarIconBadge">1</span>
            </div>
          </div>
          <img src="assets/person/1.jpeg" alt="" className="Topbarimg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
