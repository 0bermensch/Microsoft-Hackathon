import React from "react";
import Draggable from "react-draggable";
import Avatar1 from "../assets/images/Avatar (Chuck).png";
import Avatar2 from "../assets/images/Avatar (Janine).png";
import Avatar3 from "../assets/images/Avatar (Slogan).png";
import Avatar4 from "../assets/images/Group 18.png";
import Avatar5 from "../assets/images/Group 19.png";
import Avatar6 from "../assets/images/Group 20.png";
import Floorplan from "../assets/images/Office Picture.svg";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <div className="link_holder">
        <NavLink to="/tasks" activeClassName="active-link1">
          Tasks
        </NavLink>
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
              <button className="avatar__join--button">Join</button>
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
  );
}

export default App;
