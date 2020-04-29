import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Icon from "../assets/icons/br.png";
import Ted from "../assets/icons/ted.png";
import Avatar1 from "../assets/images/Avatar (Chuck).png";
import Avatar2 from "../assets/images/Avatar (Janine).png";
import Avatar3 from "../assets/images/Avatar (Slogan).png";
import Avatar4 from "../assets/images/Group 18.png";
import Avatar5 from "../assets/images/Group 19.png";
import Avatar6 from "../assets/images/Group 20.png";
import Av2 from "../assets/icons/Av2.png";
import Av3 from "../assets/icons/Av3.png";
import Av4 from "../assets/icons/Av4.png";
import nav from "../assets/images/left-navbar.png";

export default class StandUp extends Component {
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
            <div className="taskpage__headers">
              <div className="taskpage__icon">
                <img src={Icon} alt="initials" />
              </div>
              <div className="taskpage__main">Noon Standup</div>
              <div className="taskpage__secondary">
                <NavLink to="/" activeClassName="active-link1" exact>
                  Tasks
                </NavLink>
              </div>
              <div className="taskpage__secondary2">
                <NavLink to="/workspace" activeClassName="active-link2">
                  Workspace
                </NavLink>
              </div>
              <div className="taskpage__secondary3">
                <NavLink to="/meeting" activeClassName="active-link3">
                  Meeting
                </NavLink>
              </div>
            </div>
            <div className="standup">
              {/* <div className="standup__banner">
                <img className="standup__initials" src={Icon} alt="initials" />
                <h2 className="standup__name">Noon Standup</h2>
              </div> */}
              <div className="standup__video">
                <div className="standup__screen-container">
                  <img src={Ted} className="standup__video1" alt="person" />

                  <div className="standup__video2">
                    <img className="standup__av" src={Av2} />
                    <p className="standup__person">Janine Q.</p>
                  </div>
                  <div className="standup__video3">
                    <img className="standup__av" src={Av3} />
                    <p className="standup__person">Susan C.</p>
                  </div>
                  <div className="standup__video4">
                    <img className="standup__av" src={Av4} />
                    <p className="standup__person">Sloan J.</p>
                  </div>
                </div>
              </div>
              <div className="avatar__bar">
                <div className="avatars">
                  <div className="avatar">
                    <img className="avatar__img" src={Avatar1} />
                  </div>

                  <div className="avatar">
                    <img className="avatar__img" src={Avatar2} />
                  </div>

                  <div className="avatar">
                    <img className="avatar__img" src={Avatar3} />
                  </div>

                  <div className="avatar">
                    <img className="avatar__img" src={Avatar4} />
                  </div>

                  <div className="avatar">
                    <img className="avatar__img" src={Avatar5} />
                  </div>

                  <div className="avatar">
                    <img className="avatar__img" src={Avatar6} />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      );
    }
  }
}
