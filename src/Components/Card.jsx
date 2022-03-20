import React, { useState } from "react";
import Slide from "./Slide";
import Display from "./Display";
import Custom from "./Custom";
const Card = () => {
  const [text, setText] = useState("Click Generate");
  const [slide, setSlide] = useState(12);
  const [enabledUpper, setEnabledUpper] = useState(false);
  const [enabledLower, setEnabledLower] = useState(false);
  const [enabledNum, setEnabledNum] = useState(true);
  const [enabledSym, setEnabledSym] = useState(false);

  const handleClick = () => {
    function RandomNum() {
      return Math.floor(Math.random() * 10);
    }

    function RandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function RandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function RandomSymbol() {
      const symbols = '~!@#$%^&*()_+{}":?><;.,';
      return symbols[Math.floor(Math.random() * symbols.length)];
    }

    let gen = "";
    let l = slide;
    if (!enabledLower && !enabledNum && !enabledSym && !enabledUpper) {
      gen = "Please choose one of available options.";
    } else {
      while (l !== 0) {
        if (enabledUpper) {
          gen += RandomUpper();
          l--;
          if (l === 0) {
            break;
          }
        }
        if (enabledLower) {
          gen += RandomLower();
          l--;
          if (l === 0) {
            break;
          }
        }
        if (enabledNum) {
          gen += RandomNum().toString();
          l--;
          if (l === 0) {
            break;
          }
        }
        if (enabledSym) {
          gen += RandomSymbol();
          l--;
          if (l === 0) {
            break;
          }
        }
      }
    }
    setText(gen);
  };

  return (
    <div className="bg-[#0A0F33] font-[Montserrat] text-white w-[400px] h-[670px] rounded-2xl mt-2 md:mt-10">
      <h1 className="text-3xl text-center font-semibold my-4">
        Password Generator
      </h1>
      <Display text={text} />
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
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold mx-6 p-5 text-lg rounded-lg text-center cursor-pointer"
        onClick={handleClick}
      >
        GENERATE PASSWORD
      </div>
    </div>
  );
};

export default Card;
