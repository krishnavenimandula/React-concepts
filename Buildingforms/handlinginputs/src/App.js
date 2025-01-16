import React, { Component } from "react";

class App extends Component {
  state = {
    name: "",
    email: "",
    phonenumber: "",
    priveleges: {
      Author: false,
      Moderator: false,
      Reviewer: false,
    },
    verification: "",
  };
  formHandler = ({ target }) => {
    const { name, type, value } = target;
    this.setState({
      [name]:
        type === "checkbox"
          ? { ...this.state[name], [value]: !this.state[name][value] }
          : value,
    });
  };

  render() {
    return (
      <div className="form">
        <div className="form-fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.formHandler}
            // onChange={(evt) => this.setState({ name: evt.target.value })}
            value={this.state.name}
          ></input>
        </div>
        <div className="form-fields">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.formHandler}
            // onChange={(evt) => this.setState({ email: evt.target.value })}
            value={this.state.email}
          ></input>
        </div>
        <div className="form-fields">
          <input
            type="phone"
            name="phonenumber"
            placeholder="PhoneNumber"
            onChange={this.formHandler}
            // onChange={(evt) => this.setState({ phonenumber: evt.target.value })}
            value={this.state.phonenumber}
          ></input>
        </div>
        <div className="form-fields">
          <p>Priveleges</p>
          <label>
            Author:
            <input
              type="checkbox"
              name="priveleges"
              value="Author"
              onChange={this.formHandler}
              // onChange={(evt) =>
              //   this.setState({
              //     priveleges: {
              //       ...this.state.priveleges,
              //       Author: !this.state.priveleges["Author"],
              //     },
              //   })
              // }
              checked={this.state.priveleges.Author}
            ></input>
          </label>
          <label>
            Moderator:
            <input
              type="checkbox"
              name="priveleges"
              value="Moderator"
              onChange={this.formHandler}
              // onChange={(evt) =>
              //   this.setState({
              //     priveleges: {
              //       ...this.state.priveleges,
              //       Moderator: !this.state.priveleges["Moderator"],
              //     },
              //   })
              // }
              checked={this.state.priveleges.Moderator}
            ></input>
          </label>
          <label>
            Reviewer:
            <input
              type="checkbox"
              name="priveleges"
              value="Reviewer"
              onChange={this.formHandler}
              // onChange={(evt) =>
              //   this.setState({
              //     priveleges: {
              //       ...this.state.priveleges,
              //       Reviewer: !this.state.priveleges["Reviewer"],
              //     },
              //   })
              // }
              checked={this.state.priveleges.Reviewer}
            ></input>
          </label>
        </div>

        <div className="form-fields">
          <p>Verification</p>
          <label>
            PhoneNumber:{" "}
            <input
              type="radio"
              name="verification"
              value="phonenumber"
              onChange={this.formHandler}
              // onChange={(evt) =>
              //   this.setState({ verification: evt.target.value })
              // }
              checked={this.state.verification === "phonenumber" ? true : false}
            ></input>
          </label>
          <label>
            {" "}
            Email:{" "}
            <input
              type="radio"
              name="verification"
              value="email"
              onChange={this.formHandler}
              // onChange={(evt) =>
              //   this.setState({ verification: evt.target.value })
              // }
              checked={this.state.verification === "email" ? true : false}
            ></input>
          </label>
        </div>
        <div className="separator">
          <div className="output">
            <ul>
              {Object.keys(this.state).map((k) => (
                <li key={k}>
                  <b>{k}</b>: {JSON.stringify(this.state[k])}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
