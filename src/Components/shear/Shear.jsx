import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import React from "react";
import "./shear.css";

const Shear = () => {
  return (
    <div className="shear">
      <div className="shearContainer">
        <div className="shaerTop">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="shearprofileImag"
          />
          <input
            placeholder="What's in your mind safak?
          "
            className="shearInput"
          />
        </div>
        <hr className="shearHr" />
        <div className="shearBottom">
          <div className="shearOptions">
            <div className="shearOption">
              <PermMedia className="shearIcon" htmlColor="tomato" />
              <span
                className="shearOptionText
              "
              >
                Photo/Video
              </span>
            </div>
            <div className="shearOption">
              <Label className="shearIcon" htmlColor="blue" />
              <span
                className="shearOptionText
              "
              >
                Tag
              </span>
            </div>
            <div className="shearOption">
              <Room className="shearIcon" htmlColor="green" />
              <span
                className="shearOptionText
              "
              >
                Locations
              </span>
            </div>
            <div className="shearOption">
              <EmojiEmotions className="shearIcon" htmlColor="goldenrod" />
              <span
                className="shearOptionText
              "
              >
                Fellings
              </span>
            </div>
          </div>
          <button className="shearButton">Shear</button>
        </div>
      </div>
    </div>
  );
};

export default Shear;
