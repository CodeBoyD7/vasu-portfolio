import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CursorHandler from "./components/CursorHandler.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ParticleBackground />

    <CursorHandler>
      <App />
    </CursorHandler>
  </BrowserRouter>
);
