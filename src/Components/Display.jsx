import React from "react";

const Display = ({ text }) => {
  return (
    <div className="bg-[#1c2140] py-5 text-md font-medium tracking-wider rounded-lg  mx-6 text-center my-4">
      <h3>{text}</h3>
    </div>
  );
};

export default Display;
