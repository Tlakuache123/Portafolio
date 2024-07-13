import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleDarkMode}
      className="transition-all duration-200 button-colors hover:scale-105"
    >
      {darkMode ? (
        <FaSun className="w-6 h-6" />
      ) : (
        <FaMoon className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeButton;
