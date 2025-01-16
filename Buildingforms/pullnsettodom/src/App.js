import React, { createRef } from "react";

const App = () => {
  const targetRef = createRef();
  const sourceRef = createRef();

  const getMessage = (name) =>
    name
      ? `${name}, The two most powerful warriors are patience and time. ..`
      : " You still haven't told me your name";

  const onClickHandler = () => {
    targetRef.current.innerHTML = getMessage(sourceRef.current.value);
  };

  return (
    <div className="app">
      <input
        id="user-name"
        type="text"
        placeholder="Your name is.."
        ref={sourceRef}
      ></input>
      <button id="process-btn" onClick={onClickHandler}>
        Go
      </button>
      <div id="target" ref={targetRef}>
        Rahul Palisetti says hello!
      </div>
    </div>
  );
};

export default App;
