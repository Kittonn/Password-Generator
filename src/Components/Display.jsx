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
    <div className="mx-6 ">
      <p className="text-xs tracking-wider mb-2">CLICK TO COPY</p>
      <div
        onClick={handleClick}
        className={`bg-[#1c2140] py-5 text-md font-medium tracking-wider rounded-lg  text-center mb-4 ${
          text === "Click Generate" ||
          text === "Please choose one of available options."
            ? "cursor-default"
            : "cursor-pointer"
        }`}
      >
        <h3 ref={DivRef}>{text}</h3>
      </div>
    </div>
  );
};

export default Display;
