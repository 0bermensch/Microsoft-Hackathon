import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Draggable from "react-draggable";

import Avatar1 from "../assets/images/Avatar (Chuck).png";
import Avatar2 from "../assets/images/Avatar (Janine).png";
import Avatar3 from "../assets/images/Avatar (Slogan).png";
import Avatar4 from "../assets/images/Group 18.png";
import Avatar5 from "../assets/images/Group 19.png";
import Avatar6 from "../assets/images/Group 20.png";
import Floorplan from "../assets/images/Office Picture.svg";
import nav from "../assets/images/left-navbar.png";
import Icon from "../assets/icons/br.png";

export default class Avatars extends Component {
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
            <>
              <div className="taskpage__headers">
                <div className="taskpage__icon">
                  <img src={Icon} alt="initials" />
                </div>
                <div className="taskpage__main">Working Time</div>
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
              <div className="workspace">
                <div className="avatar__topbar">
                  <div className="dot__container">
                    <div className="dot">
                      <span className="center-this">Hours</span>
                    </div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>

                  <div className="avatar__join">
                    <div className="avatar__join--text">
                      <div className="avatar__join--texting">
                        Noon Standup has started.
                      </div>
                    </div>
                    <div className="avatar__join-but">
                      {" "}
                      <NavLink to="/meeting">
                        <button className="avatar__join--button">Join</button>
                      </NavLink>
                    </div>{" "}
                  </div>
                </div>
                <div className="workspace__background--container">
                  <img className="workspace__background" src={Floorplan} />
                </div>

                <div className="avatar__bar">
                  <div className="avatars">
                    <Draggable>
                      <div className="avatar">
                        <img src={Avatar1} />
                      </div>
                    </Draggable>
                    <Draggable>
                      <div className="avatar">
                        <img src={Avatar2} />
                      </div>
                    </Draggable>
                    <Draggable>
                      <div className="avatar">
                        <img src={Avatar3} />
                      </div>
                    </Draggable>
                    <Draggable>
                      <div className="avatar">
                        <img src={Avatar4} />
                      </div>
                    </Draggable>
                    <Draggable>
                      <div className="avatar">
                        <img src={Avatar5} />
                      </div>
                    </Draggable>
                    <Draggable>
                      <div className="avatar">
                        <img src={Avatar6} />
                      </div>
                    </Draggable>
                  </div>
                </div>
              </div>
            </>
          </aside>
        </main>
      );
    }
  }
}
