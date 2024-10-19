import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <div className=" w-[300px] flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image container */}
      <div className="image-container mb-4">
        <img
          className="w-full h-48 sm:h-56 object-cover transition-all duration-300 hover:opacity-90"
          src={imgPath}
          alt={title}
        />
      </div>

      {/* Project details */}
      <div className="flex flex-col p-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-base text-gray-400 text-justify mb-4 flex-grow">
          {description}
        </p>

        {/* Action buttons (GitHub and Demo) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-all duration-300 w-full sm:w-auto text-center"
          >
            <BsGithub className="mr-2 text-lg" />
            {isBlog ? "Blog" : "GitHub"}
          </a>

          {demoLink && !isBlog && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-all duration-300 w-full sm:w-auto text-center"
            >
              <CgWebsite className="mr-2 text-lg" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
