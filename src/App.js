import Search from "./Components/Search/Search";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import { useState } from "react";
import Forecast from "./Components/Forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setforecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(currentWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
