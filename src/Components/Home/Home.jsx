// src/components/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplet, HeartPulse, Leaf, Sun, CheckCircle, Users, Zap } from "lucide-react";
import videoUrl from "../../Asset/demo.mp4"; // Replace with your actual video file path

/* -------------------------------------------------------------------------- */
/*                         VIDEO BANNER - SINGLE VIDEO REPLACES CAROUSEL      */
/* -------------------------------------------------------------------------- */
const VideoBanner = ({ videoUrl, title, subtitle }) => {
  return (
    <div className="relative w-full h-[32rem] overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/30 mb-20 border-8 border-white bg-gray-100">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
      />

      {/* Optional Fallback Image (uncomment if needed) */}
      {/* 
      <img
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19"
        alt="Fallback"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      */}

      {/* Gradient Overlay + Animated Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex flex-col justify-end items-start p-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold text-white text-left tracking-tight max-w-4xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-white/90 mt-2 max-w-3xl text-left font-light"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 MAIN HOME COMPONENT                        */
/* -------------------------------------------------------------------------- */
const Home = () => {
  const principles = [
    {
      title: "Magmist",
      icon: <Droplet className="text-cyan-500" size={40} />,
      description: "Transforming air into pure, alkaline, mineral-rich water.",
      color: "cyan",
    },
    {
      title: "Health First",
      icon: <HeartPulse className="text-pink-500" size={40} />,
      description: "Driven by science, care, and a mission to enhance human health.",
      color: "pink",
    },
    {
      title: "Eco Innovation",
      icon: <Leaf className="text-green-500" size={40} />,
      description: "Committed to protecting the planet and promoting sustainable living.",
      color: "green",
    },
    {
      title: "Pillar Tech",
      icon: <Sun className="text-amber-500" size={40} />,
      description: "Built on Precision, Reliability, Advanced Solutions, innovation, health & planet here.",
      color: "amber",
    },
  ];

  const magmistProductImage =
    "https://plus.unsplash.com/premium_photo-1726837561635-6e9fd565041c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBwdXJpdHklMjBpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";

  return (
    <div className="pt-28 bg-white min-h-screen text-center px-4 md:px-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold text-green-900 mb-6 tracking-tight">
          <span className="text-cyan-600">SCADE -</span> Precision, Reliability & Advanced Solutions
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 font-normal leading-relaxed">
          Redefining the future through{" "}
          <strong className="font-semibold text-blue-800">science, care, and technology</strong>
          —pioneering products that enhance human health while protecting the planet.
        </p>
      </motion.header>

      {/* Video Banner */}
      <div className="max-w-7xl mx-auto mb-32">
        <VideoBanner
          videoUrl={videoUrl} // CHANGE THIS TO YOUR VIDEO URL
          title="The Future of Air-to-Water Technology"
          subtitle="Atmospheric water generator extracting pure water from air"
        />
      </div>

      {/* Principles Section */}
      <motion.section
        className="flex justify-center gap-6 md:gap-8 flex-wrap max-w-7xl mx-auto pb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {principles.map((item) => (
          <motion.article
            key={item.title}
            className={`bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-xl p-8 w-full sm:w-[45%] lg:w-[23%] flex flex-col items-center border-t-4 border-${item.color}-400/80`}
            whileHover={{ y: -10 }}
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

      <hr className="max-w-7xl mx-auto border-gray-100" />

      {/* Flagship Product */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center text-left px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-cyan-600 uppercase font-semibold text-sm tracking-widest mb-2 inline-block">
              Flagship Product
            </span>
            <h2 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
              Introducing <strong className="text-cyan-600">Magmist</strong>: Hydration Redefined
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Our flagship product, Magmist, is a cutting-edge Atmospheric Water Generator (AWG) that
              transforms air into life-sustaining hydration — delivering pure, mineral-enriched,
              perfectly alkaline water without a drop of water waste.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-700">
                  <strong>Alkaline Purity:</strong>{" "}
                  <span className="font-semibold text-cyan-700">pH 8.5+</span> for optimal balance and
                  detoxification.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-700">
                  <strong>Mineral Enriched:</strong> Includes essential trace minerals like Calcium
                  (Ca), Magnesium (Mg), Iron (Fe), Zinc (Zn), and Copper (Cu).
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-700">
                  <strong>Health & Taste:</strong> Minerals are balanced for superior taste and
                  enhanced health benefits.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-700">
                  <strong>Eco-Conscious:</strong> Zero plastic, powered by clean energy options for a
                  sustainable footprint.
                </span>
              </li>
            </ul>
            <Link
              to="/products"
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
            className="flex justify-center"
          >
            <div className="bg-blue-50/50 p-6 rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
              <img
                src={magmistProductImage}
                alt="Magmist Atmospheric Water Generator"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="max-w-7xl mx-auto border-gray-100" />

      {/* Global Trust Stats */}
      <motion.section
        className="py-24 bg-blue-50/50"
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
            {[
              { icon: Users, color: "blue", stat: "4.9/5", label: "Verified Customer Rating" },
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
                <p className="text-gray-500 mt-2 font-medium uppercase text-sm tracking-wide">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
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
          className="inline-flex items-center justify-center px-16 py-7 text-xl font-bold rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-600/60 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          <Droplet className="mr-3" size={24} /> Explore All Products
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;