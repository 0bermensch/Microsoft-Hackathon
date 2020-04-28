import React, { Component } from "react";

import "./styles/main.css";
import "./components/TaskForm";

import axios from "axios";
import TaskForm from "./components/TaskForm";

export default class App extends Component {
  state = {
    tasks: [],
    users: [],
    selectedUser: "",

    //used specifically for date picker, can be deleted if we switch date picker
    selectedDay: undefined,
    isEmpty: true,
    isDisabled: false,
  };
  getUsers = (id) => {
    if (id) {
      axios.get("http://localhost:5000/users/" + id).then((res) => {
        this.setState({
          users: res.data,
        });
      });
    }
    axios.get("http://localhost:5000/users").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  };

  getTasks = () => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      this.setState({ tasks: res.data });
    });
  };

  handleSelectedUser = (e) => {
    var index = e.nativeEvent.target.selectedIndex; //tried to do something fancy
    // e.target.value is the same as above^

    this.setState({
      selectedUser: e.nativeEvent.target[index].value,
    });
  };

  //handles sumbitting the task
  handleTaskSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/tasks", {
        title: event.target.title.value,
        date: this.state.selectedDay,
        description: event.target.description.value,
        timestamp: new Date(),
        status: event.target.status.value,
        estimated_completion: "2 hours",
        imageUrl: "www.google.com",
        owner: this.state.selectedUser, //get the selected user from state
      })
      .then((res) => {
        this.setState({
          tasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  };

  //setup the day in the state
  handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay: selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  };
  componentDidMount() {
    this.getUsers();
    this.getTasks();
  }

  render() {
    return (
      <div>
        gorilla's in the mist
        <div className="users">
          {this.state.users.map((user) => {
            return (
              <div className="user__container">
                <h3 className="user__username">{user.username} </h3>
              </div>
            );
          })}
        </div>
        <div className="spacer">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
        <TaskForm
          {...this.state}
          handleDayChange={this.handleDayChange}
          handleTaskSubmit={this.handleTaskSubmit}
          handleSelectedUser={this.handleSelectedUser}
        />
        <div className="tasks">
          {this.state.tasks.map((task) => {
            return (
              <div className="task__container">
                <h3 className="task__field">Title: </h3>
                <p>{task.title}</p>
                <h3 className="task__field">Owner: </h3>
                <p>{task.owner}</p>
                <h3 className="task__field">Description: </h3>
                <p>{task.description}</p>
                <h3 className="task__field">Date: </h3>
                <p>{task.date}</p>
                <h3 className="task__field">Status: </h3>
                <p>
                  {" "}
                  {task.status} and {task.percentage}% complete{" "}
                </p>
                <h3 className="task__field"></h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
