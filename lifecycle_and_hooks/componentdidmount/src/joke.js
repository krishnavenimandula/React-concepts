import React from "react";
const Joke = ({ type, setup, punchline }) => {
  return (
    <div className="joke-panel">
      <div className="joke-type">{type}</div>
      <div className="joke-setup">{setup}</div>
      <div className="joke-punchline">{punchline}</div>
    </div>
  );
};

export default Joke;
