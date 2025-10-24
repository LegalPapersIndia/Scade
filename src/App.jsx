// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Team from "./Components/Team/Team";
import Contact from "./Components/ContactUs/Contact";
import ScrollToTopButton from "./Components/ScrollToTop";
import ScrollToTopOnNavigate from "./Components/ScrollonNavigate";

const App = () => {
  return (
    <Router>
      <div className="bg-white text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
        <Navbar />

        <main className="pt-20">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-xl text-cyan-600 font-medium">
                Loading SCADE Store-Studio...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <div className="pt-40 text-center text-3xl font-bold text-gray-800 dark:text-gray-200 min-h-screen">
                    404 | Page Not Found
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* Scroll-to-top button (still there if you want it) */}
        <ScrollToTopButton />

        {/* Auto scroll to top on every route change */}
        <ScrollToTopOnNavigate />
      </div>
    </Router>
  );
};

export default App;