import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = (data) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="forecast-container">
      <h1 className="title">Forecast</h1>
      <Accordion allowZeroExpanded>
        {data.data.list.slice(0, 7).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`/icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="day">{forecastDays[i]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="forecast-details-grid">
                <div className="forecast-details-grid-items">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className="forecast-details-grid-items">
                  <label>Pressue</label>
                  <label>{Math.round(item.main.pressure)} hPa</label>
                </div>
                <div className="forecast-details-grid-items">
                  <label>Humidity</label>
                  <label>{Math.round(item.main.humidity)}%</label>
                </div>
                <div className="forecast-details-grid-items">
                  <label>Wind speed</label>
                  <label>{Math.round(item.wind.speed)} m/s</label>
                </div>
                <div className="forecast-details-grid-items">
                  <label>Sea level</label>
                  <label>{Math.round(item.main.feels_like)} m</label>
                </div>
                <div className="forecast-details-grid-items">
                  <label>Clouds</label>
                  <label>{Math.round(item.clouds.all)}%</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
