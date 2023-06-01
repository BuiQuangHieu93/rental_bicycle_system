import React from "react";
import { Footer, Heading } from "../components";
import { styles } from "../styles";
import { velibElectric, stationVelib, reparationVelib } from "../assets";

const Discover = () => {
  return (
    <div className="relative">
      <div className="bg-discover-pattern bg-cover bg-no-repeat bg-center w-full h-[720px]">
        <Heading />
        <div
          className={`flex items-center justify-center font-aria-narrow font-semibold text-[52px] ${styles.padding}`}
        >
          <h1 className="-rotate-6 text-center">About EcoCycleGo</h1>
        </div>
      </div>

      <div className={`${styles.padding} bg-white-100 text-black w-full`}>
        <div>
          <h1 className="text-center  text-[52px] font-aria-narrow font-semibold">
            Bike for everyone
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-between w-full">
          <div className={`flex flex-col lg:w-[50%] w-full ${styles.padding}`}>
            <p className="pt-2 pb-2">
              Launched in 2007, EcoCycleGo is a pioneer of bike-sharing service
              in the world.
            </p>
            <p className="pt-2 pb-2">
              EcoCycleGo aims to promote new mobility in the Greater Paris area.
            </p>
            <p className="pt-2 pb-2">
              Our service counts several million journeys each month, making
              EcoCycleGo’ a key operator in public transportation.
            </p>
          </div>
          <div className={`flex flex-col lg:w-[50%] w-full ${styles.padding}`}>
            <p>EcoCycleGo’ in numbers : </p>
            <ul className="list-disc pl-8">
              <li className="pt-2 pb-2">
                1400 docking points in Greater Paris area
              </li>
              <li className="pt-2 pb-2">
                20,000 bicycles, including 40% of electric bikes
              </li>
              <li className="pt-2 pb-2">400,000 subscribers in 2020</li>
              <li className="pt-2 pb-2">
                5.5 million journeys made in September 2020 (one-month record)
              </li>
              <li className="pt-2 pb-2">
                215,000 journeys made on September 11th 2020 (one-day record)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`bg-white flex flex-col w-full justify-center ${styles.padding}`}
      >
        <h1 className="text-[52px] text-black font-semibold font-aria-narrow text-center">
          20,000 self-service bicycles
        </h1>
        <div className={` flex flex-col ${styles.padding} w-full j`}>
          <div className="flex justify-center pb-4">
            <img src={velibElectric} alt="velibElectric" className="w-full" />
          </div>
          <div className="text-black">
            <p className="pt-2 pb-2 text-center">
              Green or Blue EcoCycleGo’? The EcoCycleGo service makes available
              20,000 bicycles–mechanical (green bikes) or electric (green
              bikes).
            </p>
            <p className="pt-2 pb-2 text-center">
              Launched in 2018, electric bikes make getting around easier. They
              are used for more than half the kilometers travelled on
              EcoCycleGo’.
            </p>
            <p className="pt-2 pb-2 text-center font-semibold">
              💡Did you know? At the peak, each bike is use more than 10 times a
              day on average during summer.
            </p>
          </div>
          <div className="flex w-full justify-center pt-8">
            <button
              className="py-3 px-8 rounded-full outline-none w-fit text-blue_theme font-semibold text-center border-blue_theme border-2"
              onClick={() => {}}
            >
              Subscribe to a plan
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-white-100 flex flex-col w-full justify-center ${styles.padding}`}
      >
        <h1 className="text-[52px] text-black font-semibold font-aria-narrow text-center">
          1,400 EcoCycleGo’ docking points in the metropolitan area
        </h1>
        <div className={` flex flex-col ${styles.padding} w-full j`}>
          <div className="flex justify-center pb-4">
            <img src={stationVelib} alt="stationVelib" className="w-full" />
          </div>
          <div className="text-black">
            <p className="pt-2 pb-2 text-center">
              With 1,400 docking points in Paris, and 55 municipalities in the
              metropolitan area, the EcoCycleGo’ service is the world largest
              bike-sharing system, from the end of 2020.
            </p>
            <p className="pt-2 pb-2 text-center">
              The location of the EcoCycleGo stations are examined and chosen by
              the local authorities in order to provide maximum accessibility
              for users and to blend in the public space.
            </p>
            <p className="pt-2 pb-2 text-center font-semibold">
              💡 Did you know? There is a docking point every 300 meters in
              Paris.
            </p>
          </div>
          <div className="flex w-full justify-center pt-8">
            <button
              className="py-3 px-8 rounded-full outline-none w-fit text-blue_theme font-semibold text-center border-blue_theme border-2"
              onClick={() => {}}
            >
              Find a docking point
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-white flex flex-col w-full justify-center ${styles.padding}`}
      >
        <h1 className="text-[52px] text-black font-semibold font-aria-narrow text-center">
          Local employment and environment
        </h1>
        <div className={` flex flex-col ${styles.padding} w-full j`}>
          <div className="flex justify-center pb-4">
            <img
              src={reparationVelib}
              alt="reparationVelib"
              className="w-full"
            />
          </div>
          <div className="text-black">
            <p className="pt-2 pb-2 text-center">
              Smovengo, as operator of EcoCycleGo, employs nearly 500 people for
              the maintenance and regulation of the public service.
            </p>
            <p className="pt-2 pb-2 text-center">
              Most of the manufacturing and assembly of the EcoCycleGo is made
              in France. Fork, handlebars, electronic box, wheels, mudguards and
              basket are all manufactured by French companies.
            </p>
            <p>Our commitments:</p>
            <p>
              🔧 We work with specialized partners to encourage social
              reintegration through employment and train our bike mechanics.
            </p>
            <p>
              ⚡ The fleet of vehicles used for maintenance and regulation is
              100% electric or natural gas based.
            </p>
            <p>
              ♻ The parts of the bicycles are recycled and transformed: tyres
              become belts and inner tubes become bags or wallets.
            </p>
          </div>
          <div className="flex w-full justify-center pt-8">
            <button
              className="py-3 px-8 rounded-full outline-none w-fit text-blue_theme font-semibold text-center border-blue_theme border-2"
              onClick={() => {}}
            >
              See job offers
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
