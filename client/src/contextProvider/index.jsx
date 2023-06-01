import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [formRentBike, setFormRentBike] = useState({
    account_id: "",
    station_id: "",
    bike_id: "",
  });
  const [list, setList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    console.log(formRentBike);
  }, [formRentBike]);
  const arrayList = [];

  return (
    <GlobalContext.Provider
      value={{
        username,
        setUsername,
        formRentBike,
        setFormRentBike,
        arrayList,
        list,
        setList,
        isLoggedIn,
        setIsLoggedIn,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
