// import React from "react";

import React, { Component } from "react";
import Modal from "./Modal";

class Taskpage extends Component {
  render() {
    return (
      <>
        <div className="taskpage__all">
          <div className="taskpage__Headers">
            <div className="taskpage__main">Working Time</div>
            <div className="taskpage__secondary">Tasks</div>
            <div className="taskpage__secondarytwo">Workspace</div>
          </div>
          <div className="taskpage__new">
            <Modal
              tasks={this.props.tasks}
              handleOpenModal={this.props.handleOpenModal}
              handleCloseModal={this.props.handleCloseModal}
              handleTaskSubmit={this.props.handleTaskSubmit}
              showModal={this.props.showModal}
              users={this.props.users}
              handleSelectedPriority={this.props.handleSelectedPriority}
              selectedPriority={this.props.selectedPriority}
              handleSelectedStatus={this.props.handleSelectedStatus}
              selectedStatus={this.props.selectedStatus}
              handleSelectedUser={this.props.handleSelectedUser}
              selectedUser={this.props.selectedUser}
              handleSelectedType={this.props.handleSelectedType}
              selectedType={this.props.selectedType}
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

        {this.props.tasks.map((task, index) => {
          return (
            <div className="taskpage__tasks">
              <div className="taskpage__task" key={index}>
                <div className="taskpage__tasktitle"> {task.title} </div>
                <div className="taskpage__tasktype">{task.type} </div>
                <div className="taskpage__taskteammember">{task.owner}</div>
                <div className="taskpage__taskpriority">{task.priority}</div>
                <div className="taskpage__taskstatus">{task.status}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

//     );
//   }
// }

export default Taskpage;
// const Taskpage = () => {
//   console.log(this.props);
//   return (
// };

// export default Taskpage;
