import { useEffect } from "react";

const CursorHandler = ({ children }) => {
  useEffect(() => {
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
      <div data-cursor-dot className="cursor-dot hidden"></div>
      <div data-cursor-outline className="cursor-outline  blur-md"></div>
      {children}
    </>
  );
};

export default CursorHandler;
