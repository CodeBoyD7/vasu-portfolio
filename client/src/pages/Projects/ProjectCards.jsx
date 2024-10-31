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
    <div className="flex p-4 flex-col w-full sm:w-[320px] md:w-[350px] lg:w-[400px] overflow-hidden h-[450px] bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Image container */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <img
          className="w-full h-48 sm:h-56 object-cover transition-all duration-300 hover:opacity-90"
          src={imgPath}
          alt={title}
        />
      </div>

      {/* Project details */}
      <div className="flex flex-col p-4">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 text-justify mb-4 flex-grow">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>

        {/* Action buttons (GitHub and Demo) */}
        <div className="flex flex-wrap gap-3">
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
