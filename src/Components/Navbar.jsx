// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Droplet, Users, Phone, Menu, X } from "lucide-react";
import Logo from "../Asset/1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Magmist", path: "/products", icon: <Droplet size={20} /> },
    { name: "Team", path: "/team", icon: <Users size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
  ];

  const isActive = (path) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={Logo}
              alt="SCADE Studio Logo"
              className="h-10 w-auto object-contain rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-white bg-cyan-600 shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-800"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.icon}
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-cyan-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Controls */}
          <div className="md:hidden">
            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-6 py-3 text-lg font-medium transition-all ${
                      isActive(link.path)
                        ? "text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900/30"
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