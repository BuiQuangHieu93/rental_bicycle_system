import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Discover,
  Subscribe,
  Contact,
  Login,
  MapPage,
  Register,
  Admin,
  WeatherPage,
} from "./pages";
import { GlobalContextProvider } from "./contextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};

export default App;
