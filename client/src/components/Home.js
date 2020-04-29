import React, { Component } from "react";
import axios from "axios";
import Taskpage from "./Taskpage";
import { Route } from "react-router-dom";
import moment from "moment";
import nav from "../assets/images/left-navbar.png";
import Calendar from "./Calendar";
import StandUp from "./StandUp";

import Avatars from "./Avatars";

export default class Home extends Component {
  state = {
    tasks: [], //stores all the tasks from db
    users: [], //stores all the users from db
    timer: [],
    countDown: "", //used to store the countdown user
    selectedUser: "", //used to hold the user, because react is shit at dealing with dropdown/options
    date: "",
    day: "",
    showModal: false,
    selectedType: "",
    selectedPriority: "",
    selectedStatus: "",
    schedule: {},
    calendarItem: [], // display tasks in calendar

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
      const tempTimeArr = [];

      let schedule = {
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
      };

      //use this to match up with the indexes on the left
      let timeArr = [
        "8a",
        "9a",
        "10a",
        "11a",
        "12p",
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
      ];
      //setup the calendar time start + countdown ratio
      res.data.map((task) => {
        tempTimeArr.push({
          title: task.title,
          priority: task.priority,
          starttime: task.starttime,
          timer: task.timer,
        });

        //setup the schedule by assigning each itme to a spot based on time
        ///only one item can be assigned to one time slot currently
        // timeArr.map((hour, i) => {
        //   res.data.map((item) => {
        //     if (i > 0) {
        //       //loop through the time arr, remove all non-number characters
        //       //split it out at the : to handle grabbing just the FIRST PART of the number
        //       if (
        //         hour.replace(/\D/g, "") ===
        //         moment(item.starttime)["_i"].split(":")[0]
        //       ) {
        //         //if the time and the hour slot align, add it to the schedule object
        //         schedule[moment(item.starttime)["_i"].split(":")[0]] =
        //           item.title;
        //       }
        //     }
        //   });
        // });
      });
      this.setState({ tasks: res.data });
      this.setState({ schedule: schedule });
      this.setState({ time: tempTimeArr });
    });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleSelectedUser = (e) => {
    // var index = e.nativeEvent.target.selectedIndex; //tried to do something fancy
    // e.target.value is the same as above^

    this.setState({
      selectedUser: e.nativeEvent.target.value,
    });
  };

  handleSelectedType = (e) => {
    console.log("get selected type");
    console.log("selected type is: ", e.nativeEvent.target.value);
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

  addTaskItemToCal = (e) => {
    e.preventDefault();
    let toDoItem = document.querySelector(".taskpage_button").id;
    console.log(toDoItem);
    this.state.tasks.filter((item) => {
      if (item.id === toDoItem) {
        this.setState({
          calendarItem: item.title,
        });
      }
    });
  };

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
                {/* <Calendar
                  time={this.state.time}
                  schedule={this.state.schedule}
                /> */}
                <div className="right_purple morning">
                  <h3 className="right_purple-innertext">Morning Standup</h3>
                </div>
                <div className="right_blue morning">
                  <h3 className="right_blue-innertext">Working Time</h3>
                  <h3 className="right_blue-inntertext">
                    {this.state.calendarItem}
                  </h3>
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
            <Avatars />
            <Taskpage
              addTaskItemToCal={this.addTaskItemToCal}
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
              handleSelectedPriority={this.handleSelectedPriority}
              selectedPriority={this.selectedPriority}
              handleSelectedStatus={this.handleSelectedStatus}
              selectedStatus={this.selectedStatus}
            />
            {/* <Modal/> */}
          </aside>
        </main>
      );
    }
  }
}
