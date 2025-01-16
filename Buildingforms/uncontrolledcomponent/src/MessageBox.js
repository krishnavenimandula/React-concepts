import React, { Component, createRef } from "react";
import "./index.css";

const sentenceCase = (str) => {
  if (str === null || str === "") return "";
  else str = str.toString();

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

class MessageBox extends Component {
  state = {
    name: "",
    nature: "",
    query: "",
  };
  nameRef = createRef();
  natureRef = createRef();
  queryRef = createRef();

  submitForm = () => {
    this.setState({
      name: sentenceCase(this.nameRef.current.value),
      nature: this.natureRef.current.value,
      query: this.queryRef.current.value,
    });
  };
  render() {
    return (
      <div className="form-container">
        <div className="form-fields">
          <div className="field-holder">
            <span className="label">Name</span>
            <input ref={this.nameRef} />
          </div>
          <div className="field-holder">
            <span className="label">Nature of Query</span>
            <select ref={this.natureRef}>
              <option>Billing</option>
              <option>Sales</option>
              <option>Tech</option>
            </select>
          </div>

          <div className="field-holder">
            <span className="label">Query</span>
            <textarea ref={this.queryRef} />
          </div>
          <div className="field-holder">
            <button id="submit-btn" onClick={this.submitForm}>
              Submit
            </button>
          </div>
        </div>
        <div className="output">
          <div className="ot-field bold">Name: {this.state.name}</div>
          <div className="ot-field bold">
            Nature of Query: {this.state.nature}
          </div>
          <div className="ot-field bold">Query: {this.state.query}</div>
        </div>
      </div>
    );
  }
}

MessageBox.defaultProps = {
  nameVal: "",
  natureVal: "",
  queryVal: "",
};
export default MessageBox;
