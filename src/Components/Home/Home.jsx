// src/components/Home/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, HeartPulse, Leaf, Zap, ChevronLeft, ChevronRight, CheckCircle, Users, Sun } from "lucide-react"; 

// Animation variants (kept the same - already effective)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Slightly faster stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Reduced initial Y for smoother entry
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%", // Use percentages for cleaner movement
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
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

  // Improved AutoScroll: Only triggers effect on first mount, uses index for dependency
  useEffect(() => {
    const autoScroll = setInterval(() => {
      // Use setPage with a function to avoid needing 'page' in dependencies
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 6000); // Slower interval for better readability
    return () => clearInterval(autoScroll);
  }, []); // Empty dependency array means it runs once on mount

  return (
    // Elevated visual appearance with a distinct background
    <div className="relative w-full h-[32rem] overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/30 mb-20 border-8 border-white bg-gray-100 group">
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
            x: { type: "tween", ease: "easeInOut", duration: 0.8 }, // Switched to 'tween' for a more controlled slide
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={images[imageIndex].alt}
        />
        {/* Modernized text overlay with a gradient and clearer shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex flex-col justify-end items-start p-12">
          <motion.h2 
            key={`text-${page}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-white text-left tracking-tight max-w-4xl"
          >
            {images[imageIndex].title}
          </motion.h2>
          <motion.p
             key={`subtext-${page}`}
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="text-lg text-white/90 mt-2 max-w-3xl text-left font-light"
          >
             {images[imageIndex].alt}
          </motion.p>
        </div>
      </AnimatePresence>
      
      {/* Navigation buttons are bigger and more transparent until hover */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full text-white hover:bg-white/30 transition opacity-0 group-hover:opacity-100 duration-500 z-10 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Previous image"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full text-white hover:bg-white/30 transition opacity-0 group-hover:opacity-100 duration-500 z-10 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Next image"
      >
        <ChevronRight size={30} />
      </button>
      
      {/* Indicator dots are more pronounced */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${
              imageIndex % images.length === idx ? "bg-cyan-400 w-8" : "bg-gray-300/80 hover:bg-white"
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
      icon: <Droplet className="text-cyan-500" size={40} />,
      description: "Transforming air into pure, alkaline, mineral-rich water.",
      color: "cyan",
      shadow: "shadow-cyan-300/50"
    },
    {
      title: "Health First",
      icon: <HeartPulse className="text-pink-500" size={40} />, // Changed to pink for better health/heart association
      description: "Driven by science, care, and a mission to enhance human health.",
      color: "pink",
      shadow: "shadow-pink-300/50"
    },
    {
      title: "Eco Innovation",
      icon: <Leaf className="text-green-500" size={40} />,
      description: "Committed to protecting the planet and promoting sustainable living.",
      color: "green",
      shadow: "shadow-green-300/50"
    },
    {
      title: "Pillar Tech", // Renamed for better branding flow
      icon: <Sun className="text-amber-500" size={40} />, // Changed from Zap to Sun for cleaner energy/future feel
      description: "Built on Precision, Reliability, Advanced Solutions, innovation, health & planet here.",
      color: "amber",
      shadow: "shadow-amber-300/50"
    },
  ];

  // 🔥 REAL HIGH-QUALITY OPEN-SOURCE IMAGES
  const carouselImages = [
    // Image objects are kept the same
    { 
      url: "https://plus.unsplash.com/premium_photo-1726837561635-6e9fd565041c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBwdXJpdHklMjBpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "The Future of Air-to-Water Technology",
      alt: "Atmospheric water generator extracting pure water from air"
    },
    { 
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=600&q=80",
      title: "Sustainable Living Starts Here",
      alt: "Eliminate plastic waste with eco-friendly hydration"
    },
    { 
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=600&q=80",
      title: "Precision Engineering Meets Purity",
      alt: "Sleek, modern water purification technology for your home"
    },
  ];

  const magmistProductImage = "https://plus.unsplash.com/premium_photo-1726837561635-6e9fd565041c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBwdXJpdHklMjBpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";

  return (
    // Base gradient is more subtle and modern
    <div className="pt-28 bg-white min-h-screen text-center px-4 md:px-8"> 
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          <span className="text-cyan-600">SCADE</span>: Precision, Reliability & Advanced Solutions
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 font-normal leading-relaxed">
          Redefining the future through <strong className="font-semibold text-blue-800">science, care, and technology</strong>—pioneering products that enhance human health while protecting the planet.
        </p>
      </motion.header>

      <div className="max-w-7xl mx-auto mb-32"> 
        <ImageCarousel images={carouselImages} />
      </div>

      <motion.section
        className="flex justify-center gap-6 md:gap-8 flex-wrap max-w-7xl mx-auto pb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {principles.map((item) => (
          <motion.article
            key={item.title}
            variants={itemVariants}
            // Modern Card Design: Lighter border, softer glow, and better hover effect
            className={`bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-xl p-8 w-full sm:w-[45%] lg:w-[23%] flex flex-col items-center border-t-4 border-${item.color}-400/80`}
            whileHover={{ y: -10, boxShadow: `0 15px 30px -10px rgba(0,0,0,0.1), 0 0 0 4px var(--color-${item.color})` }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className={`p-4 rounded-full bg-${item.color}-100/70 mb-4`}>
                {item.icon}
            </div>
            <h3 className="font-bold text-xl mt-3 text-gray-800 tracking-tight">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm font-light leading-relaxed">
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.section>
      
      {/* Separator */}
      <hr className="max-w-7xl mx-auto border-gray-100" />

      <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center text-left px-4 sm:px-6">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <span className="text-cyan-600 uppercase font-semibold text-sm tracking-widest mb-2 inline-block">Flagship Product</span>
            <h2 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
                Introducing <strong className="text-cyan-600">Magmist</strong>: Hydration Redefined
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
                Our flagship product, Magmist, is a cutting-edge Atmospheric Water Generator (AWG) that transforms air into life-sustaining hydration — delivering pure, mineral-enriched, perfectly alkaline water without a drop of water waste.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                    <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700">
                        <strong>Alkaline Purity:</strong> <span className="font-semibold text-cyan-700">pH 8.5+</span> for optimal balance and detoxification.
                    </span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700">
                        <strong>Mineral Enriched:</strong> Includes essential trace minerals like Calcium (Ca), Magnesium (Mg), Iron (Fe), Zinc (Zn), and Copper (Cu).
                    </span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700">
                        <strong>Health & Taste:</strong> Minerals are balanced for superior taste and enhanced health benefits.
                    </span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700">
                        <strong>Eco-Conscious:</strong> Zero plastic, powered by clean energy options for a sustainable footprint.
                    </span>
                </li>
            </ul>
            <Link
                to="/products"
                // Sharper, more defined CTA with a clear focus color
                className="inline-flex items-center mt-12 px-10 py-5 text-lg font-bold rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition transform hover:scale-[1.03] shadow-lg shadow-cyan-500/50"
            >
                Discover the Magmist Difference
            </Link>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center" // Center the image container
        >
            {/* Image is placed in a dedicated, visually distinct container */}
            <div className="bg-blue-50/50 p-6 rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
                <img
                    src={magmistProductImage}
                    alt="Magmist Atmospheric Water Generator - sleek modern design extracting pure water from air"
                    className="rounded-xl w-full h-auto object-cover"
                />
            </div>
        </motion.div>
    </div>
</section>
      
      <hr className="max-w-7xl mx-auto border-gray-100" />
      
      <motion.section 
        className="py-24 bg-blue-50/50" // Soft, contrasting background
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-16 tracking-tight">
            Global Trust & Proven Innovation
          </h2>
          <div className="flex justify-center gap-8 lg:gap-16 flex-wrap">
            {/* Stats are given a more premium, structured look */}
            {[{ icon: Users, color: "blue", stat: "4.9/5", label: "Verified Customer Rating" },
              { icon: Leaf, color: "green", stat: "100K+", label: "Plastic Bottles Saved" },
              { icon: Zap, color: "orange", stat: "20+", label: "Active R&D Patents" },
            ].map((metric, index) => (
              <motion.div
                key={metric.stat}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:translate-y-[-5px] w-full sm:w-60 border-b-4 border-transparent hover:border-cyan-400"
              >
                <metric.icon className={`text-${metric.color}-600 mx-auto mb-4`} size={40} />
                <p className="text-6xl font-black text-blue-900 tracking-tighter">{metric.stat}</p>
                <p className="text-gray-500 mt-2 font-medium uppercase text-sm tracking-wide">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.div
        className="mt-24 pb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-extrabold text-blue-900 mb-10 tracking-tight">
          Ready to Experience True Purity?
        </h3>
        <Link
          to="/products"
          // Final CTA is the biggest, most exciting button
          className="inline-flex items-center justify-center px-16 py-7 text-xl font-bold rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-600/60 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          <Droplet className="mr-3" size={24} /> Explore All Products
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;