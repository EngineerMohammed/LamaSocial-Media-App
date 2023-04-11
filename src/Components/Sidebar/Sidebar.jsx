import React from "react";
import "./sidebar.css";

import {
  Bookmark,
  Chat,
  Event,
  Groups,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from "../../dummyData";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHR" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
