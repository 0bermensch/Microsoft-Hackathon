import React, { Component } from "react";
import Icon from "../assets/icons/br.png";
import Ted from "../assets/icons/ted.png";
import Avatar1 from "../assets/images/Avatar (Chuck).png";
import Avatar2 from "../assets/images/Avatar (Janine).png";
import Avatar3 from "../assets/images/Avatar (Slogan).png";
import Avatar4 from "../assets/images/Group 18.png";
import Avatar5 from "../assets/images/Group 19.png";
import Avatar6 from "../assets/images/Group 20.png";
import Av2 from "../assets/icons/Av2.png";
import Av3 from "../assets/icons/Av3.png";
import Av4 from "../assets/icons/Av4.png";

export default class StandUp extends Component {
  render() {
    return (
      <div className="standup">
        <div className="standup__banner">
          <img className="standup__initials" src={Icon} alt="initials" />
          <h2 className="standup__name">Noon Standup</h2>
        </div>
        <div className="standup__video">
          <div className="standup__screen-container">
            <img src={Ted} className="standup__video1" alt="person" />

            <div className="standup__video2">
              <img className="standup__av" src={Av2} />
              <p className="standup__person">Janine Q.</p>
            </div>
            <div className="standup__video3">
              <img className="standup__av" src={Av3} />
              <p className="standup__person">Susan C.</p>
            </div>
            <div className="standup__video4">
              <img className="standup__av" src={Av4} />
              <p className="standup__person">Sloan J.</p>
            </div>
          </div>
        </div>
        <div className="avatar__bar">
          <div className="avatars">
            <div className="avatar">
              <img className="avatar__img" src={Avatar1} />
            </div>

            <div className="avatar">
              <img className="avatar__img" src={Avatar2} />
            </div>

            <div className="avatar">
              <img className="avatar__img" src={Avatar3} />
            </div>

            <div className="avatar">
              <img className="avatar__img" src={Avatar4} />
            </div>

            <div className="avatar">
              <img className="avatar__img" src={Avatar5} />
            </div>

            <div className="avatar">
              <img className="avatar__img" src={Avatar6} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
