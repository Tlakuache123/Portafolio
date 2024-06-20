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
      className="text-neutral-800 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-600 p-2 rounded"
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
