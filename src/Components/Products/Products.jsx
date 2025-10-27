// src/components/Products/Products.jsx
import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

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

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ────────────────────── Component ────────────────────── */
const Products = () => {
  const features = [
    {
      icon: <CloudRain className="text-cyan-600" size={28} />,
      title: "Air to Pure Water",
      description: "Extracts moisture from air — endless supply, no source needed.",
      color: "from-cyan-100 to-blue-50",
    },
    {
      icon: <Droplet className="text-blue-600" size={28} />,
      title: "Zero Water Wastage",
      description: "100% efficient — unlike RO systems that waste 70%+.",
      color: "from-blue-100 to-cyan-50",
    },
    {
      icon: <Zap className="text-yellow-600" size={28} />,
      title: "Ultra-Low Power",
      description: "Uses less energy than a light bulb — solar compatible.",
      color: "from-yellow-100 to-orange-50",
    },
    {
      icon: <Brain className="text-purple-600" size={28} />,
      title: "AI-Powered Purity",
      description: "Smart sensors monitor TDS, pH, and humidity in real-time.",
      color: "from-purple-100 to-pink-50",
    },
    {
      icon: <Heart className="text-pink-600" size={28} />,
      title: "Alkaline & Mineral-Rich",
      description: "pH 8.5–9.5 with Ca²⁺ & Mg²⁺ — optimal for immunity & hydration.",
      color: "from-pink-100 to-red-50",
    },
    {
      icon: <Plug className="text-gray-600" size={28} />,
      title: "Plug & Drink",
      description: "No plumbing. Just plug in — ready in under 5 minutes.",
      color: "from-gray-100 to-slate-50",
    },
    {
      icon: <Shield className="text-green-600" size={28} />,
      title: "Crisis-Proof",
      description: "Works during droughts, disasters, or grid failures.",
      color: "from-green-100 to-emerald-50",
    },
    {
      icon: <Leaf className="text-emerald-600" size={28} />,
      title: "Plastic-Free Future",
      description: "Eliminates 10,000+ plastic bottles per unit annually.",
      color: "from-emerald-100 to-teal-50",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen px-6 md:px-10">
      {/* ───── HERO HEADER ───── */}
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

        <motion.p
          className="text-xl md:text-2xl text-gray-700 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          SCADE’s Flagship <strong>Atmospheric Water Generator</strong>
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Sparkles size={20} />
          <span>Revolutionizing Access to Pure Water</span>
        </motion.div>
      </motion.header>

      {/* ───── HERO IMAGE + DESCRIPTION ───── */}
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <img
                src="https://media.istockphoto.com/id/486755202/photo/torrent.webp?a=1&b=1&s=612x612&w=0&k=20&c=1GXOaZshUYtjnL9mzNW_27W5jD_wvsvYg3LKtEz7Pgs="
                alt="Magmist Atmospheric Water Generator – sleek, modern, eco-friendly design"
                className="rounded-3xl shadow-2xl w-full object-cover border border-gray-200 group-hover:shadow-3xl transition-shadow duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-semibold text-lg drop-shadow-md">
                  Engineered for Tomorrow
                </p>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-blue-900">
              Pure Water. From Thin Air.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Magmist doesn’t just <em>filter</em> water — it <strong>creates</strong> it. Using advanced
              condensation and multi-stage purification, it delivers <strong>alkaline, mineral-rich water</strong>{" "}
              with zero waste, zero plastic, and zero dependency on external sources.
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-inner border-l-4 border-cyan-600">
              <blockquote className="text-xl font-semibold text-cyan-800 italic">
                “Tackles one of humanity’s greatest challenges — access to truly healthy drinking water.”
              </blockquote>
            </div>

            <motion.a
              href="#magmist-details"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-700 transition-all"
              whileHover={{ x: 5 }}
              aria-label="Explore Magmist product details"
            >
              Explore Magmist <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ───── FEATURES GRID ───── */}
      <motion.section
        className="max-w-7xl mx-auto mt-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-16"
          variants={itemVariants}
        >
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
              {/* Gradient overlay on hover */}
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

              {/* Decorative gauge */}
              <Gauge className="absolute bottom-2 right-2 text-cyan-400/20" size={32} aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ───── FINAL CTA – WHATSAPP ───── */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Ready to Drink the Future?
        </h3>

<motion.a
  href="https://wa.me/917411532800?text=Hi%20SCADE%20Team!%20I%20want%20to%20know%20more%20about%20Magmist."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-cyan-500/40 transition-all"
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.96 }}
  aria-label="Contact us on WhatsApp to get Magmist"
>
  <Droplet className="animate-pulse" size={40} />
  Get Magmist
</motion.a>
      </motion.div>
    </div>
  );
};

export default Products;