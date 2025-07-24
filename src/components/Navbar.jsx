import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md transition-colors duration-300">
      <img src="/logo.png" alt="Fatema Logo" className="h-10 w-auto object-contain" />

      {/* Centered Navigation Panel */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 px-6 py-3 
        bg-[rgba(var(--card),0.6)] backdrop-blur-md 
        border border-[rgba(var(--border),0.3)] shadow-md 
        rounded-full flex items-center gap-6 sm:gap-8 text-base sm:text-lg transition-all duration-300"
      >
        {["home", "work", "games", "projects", "community", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-[color:rgba(var(--text))] text-sm font-medium hover:text-purple-600 transition-colors duration-200 capitalize"
          >
            {section}
          </a>
        ))}

        {/* Theme toggle inside panel */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="rounded-full p-2 bg-yellow-400 hover:bg-yellow-300 shadow-inner transition duration-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-white" />
          ) : (
            <Sun className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
