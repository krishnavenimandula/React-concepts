import React, { createRef, useState } from "react";
import ListApp from "./Listapp";
import withStorage from "./services/Withstorage";

const ListAppWithStorage = withStorage(ListApp);

const App = () => {
  const inputRef = createRef();
  const [task, setTask] = useState("");

  return (
    <div className="main">
      <input
        type="text"
        ref={inputRef}
        placeholder="Type and press enter.."
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setTask(e.target.value);
            inputRef.current.value = "";
          }
        }}
      ></input>
      <ListAppWithStorage task={task}>
        {({ list, remove }) => (
          <div className="list-app">
            {list.length > 0
              ? list.map(({ id, task }) => (
                  <div className="list-item" key={id}>
                    <span>{task}</span>
                    <button onClick={() => remove(id)}>X</button>
                  </div>
                ))
              : null}
          </div>
        )}
      </ListAppWithStorage>
    </div>
  );
};
export default App;
