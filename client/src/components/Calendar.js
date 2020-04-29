import React, { Component } from "react";
import moment from "moment";
import Helper from "./Helper";
const HelperClass = new Helper();
const dateObj = new Date();

const dateStr = dateObj.toISOString().split("T").shift();
export default class Calendar extends Component {
  render() {
    const eightAM = this.props.schedule[8];
    const nineAM = this.props.schedule[9];
    const tenAM = this.props.schedule[10];
    const elevenAM = this.props.schedule[11];
    const twelvePM = this.props.schedule[12];
    const onePM = this.props.schedule[1];
    const twoPM = this.props.schedule[2];
    const threePM = this.props.schedule[3];
    const fourPM = this.props.schedule[4];
    const fivePM = this.props.schedule[5];
    const sixPM = this.props.schedule[6];

    if (!this.props.schedule) {
      return <div className="loading">loading...</div>;
    } else {
      return (
        <div>
          <div className="calendar">
            <div className="calendar__column">
              <div className="calendar__item">
                <h3 className="calendar__time">{eightAM || ""}</h3>
              </div>
              <div className="calendar__item right_purple">
                <h3 className="calendar__time">{nineAM}</h3>
              </div>
              <div className="calendar__item right_blue">
                <h3 className="calendar__time">{tenAM}</h3>
              </div>
              <div className="calendar__item right_blue">
                <h3 className="calendar__time">{elevenAM}</h3>
              </div>
              <div className="calendar__item break right_purple">
                <h3 className="calendar__time">{twelvePM}</h3>
              </div>
              <div className="calendar__item break">
                <h3 className="calendar__time">{onePM}</h3>
              </div>
              <div className="calendar__item right_blue">
                <h3 className="calendar__time">{twoPM}</h3>
              </div>
              <div className="calendar__item right_blue">
                <h3 className="calendar__time">{threePM}</h3>
              </div>
              <div className="calendar__item right_blue">
                <h3 className="calendar__time">{fourPM}</h3>
              </div>
              <div className="calendar__item right_purple">
                <h3 className="calendar__time">{fivePM}</h3>
              </div>
              <div className="calendar__item brake">
                <h3 className="calendar__time"></h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
