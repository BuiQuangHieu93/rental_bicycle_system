import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WeatherForecast = () => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?lat=10.75&lon=106.6667&appid=e18d9f935503d1088f5628c4f00c5340"
        );
        const forecastData = response.data.list.slice(0, 7).map((item) => ({
          ...item,
          temperature: Math.round(item.main.temp - 273.15),
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
        }));
        setData(forecastData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div>
      <div className="text-black">
        <div className="w-full text-center pb-4 text-[24px] font-semibold">
          Daily
        </div>
        <Accordion allowZeroExpanded>
          {data.slice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex flex-row justify-between bg-white rounded-md mb-4 p-2">
                    <div className="flex flex-row">
                      <img
                        src={`icons/${item.weather[0].icon}.png`}
                        alt="weather"
                        className="h-[48px]"
                      />
                      <div className="flex h-full items-center pl-4">
                        {forecastDays[idx]}
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="sm:pr-4 pl-12">
                        {item.weather[0].description}
                      </div>
                      <div className="text-gray-500">
                        {(item.main.temp_max - 273.15).toFixed(0)}°C /
                        {(item.main.temp_min - 273.15).toFixed(0)}°C
                      </div>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div className="flex flex-row justify-between">
                    <div>Pressure:</div>
                    <div>{item.main.pressure} Pa</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>Humidity:</div>
                    <div>{item.main.humidity} %</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>Clouds:</div>
                    <div>{item.clouds.all} %</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>Wind speed:</div>
                    <div>{item.wind.speed} m/s</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>Sea level:</div>
                    <div>{item.main.sea_level} m</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>Feels like:</div>
                    <div>{(item.main.feels_like - 273.15).toFixed(1)} °C</div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default WeatherForecast;
