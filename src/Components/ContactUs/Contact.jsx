// src/Components/ContactUs/Contact.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle,
  ArrowRight, Sparkles, Instagram, Facebook, Linkedin, Globe,
} from "lucide-react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="pt-24 pb-20 px-6 md:px-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      {/* HERO */}
      <motion.header initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 tracking-tight" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150 }}>
          Let’s <span className="text-cyan-600">Connect</span>
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Inquiries, partnerships, or just want to say hi? We’re here.
        </motion.p>
        <motion.a
          href="https://wa.me/917411532800?text=Hi%20SCADE%20Team!%20I%20want%20to%20start%20a%20conversation.%20Can%20we%20chat%3F"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg mt-8"
          whileHover={{ scale: 1.05 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.884 3.488"/>
          </svg>
          <span>Start a Conversation</span>
        </motion.a>
      </motion.header>

      {/* SCADE STORE-STUDIO INFO */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2 justify-center">
          <Sparkles className="text-cyan-600" size={32} /> Contact Us – SCADE Store-Studio
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-gray-800 flex items-center gap-2"><MapPin className="text-cyan-600" size={20} /> Address</p>
            <p className="text-gray-600 mt-1">SCADE Studio<br />Mysore, Karnataka, India</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-gray-800 flex items-center gap-2"><Mail className="text-cyan-600" size={20} /> Email</p>
            <a href="mailto:scade.magmist@gmail.com" className="text-cyan-600 hover:underline">scade.magmist@gmail.com</a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-gray-800 flex items-center gap-2"><Phone className="text-cyan-600" size={20} /> Phone</p>
            <a href="tel:+917411532800" className="text-cyan-600 hover:underline">+91 7411532800</a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-gray-800 flex items-center gap-2"><Globe className="text-cyan-600" size={20} /> Social Media</p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700"><Instagram size={22} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"><Facebook size={22} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800"><Linkedin size={22} /></a>
            </div>
            <p className="text-xs text-gray-500 mt-1">Coming Soon</p>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-700 leading-relaxed">
          We’d love to hear from you! Reach out for product inquiries, collaborations, or dealership opportunities. <br />
          <strong>Together, let’s create a world where every drop supports better living.</strong>
        </p>
      </motion.section>

      {/* FORM + INFO */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
          {[
            { icon: <Mail className="text-cyan-600" size={28} />, title: "Email Us", content: "scade.magmist@gmail.com", href: "mailto:scade.magmist@gmail.com", note: "Response within 24 hours" },
            { icon: <Phone className="text-green-600" size={28} />, title: "Call Us", content: "+91 7411532800", href: "tel:+917411532800", note: "Mon–Sat, 9 AM – 6 PM IST" },
            { icon: <MapPin className="text-blue-600" size={28} />, title: "Visit Us", content: "SCADE Studio\nMysore, Karnataka, India", href: "https://maps.google.com/?q=Mysore,+Karnataka", note: "By appointment only" },
          ].map((item, idx) => (
            <motion.a key={idx} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} whileHover={{ x: 8, scale: 1.02 }} className="block group">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">{item.title} <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} /></h3>
                  <p className="text-cyan-600 font-medium mt-1 whitespace-pre-line">{item.content}</p>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1"><Clock size={14} /> {item.note}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-gradient-to-br from-white to-cyan-50 p-8 md:p-10 rounded-3xl shadow-2xl border border-cyan-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3"><Send className="text-cyan-600" size={32} /> Send a Message</h2>
          {isSubmitSuccessful ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
              <p className="text-gray-600">We’ve received your message and will reply within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input {...register("name", { required: "Name is required" })} placeholder="Your Full Name" className={`w-full p-4 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`} />
                {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} /> {errors.name.message}</p>}
              </div>
              <div>
                <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })} placeholder="your@email.com" className={`w-full p-4 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`} />
                {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} /> {errors.email.message}</p>}
              </div>
              <div>
                <textarea rows={5} {...register("message", { required: "Message is required" })} placeholder="How can we help you today?" className={`w-full p-4 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none`} />
                {errors.message && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} /> {errors.message.message}</p>}
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl"}`}>
                {isSubmitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={22} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>


      {/* ========== INTERACTIVE MAP ========== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.597!2d76.639381!3d12.295810!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE3JzQ1LjAiTiA3NsKwMzgnMjEuOCJF!5e0!3m2!1sen!2sin!4v1690000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SCADE Studio Location - Mysore, Karnataka"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <p className="font-bold text-blue-900">SCADE Studio</p>
            <p className="text-sm text-gray-600">Mysore, Karnataka, India</p>
          </div>
        </div>
      </motion.div>

      {/* ========== FINAL PARTNER CTA ========== */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-20 p-10 bg-gradient-to-r from-blue-900 to-cyan-800 rounded-3xl shadow-2xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Partner with Us?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-6">
          Join dealerships, distributors, or collaborate on innovation.
        </p>
        <motion.a
          href="https://wa.me/917411532800?text=Hi%20SCADE%20Team!%20I'm%20interested%20in%20becoming%20a%20partner%20(dealer%2C%20distributor%2C%20or%20collaborator).%20Can%20we%20discuss%20opportunities%3F"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.884 3.488"/>
          </svg>
          Become a Partner
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;