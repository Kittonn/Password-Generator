import React from "react";

const IncludeLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-center bg-[#1c2140] mx-6 p-5 rounded-lg my-3">
      {children}
    </div>
  );
};

export default IncludeLayout;
