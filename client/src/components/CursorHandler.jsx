import { useEffect } from "react";

const CursorHandler = ({ children }) => {
  useEffect(() => {
    // Check if the device supports hover (indicating mouse input)
    const hasMouse = window.matchMedia("(hover: hover)").matches;

    if (!hasMouse) {
      // Hide cursor elements on touch devices
      document.querySelector("[data-cursor-dot]").style.display = "none";
      document.querySelector("[data-cursor-outline]").style.display = "none";
      return;
    }

    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.top = posY + "px";
      cursorDot.style.left = posX + "px";

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        {
          duration: 200,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        data-cursor-dot
        className="cursor-dot hidden sm:block"
      ></div>
      <div
        data-cursor-outline
        className="cursor-outline blur-md hidden sm:block"
      ></div>
      {children}
    </>
  );
};

export default CursorHandler;
