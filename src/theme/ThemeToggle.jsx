import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-xl
        border
        border-slate-300
        dark:border-slate-700
        bg-white
        dark:bg-slate-900
        text-slate-800
        dark:text-yellow-400
        hover:scale-105
        transition-all
      "
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}