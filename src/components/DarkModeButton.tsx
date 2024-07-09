import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleDarkMode}
      className="transition-all duration-200 bg-everlightbg-500 hover:bg-everlightbg-600 dark:bg-everdarkbg-500 dark:hover:bg-everdarkbg-600 p-2 rounded hover:scale-105"
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
