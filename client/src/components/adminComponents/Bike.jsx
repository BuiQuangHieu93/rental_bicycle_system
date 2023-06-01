import React, { useState, useEffect } from "react";
import axios from "axios";
import { edit, remove, closeBlack } from "../../assets";
import { styles } from "../../styles";
import ReactPaginate from "react-paginate";

const Bike = () => {
  const [bike, setBike] = useState();
  const [openForm, setOpenForm] = useState();
  const [id, setId] = useState({ id: "" });
  const [formUpdate, setFromUpdate] = useState({
    station_id: "",
    bike_status: null,
    id: "",
  });
  const [openFormEdit, setOpenFormEdit] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);

  const bikesPerPage = 5;
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayedBikes = bike?.slice(
    pageNumber * bikesPerPage,
    (pageNumber + 1) * bikesPerPage
  );
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/bikes/")
      .then((response) => {
        setBike(response?.data);
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAdd = () => {
    axios
      .post("http://localhost:8080/api/v1/bikes/add", id)
      .then((response) => {
        console.log(response);
        fetchData();
        setOpenForm(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/bikes/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchData(); // Fetch updated bike list
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/bikes/")
      .then((response) => {
        setBike(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = (bike) => {
    setFromUpdate({
      station_id: bike.bike_station,
      bike_status: bike.bike_status,
      id: bike._id,
    });
    setOpenFormEdit(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/bikes/update/`, formUpdate)
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
      <div>Manager Bikes</div>

      <table className="w-full text-sm text-left text-gray-500 mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Station ID
            </th>
            <th scope="col" className="px-6 py-3">
              Code
            </th>
            <th scope="col" className="px-6 py-3">
              Bike status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayedBikes?.map((bike, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={bike._id}
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
                {bike.bike_station}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {bike.bike_code}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {bike.bike_status ? "Available" : "Not available"}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {bike.bike_date_add}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <button
                  className="flex flex-row"
                  onClick={() => handleEditClick(bike)}
                >
                  <img src={edit} alt="edit" className="h-[24px]" />
                  Edit
                </button>
                <button
                  className="flex flex-row"
                  onClick={() => handleRemove(bike._id)}
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
        pageCount={Math.ceil(bike?.length / bikesPerPage)}
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
          Add Bike
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
            <label htmlFor="station-id">Station ID</label>
            <input
              id="station-id"
              type="text"
              placeholder="Input station_id need add bike"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) => setId({ ...id, id: e.target.value })}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn mt-16"
            >
              Add
            </button>
          </form>
        </div>
      )}
      {openFormEdit && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="station_id"
                className="block text-gray-700 font-bold mb-2"
              >
                Station ID:
              </label>
              <input
                type="text"
                id="station_id"
                name="station_id"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.station_id}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    station_id: event.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="bike_status"
                className="block text-gray-700 font-bold mb-2"
              >
                Bike Status:
              </label>
              <select
                id="bike_status"
                name="bike_status"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.bike_status}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    bike_status: event.target.value,
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

export default Bike;
