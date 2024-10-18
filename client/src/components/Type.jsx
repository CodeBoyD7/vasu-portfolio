import React, { useState, useEffect } from "react";

function Type() {
  const strings = [
    "Web Developer ",
    "MERN Stack Developer ",
    "Open Source Contributor ",
  ];
  const emojis = ["｡🇯‌🇸‌", "🚀", "🎯"];

  const [displayText, setDisplayText] = useState(""); // Text being displayed
  const [currentStringIndex, setCurrentStringIndex] = useState(0); // Track the current string
  const [showEmoji, setShowEmoji] = useState(false); // Control emoji display

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let charIndex = 0;
    let emojiTimeout;

    const typeInterval = setInterval(() => {
      setDisplayText(currentString.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentString.length) {
        setShowEmoji(true);
        clearInterval(typeInterval);

        emojiTimeout = setTimeout(() => {
          setShowEmoji(false); // Hide emoji after 1 second
          setTimeout(() => {
            // Proceed to next string after emoji hides
            setDisplayText("");
            setCurrentStringIndex(
              (prevIndex) => (prevIndex + 1) % strings.length
            );
          }, 500);
        }, 1000);
      }
    }, 100); // Adjust speed of typing

    return () => {
      clearInterval(typeInterval);
      clearTimeout(emojiTimeout);
    };
  }, [currentStringIndex]);

  return (
    <div className="mt-10">
      <span className="text-[#ad5cd5ee]  lg:text-white text-center font-extrabold text-3xl sm:text-4xl ">
        {displayText}
      </span>
      {showEmoji && (
        <span className="text-[#ce7a46] font-bold text-3xl sm:text-4xl">
          {emojis[currentStringIndex]}
        </span>
      )}
    </div>
  );
}

export default Type;
