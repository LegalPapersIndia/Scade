// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Droplet, Users, Phone, Menu, X, Sun, Moon } from "lucide-react";
import Logo from "../Asset/1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Smart theme detection with system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark") ||
           localStorage.theme === "dark" ||
           (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Magmist", path: "/products", icon: <Droplet size={20} /> },
    { name: "Team", path: "/team", icon: <Users size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-xl z-50 border-b border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="SCADE Studio"
              className="h-11 w-auto object-contain rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              loading="eager"
            />
          </Link>

          {/* Desktop: Nav + Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium rounded-2xl transition-all duration-300 group ${
                      isActive(link.path)
                        ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                        : "text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="navBubble"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* BEAUTIFUL MODERN THEME TOGGLE (2025 Standard) */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 p-1 cursor-pointer transition-all duration-400 shadow-inner"
              aria-label="Toggle theme"
            >
              {/* Track Gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 dark:opacity-100 transition-opacity duration-500" />
              
              {/* Sliding Knob */}
              <motion.div
                className="relative w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center ring-4 ring-white/70 dark:ring-gray-900/70"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                animate={{ x: isDark ? 24 : 4 }}
              >
                <motion.div
                  animate={{ rotate: isDark ? 360 : -360 }}
                  transition={{ duration: 0.6 }}
                >
                  {isDark ? (
                    <Moon size={14} className="text-cyan-400" />
                  ) : (
                    <Sun size={14} className="text-yellow-500" />
                  )}
                </motion.div>
              </motion.div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl scale-0 dark:scale-100 transition-all duration-500" />
            </button>
          </div>

          {/* Mobile: Menu + Theme */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            >
              <motion.div animate={{ rotate: isDark ? 360 : 0 }}>
                {isDark ? <Moon size={20} className="text-cyan-400" /> : <Sun size={20} className="text-yellow-500" />}
              </motion.div>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-8 py-4 text-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;