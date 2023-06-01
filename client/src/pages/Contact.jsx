import React from "react";
import { Form, Footer, Heading } from "../components";
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className="relative">
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full">
        <Heading />
      </div>
      <div className="bg-contact-pattern flex justify-center items-center w-full flex-col sm:mt-[120px]">
        <div className="bg-white border-t-4 flex flex-col text-black">
          <div className={`${styles.padding} text-center`}>
            <h1 className="-rotate-6 font-semibold font-aria-narrow text-[52px]">
              CUSTOMER SERVICE
            </h1>
          </div>
          <div className="text-center text-[24px]">+84 (0)123 456 789</div>
          <p className={`${styles.padding} text-center`}>
            Service available Monday to Friday from 08:00 to 22:00, Saturday
            from 09:00 to 22:00, Sunday and public holidays from 09:00 to 19:00.
          </p>
          <p className="pt-4 text-center">Local call rates may apply</p>
          <p className="pt-8 text-center text-[32px] font-aria-narrow">
            Contact form
          </p>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
