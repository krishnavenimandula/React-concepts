import React, { Component } from "react";

class App extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <center>
        <div>
          <textarea
            id="text-area"
            onChange={(e) => this.setState({ text: e.target.value })}
          ></textarea>
          <div id="char-count">{this.state.text.length} character(s)</div>
          <br />
          <div id="word-count">
            {this.state.text ? this.state.text.match(/\w+/gim).length : 0}
            word(s)
          </div>
        </div>
      </center>
    );
  }
}
export default App;
