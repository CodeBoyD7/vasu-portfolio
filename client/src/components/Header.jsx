import {
  BookText,
  FolderOpenDot,
  Github,
  House,
  Star,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className=" px-2 md:bg-[#38165831] min-h-[10vh]  bg-[#1a152e] w-screen fixed top-0 flex z-30 border-none  md:backdrop-blur-md justify-center items-center">
      <div className="w-[10%] flex justify-center items-center min-h-20 min-w-20">
        <img
          src="./logo.png"
          alt="logo"
          className="h-16 w-16 md:w-18 md:h-18"
        />
      </div>
      <div className="w-[90%]  items-center justify-end hidden md:flex">
        <nav className="w-[80%]  h-[100%] flex justify-center items-center">
          <ul className="flex justify-end gap-10 items-center h-[100%] w-[90%] text-white">
            <li className="inline-flex justify-center items-center gap-2 text-lg font-semibold animate-bottom">
              <House />
              <Link to="/">Home</Link>
            </li>
            <li className="inline-flex justify-center items-center gap-2 text-lg font-semibold animate-bottom">
              <User />
              <Link to="/about">About</Link>
            </li>
            <li className="inline-flex justify-center items-center gap-2 text-lg font-semibold animate-bottom">
              <FolderOpenDot />
              <Link to="/projects">Projects</Link>
            </li>
            <li className="inline-flex justify-center items-center gap-2 text-lg font-semibold animate-bottom">
              <BookText />
              <Link to="/resume">Resume</Link>
            </li>
            <li className="inline-flex justify-center items-center gap-2 bg-[#7d46b466] w-[80px] h-[40px] rounded-xl p-3 ">
              <Github />
              <a
                href="https://github.com/CodeBoyD7/My-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="text-yellow-300 animate-spin " />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex md:hidden w-[80%] md:w-[90%] h-[100%] items-center justify-end">
        <div
          onClick={toggleMenu}
          className=" w-8 h-8 flex flex-col justify-center items-center gap-2 "
        >
          <div
            className={` h-1 bg-[rgb(174,112,215)] rounded-xl transition-all duration-300 ${
              isMenuOpen ? "w-6 self-start" : "w-8 self-end"
            }`}
          />
          <div
            className={`w-6 h-1 bg-[#b977eb]  rounded-xl transition-all duration-300 ${
              isMenuOpen ? "self-start w-8" : "self-end"
            }`}
          />
          <div
            className={` h-1 bg-[#b876eb] rounded-xl transition-all duration-300 ${
              isMenuOpen ? "w-6 self-start" : "w-8 self-end"
            }`}
          />
        </div>
        {isMenuOpen && (
          <nav
            className={`absolute top-[10vh] right-0   bg-[#1a152e] w-full h-[40vh] flex justify-center items-center md:hidden transition-all duration-300 ease-in transform ${
              isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
            } `}
          >
            <ul className="text-white text-2xl flex flex-col space-y-6 items-center justify-center">
              <li className="inline-flex justify-center items-center gap-2 font-semibold">
                <House />
                <Link to="/">Home</Link>
              </li>
              <li className="inline-flex justify-center items-center gap-2 font-semibold">
                <User />
                <Link to="/about">About</Link>
              </li>
              <li className="inline-flex justify-center items-center gap-2 font-semibold">
                <FolderOpenDot />
                <Link to="/projects">Projects</Link>
              </li>
              <li className="inline-flex justify-center items-center gap-2 font-semibold">
                <BookText />
                <Link to="/resume">Resume</Link>
              </li>
              <li className="inline-flex justify-center items-center gap-2 bg-[#6576] w-[80px] h-[40px] rounded-xl ">
                <Github />
                <a
                  href="https://github.com/CodeBoyD7/My-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
