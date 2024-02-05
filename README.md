
## Brief

You have been given some boilerplate code that was adapted from Create React App. You can install all dependencies with
`yarn` or `npm i` and then start the application with `yarn start` or `npm run start`.

Right now, the code isn't quite working, but the idea is to create an interface where a user can enter the names of
cities and get up-to-date weather data. We provide you an API key, which can be used to call the openweather API as
such:

```
GET https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric
```

The temperature for Paris is already showing and an example of the API response is included below.

### Task

Your task is to extend the code so that a user can start adding their own cities, for example if they wanted to know the
temperature in "london" then it should be able to do it via the interface.

### Advice

Relax and take your time.

Read the brief and task, make sure you understand what is required. Use your interviewer, talk to them throughout the
exercise. They can answer any questions around the brief, or be there to help talk through technical concepts.

Be sure to talk us through your thought process throughout, we're more interested in how you approach the problem than
the solution. A non-working solution with narration is better than a working solution done in silence.

Prioritise on getting the code right and styling is secondary.

## Example Output

<img width="228" alt="image" src="https://github.com/resolutionlife/weather-junior/assets/12024258/ab13cd45-17b9-4aec-9873-83b444b78636">


## API Key



## API response format

```json
{
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
}
```
