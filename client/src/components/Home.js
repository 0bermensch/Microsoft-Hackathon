import React, { Component } from "react";

import nav from "../assets/images/left-navbar.png";

export default class Home extends Component {
  state = {
    date: "",
    day: "",
  };
  componentDidMount() {
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
          <aside className="main_right"></aside>
        </main>
      );
    }
  }
}
