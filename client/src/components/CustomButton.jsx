import React from "react";

const CustomButton = ({ title, handleClick, restStyle }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        className={`${restStyle} py-3 px-8 rounded-full outline-none w-fit text-white font-semibold shadow-lg text-center`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
