import React, { useState, useEffect } from "react";
import {
  Account,
  Bike,
  Chart,
  Contact,
  Station,
} from "../components/adminComponents/index";
import { styles } from "../styles";
import { bikeStation, logoBlack } from "../assets";
import { useGlobalContext } from "../contextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const [component, setComponent] = useState(<Account />);
  const [username, setUsername] = useState();
  const { userRole } = useGlobalContext();
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserRole } = useGlobalContext();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "user") navigate("/");
  }, [userRole]);

  useEffect(() => {
    console.log(component);
  }, [component]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    localStorage.removeItem("account_id");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem("username");
      setUsername(null);
      localStorage.removeItem("account_id");
      setIsLoggedIn(false);
    }, 60 * 60 * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <nav className="w-[10%] min-h-screen px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="bg-white space-y-2 font-medium">
            <li>
              <button
                className="w-full h-full"
                onClick={() => navigate("/admin")}
              >
                <img src={logoBlack} alt="logo" />
              </button>
            </li>
            <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
              <button
                onClick={() => setComponent(<Account />)}
                className="w-full h-full flex items-center"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ml-3">Account</span>
              </button>
            </li>
            <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
              <button
                onClick={() => setComponent(<Station />)}
                className="w-full h-full flex items-center"
              >
                <img
                  src={bikeStation}
                  alt="bikeStation"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="ml-3">Station</span>
              </button>
            </li>
            <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
              <button
                onClick={() => setComponent(<Bike />)}
                className="w-full h-full flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />{" "}
                </svg>
                <span className="ml-3">Bike</span>
              </button>
            </li>
            <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
              <button
                onClick={() => setComponent(<Contact />)}
                className="w-full h-full flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
                </svg>
                <span className="ml-3">Contact</span>
              </button>
            </li>
            <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
              <button
                onClick={() => setComponent(<Chart />)}
                className="w-full h-full flex items-center"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Chart</span>
              </button>
            </li>

            {username ? (
              <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
                <button className="w-full h-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <polygon
                      fill="var(--ci-primary-color, currentColor)"
                      points="77.155 272.034 351.75 272.034 351.75 272.033 351.75 240.034 351.75 240.033 77.155 240.033 152.208 164.98 152.208 164.98 152.208 164.979 129.58 142.353 15.899 256.033 15.9 256.034 15.899 256.034 129.58 369.715 152.208 347.088 152.208 347.087 152.208 347.087 77.155 272.034"
                      class="ci-primary"
                    />
                    <polygon
                      fill="var(--ci-primary-color, currentColor)"
                      points="160 16 160 48 464 48 464 464 160 464 160 496 496 496 496 16 160 16"
                      class="ci-primary"
                    />
                  </svg>
                  <a
                    onClick={() => handleLogout()}
                    className="w-full h-full"
                    href="/login"
                  >
                    {username}
                  </a>
                </button>
              </li>
            ) : (
              <li className="text-gray-900 bg-slate-300 p-2 rounded-lg dark:text-white hover:bg-slate-400 group">
                <button className="w-full h-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  <a href="/login" className="w-full h-full">
                    Log in
                  </a>
                </button>
              </li>
            )}
          </ul>
        </nav>

        <div className="w-[90%] bg-orange-100 flex justify-center items-center">
          <div
            className={`bg-white rounded-lg w-[97%] h-[97%] ${styles.padding} text-black`}
          >
            {component}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
