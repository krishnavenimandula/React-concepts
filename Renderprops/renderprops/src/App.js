import React, { useState, createRef } from "react";
import Weather from "./Weather";

const App = () => {
  const locationInput = createRef();
  const [location, setLocation] = useState("Hyderabad");
  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Type a location"
        ref={locationInput}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setLocation(e.target.value);
            locationInput.current.value = "";
          }
        }}
      ></input>
      <Weather
        location={location}
        render={({ error, isLoading, temperature, conditions, icon, place }) =>
          !error ? (
            isLoading ? (
              <div className="loading">Please wait..</div>
            ) : (
              <div className="result">
                <div className="place">{place}</div>
                <div className="temperature">{temperature}</div>
                <div className="conditions">{conditions.join("")}</div>
                <img src={icon} alt="sunny" className="icon"></img>
              </div>
            )
          ) : (
            <div className="error">There was an error!</div>
          )
        }
      />
    </div>
  );
};
export default App;
