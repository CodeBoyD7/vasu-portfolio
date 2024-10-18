import React from "react";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="about-section w-full bg-cover-image h-auto bg-gradient-to-b from-gray-900 via-purple-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full md:w-7/12 py-8 transform transition-transform hover:scale-105 duration-300">
            <h1 className="text-4xl font-extrabold text-white mb-6 shadow-md">
              Know Who <span className="text-purple-500">I'M</span>
            </h1>
            <Aboutcard />
          </div>
          <div className="w-full md:w-5/12 flex justify-center py-12">
            <img
              src={laptopImg}
              alt="about"
              className="w-full h-auto object-contain rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>

        <h1 className="project-heading text-4xl font-extrabold text-white mb-8 text-center shadow-md">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <div className="flex justify-center mb-10">
          <Techstack />
        </div>

        <h1 className="project-heading text-4xl font-extrabold text-white mb-8 text-center shadow-md">
          <span className="text-purple-500">Tools</span> I Use
        </h1>
        <div className="flex justify-center mb-10">
          <Toolstack />
        </div>

        {/* Uncomment if you want to include Github */}
        {/* <Github /> */}
      </div>
      <div className="absolute inset-0 bg-[url('path/to/your/animation.gif')] bg-cover opacity-10"></div>
    </div>
  );
}

export default About;
