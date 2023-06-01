import React, { useState, useEffect } from "react";
import axios from "axios";
import { edit, remove, closeBlack } from "../../assets";
import { styles } from "../../styles";
import ReactPaginate from "react-paginate";

const Station = () => {
  const [station, setStation] = useState();
  const [openForm, setOpenForm] = useState(false);
  const [stationSend, setStationSend] = useState({
    lat: 0,
    lng: 0,
    status: true,
  });
  const [formUpdate, setFromUpdate] = useState({
    station_name: "",
    station_lat: "",
    station_lng: "",
    station_status: null,
    id: "",
  });
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const stationsPerPage = 5;
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayedStations = station?.slice(
    pageNumber * stationsPerPage,
    (pageNumber + 1) * stationsPerPage
  );

  useEffect(() => {}, [stationSend]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/stations/")
      .then((response) => {
        setStation(response?.data.stations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/stations/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchData(); // Fetch updated station list
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/stations/")
      .then((response) => {
        setStation(response.data.stations);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAdd = () => {
    axios
      .post("http://localhost:8080/api/v1/stations/add", stationSend)
      .then((response) => {
        setStation(response.data.stations);
        fetchData();
        setOpenForm(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = (station) => {
    setFromUpdate({
      station_name: station.station_name,
      station_lat: station.station_lat,
      station_lng: station.station_lng,
      station_status: station.station_status,
      id: station._id,
    });
    setOpenFormEdit(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/stations/update/`, formUpdate)
      .then((response) => {
        fetchData();
        setOpenFormEdit(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div>Manager Stations</div>

      <table className="w-full text-sm text-left text-gray-500 mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Lat
            </th>
            <th scope="col" className="px-6 py-3">
              Lng
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayedStations?.map((station, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={station._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {station._id}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {station.station_name}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {station.station_lat}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {station.station_lng}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {station.station_status ? "Available" : "Not available"}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <button
                  className="flex flex-row"
                  onClick={() => handleEditClick(station)}
                >
                  <img src={edit} alt="edit" className="h-[24px]" />
                  Edit
                </button>
                <button
                  className="flex flex-row"
                  onClick={() => handleRemove(station._id)}
                >
                  <img src={remove} alt="edit" className="h-[24px]" />
                  Remove
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(station?.length / stationsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-8"}
        pageClassName={
          "inline-block mx-2 rounded-lg border border-gray-300 bg-white text-black hover:bg-white-100 hover:text-black px-3 py-2"
        }
        previousClassName={
          "inline-block mx-2 rounded-lg border border-gray-300 bg-white text-black hover:bg-white-100 hover:text-black px-3 py-2"
        }
        nextClassName={
          "inline-block mx-2 rounded-lg border border-gray-300 bg-white text-black hover:bg-white-100 hover:text-black px-3 py-2"
        }
        activeClassName={"bg-blue-500 text-black"}
        disabledClassName={"opacity-50 pointer-events"}
      />

      <div className="flex flex-row-reverse w-full ">
        <button
          onClick={() => setOpenForm(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add station
        </button>
      </div>
      {openForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <form
            onSubmit={handleAdd}
            className={`flex flex-col ${styles.padding}`}
          >
            <div className="flex flex-row-reverse">
              <button onClick={() => setOpenForm(false)}>
                <img src={closeBlack} alt="close-btn" />
              </button>
            </div>
            <label htmlFor="station_name">Name</label>
            <input
              id="station_name"
              type="number"
              step="any"
              placeholder="Input lat of location of station"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) =>
                setStationSend({ ...stationSend, station_name: e.target.value })
              }
            />
            <label htmlFor="lat">Lat</label>
            <input
              id="lat"
              type="number"
              step="any"
              placeholder="Input lat of location of station"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) =>
                setStationSend({ ...stationSend, lat: Number(e.target.value) })
              }
            />
            <label htmlFor="lng">Lng</label>
            <input
              id="lng"
              type="number"
              step="any"
              placeholder="Input lng of location of station"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) =>
                setStationSend({ ...stationSend, lng: Number(e.target.value) })
              }
            />
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn mt-16"
            >
              Add station
            </button>
          </form>
        </div>
      )}
      {openFormEdit && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="station_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Station name:
              </label>
              <input
                type="text"
                id="station_name"
                name="station_name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.station_name}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    station_name: event.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="station_latitude"
                className="block text-gray-700 font-bold mb-2"
              >
                Station latitude:
              </label>
              <input
                type="text"
                id="station_latitude"
                name="station_latitude"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.station_lat}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    station_lat: Number(event.target.value),
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="station_longitude"
                className="block text-gray-700 font-bold mb-2"
              >
                Station longitude:
              </label>
              <input
                type="number"
                id="station_longitude"
                name="station_longitude"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.station_lng}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    station_lng: Number(event.target.value),
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="station_status"
                className="block text-gray-700 font-bold mb-2"
              >
                Station Status:
              </label>
              <select
                id="station_status"
                name="station_status"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.station_status}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    station_status: event.target.value,
                  })
                }
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>

            <div className="flex items-center flex-row-reverse">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
                onClick={() => setOpenFormEdit(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Station;
