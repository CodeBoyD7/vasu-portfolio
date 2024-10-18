import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 quote-card-view">
      <blockquote className="mb-0">
        <p className="text-justify leading-relaxed font-bold">
          Hi Everyone, I am{" "}
          <span className="text-purple-500">Teja Vasu Yellapu</span> from{" "}
          <span className="text-purple-500">Andhra Pradesh, India.</span>
          <br />
          I am currently a student pursuing an MCA (Master of Computer
          Application) in Computer Science.
          <br />I have completed my B.Sc in Computer Science from{" "}
          <span className="text-purple-500">Andhra University</span>.
          <br />
          <br />
          Apart from coding, here are some other activities that I love to do:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li className="about-activity flex items-center">
            <ImPointRight className="mr-2" /> Working with different Operating
            Systems
          </li>
          <li className="about-activity flex items-center">
            <ImPointRight className="mr-2" /> Being socially active
          </li>
          <li className="about-activity flex items-center">
            <ImPointRight className="mr-2" /> Learning new technologies
          </li>
        </ul>
        <p className="text-purple-600 mt-4 text-3xl font-extrabold">
          "Strive to build things that make a difference!"
        </p>
        <footer className="blockquote-footer text-right">
          {" "}
          <span className="text-purple-500 font-bold mr-2 w-1/4">-</span> Vasu
        </footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
