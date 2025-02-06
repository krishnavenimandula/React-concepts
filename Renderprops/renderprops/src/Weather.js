import { useEffect, useState } from "react";

const Weather = ({ location, render }) => {
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [conditions, setConditions] = useState([]);
  const [icon, setIcon] = useState("");
  const [place, setPlace] = useState("");

  const fetchWeather = (location) => {
    setisLoading(true);
    fetch(
      `http://api.weatherstack.com/current?access_key=8596e4730a9fd3162d9f800d7d2f691b&query=${location}`
    )
      .then((res) => res.json())
      .then(({ current, location, request }) => {
        console.log(current);
        const { temperature, weather_description, weather_icon } = current;
        const { name, country } = location;
        setTemperature(temperature);
        setConditions(weather_description);
        setIcon(weather_icon[0]);
        setPlace(`${name}, ${country}`);
        setError(false);
      })
      .catch(() => {
        console.log("error");
        setError(true);
      })
      .finally(() => setisLoading(false));
  };
  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  return render({ error, isLoading, temperature, conditions, icon, place });
};

export default Weather;
