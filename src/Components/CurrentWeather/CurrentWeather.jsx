import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather-container">
      <div className="top">
        <div>
          <p className="city">Chennai</p>
          <p className="weather">Sunny</p>
        </div>
        <img src="/icons/01d.png" alt="weather" className="weather-img" />
      </div>
      <div className="bottom">
        <p>23°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels like</span>
            <span className="value">27°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind speed</span>
            <span className="value">10 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity</span>
            <span className="value">20%</span>
            <div className="parameter-row">
              <span className="label">Pressure</span>
              <span className="value">2 hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
