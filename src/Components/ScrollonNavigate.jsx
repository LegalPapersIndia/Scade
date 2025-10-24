// src/components/ScrollToTopOnNavigate.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Modern browsers (Chrome, Edge, Safari, Firefox) support smooth scroll
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fallback for very old browsers
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigate;