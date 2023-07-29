import React from "react";

const IconBox = ({ icon, title, description }) => {
  return (
    <div className="bg-white h-48 p-10 w-80 flex flex-col justify-center items-center rounded-2xl ">
      <i className="text-4xl">{icon}</i>
      <p className="mt-6 text-gray-400">{title}</p>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default IconBox;
