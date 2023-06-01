import React from "react";
import { styles } from "../styles";
import { download, facebook, twitter, insta, youtube } from "../assets";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <div className={`${styles.padding} bg-blue_theme flex flex-col`}>
      <div className="flex flex-row flex-wrap justify-around w-full">
        <div className={`flex flex-col items-center ${styles.padding}`}>
          <div className="font-semibold font-aria-narrow text-[48px] text-center">
            EcoCycleGo
          </div>
          <p className="pt-4 text-[20px]">Who are we ?</p>
          <p className="pb-2 text-[20px]">Discover EcoCycleGo</p>
          <button
            className="py-3 px-8 rounded-full outline-none w-fit text-white font-semibold text-center border-white border-2"
            onClick={() => {}}
          >
            More information
          </button>
        </div>

        <div className={`flex flex-col items-center ${styles.padding}`}>
          <div className="font-semibold font-aria-narrow text-[48px] text-center">
            CONTACTS
          </div>
          <p className="text-[32px]">PRESS</p>
          <p className="pt-4 text-[18px]">Bui Quang Hieu</p>
          <p className="pb-2 text-[20px]">ITITIU18286@studednt.hcmiu.edu.vn</p>
        </div>

        <div className={`flex flex-col items-center ${styles.padding}`}>
          <div className="font-semibold font-aria-narrow text-[48px] text-center">
            TERMS & CONDITIONS
          </div>
          <div>
            <button
              className="py-3 px-8 rounded-full outline-none w-fit text-white font-semibold text-center border-white border-2"
              onClick={() => {}}
            >
              Terms & conditions - Subscriptions
            </button>
          </div>
          <div className="pt-8">
            <button
              className="py-3 px-8 rounded-full outline-none w-fit text-white font-semibold text-center border-white border-2"
              onClick={() => {}}
            >
              Terms & conditions - Pass
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-1"></div>

      <div className={`flex flex-row ${styles.padding} w-full justify-around`}>
        <img src={download} alt="illusApp" className="md:block hidden" />
        <div className="flex flex-col items-center justify-center pr-8 pl-8">
          <h1 className="font-semibold font-aria-narrow text-[52px] text-center">
            Download the EcoCycleGo app
          </h1>
          <div className="flex flex-row lg:w-[70%] w-full justify-around pb-8">
            <CustomButton
              title="iOS"
              restStyle="bg-green_theme"
              handleClick={() => {}}
            />
            <CustomButton
              title="Android"
              restStyle="bg-green_theme"
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-1 -mt-16"></div>

      <div
        className={`flex flex-row flex-wrap ${styles.padding} w-full justify-around`}
      >
        <div className="flex flex-col md:w-[40%] w-[70%]">
          <h4>Follow us</h4>
          <div className="flex flex-row lg:w-[50%] w-full pt-4 justify-between">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={insta} alt="insta" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="flex flex-col items-center pt-8">
          <div>
            <button
              className="py-3 px-8 rounded-full outline-none w-fit text-white font-semibold text-center border-white border-2"
              onClick={() => {}}
            >
              Contact the Ombudsman
            </button>
          </div>
          <h3 className="pt-3 text-center">
            © 2021 Smovengo / Syndicat Autolib' EcoCycleGo
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
