// src/theme/ThemeToggle.jsx

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border"
    >
      {theme === "light" ? (
        <FaMoon />
      ) : (
        <FaSun />
      )}
    </button>
  );
}