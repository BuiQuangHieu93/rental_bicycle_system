import React, { useState, useEffect } from "react";
import axios from "axios";
import { edit, remove, closeBlack } from "../../assets";
import { styles } from "../../styles";
import ReactPaginate from "react-paginate";

const Account = () => {
  const [user, setUser] = useState();
  const [openForm, setOpenForm] = useState();
  const [formRegister, setFormRegister] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [formUpdate, setFromUpdate] = useState({
    name: "",
    password: "",
    email: "",
    id: "",
  });
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayedUsers = user?.slice(
    pageNumber * usersPerPage,
    (pageNumber + 1) * usersPerPage
  );
  const handlePassword = (e) => {
    setConfirmPassword(e);
  };
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {}, [confirmPassword]);
  useEffect(() => {}, [formRegister]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/")
      .then((response) => {
        setUser(response?.data);
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/users/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchData(); // Fetch updated user list
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAdd = (event) => {
    try {
      if (confirmPassword === formRegister.password) {
        event.preventDefault();
        axios
          .post(
            "http://localhost:8080/api/v1/users/registerAdmin",
            formRegister
          )
          .then((response) => {
            console.log(response);
            fetchData();
            setOpenForm(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (account) => {
    setFromUpdate({
      account_name: account.account_name,
      account_email: account.account_email,
      account_role: account.account_role,
      id: account._id,
    });
    setOpenFormEdit(true);
    console.log(account._id);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/users/update/`, formUpdate)
      .then((response) => {
        fetchData();
        setOpenFormEdit(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative">
      <div>Manager Users</div>

      <table className="w-full text-sm text-left text-gray-500 mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Profile
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers?.map((user, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={user._id}
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
                {user.account_name}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.account_email}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.account_role.charAt(0).toUpperCase() +
                  user.account_role.slice(1)}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <button
                  className="flex flex-row"
                  onClick={() => handleEditClick(user)}
                >
                  <img src={edit} alt="edit" className="h-[24px]" />
                  Edit
                </button>
                <button
                  className="flex flex-row"
                  onClick={() => handleRemove(user._id)}
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
        pageCount={Math.ceil(user?.length / usersPerPage)}
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
          Add Admin
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
            <label htmlFor="admin-name">Admin name</label>
            <input
              id="admin-name"
              type="text"
              placeholder="Input admin name"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) =>
                setFormRegister({ ...formRegister, name: e.target.value })
              }
            />
            <label htmlFor="admin-password">Admin password</label>
            <input
              id="admin-password"
              type="password"
              placeholder="Input admin password"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) =>
                setFormRegister({ ...formRegister, password: e.target.value })
              }
            />
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm admin password"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) => handlePassword(e.target.value)}
            />
            <label htmlFor="admin-email">Admin email</label>
            <input
              id="admin-email"
              type="email"
              placeholder="Input admin email"
              className="bg-white text-black border-b-2 p-2"
              onChange={(e) =>
                setFormRegister({ ...formRegister, email: e.target.value })
              }
            />
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn mt-16"
            >
              Add admin
            </button>
          </form>
        </div>
      )}
      {openFormEdit && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="account_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Account Name:
              </label>
              <input
                type="text"
                id="account_name"
                name="account_name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.account_name}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    account_name: event.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="account_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Account Email:
              </label>
              <input
                type="email"
                id="account_email"
                name="account_email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.account_email}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    account_email: event.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="account_role"
                className="block text-gray-700 font-bold mb-2"
              >
                Account Role:
              </label>
              <select
                id="account_role"
                name="account_role"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-100"
                value={formUpdate.account_role}
                onChange={(event) =>
                  setFromUpdate({
                    ...formUpdate,
                    account_role: event.target.value,
                  })
                }
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
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

export default Account;
