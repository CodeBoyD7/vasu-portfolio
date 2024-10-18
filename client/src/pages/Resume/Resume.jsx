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
    <div className=" mt-20 flex flex-col items-center justify-center min-h-screen bg-inherit p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
      {/* Responsive Resume Viewer */}
      <div className="w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] h-[100vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] bg-white shadow-xl rounded-lg overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/New_Resume.pdf"
            defaultScale={SpecialZoomLevel.PageFit}
            className="w-full h-full border-none"
          />
        </Worker>
      </div>

      {/* Download button with responsive styling */}
      <button
        onClick={handleDownload}
        className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-md shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 duration-300 text-sm sm:text-base md:text-lg"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
