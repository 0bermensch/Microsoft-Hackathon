import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.css";
import "./components/TaskForm";

// import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import Home from "./components/Home";
import Avatars from "./components/Avatars";
import StandUp from "./components/StandUp";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/workspace" component={Avatars} />
          <Route path="/meeting" component={StandUp} />
        </Switch>
      </Router>
    );
  }
}
