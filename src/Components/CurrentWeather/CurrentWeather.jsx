import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather-container">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather">{data.weather[0].description}</p>
        </div>
        <img
          src={`/icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-img"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind speed</span>
            <span className="value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity</span>
            <span className="value">{Math.round(data.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className="label">Pressure</span>
            <span className="value">{Math.round(data.main.pressure)} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
