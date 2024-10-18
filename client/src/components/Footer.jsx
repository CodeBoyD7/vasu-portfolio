import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#381658] py-8 text-center md:text-left w-full  bottom-0">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Designed By Section */}
          <div className="w-full md:w-1/3 text-white">
            <h3 className="text-lg font-semibold">
              Designed and Developed by Teja Vasu
            </h3>
          </div>

          {/* Copyright Section */}
          <div className="w-full md:w-1/3 text-white">
            <h3 className="text-lg font-semibold">&copy; {year} D7</h3>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6">
            <a
              href="https://github.com/CodeBoyD7/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition-colors "
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/teja-vasu-yellapu-a198a4233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/_vasu_d7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition-colors"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
