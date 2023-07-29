import React from "react";

const FooterSection = ({ title, items }) => {
  return (
    <div className="w-2/6 mr-20 hidden md:block">
      <h2 className="mb-2 text-xl ">{title}</h2>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default FooterSection;
