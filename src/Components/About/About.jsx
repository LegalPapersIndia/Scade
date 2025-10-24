// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Beaker,
  ShieldCheck,
  Cpu,
  Globe,
  Heart,
  Users,
  Droplet,
  Sparkles,
  Zap,
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const pillarIcons = {
  Precision: <Beaker className="text-blue-600" size={28} />,
  Reliability: <ShieldCheck className="text-green-600" size={28} />,
  "Advanced Solutions": <Cpu className="text-purple-600" size={28} />,
};

const About = () => {
  const pillars = [
    {
      name: "Precision",
      description:
        "Every design, process, and product is crafted with scientific accuracy and technical excellence.",
    },
    {
      name: "Reliability",
      description:
        "Tested, trusted, and built to perform flawlessly in real-world conditions.",
    },
    {
      name: "Advanced Solutions",
      description:
        "Fusing healthcare expertise with cutting-edge engineering to solve real human needs.",
    },
  ];

  return (
    <div className="pt-24 pb-16 px-6 md:px-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-black text-blue-900 mb-6 tracking-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-cyan-600">SCADE Studio</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Founded in <strong>2025</strong> in <strong>Mysore, Karnataka</strong>, we are more than a company — we are a <span className="text-cyan-600 font-bold">movement</span> toward healthier, sustainable living.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-6 py-3 rounded-full text-lg font-semibold shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Droplet size={20} />
          <span>“Water from Air, Health in Every Drop.”</span>
        </motion.div>
      </motion.header>

      {/* Our Pillars */}
      <motion.section
        className="max-w-6xl mx-auto mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
          variants={itemVariants}
        >
          Built on <span className="text-cyan-600">Three Enduring Pillars</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform">
                  {pillarIcons[pillar.name]}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{pillar.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-xl border-l-4 border-cyan-600"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 flex items-center gap-3">
            <Globe className="text-cyan-600" size={32} />
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver <strong>innovative, sustainable, and scientifically proven</strong> technologies that enhance daily health while preserving the planet’s natural balance.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-xl border-l-4 border-green-600"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 flex items-center gap-3">
            <Heart className="text-green-600" size={32} />
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To become a <strong>global leader in health-focused technology</strong>, empowering communities with reliable, life-enhancing solutions.
          </p>
        </motion.div>
      </motion.section>

      {/* Philosophy & Founding */}
      <motion.section
        className="max-w-6xl mx-auto mt-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white p-10 md:p-12 rounded-3xl shadow-2xl overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3"
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="text-cyan-400" size={36} />
            Our Philosophy
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-6 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Born from <strong className="text-cyan-300">unity, care, and responsibility</strong>, SCADE was founded by{" "}
            <strong className="text-cyan-300">two visionary families</strong> — one rooted in <strong>healthcare</strong>, the other in <strong>engineering</strong>.
          </motion.p>

          <motion.p
            className="text-base md:text-lg italic text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our flagship product, <strong className="text-white">Magmist</strong>, transforms air into{" "}
            <strong className="text-cyan-300">pure, alkaline, mineral-rich water</strong> — solving one of humanity’s greatest challenges: <em>access to truly healthy hydration</em>.
          </motion.p>
        </div>

        {/* Decorative Sparkles */}
        <Sparkles className="absolute top-6 right-8 text-cyan-400/30" size={60} />
        <Zap className="absolute bottom-6 left-10 text-yellow-400/20" size={50} />
      </motion.section>

      {/* Final Tagline */}
      <motion.div
        className="max-w-5xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="text-3xl md:text-4xl italic font-bold text-cyan-700"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          “Water from Air, Health in Every Drop.”
        </motion.p>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default About;