// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplet,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

// ---- Your local logo -------------------------------------------------
import Logo from "../Asset/1.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Mag | mist", path: "/products" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Instagram size={20} />, url: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={20} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Facebook size={20} />, url: "https://facebook.com", label: "Facebook" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: "scade.magmist@gmail.com",
      href: "mailto:scade.magmist@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      text: "+91 7411532800",
      href: "tel:+917411532800",
    },
    {
      icon: <MapPin size={18} />,
      text: "Mysore, Karnataka, India",
      href: "https://maps.google.com/?q=Mysore,+Karnataka",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-blue-950 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ==== Brand Section ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            {/* Local logo with fallback */}
            <img
              src={Logo}
              alt="SCADE Studio Logo"
              className="h-12 w-35 rounded-lg shadow-lg object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80";
              }}
            />
          </div>

          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
            Water from Air, Health in Every Drop. Innovating sustainable hydration
            for a better tomorrow.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-800/50 rounded-full hover:bg-cyan-600 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ==== Quick Links ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-5 text-cyan-400">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 text-blue-100 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ==== Contact Info ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-5 text-cyan-400">Get in Touch</h3>
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                className="flex items-start gap-3 text-blue-100 hover:text-cyan-400 transition-colors duration-200 group"
                whileHover={{ x: 5 }}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="p-1.5 bg-blue-800/50 rounded-lg group-hover:bg-cyan-600 transition-colors">
                  {info.icon}
                </div>
                <span className="text-sm">{info.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ==== Bottom Bar ==== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-blue-800 text-center"
      >
        <p className="text-blue-300 text-sm">
          © {currentYear}{" "}
          <span className="font-semibold text-cyan-400"><Link to="https://www.legalpapersindia.com/">Legal Papers India</Link></span>. All
          rights reserved.
          <span className="block mt-1 text-xs text-blue-400">
            Innovating Water. Sustaining Life.
          </span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;