import React, { useState } from "react";
import Slide from "./Slide";
import Display from "./Display";
import Custom from "./Custom";
const Card = () => {
  const [slide, setSlide] = useState(12);
  const [enabledUpper, setEnabledUpper] = useState(false);
  const [enabledLower, setEnabledLower] = useState(false);
  const [enabledNum, setEnabledNum] = useState(true);
  const [enabledSym, setEnabledSym] = useState(false);
  return (
    <div className="bg-[#0A0F33] text-white w-[400px] h-[600px] mt-10 rounded-2xl">
      <h1 className="text-3xl text-center mt-4">Password Generator</h1>
      <Display />
      <Slide slide={slide} setSlide={setSlide} />
      <Custom
        enabledUpper={enabledUpper}
        setEnabledUpper={setEnabledUpper}
        enabledLower={enabledLower}
        setEnabledLower={setEnabledLower}
        enabledNum={enabledNum}
        setEnabledNum={setEnabledNum}
        enabledSym={enabledSym}
        setEnabledSym={setEnabledSym}
      />
      <button>GENERATE PASSWORD</button>
    </div>
  );
};

export default Card;
