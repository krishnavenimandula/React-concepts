import React from "react";
import ChartComponent from "./ChartComponent";

const weatherData = [
  { x: "Monday", y: 35 },
  { x: "Tuesday", y: 31 },
  { x: "Wednesday", y: 37 },
  { x: "Thursday", y: 32 },
  { x: "Friday", y: 33 },
  { x: "Saturday", y: 35.5 },
  { x: "Sundayy", y: 28 },
];

const App = () => {
  return (
    <div className="container">
      <ChartComponent data={weatherData} width="530" height="230" />
    </div>
  );
};
export default App;
