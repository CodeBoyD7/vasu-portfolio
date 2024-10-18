import React from "react";
import { SiVisualstudiocode, SiPostman, SiWindows } from "react-icons/si";

function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center ">
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <SiWindows className="text-4xl md:text-6xl  m-5 lg:text-7xl" />
      </div>
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <SiVisualstudiocode className="text-4xl md:text-6xl m-5 lg:text-7xl" />
      </div>
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <SiPostman className="text-4xl md:text-6xl m-5 lg:text-7xl" />
      </div>
    </div>
  );
}

export default Toolstack;
