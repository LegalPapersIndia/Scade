// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Droplet, Users, Phone, Menu, X } from "lucide-react";
import Logo from "../Asset/1.png";

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl shadow-xl z-50 border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="SCADE Studio"
              className="h-14 w-auto object-contain rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium rounded-2xl transition-all duration-300 group ${
                      isActive(link.path)
                        ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                        : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100/80"
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-8 py-4 text-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-cyan-600 bg-cyan-50"
                        : "text-gray-700 hover:bg-gray-50"
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