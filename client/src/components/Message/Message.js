import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10">{trimmedName}</p>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText pr-10">{user}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
