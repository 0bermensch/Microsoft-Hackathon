import React, { Component } from "react";
import ReactModal from "react-modal";
import Button from "../assets/icons/button.png";


export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__button" onClick={this.props.handleOpenModal}><img src={Button} alt="button" /> </div>
        <ReactModal ariaHideApp={false} isOpen={this.props.showModal}>
          {/* Modal.setAppElement(el) */}
          <div className="modal__">
            <h1 className="modal__header">Create New Task</h1>
            <button
              className="modal__close"
              onClick={this.props.handleCloseModal}
            >
              Close
            </button>
          </div>
          <form className="modal__form" onSubmit={this.props.handleTaskSubmit}>
            <h4 className="modal__form-label">Title</h4>
            <input
              className=""
              name="title"
              type="text"
              placeholder="Enter a title for this task"
            />
            <button onClick={this.props.handleCloseModal}>Close</button>
            <div>
              <h4>Type of Task</h4>
              <select name="type">
                <option value="Art Assets">Art Assets</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <div>
              {/* <h4>Assign a Team Member to this task</h4>
              <select
                onChange={this.props.handleSelectedUser}
                name="user"
                className="task__owner"
              >
                <option>Select a User</option>
                {this.props.users.map((user) => {
                  return <option>{user.username}</option>;
                })}
              </select> */}
              {/* <select onChange={this.props.handleSelectedUser} name="owner">
                {this.props.users.map((user) => {
                  return <option value={user.username}>{user.username}</option>;
                })}
              </select> */}
            </div>
            <div>
              <h4>Assign a Priority</h4>
              <select name="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <h4>What is the Task Status</h4>
              <select name="status">
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Submitted">Submitted</option>
              </select>
            </div>
            <div>
              <button onClick={this.props.handleCloseModal}>Cancel</button>
              <button>Save</button>
            </div>
          </form>
        </ReactModal>
      </div>
    );
  }
}
