import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "./../InfoBar/InfoBar";
import Input from "./../Input/Input";
import Messages from "./../Messages/Messages";

import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let [users, setUsers] = useState([]);

  const ENDPOINT = "https://chatroooms.herokuapp.com/";
  // const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", (user) => {
      users = [];
      user.users.forEach((el) => {
        users.push(el.name);
      });
      setUsers(users);
    });
  }, [message]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Chat room: {room}</title>
      </Helmet>
      <div className="chat-wrapper">
        <div className="list-wrapper">
          <h2>Users online: {users.length}</h2>
          {users.map((el, index) => {
            return (
              <h3 className="list-user" key={index}>
                {el}
              </h3>
            );
          })}
        </div>
        <div className="messages-wrapper">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
