import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Home, Briefcase, FolderOpen, Mail, Gamepad2, Users } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  // Handle scroll direction (show/hide bottom navbar on mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowMobileNav(false);
      } else {
        setShowMobileNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Main sections for bottom nav
  const bottomNavItems = [
    { name: "Home", icon: <Home size={20} />, href: "#home" },
    { name: "Work", icon: <Briefcase size={20} />, href: "#work" },
    { name: "Projects", icon: <FolderOpen size={20} />, href: "#projects" },
    { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
  ];

  // Extra sections for hamburger menu
  const extraNavItems = [
    { name: "Games", icon: <Gamepad2 size={20} />, href: "#games" },
    { name: "Community", icon: <Users size={20} />, href: "#community" },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md transition-colors duration-300">
        <img src="/logo.png" alt="Fatema Logo" className="h-10 w-auto object-contain" />

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

          {/* Theme toggle */}
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

      {/* ===== MOBILE BOTTOM NAVBAR ===== */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[rgba(var(--card),0.95)] 
          backdrop-blur-md border-t border-[rgba(var(--border),0.3)] 
          flex justify-around items-center py-2 transition-transform duration-300 
          shadow-lg md:hidden
          ${showMobileNav ? "translate-y-0" : "translate-y-full"}`}
      >
        {bottomNavItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center text-xs font-medium text-[color:rgba(var(--text))] hover:text-purple-600 transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}

        {/* Hamburger for extra items */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col items-center text-xs font-medium text-[color:rgba(var(--text))] hover:text-purple-600 transition"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>More</span>
        </button>
      </div>

      {/* ===== MOBILE HAMBURGER MENU ===== */}
      {menuOpen && (
        <div className="fixed bottom-16 left-0 right-0 bg-[rgba(var(--card),0.95)] backdrop-blur-md border-t border-[rgba(var(--border),0.3)] shadow-lg md:hidden animate-slide-up">
          <div className="flex flex-col items-center py-3 gap-3">
            {extraNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-[color:rgba(var(--text))] hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
