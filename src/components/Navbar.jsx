import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { cardClass, textPrimary, textSecondary } from "../theme/themeClasses";
import ThemeToggle from "../theme/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}

        <a href="#">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Disha Chotai Logo"
              className="w-12 h-12 rounded-xl shadow-md"
            />

            <div className="hidden sm:block">
              <h1 className="font-semibold text-slate-900 dark:text-white">
                Disha Chotai
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Java Full Stack Developer
              </p>
            </div>
          </div>
        </a>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}

          <div className="hidden lg:flex gap-8 font-medium text-slate-700 dark:text-slate-300">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Skills
            </a>

            <a
              href="#project"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="#education"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>

          {/* Theme Toggle */}

          <ThemeToggle />

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-slate-700 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-lg z-50">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-slate-700">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Skills
            </a>

            <a
              href="#project"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
