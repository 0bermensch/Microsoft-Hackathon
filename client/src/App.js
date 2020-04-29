import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./styles/main.css";
import "./components/TaskForm";

// import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import Home from "./components/Home";
export default class App extends Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
            </Route> 
        </Switch>
      </Router>
      // <div>
      //   gorilla's in the mist
      //   <div className="users">
      //     {this.state.users.map((user) => {
      //       return (
      //         <div key={user.id} className="user__container">
      //           <h3 className="user__username">{user.username} </h3>
      //         </div>
      //       );
      //     })}
      //   </div>
      //   <div className="spacer">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
      //   <TaskForm
      //     {...this.state}
      //     handleDayChange={this.handleDayChange}
      //     handleTaskSubmit={this.handleTaskSubmit}
      //     handleSelectedUser={this.handleSelectedUser}
      //   />
      //   <div className="tasks">
      //     {this.state.tasks.map((task) => {
      //       return (
      //         <div className="task__container">
      //           <h3 className="task__field">Title: </h3>
      //           <p>{task.title}</p>
      //           <h3 className="task__field">Owner: </h3>
      //           <p>{task.owner}</p>
      //           <h3 className="task__field">Description: </h3>
      //           <p>{task.description}</p>
      //           <h3 className="task__field">Date: </h3>
      //           <p>{task.date}</p>
      //           <h3 className="task__field">Status: </h3>
      //           <p>
      //             {" "}
      //             {task.status} and {task.percentage}% complete{" "}
      //           </p>
      //           <h3 className="task__field"></h3>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>
    );
  }
}
