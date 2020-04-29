// import React from "react";

import React, { Component } from "react";
import Modal from "./Modal";
import Icon from "../assets/icons/br.png";
import { NavLink } from 'react-router-dom'

class Taskpage extends Component {
  render() {
    return (

<>
  <div className="taskpage__all">
    <div className="taskpage__headers">
      <div className="taskpage__icon"><img src={Icon} /></div>
    <div className="taskpage__main">Working Time</div>
    <div className="taskpage__secondary"><NavLink to = '/tasks' activeClassName="active-link1">Tasks</NavLink></div>
    <div className="taskpage__secondarytwo"><NavLink to = '/workspace' activeClassName="active-link2">Workspace</NavLink></div>
    </div>
    <div className="taskpage__new">
    <Modal 
    tasks={this.props.tasks} 
    handleOpenModal={this.props.handleOpenModal}
    handleCloseModal={this.props.handleCloseModal}
    handleTaskSubmit={this.props.handleTaskSubmit}
    showModal={this.props.showModal}
    users={this.props.users}
    handleSelectedUser={this.props.handleSelectedUser}
    selectedUser={this.props.selectedUser}/></div>
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
