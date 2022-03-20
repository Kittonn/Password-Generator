import React, { useRef } from "react";

const Display = ({ text }) => {
  const DivRef = useRef(null);
  const handleClick = () => {
    // console.log(DivRef.current.innerText);
    if (
      text === "Click Generate" ||
      text === "Please choose one of available options."
    ) {
      return;
    } else {
      navigator.clipboard.writeText(DivRef.current.innerText);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`bg-[#1c2140] py-5 text-md font-medium tracking-wider rounded-lg  mx-6 text-center my-4 ${
        text === "Click Generate" ||
        text === "Please choose one of available options."
          ? "cursor-default"
          : "cursor-pointer"
      }`}
    >
      <h3 ref={DivRef}>{text}</h3>
    </div>
  );
};

export default Display;
