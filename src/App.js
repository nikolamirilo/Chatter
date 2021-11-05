import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats";
import Login from "./components/Login";
require("dotenv").config();

const App = () => {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Switch>
        <Route path="/chats" component={Chats} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
