import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { logoBlack, people, logoColor, close, menu } from "../assets";
import { useGlobalContext } from "../contextProvider";

const Heading = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState();
  const { setIsLoggedIn, setUserRole } = useGlobalContext();

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 48) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setUserRole(null);
    localStorage.removeItem("account_id");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUsername(null);
      setUserRole(null);
      localStorage.removeItem("account_id");
      setIsLoggedIn(false);
    }, 60 * 60 * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <div className={`lg:flex hidden w-full z-10`}>
        <div
          className={`w-full items-center justify-center bg-white fixed ${
            styles.paddingX
          } ${isFixed ? "" : "pt-2 pb-2"}`}
        >
          <div className={`w-full flex flex-row justify-between `}>
            <div
              className={`bg-white w-full flex flex-row items-center justify-around text-black font-aria-narrow text-[22px] rounded-l-full`}
            >
              <a href="/" className="h-full w-full">
                <img
                  src={isFixed ? logoBlack : logoColor}
                  alt="logo"
                  className="h-[124px] object-cover rounded-full"
                />
              </a>

              <a
                href="/weather"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px]"
              >
                Discover
              </a>

              <a
                href="/subscribe"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px]"
              >
                Subscribe to a plan
              </a>

              <a
                href="/map"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px]"
              >
                Find a docking point
              </a>

              <a
                href="/contact"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px]"
              >
                Contact
              </a>
            </div>
            {username ? (
              <button
                className="bg-cerulean w-[20%] flex flex-row justify-center items-center"
                onClick={() => handleLogout()}
              >
                <a href="/login">
                  <div>
                    <img
                      src={people}
                      alt="people"
                      className="w-[47px] h-[47px] p-1"
                    />
                  </div>
                  <h4 className="font-medium text-white">{username}</h4>
                </a>
              </button>
            ) : (
              <a
                className="bg-cerulean w-[20%] flex flex-row justify-center items-center"
                href="/login"
              >
                <div>
                  <img src={people} alt="people" />
                </div>
                <h4 className="font-medium text-white">Log in</h4>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-1 justify-end items-center z-10">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[52px] h-[52px] object-contain cursor-pointer pt-4 pr-4"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl w-64`}
        >
          <ul className="list-non flex justify-end items-start flex-col gap-4 text-black font-aria-narrow text-[20px]">
            <li
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href="/">
                <img
                  src={logoBlack}
                  alt="logo"
                  className="min-h-[124px] object-contains rounded-full"
                />
              </a>
            </li>
            <li
              className="w-full"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a
                href="/weather"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px] p-2"
              >
                Discover EcoCycleGo
              </a>
            </li>
            <li
              className="w-full"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a
                href="/subscribe"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px] p-2"
              >
                Subscribe to a plan
              </a>
            </li>
            <li
              className="w-full"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a
                href="/map"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px] p-2"
              >
                Find a docking point
              </a>
            </li>
            <li
              className="w-full"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a
                href="/contact"
                className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px] p-2"
              >
                Contact EcoCycleGo
              </a>
            </li>
            {username ? (
              <li
                className="w-full p-2"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a
                  onClick={() => handleLogout()}
                  className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px] p-2"
                  href="/login"
                >
                  {username}
                </a>
              </li>
            ) : (
              <li
                className="w-full p-2"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a
                  href="/login"
                  className="flex justify-center items-center w-full h-full text-black font-aria-narrow text-[22px] p-2"
                >
                  Log in
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heading;
