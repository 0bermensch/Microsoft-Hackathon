import React, { Component } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import Taskpage from "./Taskpage";

import nav from "../assets/images/left-navbar.png";

export default class Home extends Component {
  state = {
    tasks: [],
    users: [],
    selectedUser: "",
    date: "",
    day: "",
    showModal: false,
    selectedType: "",
    selectedPriority: "",
    selectedStatus: "",

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

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleSelectedUser = (e) => {
    var index = e.nativeEvent.target.selectedIndex; //tried to do something fancy
    // e.target.value is the same as above^

    this.setState({
      selectedUser: e.nativeEvent.target.value,
    });
  };

  handleSelectedType = (e) => {
    this.setState({
      selectedType: e.nativeEvent.target.value,
    });
  };

  handleSelectedPriority = (e) => {
    this.setState({
      selectedPriority: e.nativeEvent.target.value,
    });
  };

  handleSelectedStatus = (e) => {
    this.setState({
      selectedStatus: e.nativeEvent.target.value,
    });
  };

  //handles sumbitting the task
  handleTaskSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/tasks", {
        title: event.target.title.value,
        type: this.state.selectedType,
        owner: this.state.selectedUser,
        priority: this.state.selectedPriority,
        date: this.state.selectedDay,
        timestamp: new Date(),
        status: this.state.selectedStatus,
        timer: event.target.timer.value,
        starttime: event.target.starttime.value,
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
    this.handleCloseModal();
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
    const today = new Date();
    let monthIdx = today.getMonth();
    let month_arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = month_arr[monthIdx];
    const num = today.getDate();
    let dayIdx = today.getDay();
    let day_arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = day_arr[dayIdx];
    this.setState({
      date: `${month} ${num}`,
      day: day,
    });
  }
  render() {
    if (!this.state) {
      return <h2>loading...</h2>;
    } else {
      return (
        <main className="main">
          <aside className="main_left">
            <img className="main_left-nav" src={nav} alt="navbar" />
          </aside>
          <aside className="main_middle">
            <h2 className="main_middle-schedule">Schedule</h2>
            <div className="main_middle-container">
              <div className="left">
                <div className="left_hour"> </div>
              </div>
              <div className="right">
                <div className="right_cal">
                  <h3 className="right_cal-date">{this.state.date}</h3>
                  <h5 className="right_cal-day">{this.state.day}</h5>
                </div>
                <div className="right_purple morning">
                  <h3 className="right_purple-innertext">Morning Standup</h3>
                </div>
                <div className="right_blue morning">
                  <h3 className="right_blue-innertext">Working Time</h3>
                </div>
                <div className="right_purple afternoon">
                  <h3 className="right_purple-innertext">Noon Standup</h3>
                </div>
                <div className="right_blue afternoon">
                  <h3 className="right_blue-innertext">Working Time</h3>
                </div>
                <div className="right_purple end">
                  <h3 className="right_purple-innertext">End of Day Standup</h3>
                </div>
              </div>
            </div>
          </aside>
          <aside className="main_right">
            <Taskpage
              tasks={this.state.tasks}
              handleOpenModal={this.handleOpenModal}
              handleCloseModal={this.handleCloseModal}
              handleTaskSubmit={this.handleTaskSubmit}
              showModal={this.state.showModal}
              users={this.state.users}
              handleSelectedUser={this.handleSelectedUser}
              selectedUser={this.state.selectedUser}
              handleSelectedType={this.handleSelectedType}
              selectedType={this.state.selectedType}
              handleSelectedPriority={this.props.handleSelectedPriority}
              selectedPriority={this.props.selectedPriority}
              handleSelectedStatus={this.props.handleSelectedStatus}
              selectedStatus={this.props.selectedStatus}
            />
            {/* <Modal/> */}
          </aside>
        </main>
      );
    }
  }
}
