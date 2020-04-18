import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
  const [state, setState] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data.current);
    });
  }, []);

  return (
    <>
      <h1>Weather on {city}</h1>
      <p>Temperature: {state.temperature} Celcuis</p>
      <p>
        Wind: {state.wind_speed} mph direction: {state.wind_dir}
      </p>
      <img src={state.weather_icons} />
    </>
  );
};

export default Weather;
