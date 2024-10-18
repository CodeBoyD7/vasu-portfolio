import { useEffect, useRef, useState } from "react";

import Home from "./pages/Home/Home";
import PreLoader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-cover-image flex flex-col justify-between items-center  bg-transparent">
      <PreLoader load={load} />
      <ScrollToTop />
      <Header className="z-20" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer className="z-20" />
    </div>
  );
};

export default App;
