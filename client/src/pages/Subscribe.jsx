import React, { useState, useEffect } from "react";
import { CustomButton, Footer, Heading } from "../components";
import { styles } from "../styles";
import {
  subscriptions,
  subscriptions_single,
  subscriptions_index,
  subscription_ticket_index,
} from "../constants";
import { veloMeca, closeBlack } from "../assets";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Subscribe = () => {
  const [subIndex, setSubIndex] = useState("");
  const [subTicketIndex, setSubTicketIndex] = useState("");
  const [value, setValue] = useState("");
  const [valueTicket, setValueTicket] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleTicket, setToggleTicket] = useState(false);

  const handleIndex = (index) => {
    setSubIndex(index);
  };

  useEffect(() => {
    const subscription_detail = subscriptions_index.find(
      (subscription) => subscription.index === subIndex
    );
    setValue(subscription_detail);
  }, [subIndex]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleTicketIndex = (index) => {
    setSubTicketIndex(index);
  };
  useEffect(() => {
    const subscription_detail = subscription_ticket_index.find(
      (subscription) => subscription.index === subTicketIndex
    );
    setValueTicket(subscription_detail);
  }, [subTicketIndex]);

  useEffect(() => {
    console.log(value);
  }, [valueTicket]);

  const handleSubscribe = (title) => {
    try {
      const subscriptionPlan =
        subscriptions.find((plan) => plan.type === title) ||
        subscriptions_single.find((plan) => plan.title === title);
      const price = parseInt(subscriptionPlan.price.split(" ")[0]);

      axios
        .put("http://localhost:8080/api/v1/users/subscribe", {
          title: title,
          id: localStorage.getItem("account_id"),
          price: price,
        })
        .then((response) => {
          console.log(response?.data.user.account_type);
        });
      toast.success("Register successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to register");
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="bg-subscribe-pattern bg-cover bg-no-repeat bg-center w-full min-h-[600px] relative z-10">
        <Heading />
        <div
          className={`flex items-center justify-center font-aria-narrow font-semibold text-[52px] ${styles.padding} absolute w-full mt-[205px] z-0`}
        >
          <h1 className="-rotate-6 text-center text-white">
            SUBSCRIBE TO A PLAN
          </h1>
        </div>
      </div>

      <div
        className={`bg-white-100 w-full text-black ${styles.padding}`}
        id="subscription"
      >
        <h1 className="font-semibold font-aria-narrow text-[52px] text-center">
          SUBSCRIPTION
        </h1>
        <h4 className="text-center">12 months commitment</h4>
        <div className="flex lg:flex-row flex-col justify-around">
          {subscriptions.map((subscription) => (
            <div
              className="flex flex-col p-5 lg:w-[33.333333%] w-full"
              key={subscription.index}
            >
              <div className="flex flex-col bg-white rounded-lg p-2">
                <div className="text-center font-semibold font-aria-narrow text-[24px]">
                  {subscription.type}
                </div>
                <div className="text-center font-semibold text-green_theme text-[20px]">
                  {subscription.price}
                </div>
              </div>
              <div className="bg-white mt-1 rounded-lg p-4">
                <div className="min-h-[160px]">
                  {subscription.features.map((feature, index) => (
                    <div key={index}>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  {" "}
                  <CustomButton
                    title="Learn More"
                    restStyle="bg-green_theme"
                    handleClick={() => {
                      handleIndex(subscription.index);
                      setToggle(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {value ? (
          <div className={`bg-white ${toggle ? "block" : "hidden"}`}>
            <div className="flex justify-end">
              <button className="p-5" onClick={() => setToggle(false)}>
                <img src={closeBlack} alt="close" />
              </button>
            </div>
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%] text-center text-[48px]  font-semibold font-aria-narrow">
                {value.title}
              </div>
              <div className="flex flex-col text-[24px] w-full">
                <div className="flex flex-row p-5 w-full justify-around">
                  <div className="pr-5">
                    <img src={veloMeca} alt="veloMeca" />
                  </div>
                  <div className="flex flex-col pr-5">
                    <div className="p-2">{value.meca_time}</div>
                    <div className="p-2 text-green_theme font-semibold text-center">
                      {value.meca_price}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-2">Extra</div>
                    <div className="p-2 font-semibold">
                      <span className="text-green_theme">
                        {value.meca_extra_price}
                      </span>{" "}
                      / 30min
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <CustomButton
                title="Subscribe"
                restStyle="bg-green_theme"
                handleClick={() => handleSubscribe(value.title)}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        className={`bg-white w-full text-black ${styles.padding} `}
        id="subscription_day"
      >
        <h1 className="font-semibold font-aria-narrow text-[52px] text-center">
          SINGLE RIDE OR DAY PASS
        </h1>
        <h4 className="text-center">
          Bike around the city for a ride or a few days
        </h4>
        <div className="flex lg:flex-row flex-col justify-around">
          {subscriptions_single.map((subscription) => (
            <div
              className="flex flex-col flex-wrap p-5 lg:w-[50%] w-full"
              key={subscription.index}
            >
              <div className="flex flex-col bg-white-100 rounded-lg p-2">
                <div className="text-center font-semibold font-aria-narrow text-[24px]">
                  {subscription.type}
                </div>
                <div className="text-center font-semibold text-blue_theme text-[20px]">
                  {subscription.price}
                </div>
              </div>
              <div className="bg-white-100 mt-1 rounded-lg p-4">
                <div className="min-h-[180px]">
                  {subscription.features.map((feature, index) => (
                    <div key={index}>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  {" "}
                  <CustomButton
                    title="Learn More"
                    restStyle="bg-blue_theme"
                    handleClick={() => {
                      handleTicketIndex(subscription.index);
                      setToggleTicket(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {valueTicket ? (
          <div className={`bg-white-100 ${toggleTicket ? "block" : "hidden"}`}>
            <div className="flex justify-end">
              <button className="p-5" onClick={() => setToggleTicket(false)}>
                <img src={closeBlack} alt="close" />
              </button>
            </div>
            <div className="flex flex-row w-full items-center">
              <div className="w-[50%] text-center text-[48px]  font-semibold font-aria-narrow">
                {valueTicket.title}
              </div>
              <div className="flex flex-col text-[24px] w-full">
                <div className="flex flex-row p-5 w-full justify-around">
                  <div className="pr-5">
                    <img src={veloMeca} alt="veloMeca" />
                  </div>
                  <div className="flex flex-col pr-5">
                    <div className="p-2">{valueTicket.meca_time}</div>
                    <div className="p-2 text-green_theme font-semibold text-center">
                      {valueTicket.meca_price}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-2">Extra</div>
                    <div className="p-2 font-semibold">
                      <span className="text-green_theme">
                        {valueTicket.meca_extra_price}
                      </span>{" "}
                      / 30min
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <CustomButton
                title="Subscribe"
                restStyle="bg-blue_theme"
                handleClick={() => handleSubscribe(valueTicket.title)}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Subscribe;
