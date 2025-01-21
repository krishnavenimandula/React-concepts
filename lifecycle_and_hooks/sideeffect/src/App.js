import React, { useState } from "react";
import Joke from "./Joke";
import "./index.css";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="container">
      <div className="category-selection">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="programming">Programming</option>
        </select>
      </div>
      <Joke category={category} />
    </div>
  );
};
export default App;
