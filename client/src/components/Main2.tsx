import React from "react";
import Tilt from "react-parallax-tilt";
import { Github, Instagram, Linkedin } from "lucide-react";
import Services from "./Services";

function Main2() {
  return (
    <section
      className=" py-16 w-full bg-gradient-to-r from-[#38165875] via-[#38165800] to-[#52147b5c]  mt-"
      id="about"
    >
      <div className="container w-full mx-auto px-6 lg:px-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Introduction Section */}
          <div className="w-full md:w-3/4 lg:w-2/3 space-y-6 mb-10 md:mb-0">
            <h1 className="text-2xl lg:text-4xl font-bold text-white">
              LET ME <span className="text-purple-500"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-gray-300 text-md leading-relaxed">
              I have a deep passion for programming and continuously learning
              new things along the way.
              <br />
              <br />I am fluent in languages such as
              <i>
                <b className="text-purple-500">
                  {" "}
                  React JS, JavaScript, and Python{" "}
                </b>
              </i>
              , and I love creating innovative solutions.
              <br />
              <br />
              My interests lie in building impactful &nbsp;
              <i>
                <b className="text-purple-500">
                  {" "}
                  Web Technologies and Products{" "}
                </b>
              </i>
              , as well as exploring the world of
              <i>
                <b className="text-purple-500"> TypeScript</b>.
              </i>
              <br />
              <br />I enjoy working with{" "}
              <b className="text-purple-500">Node.js</b> and
              <i>
                <b className="text-purple-500">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>{" "}
              such as{" "}
              <i>
                <b className="text-purple-500">React.js</b> and <b>Next.js</b>
              </i>{" "}
              to develop efficient and scalable applications.
            </p>
          </div>
          {/* Avatar Section */}
          <div className="w-full lg:w-1/4  flex justify-center md:justify-end">
            <Tilt>
              <img
                src="./avatar.jpg"
                alt="avatar"
                className="rounded-full h-64 w-64 object-cover"
              />
            </Tilt>
          </div>
        </div>

        <Services />
        {/* Social Links */}
        <div className="mt-10 text-center  w-full">
          <h2 className="text-2xl font-bold text-white mb-3">FIND ME ON</h2>
          <p className="text-gray-300 mb-6">
            Let's <span className="text-purple-500"> connect</span> and
            collaborate!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/CodeBoyD7/My-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 bg-gray-800 p-2 rounded-full hover:text-purple-500 transition-colors"
            >
              <Github size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/teja-vasu-yellapu-a198a4233/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-purple-500 transition-colors
              bg-gray-800 p-2 rounded-full"
            >
              <Linkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/_vasu_d7/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-purple-500 transition-colors
              bg-gray-800 p-2 rounded-full "
            >
              <Instagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main2;
