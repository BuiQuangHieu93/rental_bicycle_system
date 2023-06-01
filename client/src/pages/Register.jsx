import React, { useEffect, useState } from "react";
import { CustomButton, Footer, Heading } from "../components";
import { styles } from "../styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePassword = (e) => {
    setConfirmPassword(e);
  };
  useEffect(() => {}, [confirmPassword]);
  useEffect(() => {}, [formRegister]);

  const handleRegister = (event) => {
    try {
      if (confirmPassword === formRegister.password) {
        event.preventDefault();
        axios
          .post("http://localhost:8080/api/v1/users/register", formRegister)
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(error);
          });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full">
        <Heading />
      </div>
      <div
        className={`bg-white-100 w-full flex justify-center items-center ${styles.padding} sm:mt-[120px]`}
      >
        <div className={`sm:w-[40%] w-full  bg-white flex flex-col rounded-sm`}>
          <p
            className={`text-black text-center ${styles.paddingY} font-aria-narrow font-semibold text-[48px]`}
          >
            Register
          </p>
          <div
            className={`flex flex-col ${styles.paddingX} justify-between pb-2`}
          >
            <label className="text-black">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b-2 bg-white text-black p-1"
              onChange={(e) =>
                setFormRegister({ ...formRegister, name: e.target.value })
              }
              required
            />
          </div>
          <div
            className={`flex flex-col ${styles.paddingX} justify-between pb-2`}
          >
            <label className="text-black">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b-2 bg-white  text-black p-1"
              onChange={(e) =>
                setFormRegister({ ...formRegister, password: e.target.value })
              }
              required
            />
          </div>
          <div
            className={`flex flex-col ${styles.paddingX} justify-between pb-2`}
          >
            <label className="text-black">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm your name"
              className="border-b-2 bg-white text-black p-1"
              onChange={(e) => handlePassword(e.target.value)}
              required
            />
          </div>
          <div
            className={`flex flex-col ${styles.paddingX} justify-between pb-2`}
          >
            <label className="text-black">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-2 bg-white text-black p-1"
              onChange={(e) =>
                setFormRegister({ ...formRegister, email: e.target.value })
              }
              required
            />
          </div>
          <p className={`flex ${styles.paddingX} text-black`}>
            Already have an account?{" "}
            <a href="/login" className="text-blue_theme pl-2">
              Log in
            </a>
          </p>
          <div className="pb-4">
            <CustomButton
              title="Register"
              restStyle="bg-blue_theme"
              handleClick={handleRegister}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
