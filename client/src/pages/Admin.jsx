import React, { useState, useEffect } from "react";
import {
  Account,
  Bike,
  Chart,
  Contact,
  Station,
} from "../components/adminComponents/index";
import { styles } from "../styles";
import { logoBlack } from "../assets";
import { useGlobalContext } from "../contextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const [component, setComponent] = useState(<Account />);
  const [username, setUsername] = useState();
  const { userRole } = useGlobalContext();
  const navigate = useNavigate();

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
  };

  return (
    <>
      <div className="flex flex-row">
        <nav className="w-[10%] min-h-screen bg-white">
          <ul className="bg-white">
            <li>
              <button className="w-full h-full">
                <img src={logoBlack} alt="logo" />
              </button>
            </li>
            <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
              <button
                onClick={() => setComponent(<Account />)}
                className="w-full h-full"
              >
                Account
              </button>
            </li>
            <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
              <button
                onClick={() => setComponent(<Station />)}
                className="w-full h-full"
              >
                Station
              </button>
            </li>
            <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
              <button
                onClick={() => setComponent(<Bike />)}
                className="w-full h-full"
              >
                Bike
              </button>
            </li>
            <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
              <button
                onClick={() => setComponent(<Contact />)}
                className="w-full h-full"
              >
                Contact
              </button>
            </li>
            <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
              <button
                onClick={() => setComponent(<Chart />)}
                className="w-full h-full"
              >
                Chart
              </button>
            </li>
            {username ? (
              <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
                <button className="w-full h-full text-center">
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
              <li className="text-black bg-slate-300 p-4 rounded-lg mb-1 hover:bg-slate-400">
                <button className="w-full h-full text-center">
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
