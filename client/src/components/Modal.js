import React, { Component } from "react";
import ReactModal from "react-modal";
import modalx from "../assets/icons/x-big.png";
import Button from "../assets/icons/button.png";

export default class Modal extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="modal">
        <div className="modal__button" onClick={this.props.handleOpenModal}>
          <img src={Button} alt="button" />{" "}
        </div>
        <ReactModal
          className="modal__popup"
          overlayClassName="modal__overlay"
          ariaHideApp={false}
          isOpen={this.props.showModal}
        >
          <div className="modal__content">
            {/* Modal.setAppElement(el) */}
            <div className="modal__top">
              <h1 className="modal__header">Create New Task</h1>
              <img
                className="modal__close"
                onClick={this.props.handleCloseModal}
                src={modalx}
                alt="exit"
              />
            </div>
            <form
              className="modal__form"
              onSubmit={this.props.handleTaskSubmit}
            >
              <h4 className="modal__form-label">Title</h4>
              <input
                className="modal__title"
                name="title"
                type="text"
                placeholder="Enter a title for this task"
              />

              <div className="modal__select">
                <h4 className="modal__form-label">Type of Task</h4>
                <select
                  name="type"
                  className="modal__dropdown"
                  onChange={this.props.handleSelectedType}
                >
                  <option>None Assigned</option>
                  <option value="Art Assets">Art Assets</option>
                  <option value="Bug Fix">Bug Fix</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </select>
              </div>
              <div className="modal__select">
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
              <div className="modal__select">
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
              <div className="modal__select">
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
              <div className="modal__select">
                <h4 className="modal__form-label">Timer</h4>
                <input
                  className="modal__dropdown"
                  type="text"
                  name="timer"
                  placeholder="2:00"
                />
              </div>
              <div className="modal__select">
                <h4 className="modal__form-label">Start Time</h4>
                <input
                  className="modal__dropdown"
                  type="text"
                  name="starttime"
                  placeholder="9:00"
                />
              </div>
              <div className="modal__buttons-container">
                <div className="modal__buttons">
                  <button
                    className="modal__button--cancel"
                    onClick={this.props.handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="modal__button--save"
                    // className="modal__button--save"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}
