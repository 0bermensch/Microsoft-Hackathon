import React, { Component } from "react";
import Modal from "../components/Modal";
import axios from "axios";

import nav from "../assets/images/left-navbar.png";

export default class Home extends Component {
  state = {
    tasks: [],
    users: [],
    selectedUser: "",
    date: "",
    day: "",
    showModal: false,

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
    console.log(e.nativeEvent.target.value, this.state);
  };

  //handles sumbitting the task
  handleTaskSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/tasks", {
        title: event.target.title.value,
        type: event.target.type.value,
        // owner: event.target.owner.value,
        // date: this.state.selectedDay,
        // timestamp: new Date(),
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
    const today = new Date();
    let month = today.getMonth();
    const num = today.getDate();
    let day = today.getDay();
    switch (day) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
      case 7:
        day = "Sun";
        break;
    }
    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }

    this.setState({
      date: `${month} ${num}`,
      day: day,
    });
  }
  render() {
    console.log(this.props);
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
                <div className="right_cal-purple morning">
                  <h3 className="right_cal-purple-innertext">
                    Morning Standup
                  </h3>
                </div>
                <div className="right_cal-blue morning">
                  <h3 className="right_cal-blue-innertext">Working Time</h3>
                </div>
                <div className="right_cal-purple afternoon">
                  <h3 className="right_cal-purple-innertext">Noon Standup</h3>
                </div>
                <div className="right_cal-blue afternoon">
                  <h3 className="right_cal-blue-innertext">Working Time</h3>
                </div>
                <div className="right_cal-purple end">
                  <h3 className="right_cal-purple-innertext">
                    End of Day Standup
                  </h3>
                </div>
              </div>
            </div>
          </aside>
          <aside className="main_right">
            <Modal
              handleOpenModal={this.handleOpenModal}
              handleCloseModal={this.handleCloseModal}
              handleTaskSubmit={this.handleTaskSubmit}
              showModal={this.state.showModal}
              users={this.state.users}
              handleSelectedUser={this.handleSelectedUser}
              selectedUser={this.state.selectedUser}
            />
          </aside>
        </main>
      );
    }
  }
}
