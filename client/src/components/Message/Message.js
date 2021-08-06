import React from "react";
import ReactEmoji from "react-emoji";
import ProfileIcon from "./../../icons/profile.png";
import RobotIcon from "./../../icons/robot.png";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  let isSentByAdmin = false;

  if (user === "admin") {
    isSentByAdmin = true;
  } else if (user.toLowerCase() === name.toLowerCase()) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundOrange">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
      <div className="profile-box user">
        <img className="profile-icon" src={ProfileIcon} alt="img" />
        {/* <p className="sentText pl-10">{trimmedName}</p> */}
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      {/* <p className="sentText pr-10">{user}</p> */}
      <div className="profile-box robot">
        <img
          className="profile-icon"
          src={isSentByAdmin ? RobotIcon : ProfileIcon}
          alt="img"
        />
      </div>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
