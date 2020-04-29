import React from "react";
import Draggable from "react-draggable";
import Avatar1 from "./assets/Avatar (Chuck).png";
import Avatar2 from "./assets/Avatar (Slogan).png";
import Avatar3 from "./assets/Avatar (Janine).png";
import Avatar4 from "./assets/Group 18.png";
import Avatar5 from "./assets/Group 19.png";
import Avatar6 from "./assets/Group 20.png";
import Floorplan from "./assets/Office Picture.svg";

function App() {
  return (
    <div>
      <img src={Floorplan} />
      <div className="avatars">
        <Draggable>
          <div className="avatar1">
            <img src={Avatar1} />
          </div>
        </Draggable>
        <Draggable>
          <div className="avatar2">
            <img src={Avatar2} />
          </div>
        </Draggable>
        <Draggable>
          <div className="avatar3">
            <img src={Avatar3} />
          </div>
        </Draggable>
        <Draggable>
          <div className="avatar4">
            <img src={Avatar4} />
          </div>
        </Draggable>
        <Draggable>
          <div className="avatar5">
            <img src={Avatar5} />
          </div>
        </Draggable>
        <Draggable>
          <div className="avatar6">
            <img src={Avatar6} />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default App;
