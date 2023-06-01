import React, { useEffect, useState } from "react";
import { CustomButton, Footer, Heading } from "../components";
import { styles } from "../styles";
import { facebook1, github, google } from "../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextProvider";

const Login = () => {
  const { setIsLoggedIn, setUserRole } = useGlobalContext();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {}, [loginForm]);

  const handleLogin = (event) => {
    try {
      event.preventDefault();
      axios
        .post("http://localhost:8080/api/v1/users/login", loginForm)
        .then((response) => {
          localStorage.setItem("username", response?.data?.username);
          localStorage.setItem("account_id", response?.data?.id);
          if (response?.data?.userRole === "user") navigate("/");
          if (response?.data?.userRole === "admin") navigate("/admin");
          localStorage.setItem("userRole", response?.data?.userRole);
          // Delete username from localStorage after 1 hour
          setTimeout(() => {
            localStorage.removeItem("username");
            localStorage.removeItem("account_id");
            localStorage.removeItem("userRole");
          }, 60 * 60 * 1000); // 1 hour in milliseconds
        })
        .catch((error) => {
          console.log(error);
        });
      setIsLoggedIn(true);
      console.log(typeof userRole);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full">
        <Heading />
      </div>
      <div className="bg-white flex justify-center items-center w-full flex-col h-[600px] sm:mt-[120px]">
        <div
          className={`bg-gray-300 lg:w-[70%] w-[90%] ${styles.padding} rounded-md`}
        >
          <div className="flex sm:flex-row flex-col justify-between items-center h-full">
            <div
              className={`flex flex-col items-center sm:w-[40%] w-[90%] pb-4`}
            >
              <div className="pb-4 w-full">
                <button className="flex flex-row items-center justify-center bg-red-500 w-full rounded-lg">
                  <img
                    src={google}
                    alt="google"
                    className="p-4 w-[48px] object-cover"
                  />
                  <span>Google</span>
                </button>
              </div>
              <div className="pb-4 w-full">
                <button className="flex flex-row items-center justify-center bg-blue-500 w-full rounded-lg">
                  <img
                    src={facebook1}
                    alt="facebook"
                    className="p-4 w-[48px] object-cover"
                  />
                  <span>Facebook</span>
                </button>
              </div>
              <div className="w-full">
                <button className="flex flex-row items-center justify-center bg-gray-500 w-full rounded-lg">
                  <img
                    src={github}
                    alt="github"
                    className="p-4 w-[48px] object-cover"
                  />
                  <span>Github</span>
                </button>
              </div>
            </div>
            <div className={`h-[70%] w-[1px] bg-black sm:flex hidden`}></div>
            <div className={`flex flex-col `}>
              <div className="p-2">
                <input
                  placeholder="Username"
                  type="text"
                  className="bg-white text-black p-2 border-b-2 w-full"
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="Password"
                  type="password"
                  className="bg-white text-black p-2 border-b-2 w-full"
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
              <CustomButton
                title="Login"
                restStyle="bg-green_theme"
                handleClick={handleLogin}
              />
              <p className="text-black pt-4">
                Don't have an account yet?
                <span>
                  <a href="/register" className="text-blue_theme pl-2">
                    Register
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
