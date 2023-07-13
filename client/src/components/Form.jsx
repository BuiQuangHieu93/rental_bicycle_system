import { useState } from "react";
import { form } from "../constants";
import { peopleBlack, mail } from "../assets";
import { styles } from "../styles";
import CustomButton from "./CustomButton";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subscription: "",
    section: "",
    subSection: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8080/api/v1/contacts/add", formData)
      .then((response) => {
        console.log(response);
        toast.success("Send contact successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Send contact failure!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  const getSubscriptionOptions = () => {
    return form.map((subscription) => (
      <option key={subscription.title} value={subscription.title}>
        {subscription.title}
      </option>
    ));
  };

  const getSectionOptions = () => {
    const selectedSubscriptionObj = form.find(
      (subscription) => subscription.title === formData.subscription
    );
    if (selectedSubscriptionObj) {
      return selectedSubscriptionObj.subForm.map((section) => (
        <option key={section.title} value={section.title}>
          {section.title}
        </option>
      ));
    } else {
      return [];
    }
  };

  const getSubSectionOptions = () => {
    const selectedSubscriptionObj = form.find(
      (subscription) => subscription.title === formData.subscription
    );
    if (selectedSubscriptionObj) {
      const selectedSectionObj = selectedSubscriptionObj.subForm.find(
        (section) => section.title === formData.section
      );
      if (selectedSectionObj) {
        if (Array.isArray(selectedSectionObj.subForm)) {
          return selectedSectionObj.subForm.map((subSection) => (
            <option key={subSection} value={subSection}>
              {subSection}
            </option>
          ));
        } else {
          return selectedSectionObj.subForm.title.map((subSection) => (
            <option key={subSection} value={subSection}>
              {subSection}
            </option>
          ));
        }
      } else {
        return [];
      }
    } else {
      return [];
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className={`bg-white flex flex-col ${styles.padding}`}>
        <div className="flex lg:flex-row flex-col w-full justify-between">
          <div className="flex flex-row lg:w-[45%] w-full pt-2 pb-2">
            <input
              type="text"
              placeholder="First name"
              className="bg-white text-black p-2 border-b-2 w-full"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <img
              src={peopleBlack}
              alt="people_icon"
              className="w-[24px] object-contain p-1"
            />
          </div>
          <div className="flex flex-row lg:w-[45%] w-full pt-2 pb-2">
            <input
              type="text"
              placeholder="Last name"
              className="bg-white text-black p-2 border-b-2 w-full"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <img
              src={peopleBlack}
              alt="people_icon"
              className="w-[24px] object-contain p-1"
            />
          </div>
        </div>

        <div className="w-full flex flex-row pt-2">
          <input
            type="email"
            placeholder="Email *"
            className="bg-white text-black p-2 w-full border-b-2"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <img
            src={mail}
            alt="people_icon"
            className="w-[24px] object-contain p-1"
          />
        </div>

        <div className="flex flex-col pt-2">
          <label className="pb-1">Category *</label>
          <select
            name="subscription"
            value={formData.subscription}
            onChange={handleInputChange}
            className="bg-white text-black border-b-2"
          >
            <option value=""></option>
            {getSubscriptionOptions()}
          </select>
        </div>

        <div className="flex flex-col pt-2">
          <label className="pb-1">Request subcategory *</label>
          <select
            name="section"
            value={formData.section}
            onChange={handleInputChange}
            className="bg-white text-black border-b-2 "
          >
            <option value=""></option>
            {getSectionOptions()}
          </select>
        </div>
        <div className="flex flex-col pt-2">
          <label className="pb-1">Specific case *</label>
          <select
            name="subSection"
            value={formData.subSection}
            onChange={handleInputChange}
            className="bg-white text-black border-b-2"
          >
            <option value=""></option>
            {getSubSectionOptions()}
          </select>
        </div>

        <div className="flex flex-col pt-2">
          <span className="pb-1">Description *</span>
          <textarea
            rows="5"
            placeholder="Enter your description"
            name="description"
            required
            className="bg-white text-black p-1 border-b-2"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full pt-16">
          <CustomButton
            title="Send"
            restStyle="bg-green_theme"
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
