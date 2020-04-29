// import React from "react";

import React, { Component } from "react";
import Modal from "./Modal";
import Icon from "../assets/icons/br.png";
import { NavLink, Link } from "react-router-dom";

class Taskpage extends Component {
  render() {
    return (
      <>
        <div className="taskpage__all">
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
            <div className="taskpage__secondarytwo">
              <NavLink to="/workspace" activeClassName="active-link2">
                Workspace
              </NavLink>
            </div>
            <div className="taskpage__secondarythree">
              <NavLink to="/meeting" activeClassName="active-link3">
                Meeting
              </NavLink>
            </div>
          </div>
          <div className="taskpage__new">
            <Modal
              tasks={this.props.tasks}
              handleSelectedUser={this.props.handleSelectedUser}
              selectedUser={this.props.selectedUser}
              handleSelectedType={this.props.handleSelectedType}
              selectedType={this.props.selectedType}
              handleSelectedPriority={this.props.handleSelectedPriority}
              selectedPriority={this.props.selectedPriority}
              handleSelectedStatus={this.props.handleSelectedStatus}
              selectedStatus={this.props.selectedStatus}
              showModal={this.props.showModal}
              users={this.props.users}
              handleSelectedUser={this.props.handleSelectedUser}
              selectedUser={this.props.selectedUser}
              handleOpenModal={this.props.handleOpenModal}
              handleCloseModal={this.props.handleCloseModal}
              handleTaskSubmit={this.props.handleTaskSubmit}
            />
          </div>
          <div className="taskpage__titles">
            <div className="taskpage__titles--title">Title</div>
            <div className="taskpage__titles--type">Type</div>
            <div className="taskpage__titles--teammember">Team Member</div>
            <div className="taskpage__titles--priority">Priority</div>
            <div className="taskpage__titles--status">Status</div>
          </div>
        </div>

        {this.props.tasks.map((task) => {
          return (
            <div key={task.id} className="taskpage__tasks">
              <ul className="taskpage__task">
                <button
                  onClick={this.props.addTaskItemToCal}
                  id={task.id}
                  className="taskpage_button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      className="taskpage_button-svg"
                      d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                    />
                  </svg>
                </button>
                <li className="taskpage__tasktitle"> {task.title} </li>
                <li className="taskpage__tasktype">{task.type} </li>
                <li className="taskpage__taskteammember">{task.owner}</li>
                <li className="taskpage__taskpriority">{task.priority}</li>
                <li className="taskpage__taskstatus">{task.status}</li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

export default Taskpage;
