// src/components/Team.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Activity,
  BarChart3,
  Shield,
  HeartHandshake,
  Lightbulb,
  Users,
  Sparkles,
  Quote,
  ChevronDown,
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Chinmai V S",
      title: "PT, CTTS, CIASTMT, CDNT, CAFPCT, OMT",
      role: "Managing Director",
      icon: <User className="text-cyan-600" size={36} />,
      color: "from-cyan-100 to-blue-50",
      background:
        "Physiotherapist with advanced certifications in manual therapy, dry needling, and functional rehabilitation.",
      contribution:
        "Visionary leader integrating medical science into product design. Oversees health validation, community outreach, and sustainable wellness programs.",
      bio: "25-year-old innovator blending healthcare with technology. Founder of SCADE with a mission to make health accessible through innovation. Mentors young professionals and runs hydration awareness workshops.",
      quote: "“Reaching people through products that benefit their health.”",
    },
    {
      name: "Deekshi P",
      title: "Mechatronics Engineer",
      role: "Technical Head",
      icon: <Activity className="text-blue-600" size={36} />,
      color: "from-blue-100 to-indigo-50",
      background:
        "Expert in 3D modeling, CAD, Arduino programming, and smart system design.",
      contribution:
        "Leads Magmist R&D — from prototype to production. Optimizes energy efficiency, integrates IoT sensors, and ensures durability in extreme conditions.",
      bio: "Passionate robotics engineer turning ideas into reality. Believes technology should serve human health. Enjoys open-source projects and teaching kids coding.",
      quote: "“Health makes humans live happily.”",
    },
    {
      name: "Samartha V S",
      title: "Jr. Engineer (Aero & Marine)",
      role: "Marketing Head",
      icon: <BarChart3 className="text-green-600" size={36} />,
      color: "from-green-100 to-emerald-50",
      background:
        "Diploma in Fire & Safety, Aeronautical, and Marine Engineering.",
      contribution:
        "Drives brand growth via digital campaigns, product demos, and NGO partnerships. Crafts science-backed marketing that resonates with families.",
      bio: "Safety expert turned storyteller. Uses engineering insight to explain complex tech simply. Loves public speaking and community impact events.",
      quote: "“Innovating safety and health for every home.”",
    },
    {
      name: "Anuradha D R",
      title: "Family Pillar",
      role: "Financial Management",
      icon: <HeartHandshake className="text-rose-600" size={36} />,
      color: "from-rose-100 to-pink-50",
      background: "Mother of Dr. Chinmai & Samartha. Guardian of family values.",
      contribution:
        "Manages budgets, investments, and ethical finance. Ensures long-term sustainability and funds community health initiatives.",
      bio: "Nurturing leader with deep belief in preventive wellness. Advocates natural living, gardening, and passing down health wisdom to the next generation.",
      quote: "“A mother always expects a healthy lifestyle.”",
    },
    {
      name: "Savitha",
      title: "Family Anchor",
      role: "Financial Management",
      icon: <Shield className="text-purple-600" size={36} />,
      color: "from-purple-100 to-violet-50",
      background: "Mother of Deekshi P. Champion of essential resources.",
      contribution:
        "Oversees cash flow, cost control, and investor trust. Supports eco-tech investments aligned with clean water access for all.",
      bio: "Community-minded matriarch who sees water, food, and family as life’s foundation. Believes small innovations create big change.",
      quote: "“Water is a basic essential with multiple benefits.”",
    },
  ];

  return (
    <div className="pt-24 pb-20 px-6 md:px-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-black text-blue-900 mb-6 tracking-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          Meet the <span className="text-cyan-600">Family Behind SCADE</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Two families. One vision. Healthcare meets engineering — driven by <strong>care, science, and responsibility</strong>.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg mt-8"
          whileHover={{ scale: 1.05 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Users size={22} />
          <span>United for Healthier Tomorrows</span>
        </motion.div>
      </motion.header>

      {/* Team Grid */}
      <motion.section
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const [isOpen, setIsOpen] = useState(false);

            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${member.color} p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Inner Card */}
                <div className="bg-white rounded-[22px] p-6 h-full relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                      {member.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.title}</p>
                      <p className="text-cyan-600 font-semibold mt-1">{member.role}</p>
                    </div>
                  </div>

                  {/* Background */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-600 uppercase tracking-wider">Background</p>
                    <p className="text-sm text-gray-700 mt-1">{member.background}</p>
                  </div>

                  {/* Contribution */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-600 uppercase tracking-wider flex items-center gap-1">
                      <Lightbulb size={14} className="text-yellow-500" /> Contribution
                    </p>
                    <p className="text-sm text-gray-700 mt-1 leading-relaxed">{member.contribution}</p>
                  </div>

                  {/* Bio – Expandable */}
                  <details className="group/bio cursor-pointer" onToggle={(e) => setIsOpen(e.currentTarget.open)}>
                    <summary className="text-xs font-medium text-gray-600 uppercase tracking-wider list-none flex items-center justify-between select-none">
                      <span className="flex items-center gap-1">
                        <Users size={14} className="text-cyan-500" /> Personal Story
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-cyan-600"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </summary>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed pb-2 border-b border-gray-100">
                      {member.bio}
                    </p>
                  </details>

                  {/* Quote */}
                  <blockquote className="mt-5 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-l-4 border-cyan-600">
                    <Quote className="text-cyan-600 mb-2" size={20} />
                    <p className="text-cyan-800 font-semibold italic text-sm leading-relaxed">
                      {member.quote}
                    </p>
                  </blockquote>
                </div>

                {/* Decorative Elements */}
                <Sparkles className="absolute top-4 right-4 text-cyan-400/20" size={40} />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      {/* Final Message */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-20 p-10 bg-gradient-to-r from-blue-900 to-cyan-800 rounded-3xl shadow-2xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          We Are More Than a Team
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-blue-100">
          We are <strong>families united by purpose</strong> — building technology that doesn’t just work, but <em>cares</em>.
        </p>
        <motion.div
          className="mt-6 inline-flex items-center gap-2 text-cyan-300 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          <HeartHandshake size={24} />
          <span>Health. Innovation. Trust.</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Team;