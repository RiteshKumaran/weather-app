import Search from "./Components/Search/Search";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
