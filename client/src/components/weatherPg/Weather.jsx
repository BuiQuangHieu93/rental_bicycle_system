import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherForecast } from "./index";
import { weatherData, ideas } from "../../constants/index";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState();
  const [recommendation, setRecommendation] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=10.75&lon=106.6667&appid=e18d9f935503d1088f5628c4f00c5340"
        );
        console.log(response.data); // log the response data to the console

        const weatherData = response.data;
        setWeather(weatherData);
      } catch (error) {
        console.error(error); // log any errors to the console
      }
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Use weather instead of props.item.weather here
    if (weather && weather.weather) {
      const description = weather.weather[0].description;
      setWeatherDescription(description);
      const matchingData = weatherData.find((data) =>
        description.toLowerCase().includes(data.title.toLowerCase())
      );
      if (matchingData) {
        const randomIndex = Math.floor(
          Math.random() * matchingData.recommend.length
        );
        const selectedIdea = ideas[Math.floor(Math.random() * ideas.length)];
        setRecommendation(
          `${selectedIdea}: ${matchingData.recommend[randomIndex]}`
        );
      }
    }
  }, [weather]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const matchingData = weatherData.find((data) =>
        weatherDescription.toLowerCase().includes(data.title.toLowerCase())
      );
      if (matchingData) {
        const randomIndex = Math.floor(
          Math.random() * matchingData.recommend.length
        );
        const selectedIdea = ideas[Math.floor(Math.random() * ideas.length)];
        setRecommendation(
          `${selectedIdea}: ${matchingData.recommend[randomIndex]}`
        );
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [recommendation]);
  return (
    <div>
      <div className="text-black mb-8">
        {recommendation && (
          <div className="bg-green-500 rounded-md p-4">
            <p className="text-white text-lg">{recommendation}</p>
          </div>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-md text-black">
        {weather ? (
          <div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-lg">
                  Temperature: {(weather.main.temp - 273.15).toFixed(0)} °C
                </p>
                <p className="text-lg">
                  Feel like: {(weather.main.feels_like - 273.15).toFixed(1)} °C
                </p>
                <p className="text-lg">Wind speed: {weather.wind.speed} m/s</p>
                <p className="text-lg">Humidity: {weather.main.humidity} %</p>
                <p className="text-lg">Pressure: {weather.main.pressure} Pa</p>
                <p className="text-lg">Description: {weatherDescription}</p>
              </div>
              <div>
                <img
                  src={`icons/${weather.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-lg">Loading weather data...</p>
        )}
      </div>
      <div className="bg-gray-100 p-4 rounded-md shadow-md text-black mt-12">
        <WeatherForecast />
      </div>
    </div>
  );
};

export default Weather;
