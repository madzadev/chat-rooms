import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Rooms from "./components/Rooms/Rooms";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Rooms} />
      <Route path="/join" component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
