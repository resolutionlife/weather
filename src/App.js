import './App.css';

const paris = {
  "coord": {
    "lon": 2.3488,
    "lat": 48.8534
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.57,
    "feels_like": 5.63,
    "temp_min": 8.89,
    "temp_max": 10,
    "pressure": 995,
    "humidity": 93
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.14,
    "deg": 300
  },
  "clouds": {
    "all": 90
  },
  "dt": 1612177860,
  "sys": {
    "type": 1,
    "id": 6550,
    "country": "FR",
    "sunrise": 1612164041,
    "sunset": 1612198057
  },
  "timezone": 3600,
  "id": 2988507,
  "name": "Paris",
  "cod": 200
};

const API_KEY = "<INSERT_HERE>";

const fetchCityData = async (cityName) => {
  return paris;
};

function App() {

  const citiesData = [paris];

  return (
    <div className="App">
      <button>Add City</button>
      {citiesData.map(cityData => (
        <div>
          {cityData.name} {cityData.main.temp}
        </div>
      ))}
    </div>
  );
}

export default App;
