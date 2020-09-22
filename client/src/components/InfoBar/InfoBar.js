import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = (props) => {
  return (
    <div className="info-bar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online-img" className="onlineIcon" />
        <h3>Room name: {props.room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img className="close-icon" src={closeIcon} alt="close-icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
