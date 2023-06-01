import React from "react";
import { styles } from "../styles";
import { CustomButton, Footer, Heading, BikeCanvas } from "../components";
import {
  carter,
  bikeIcon,
  locationIcon,
  mechanical,
  eclair,
  velo,
} from "../assets";
import { features } from "../constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full">
        <Heading />
        {/* sub-heading */}
        <div
          className={`flex flex-row flex-wrap justify-around ${styles.paddingY} justify-between pr-28 pl-28 mt-[120px]`}
        >
          <div className="w-[33.333333%] pl-[15px] pr-[15px] mt-[10px] mb-[10px] min-w-[326px]">
            <div className="bg-white w-full h-full flex flex-col p-[40px] rounded-xl ">
              <div className="flex flex-col">
                <div className="text-black text-center text-[42px] font-bold font-aria-narrow">
                  Tickets
                </div>
                <h4 className="text-black text-center mb-[8px] font-semibold text-[24px]">
                  1 or 3 days
                </h4>
              </div>
              <div className=" text-black text-center mt-4 min-h-[60px]">
                Bike around the city for a ride or a few days
              </div>
              <CustomButton
                title="Discover"
                restStyle="bg-green_theme"
                handleClick={() => navigate("/subscribe#subscription")}
              />
            </div>
          </div>
          <div className="w-[33.333333%] pl-[15px] pr-[15px] mt-[10px] mb-[10px] min-w-[326px]">
            <div className="bg-white w-full h-full flex flex-col p-[40px] rounded-xl">
              <div className="flex flex-col">
                <div className="text-black text-center text-[42px] font-bold font-aria-narrow">
                  Subscription
                </div>
                <h4 className="text-black text-center mb-[8px] font-semibold text-[24px]">
                  12 months
                </h4>
              </div>
              <div className=" text-black text-center mt-4 min-h-[60px]">
                Find the subscription that suits you
              </div>
              <CustomButton
                title="Subscribe"
                restStyle="bg-green_theme"
                handleClick={() => navigate("/subscribe#subscription_day")}
              />
            </div>
          </div>
          <div className="w-[33.333333%] pl-[15px] pr-[15px] mt-[10px] mb-[10px] min-w-[326px] ">
            <div className="bg-white w-full h-full flex flex-col rounded-xl">
              <div className="bg-blue_theme flex flex-col pt-[40px] pb-[40px] rounded-xl">
                <div className="">
                  <div className="text-center mb-2 text-[20px] font-semibold">
                    Already subscribed?
                  </div>
                  <a href="/login">
                    <CustomButton
                      title="Log in"
                      restStyle="bg-dark_blue_theme"
                    />
                  </a>
                </div>
              </div>
              <div className="h-[1px] w-full bg-white"></div>
              <div className="bg-blue_theme pb-[40px] pr-[40px] pl-[40px] flex flex-col pt-4 rounded-xl">
                <div className="">
                  <div className="text-center">
                    {" "}
                    First time using EcoCycleGo’?
                  </div>
                  <CustomButton
                    title="Get started"
                    restStyle="bg-dark_blue_theme"
                    handleClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* body-1 */}
      <div className="flex flex-row flex-wrap justify-around bg-white items-center">
        <div className="flex flex-col pt-8 pb-8">
          <div className="flex flex-row items-center">
            <img src={bikeIcon} alt="bike-icon" />
            <h4 className="text-[24px] text-blue_theme">USE EcoCycleGo</h4>
          </div>
          <div className="mt-2 text-black">
            All you need to know to use EcoCycleGo in 5 minutes.
          </div>
          <CustomButton
            title="See tutorial"
            restStyle="bg-green_theme"
            handleClick={() => {}}
          />
        </div>
        <div className="flex flex-col pt-8 pb-8">
          <div className="flex flex-row items-center">
            <img src={locationIcon} alt="bike-icon" />
            <h4 className="text-[24px] text-blue_theme">
              MAP OF DOCKING POINTS
            </h4>
          </div>
          <div className="mt-2 text-black">Find a EcoCycleGo around you.</div>
          <a>
            {" "}
            <CustomButton
              title="See docking points"
              restStyle="bg-green_theme"
            />
          </a>
        </div>
        <div className="lg:flex flex-col pt-8 pb-8 hidden">
          <img src={carter} alt="carter" />
        </div>
      </div>
      {/* body 2 */}
      <div className="bg-white w-full">
        <BikeCanvas className="h-[600px]" />
      </div>

      <Footer />
    </div>
  );
};
export default Home;
