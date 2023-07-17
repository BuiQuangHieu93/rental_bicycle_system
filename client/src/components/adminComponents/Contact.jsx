import React, { useState, useEffect } from "react";
import axios from "axios";
import { remove } from "../../assets";
import ReactPaginate from "react-paginate";

const Contact = () => {
  const [contact, setContact] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const contactsPerPage = 5;
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayedContacts = contact?.slice(
    pageNumber * contactsPerPage,
    (pageNumber + 1) * contactsPerPage
  );

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/contacts/")
      .then((response) => {
        setContact(response?.data);
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/contacts/${id}`)
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
      .get("http://localhost:8080/api/v1/contacts/")
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div>Manager Contacts</div>

      <table className="w-full text-sm text-left text-gray-500 mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              First name
            </th>
            <th scope="col" className="px-6 py-3">
              last name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts?.map((contact, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={contact._id}
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
                {contact.contact_firstName}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {contact.contact_lastName}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {contact.contact_email}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <p>{contact.contact_subscription}</p>
                <p>{contact.contact_section}</p>
                <p>{contact.contact_subSection}</p>
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {contact.contact_description}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <button
                  className="flex flex-row"
                  onClick={() => handleRemove(contact._id)}
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
        pageCount={Math.ceil(contact?.length / contactsPerPage)}
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
    </div>
  );
};

export default Contact;
