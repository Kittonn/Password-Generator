import React from "react";

const Slide = ({ slide, setSlide }) => {
  return (
    <div>
      <p>{slide}</p>
      <label>4</label>
      <input
        type="range"
        max="32"
        min="4"
        value={slide}
        onChange={(e) => setSlide(e.target.value)}
      />
      <label>32</label>
    </div>
  );
};

export default Slide;
