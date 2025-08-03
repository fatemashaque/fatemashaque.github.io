import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Home, Briefcase, FolderOpen, Mail, Gamepad2, Users } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Handle theme toggle
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

  // Main sections
  const navItems = [
    { name: "Home", icon: <Home size={20} />, href: "#home" },
    { name: "Work", icon: <Briefcase size={20} />, href: "#work" },
    { name: "Projects", icon: <FolderOpen size={20} />, href: "#projects" },
    { name: "Games", icon: <Gamepad2 size={20} />, href: "#games" },
    { name: "Community", icon: <Users size={20} />, href: "#community" },
    { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 py-4
        ${darkMode ? "bg-black text-white" : "bg-blue-100 text-black"} 
        shadow-md transition-colors duration-300`}
      >
        <img src="/logo.png" alt="Fatema Logo" className="h-10 w-auto object-contain" />

        <div className="flex items-center gap-6 sm:gap-8 text-base sm:text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="capitalize text-sm font-medium hover:text-purple-600 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`rounded-full p-2 transition duration-300 
              ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-yellow-400 hover:bg-yellow-300"}`}
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

      {/* ===== MOBILE NAVBAR (TOP ALIGNED) ===== */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-opacity-95 
        ${darkMode ? "bg-black text-white" : "bg-blue-100 text-black"} 
        backdrop-blur-md border-b border-[rgba(0,0,0,0.1)] 
        flex justify-between items-center px-4 py-3 shadow-md md:hidden`}
      >
        <img src="/logo.png" alt="Fatema Logo" className="h-8 object-contain" />

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center gap-1 text-sm font-medium hover:text-purple-600 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ===== MOBILE DROPDOWN MENU ===== */}
      {menuOpen && (
        <div
          className={`fixed top-14 left-0 right-0 z-40 
          ${darkMode ? "bg-black text-white" : "bg-blue-100 text-black"} 
          shadow-md md:hidden animate-slide-down`}
        >
          <div className="flex flex-col items-center py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}

            {/* Theme toggle button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`rounded-full px-4 py-2 mt-2 transition duration-300 
                ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-yellow-400 hover:bg-yellow-300"}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
