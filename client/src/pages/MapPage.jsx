import React, { useEffect, useState, useRef } from "react";
import { Heading, Footer, CircularProgress } from "../components";
import axios from "axios";
import { useGlobalContext } from "../contextProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { renderToString } from "react-dom/server"; // Import the minified version

import {
  subscriptions,
  subscriptions_single,
  subscriptions_index,
  subscription_ticket_index,
} from "../constants/index";
import { closeBlack } from "../assets";

const MapPage = () => {
  const [selected, setSelected] = useState(null);
  const [station, setStation] = useState([]);
  const [bike, setBike] = useState();
  const [open, setOpen] = useState(false);
  const { formRentBike, setFormRentBike } = useGlobalContext();
  const [fee, setFee] = useState({
    subscriptionType: "",
    timeTravel: null,
  });
  const [feeSend, setFeeSend] = useState({ fee: null, id: "" });
  const [openFee, setOpenFee] = useState(false);
  const [value, setValue] = React.useState("");
  const [bikeList, setBikeList] = useState();

  const center = {
    lat: 10.8813279,
    lng: 106.8060503,
  };

  const handleClick = (marker) => {
    const newMarker = marker;
    console.log("Station", newMarker);
    setSelected(newMarker);
    setOpen(true);
    axios
      .get(`http://localhost:8080/api/v1/stations/station/${newMarker?._id}`)
      .then((response) => {
        setBike(response?.data);
        console.log(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/stations/")
      .then((response) => {
        setStation(response?.data.stations);
        setBikeList(response?.data.bikes);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRent = async (e) => {
    console.log(e);
    if (e?.bike_status) {
      console.log("I'm here");
      const updatedFormRentBike = {
        station_id: e.bike_station,
        bike_id: e._id,
        account_id: localStorage.getItem("account_id"),
      };
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/rentBike",
          updatedFormRentBike
        );
        console.log(response);
        setFormRentBike(updatedFormRentBike);
        toast.success("Bike rented successfully", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setOpen(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to rent bike", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    } else {
      alert("Bike not available, please select another bike...!");
    }
  };

  const handleReturnBike = async () => {
    const updatedFormRentBike = {
      ...formRentBike,
      station_id: selected?._id,
    };
    await setFormRentBike(updatedFormRentBike);
    console.log(updatedFormRentBike);
    try {
      const response = await axios
        .post("http://localhost:8080/api/v1/returnBike", updatedFormRentBike)
        .then((response) => {
          setFee({
            ...fee,
            subscriptionType: response?.data.feeAccount.account_type,
            timeTravel: response?.data.timeTravel,
          });
        });
      setOpen(false);

      setOpenFee(true);
      toast.success("Bike returned successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to return bike", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const calculateFee = (subscriptionType, timeTravel) => {
    let fee = 0;
    const subscriptionPlan =
      subscriptions_index.find((plan) => plan.title === subscriptionType) ||
      subscription_ticket_index.find((plan) => plan.title === subscriptionType);

    if (subscriptionPlan) {
      const {
        meca_time: mecaTimeStr,
        meca_price: mecaPriceStr,
        meca_extra_price: mecaExtraPriceStr,
      } = subscriptionPlan;
      const mecaTime = parseInt(mecaTimeStr.split("-")[1], 10);
      const mecaPrice =
        mecaPriceStr === "free" ? 0 : parseFloat(mecaPriceStr.split(" ")[0]);
      const mecaExtraPrice = parseFloat(mecaExtraPriceStr.split(" ")[0]);

      if (timeTravel <= mecaTime) {
        fee = mecaPrice;
      } else {
        const extraTime = Math.ceil((timeTravel - mecaTime) / 30);
        fee = mecaPrice + mecaExtraPrice * extraTime;
      }
    }

    return fee.toFixed(2) + " €";
  };

  const handleClickPay = () => {
    try {
      setOpenFee(false);
      axios.put("http://localhost:8080/api/v1/users/fee", feeSend);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFeeSend({
      ...feeSend,
      fee: parseInt(
        calculateFee(fee.subscriptionType, fee.timeTravel).split(" ")[0]
      ),
      id: localStorage.getItem("account_id"),
    });
  }, []);

  const findNumberBike = (stationId) => {
    return bikeList.filter((bike) => bike.bike_station === stationId).length;
  };

  const mapContainerRef = useRef(null);
  const directionsContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGlldWJ1aTIxMTEiLCJhIjoiY2xoYnNyZTZhMDhzcDNlazFtN29sYWE2cSJ9.qoIL5LR1bQqLYKHwhN9gLA";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [center.lng, center.lat],
      zoom: 15,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/cycling",
      container: directionsContainerRef.current,
      congestion: true,
      language: "en",
      zoom: 15,
    });

    map.addControl(directions, "top-left");
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl());
    map.addControl(new mapboxgl.FullscreenControl());

    station.forEach((station) => {
      const markerElement = document.createElement("div");
      console.log(findNumberBike(station._id), station.station_park);
      const progress = findNumberBike(station._id) / station.station_park;
      const title = findNumberBike(station._id);

      const CircularProgressComponent = (
        <CircularProgress key={station._id} progress={progress} title={title} />
      );

      markerElement.innerHTML = renderToString(CircularProgressComponent);

      markerElement.addEventListener("click", () => {
        handleClick(station);
      });

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${station.station_name}</h3>`
      );

      new mapboxgl.Marker(markerElement)
        .setLngLat([station.station_lng, station.station_lat])
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [station]);

  return (
    <div className="relative">
      <ToastContainer />
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full pb-10">
        <Heading />
      </div>
      <div className="relative sm:mt-[120px]">
        <div className="flex w-full justify-center">
          <>
            <div
              ref={mapContainerRef}
              style={{ width: "100%", height: "585px" }}
              id="mapContainer"
            />
            <div ref={directionsContainerRef} />
          </>
        </div>
        {openFee && (
          <div>
            <div className="absolute bg-slate-700 opacity-70 top-0 right-0 h-full w-full"></div>
            <div className="absolute top-0 right-0 h-full w-full z-10">
              <div className="flex h-full w-full items-center justify-center">
                <div className="bg-white text-black p-4">
                  <div className="py-4">
                    The cost for your journey amounts to{" "}
                    {fee &&
                      calculateFee(fee?.subscriptionType, fee?.timeTravel)}
                  </div>
                  <div className="flex w-full justify-center">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      onClick={handleClickPay}
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-4 text-black">
            <div className="flex w-full flex-row-reverse pb-4">
              <button onClick={() => setOpen(false)}>
                <img src={closeBlack} alt="close" />
              </button>
            </div>
            <div>
              <div className="font-bold text-lg">
                Station: {selected?.station_name}
              </div>
              <div className="my-2">
                Bikes Available: {findNumberBike(selected._id)}
              </div>
              <div className="my-2">
                Parks Available:
                {selected?.station_park - findNumberBike(selected._id)}
              </div>

              <div>
                {bike?.map((bike) => (
                  <div
                    key={bike.bike_id}
                    className="flex flex-row justify-between items-center pb-2"
                  >
                    <div>{bike.bike_code}</div>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
                      onClick={() => handleRent(bike)}
                    >
                      Rent Bike
                    </button>
                  </div>
                ))}
                <div className="flex w-full justify-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
                    onClick={handleReturnBike}
                  >
                    Return Bike
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MapPage;
