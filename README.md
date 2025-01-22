# Weather App

## Overview

Build a weather dashboard application using React and TypeScript. Users should be able to search for cities and view the city's current weather conditions using the OpenWeather API.

## Interview Format

This is a collaborative exercise. We encourage you to:

- Think aloud and share your reasoning
- Ask questions if anything is unclear
- Discuss your UI/UX decisions
- Talk through technical tradeoffs you're considering

Remember: We're more interested in your problem-solving approach than a perfect solution. A partially complete solution with good communication is better than a complete solution without explanation.

## Getting Started

This project uses Create React App with TypeScript. To begin:

```bash
# Using npm
npm install
npm start

# Using yarn
yarn
yarn start
```

## The Task

Create an interface where users can:

- Search for cities by name
- View current weather data for their selected cities

## API Integration

The application should fetch weather data from the OpenWeather API:

```
GET https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric
```

You should be provided the API key by your interviewer.

### Example API Response

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

## Testing

Write your tests using Jest and React Testing Library. Tests should be placed in files with `.test.tsx` or `.spec.tsx` extensions.

To run the tests:

```bash
# Using npm
npm test

# Using yarn
yarn test
```

## Example Output

<img width="228" alt="image" src="https://github.com/resolutionlife/weather-junior/assets/12024258/ab13cd45-17b9-4aec-9873-83b444b78636">
