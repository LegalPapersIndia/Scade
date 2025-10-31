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
  Wind,
  Recycle,
  Battery,
  Brain,
  FlaskConical,
  Zap as ZapIcon,
  Home,
  AlertTriangle,
  Leaf,
  Wrench,
  Stethoscope,
  MapPin,
  Award,
  Sun,
  CloudRain,
  Activity,
  Shield,
  Palette,
  Sparkles as SparklesIcon,
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
  "Advanced Solutions": <Cpu   className="text-purple-600" size={28} />,
};

const benefitIcons = {
  "Turns Air into Water": <Wind className="text-cyan-600" />,
  "Zero Water Wastage": <Recycle className="text-green-600" />,
  "Low Power Consumption": <Battery className="text-yellow-600" />,
  "Smart Technology": <Brain className="text-purple-600" />,
  "Mineral & Alkaline Enrichment": <FlaskConical className="text-teal-600" />,
  "Plug-and-Play Setup": <ZapIcon className="text-orange-600" />,
  "Reliable During Emergencies": <AlertTriangle className="text-red-600" />,
  "Eco-Friendly Operation": <Leaf className="text-emerald-600" />,
  "Built for Durability": <Wrench className="text-gray-700" />,
  "Perfect for All Environments": <Home className="text-indigo-600" />,
};

const healthIcons = {
  "Balances Body pH": <Activity className="text-pink-600" />,
  "Supports Bone & Heart Health": <Heart className="text-red-600" />,
  "Aids Detoxification": <Shield className="text-teal-600" />,
  "Boosts Energy & Endurance": <Zap className="text-yellow-600" />,
  "Reduces Stress & Fatigue": <SparklesIcon className="text-purple-600" />,
  "Promotes Healthy Skin": <Palette className="text-rose-600" />,
};

const scadeReasons = [
  { icon: <Stethoscope className="text-blue-600" />, title: "Scientifically Developed", desc: "Designed with medical and engineering expertise." },
  { icon: <Users className="text-cyan-600" />, title: "Family-Founded, Value-Driven", desc: "Rooted in trust, care, and community wellness." },
  { icon: <MapPin className="text-green-600" />, title: "Made in India, Built for the World", desc: "Engineered in Mysore, ready to serve globally." },
  { icon: <Leaf className="text-emerald-600" />, title: "Committed to Sustainability", desc: "Reducing water waste and promoting eco-conscious living." },
  { icon: <Award className="text-yellow-600" />, title: "Customer-Centric Service", desc: "Reliable after-sales support and transparent communication." },
];

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

  const magmistBenefits = [
    "Turns Air into Water",
    "Zero Water Wastage",
    "Low Power Consumption",
    "Smart Technology",
    "Mineral & Alkaline Enrichment",
    "Plug-and-Play Setup",
    "Reliable During Emergencies",
    "Eco-Friendly Operation",
    "Built for Durability",
    "Perfect for All Environments",
  ];

  const healthBenefits = [
    "Balances Body pH",
    "Supports Bone & Heart Health",
    "Aids Detoxification",
    "Boosts Energy & Endurance",
    "Reduces Stress & Fatigue",
    "Promotes Healthy Skin",
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
          About <span className="text-cyan-600">SCADE store-Studio</span>
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

      {/* Magmist – The Future of Hydration */}
      <motion.section
        className="max-w-6xl mx-auto mt-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-3">
            <CloudRain className="text-cyan-300" size={40} />
            Magmist – The Future of Hydration
          </motion.h2>
          <motion.p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-cyan-50">
            SCADE’s flagship creation — an advanced <strong>Atmospheric Water Generator (AWG)</strong> that produces clean, natural, and <strong>alkaline water</strong> directly from the air around you.
          </motion.p>
          <motion.p className="mt-4 text-cyan-100">
            Using next-generation condensation technology, Magmist captures moisture, purifies it through a multi-stage filtration system, and enriches it with essential minerals — providing water that is <strong>pure, healthy, and perfectly balanced</strong>.
          </motion.p>
        </div>
        <Sun className="absolute top-8 right-10 text-yellow-300/20" size={80} />
        <Droplet className="absolute bottom-10 left-12 text-cyan-300/30" size={70} />
      </motion.section>

      {/* Why Magmist is a Game-Changer */}
      <motion.section
        className="max-w-7xl mx-auto mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          variants={itemVariants}
        >
          Why <span className="text-cyan-600">Magmist</span> is a Game-Changer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {magmistBenefits.map((benefit) => (
            <motion.div
              key={benefit}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all border border-cyan-100 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full mb-3">
                {benefitIcons[benefit]}
              </div>
              <p className="text-sm font-semibold text-gray-800">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Health Benefits */}
      <motion.section
        className="max-w-6xl mx-auto mt-20 bg-gradient-to-br from-teal-50 to-cyan-50 p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Health Benefits of <span className="text-cyan-600">Magmist Alkaline Water</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthBenefits.map((benefit) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow"
            >
              <div className="p-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg">
                {healthIcons[benefit]}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{benefit}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {benefit === "Balances Body pH" && "Neutralizes acidity and helps maintain optimal metabolic health."}
                  {benefit === "Supports Bone & Heart Health" && "Provides essential minerals like calcium, magnesium, iron, copper and zinc."}
                  {benefit === "Aids Detoxification" && "Flushes out toxins and supports liver & kidney function."}
                  {benefit === "Boosts Energy & Endurance" && "Enhances hydration at a cellular level."}
                  {benefit === "Reduces Stress & Fatigue" && "Improves overall body function for vitality."}
                  {benefit === "Promotes Healthy Skin" && "Hydration from alkaline water helps maintain clear, glowing skin."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 text-lg italic text-cyan-700 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Every drop of Magmist water is a fusion of science and nature — <strong>clean, pure, and revitalizing</strong>.
        </motion.p>
      </motion.section>

      {/* Why Choose SCADE? */}
      <motion.section
        className="max-w-7xl mx-auto mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          variants={itemVariants}
        >
          Why Choose <span className="text-cyan-600">SCADE?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {scadeReasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-cyan-500 text-center"
            >
              <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full w-fit mx-auto mb-3">
                {reason.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{reason.title}</h3>
              <p className="text-xs text-gray-600 mt-2">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Made in India */}
      <motion.section
        className="max-w-5xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="bg-gradient-to-r from-orange-50 to-cyan-50 p-8 rounded-3xl shadow-xl border-l-8 border-orange-500">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            Made in <span className="text-orange-600">India</span>, Built for the <span className="text-cyan-600">World</span>
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Engineered with pride in <strong>Mysore</strong>, Magmist combines global innovation with Indian ingenuity — delivering sustainable hydration solutions to homes, offices, and communities worldwide.
          </p>
        </motion.div>
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