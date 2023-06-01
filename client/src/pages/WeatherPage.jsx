import React, { useState } from "react";
import { Footer, Heading } from "../components";
import { styles } from "../styles";
import { Benefit, Weather } from "../components/weatherPg/index";

const WeatherPage = () => {
  const [component, setComponent] = useState(<Weather />);
  return (
    <div className="relative">
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full">
        <Heading />
      </div>
      <div className="bg-white w-full flex flex-col sm:mt-[180px]">
        <div className="flex items-center justify-center">
          <button
            className="bg-blue_theme text-white px-8 py-4 rounded-l-full rounded-r-lg"
            onClick={() => setComponent(<Weather />)}
          >
            Weather
          </button>
          <button
            className="bg-green_theme text-white px-8 py-4 rounded-r-full rounded-l-lg"
            onClick={() => setComponent(<Benefit />)}
          >
            Benefit
          </button>
        </div>
        <div className={`${styles.padding}`}>{component}</div>
      </div>
      <Footer />
    </div>
  );
};

export default WeatherPage;
