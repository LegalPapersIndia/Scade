// src/components/Home/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, HeartPulse, Leaf, Zap, ChevronLeft, ChevronRight, CheckCircle, Users } from "lucide-react"; 

// Animation variants (kept the same - already effective)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// --- ImageCarousel Component (REAL PRODUCT IMAGES) ---
const ImageCarousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = page % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(autoScroll);
  }, [page]);

  return (
    <div className="relative w-full h-[28rem] overflow-hidden rounded-2xl shadow-2xl mb-20 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].url}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full object-cover transition duration-1000 ease-in-out"
          alt={images[imageIndex].alt}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-8">
          <motion.h2 
            key={`text-${page}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg max-w-4xl text-center"
          >
            {images[imageIndex].title}
          </motion.h2>
        </div>
      </AnimatePresence>
      
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/50 transition opacity-0 group-hover:opacity-100 duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/50 transition opacity-0 group-hover:opacity-100 duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={30} />
      </button>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/20 p-2 rounded-full z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              imageIndex % images.length === idx ? "bg-cyan-400 scale-110" : "bg-gray-300/80"
            }`}
            onClick={() => setPage([idx, idx > imageIndex % images.length ? 1 : -1])}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Home Component ---
const Home = () => {
  const principles = [
    {
      title: "Magmist",
      icon: <Droplet className="text-cyan-500 mx-auto" size={40} />,
      description: "Transforming air into pure, alkaline, mineral-rich water.",
      color: "cyan",
    },
    {
      title: "Health First",
      icon: <HeartPulse className="text-red-500 mx-auto" size={40} />,
      description: "Driven by science, care, and a mission to enhance human health.",
      color: "red",
    },
    {
      title: "Eco Innovation",
      icon: <Leaf className="text-green-500 mx-auto" size={40} />,
      description: "Committed to protecting the planet and promoting sustainable living.",
      color: "green",
    },
    {
      title: "Foundational Pillars",
      icon: <Zap className="text-yellow-500 mx-auto" size={40} />,
      description: "Built on Precision, Reliability, and Advanced Solutions.",
      color: "yellow",
    },
  ];

  // 🔥 REAL HIGH-QUALITY OPEN-SOURCE IMAGES
  const carouselImages = [
    { 
      url: "https://images.unsplash.com/photo-1558618043-e9b4471fa437?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=448&q=80",
      title: "The Future of Air-to-Water Technology",
      alt: "Atmospheric water generator extracting pure water from air"
    },
    { 
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=448&q=80",
      title: "Sustainable Living Starts Here",
      alt: "Clean water droplets representing eco-friendly hydration"
    },
    { 
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=448&q=80",
      title: "Precision Engineering Meets Purity",
      alt: "Modern water purification technology"
    },
  ];

  const magmistProductImage = "https://images.unsplash.com/photo-1581091226824-a0a0b1396ab6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";

  return (
    <div className="pt-32 bg-gradient-to-b from-white to-blue-50 min-h-screen text-center px-6">
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-6xl sm:text-7xl font-black text-blue-900 mb-6 tracking-tighter">
          Welcome to <span className="text-cyan-600">SCADE Store - Studio</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 font-light mb-16">
          Redefining innovation through <strong>science, care, and technology</strong>
          — creating products that enhance human health while protecting
          the planet.
        </p>
      </motion.header>

      <div className="max-w-7xl mx-auto mb-24"> 
        <ImageCarousel images={carouselImages} />
      </div>

      <motion.section
        className="flex justify-center gap-10 flex-wrap max-w-7xl mx-auto pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {principles.map((item) => (
          <motion.article
            key={item.title}
            variants={itemVariants}
            className="bg-white shadow-xl hover:shadow-2xl border border-gray-100 rounded-3xl p-10 w-full sm:w-72 md:w-80 transition duration-500 hover:scale-[1.02]"
            whileHover={{ y: -8 }}
          >
            {item.icon}
            <h3 className="font-extrabold text-2xl mt-5 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-3 text-base font-light">
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.section>

      <section className="bg-white py-24 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center text-left px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold text-blue-900 mb-6">
              Introducing <strong>Magmist</strong>: Hydration Redefined
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Our flagship product, Magmist, is an innovative <strong>Atmospheric Water Generator (AWG)</strong> that doesn't just collect moisture—it transforms it. We deliver water that is pure, mineral-rich, and perfectly alkaline (pH 8.5+), providing superior health benefits and zero plastic waste.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Alkaline Purity:</strong> pH 8.5+ for optimal balance and detoxification.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Eco-Conscious:</strong> Zero plastic bottles, powered by renewable energy options.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Natural Minerals:</strong> Enriched with essential <strong>Magnesium</strong> and Calcium.</span>
              </li>
            </ul>
            <Link
              to="/products"
              className="inline-flex items-center mt-10 px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-cyan-600 hover:bg-cyan-700 transition transform hover:scale-[1.02]"
            >
              See the Magmist Difference
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <img
              src={magmistProductImage}
              alt="Magmist Atmospheric Water Generator - sleek modern design extracting pure water from air"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-gray-200"
            />
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="py-20 bg-blue-100/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
            Global Trust & Proven Innovation
          </h2>
          <div className="flex justify-center gap-12 flex-wrap">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-64 transform hover:shadow-2xl transition duration-300"
            >
              <Users className="text-blue-600 mx-auto mb-4" size={36} />
              <p className="text-5xl font-black text-blue-900">4.9/5</p>
              <p className="text-gray-600 mt-2 font-medium">Verified Customer Rating</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-64 transform hover:shadow-2xl transition duration-300"
            >
              <Leaf className="text-green-600 mx-auto mb-4" size={36} />
              <p className="text-5xl font-black text-blue-900">100K+</p>
              <p className="text-gray-600 mt-2 font-medium">Plastic Bottles Saved</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-64 transform hover:shadow-2xl transition duration-300"
            >
              <Zap className="text-yellow-600 mx-auto mb-4" size={36} />
              <p className="text-5xl font-black text-blue-900">20+</p>
              <p className="text-gray-600 mt-2 font-medium">Active R&D Patents</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.div
        className="mt-20 pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-extrabold text-blue-900 mb-8">
          Ready to Experience True Purity?
        </h3>
        <Link
          to="/products"
          className="inline-flex items-center justify-center px-12 py-6 border border-transparent text-xl font-bold rounded-full shadow-2xl text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 transform hover:scale-105 hover:shadow-cyan-400/50"
        >
          Explore All Products
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;