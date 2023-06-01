import React, { useEffect, useState } from "react";
import { Heading, Footer, CircularProgress } from "../components";
import axios from "axios";
import { useGlobalContext } from "../contextProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Map, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Marker,
  Popup,
  useControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SearchBox } from "@mapbox/search-js-react";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import {
  subscriptions,
  subscriptions_single,
  subscriptions_index,
  subscription_ticket_index,
} from "../constants/index";

import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const MapPage = () => {
  const [selected, setSelected] = useState(null);
  const [station, setStation] = useState();
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
  const [searchViewState, setSearchViewState] = useState({
    latitude: center.lat,
    longitude: center.lng,
    zoom: 14,
  });
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
        toast.success("Bike rented successfully");
        setOpen(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to rent bike");
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
      toast.success("Bike returned successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to return bike");
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

  const handleRetrieve = (res) => {
    console.log(
      res.features[0].geometry.coordinates[0],
      res.features[0].geometry.coordinates[1]
    );

    setSearchViewState({
      ...searchViewState,
      longitude: res.features[0].geometry.coordinates[0],
      latitude: res.features[0].geometry.coordinates[1],
      zoom: 14,
    });
  };

  const findNumberBike = (stationId) => {
    return bikeList.filter((bike) => bike.bike_station === stationId).length;
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="bg-home-pattern bg-cover bg-no-repeat bg-center w-full pb-10">
        <Heading />
      </div>
      <div className="relative sm:mt-[120px]">
        <div className="flex w-full justify-center">
          <Map
            {...searchViewState}
            style={{ width: "100%", height: "500px" }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken="pk.eyJ1IjoiaGlldWJ1aTIxMTEiLCJhIjoiY2xoYnNyZTZhMDhzcDNlazFtN29sYWE2cSJ9.qoIL5LR1bQqLYKHwhN9gLA"
            transitionDuration="200"
            onMove={(evt) => setSearchViewState(evt.viewState)}
          >
            <NavigationControl />
            <GeolocateControl />
            <FullscreenControl position="bottom-right" />

            {station?.map((station) => (
              <React.Fragment key={station?._id}>
                <Marker
                  longitude={station.station_lng}
                  latitude={station.station_lat}
                >
                  <button onClick={() => handleClick(station)}>
                    <div>
                      <CircularProgress
                        progress={
                          findNumberBike(station._id) / station.station_park
                        }
                        title={findNumberBike(station._id)}
                      />
                    </div>
                  </button>
                </Marker>
                {open && selected && selected._id === station._id && (
                  <Popup
                    latitude={selected.station_lat}
                    longitude={selected.station_lng}
                    anchor="bottom"
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => {
                      setOpen(false);
                      setSelected(null);
                    }}
                    maxWidth="310px"
                  >
                    <div className="w-72 text-black">
                      <h2 className="font-bold mb-4 text-lg text-center">
                        {selected.station_name}
                      </h2>
                      {bike?.map((bike) => (
                        <div
                          className="flex items-center justify-between mb-2"
                          key={bike?._id}
                        >
                          <div className="bg-gray-200 px-3 py-2 rounded-lg text-center">
                            {bike?._id}
                          </div>
                          <div>
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => handleRent(bike)}
                            >
                              <p>Rent Bike</p>
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="flex w-full justify-center">
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          onClick={handleReturnBike}
                        >
                          Return Bike
                        </button>
                      </div>
                    </div>
                  </Popup>
                )}
              </React.Fragment>
            ))}
          </Map>
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
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={(res) => handleClickPay(res)}
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-0 right-0 w-full flex justify-center items-center">
          <div className="bg-white">
            <SearchBox
              accessToken="pk.eyJ1IjoiaGlldWJ1aTIxMTEiLCJhIjoiY2xoYnNyZTZhMDhzcDNlazFtN29sYWE2cSJ9.qoIL5LR1bQqLYKHwhN9gLA"
              value={value}
              onChange={(v) => {
                setValue(v);
                console.log("change", v);
              }}
              onSuggest={(res) => console.log("Suggest", res)}
              onSuggestError={(res) => console.log("Suggest Error", res)}
              onRetrieve={(res) => handleRetrieve(res)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapPage;
