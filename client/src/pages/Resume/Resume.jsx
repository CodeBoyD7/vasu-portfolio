import React from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/New_Resume.pdf"; // Path to your resume file
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-inherit mt-[100px] p-5">
      {/* Responsive Resume Viewer */}
      <div className="w-full max-w-[90%] lg:max-w-4xl h-[75vh] md:h-[850px] bg-white shadow-lg rounded-lg overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/New_Resume.pdf"
            defaultScale={SpecialZoomLevel.PageFit}
            className="w-full h-full  border-none shadow"
          />
        </Worker>
      </div>

      {/* Download button with responsive styling */}
      <button
        onClick={handleDownload}
        className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300 text-sm md:text-base lg:text-lg"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
