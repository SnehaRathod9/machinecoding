import React, { useEffect, useState } from "react";

function WeatherApi() {
  const [weather, setWeather] = useState(null);
  const getWeatherData = () => {
    if (navigator.geolocation) {
      console.log("navigator.geolocation", navigator.geolocation);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const dataApi = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e069da19669d37db8d69caa36a8b7382`
        );
        const json = await dataApi.json();
        console.log("json", json);
        console.log("json", json.main.temp);
        console.log("json", json.weather[0].description);
        setWeather(json);
      });
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div>WeatherApi</div>
      {weather ? (
        <>
          <h1>Temp : {Math.floor(weather?.main?.temp - 32) / 1.8}°C</h1>
          <h2>Condition : {weather.weather[0].description}</h2>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default WeatherApi;
