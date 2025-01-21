import React, { Component } from "react";

class Joke extends Component {
  state = {
    joke: {},
    isLoading: false,
  };

  getJoke = async (category) => {
    this.setState({
      isLoading: true,
    });
    const callJokeApi = await fetch(
      `https://official-joke-api.appspot.com/jokes/${category}/random`
    );
    const resolveJoke = await callJokeApi.json();
    this.setState({
      joke: resolveJoke[0],
      isLoading: true,
    });
  };
  componentDidMount = () => this.getJoke(this.props.category);

  componentDidUpdate = (prevProps) => {
    if (this.props.category !== prevProps.category) {
      this.getJoke(this.props.category);
    }
  };

  render() {
    return (
      <>
        <div
          className={this.state.isLoading ? "title title-pulse" : "title"}
          //   onClick={this.getJoke}
        >
          {" "}
          Joke Machine
        </div>
        <div className="joke-panel">
          <div className="joke-setup">{this.state.joke.setup}</div>
          <div className="joke-punchline"> {this.state.joke.punchline} </div>
        </div>
      </>
    );
  }
}

export default Joke;
