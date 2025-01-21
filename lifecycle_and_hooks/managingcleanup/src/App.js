import React, { Component } from "react";
import uuid from "uuid/v1";
import Timers from "./Timers";

class App extends Component {
  state = {
    timers: [],
  };

  addTimer = (name) =>
    this.setState({
      timers: [{ id: uuid(), name }, ...this.state.timers],
    });

  removeTimer = (id) =>
    this.setState({
      timers: this.state.timers.filter((t) => t.id !== id),
    });

  render() {
    return (
      <div className="container">
        <div className="create-timer">
          <input
            type="text"
            placeholder="Text"
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                this.addTimer(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>

        <div className="timer-bench">
          {this.state.timers.map((t) => (
            <Timers name={t.name} id={t.id} onRemove={() => this.removeTimer} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
