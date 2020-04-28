import React, { Component } from "react";

import nav from "../assets/images/left-navbar.png";

export default class Home extends Component {
  state = {
    date: "",
    day: "",
  };
  componentDidMount() {
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
          <aside className="main_right"></aside>
        </main>
      );
    }
  }
}
