// src/Components/Products/Products.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplet,
  Zap,
  Brain,
  Shield,
  Leaf,
  Plug,
  CloudRain,
  Heart,
  Gauge,
  Sparkles,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

import videourl from "../../Asset/demo.mp4";
import m1 from "../../Asset/m1.jpg";
import m2 from "../../Asset/m2.jpg";
import m3 from "../../Asset/m3.jpg";
import m4 from "../../Asset/m4.jpg";
import m5 from "../../Asset/m5.jpg";
import m6 from "../../Asset/m6.jpg";
import m7 from "../../Asset/m7.jpg";
import m8 from "../../Asset/m8.jpg";

/* ────────────────────── Animation Variants ────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

/* ────────────────────── Autoplay Video ────────────────────── */
const ProductVideo = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked; fallback silently
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
        <p className="text-white font-bold text-lg drop-shadow-md">
          Magmist in Action
        </p>
      </div>
    </div>
  );
};

/* ────────────────────── Lightbox (Click to Zoom) ────────────────────── */
const Lightbox = ({ images, current, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          className="absolute top-6 right-6 text-white hover:text-cyan-400 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={36} />
        </button>

        {/* Prev / Next */}
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          <ChevronRight size={48} />
        </button>

        {/* Main Image */}
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Thumbnail Strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-full overflow-x-auto max-w-full">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                if (i !== current) onNext();
              }}
              className={`w-14 h-14 rounded overflow-hidden border-2 transition ${
                i === current ? "border-cyan-400" : "border-white/30"
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ────────────────────── Main Products Component ────────────────────── */
const Products = () => {
  const features = [
    { icon: <CloudRain className="text-cyan-600" size={28} />, title: "Air to Pure Water", description: "Extracts water from air — endless supply, no source needed.", color: "from-cyan-100 to-blue-50" },
    { icon: <Droplet className="text-blue-600" size={28} />, title: "Zero Water Wastage", description: "100% efficient — unlike RO systems that waste 70%+.", color: "from-blue-100 to-cyan-50" },
    { icon: <Zap className="text-yellow-600" size={28} />, title: "Ultra-Low Power", description: "Uses less energy than a light bulb", color: "from-yellow-100 to-orange-50" },
    { icon: <Brain className="text-purple-600" size={28} />, title: "AI-Powered Purity", description: "Smart sensors monitor TDS, pH, and humidity in real-time.", color: "from-purple-100 to-pink-50" },
    { icon: <Heart className="text-pink-600" size={28} />, title: "Alkaline & Mineral-Rich", description: "pH 8.5–9.5 with Fe, Cu & Zn — optimal for immunity & hydration.", color: "from-pink-100 to-red-50" },
    { icon: <Plug className="text-gray-600" size={28} />, title: "Plug & Drink", description: "No plumbing. Just plug in — ready in under 5 minutes.", color: "from-gray-100 to-slate-50" },
    { icon: <Shield className="text-green-600" size={28} />, title: "Crisis-Proof", description: "Works during droughts, disasters, or grid failures.", color: "from-green-100 to-emerald-50" },
    { icon: <Leaf className="text-emerald-600" size={28} />, title: "Plastic-Free Future", description: "Eliminates 10,000+ plastic bottles per unit annually.", color: "from-emerald-100 to-teal-50" },
  ];

  const productMedia = {
    videoUrl: videourl,
    images: [
      { src: m1, alt: "Magmist – Front View" },
      { src: m2, alt: "Magmist – Side Angle" },
      { src: m3, alt: "Magmist – Top View" },
      { src: m4, alt: "Magmist – Water Outlet" },
      { src: m5, alt: "Magmist – Control Panel" },
      { src: m6, alt: "Magmist – Mineral Cartridge" },
      { src: m7, alt: "Magmist – Portable Handle" },
      { src: m8, alt: "Magmist – LED Indicator" },
    ],
  };

  // Lightbox State
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (idx) => setLightbox({ open: true, index: idx });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));
  const goPrev = () => setLightbox((s) => ({ ...s, index: s.index === 0 ? productMedia.images.length - 1 : s.index - 1 }));
  const goNext = () => setLightbox((s) => ({ ...s, index: s.index === productMedia.images.length - 1 ? 0 : s.index + 1 }));

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen px-6 md:px-10">
      {/* HERO HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-black text-blue-900 mb-4 tracking-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          Magmist — <span className="text-cyan-600">Hydration Reborn</span>
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-700 font-medium mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          SCADE's Flagship <strong>Atmospheric Water Generator</strong>
        </motion.p>
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
        >
          <Sparkles size={20} />
          <span>Revolutionizing Access to Pure Water</span>
        </motion.div>
      </motion.header>

      {/* HERO VIDEO + DESCRIPTION */}
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={videoVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="order-2 lg:order-1">
            <ProductVideo src={productMedia.videoUrl} poster={productMedia.images[0].src} />
          </motion.div>

          <motion.div className="order-1 lg:order-2 space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
            <h2 className="text-4xl font-bold text-blue-900">Pure Water. From Thin Air.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Magmist doesn't just <em>filter</em> water — it <strong>creates</strong> it. Using advanced condensation and multi-stage purification, it delivers <strong>alkaline, mineral-rich water</strong> with zero waste, zero plastic, and zero dependency on external sources.
            </p>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-inner border-l-4 border-cyan-600">
              <blockquote className="text-xl font-semibold text-cyan-800 italic">
                "Tackles one of humanity's greatest challenges — access to truly healthy drinking water."
              </blockquote>
            </div>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-700 transition-all"
              whileHover={{ x: 5 }}
            >
              Explore Magmist <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT GALLERY – CLICK TO ZOOM */}
      <motion.section
        className="max-w-7xl mx-auto mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12" variants={itemVariants}>
          Discover <span className="text-cyan-600">Magmist</span> Up Close
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {productMedia.images.map((image, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Found")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold drop-shadow-md flex items-center gap-1">
                  <ZoomIn size={16} />
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox.open && (
          <Lightbox
            images={productMedia.images}
            current={lightbox.index}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </motion.section>

      {/* FEATURES GRID */}
      <motion.section
        className="max-w-7xl mx-auto mt-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-16" variants={itemVariants}>
          Why Magmist Stands <span className="text-cyan-600">Above</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group relative bg-gradient-to-br ${feature.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-cyan-300 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/80 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </div>
              <Gauge className="absolute bottom-2 right-2 text-cyan-400/20" size={32} aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Ready to Drink the Future?</h3>
        <motion.a
          href="https://wa.me/917411532800?text=Hi%20SCADE%20Team!%20I%20want%20to%20know%20more%20about%20Magmist."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-cyan-500/40 transition-all"
          whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
        >
          <Droplet className="animate-pulse" size={40} />
          Get Magmist
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Products;