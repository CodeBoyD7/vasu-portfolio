import { useState } from "react";
import Type from "./Type";
import LghomeLogo from "../Assets/home-main.svg";
import SmhomeLogo from "../Assets/sm-main.svg";

const Main = () => {
  const [currentText, setCurrentText] = useState("Web Developer ｡🇯‌🇸‌");
  const [displayText, setDisplayText] = useState("");

  const strings = [
    "Web Developer ｡🇯‌🇸‌",
    "MERN Stack Developer 🚀",
    "Open Source Contributor 🎯",
  ];

  return (
    <div className=" relative w-full flex flex-col  md:flex-row items-center justify-center overflow-hidden mt-20 pb-20 bg-gradient-to-r from-[#38165875] via-[#38165800] to-[#52147b5c] rounded-lg shadow-lg p-8">
      <div className="flex flex-col mt-20 md:mt-0 space-y-4 w-full sm:w-4/4 md:w-1/2 text-center md:text-left xl:ml-24">
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white animate-bounce">
          Hi There! <span className="animate-wave">👋🏻</span>
        </h1>
        <h2 className="font-semibold text-5xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          I'M <span className="text-[#a152d5] animate-pulse">TEJA VASU</span>
        </h2>
        <div className="h-[60px] sm:h-[80px] md:h-[100px]">
          <Type />
        </div>
      </div>

      {/* Large Screen Image */}
      <div className="hidden mt-12 md:mt-0 md:flex items-center justify-center rounded-lg p-4">
        <img
          src={LghomeLogo}
          alt="home pic"
          className="animate-pulse h-[250px] sm:h-[400px] md:h-[500px] lg:h-[650px] w-auto xl:mr-[290px] lg:mr-16    md:mr-0 mr-0"
        />
      </div>

      {/* Small Screen Image */}
      <div className="mt-12 md:mt-0 flex md:hidden items-center justify-center rounded-lg p-4 ">
        <img
          src={SmhomeLogo}
          alt="home pic"
          className="animate-pulse h-[250px] sm:h-[350px] md:h-[400px]   "
        />
      </div>
    </div>
  );
};

export default Main;
