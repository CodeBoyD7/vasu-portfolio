import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiRedis, SiNextdotjs, SiSolidity } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center pb-12">
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <DiJavascript1 className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>

      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <DiNodejs className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>

      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <DiReact className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>

      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <DiMongodb className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>

      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <SiNextdotjs className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>

      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <DiGit className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>

      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <SiRedis className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <div className="text-5xl md:text-6xl m-5 lg:text-7xl">.ts</div>
      </div>
      <div className="flex justify-center items-center w-16 h-16 md:w-24 md:h-24 m-4 tech-icons">
        <DiPython className="text-5xl md:text-6xl m-5 lg:text-7xl" />
      </div>
    </div>
  );
}

export default Techstack;
