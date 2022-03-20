import React from "react";

const Slide = ({ slide, setSlide }) => {
  return (
    <div className="mx-6 my-5">
      <p className="text-xs tracking-wider mb-2">
        <span>LENGTH : </span>
        {slide}
      </p>
      <div className="bg-[#1c2140] rounded-lg py-4 px-5 flex">
        <label className="mr-4">4</label>
        <input
        className="w-full"
          type="range"
          max="32"
          min="4"
          value={slide}
          onChange={(e) => setSlide(e.target.value)}
        />
        <label className="ml-4">32</label>
      </div>
    </div>
  );
};

export default Slide;
