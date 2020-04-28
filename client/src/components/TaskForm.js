import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default class TaskForm extends Component {
  render() {
    // console.log("CURRENT PROPSl:", this.props);
    return (
      <>
        <form className="task" onSubmit={this.props.handleTaskSubmit}>
          <div className="task__row">
            <h1 className="task__header--main">Create a new task</h1>
          </div>
          <div className="task__row">
            <div className="task__row-item">
              <h3 className="task__header">Title</h3>
              <input name="title" type="text" className="task__title" />
            </div>
            <div className="task__row-item">
              <h3 className="task__header">Due Date</h3>
              <div>
                <DayPickerInput
                  className="task__date"
                  name="date"
                  value={this.props.selectedDay}
                  onDayChange={this.props.handleDayChange}
                  dayPickerProps={{
                    selectedDays: this.props.selectedDay,
                    disabledDays: {
                      daysOfWeek: [0, 6],
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="task__row">
            <div className="task__row-item">
              <select
                onChange={this.props.handleSelectedUser}
                name="user"
                className="task__owner"
              >
                <option>Select a User</option>
                {this.props.users.map((user) => {
                  return <option>{user.username}</option>;
                })}
              </select>

              <h3 className="task__header">Description</h3>
              <textarea
                name="description"
                type="text"
                className="task__description"
              />
            </div>
          </div>

          <div className="task__row">
            <div className="task__row-item">
              <h3 className="task__header">Description</h3>
              <textarea
                name="description"
                type="text"
                className="task__description"
              />
            </div>
          </div>
          <div className="task__row">
            <div className="task__row-item">
              <h3 className="task__header">Status</h3>
              <select name="status" className="task__status">
                <option selected>not started</option>
                <option>In-Progress</option>
                <option>Complete</option>
              </select>
            </div>

            <div className="task__row-item">
              <h3 className="task__header">Percentage Complete</h3>
              <input
                name="percentage"
                type="text"
                className="task__percentage"
              />
            </div>
          </div>

          <div className="task__row">
            <button className="task__button">Submit</button>
          </div>
        </form>
      </>
    );
  }
}
