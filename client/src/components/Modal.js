import React, { Component } from "react";
import ReactModal from "react-modal";

export default class Modal extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="modal">
        <button onClick={this.props.handleOpenModal}>Create New</button>
        <ReactModal ariaHideApp={false} isOpen={this.props.showModal}>
          {/* Modal.setAppElement(el) */}
          <div className="modal__top">
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
              <h4 className="modal__form-label">Type of Task</h4>
              <select
                name="type"
                className="modal__dropdown"
                onChange={this.props.handleSelectedType}
              >
                <option>None Assigned</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <div>
              <h4 className="modal__form-label">
                Assign a Team Member to this task
              </h4>
              <select
                onChange={this.props.handleSelectedUser}
                name="owner"
                className="modal__dropdown"
              >
                <option>None Assigned</option>
                {this.props.users.map((user) => {
                  return <option>{user.username}</option>;
                })}
              </select>
            </div>
            <div>
              <h4 className="modal__form-label">Assign a Priority</h4>
              <select
                className="modal__dropdown"
                onChange={this.props.handleSelectedPriority}
                name="priority"
              >
                <option>None Assigned</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <h4 className="modal__form-label">What is the Task Status</h4>
              <select
                name="status"
                className="modal__dropdown"
                onChange={this.props.handleSelectedStatus}
              >
                <option>None Assigned</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Submitted">Submitted</option>
              </select>
            </div>
            <div>
              <h4 className="modal__form-label">Timer</h4>
              <input type="text" name="timer" placeholder="2:00" />
            </div>
            <div>
              <h4 className="modal__form-label">Start Time</h4>
              <input type="text" name="starttime" placeholder="9:00" />
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
