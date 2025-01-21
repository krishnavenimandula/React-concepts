import React, { Component } from "react";
import moment from "moment";
import momentDurationFormatsetup from "moment-duration-format";

momentDurationFormatsetup(moment);

class Timers extends Component {
  formatTime = (seconds) =>
    moment.duration(seconds, "seconds").format("HH:mm:ss");
  render() {
    return (
      <div className="timer">
        <div className="timer-name">{this.props.name}</div>
        <div className="timer-display">{this.formatTime(2000)}</div>
        <div className="pauseBtn"></div>
        <div className="removeBtn" onClick={() => this.props.onRemove}></div>
      </div>
    );
  }
}
export default Timers;
