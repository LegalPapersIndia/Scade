// src/Components/Chatbot/Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// ADDED ExternalLink for the WhatsApp button
import { MessageCircle, X, Send, Bot, ExternalLink } from "lucide-react";

/* -------------------------------------------------
    Pre‑defined Q&A
    ------------------------------------------------- */
const predefinedResponses = {
  // ... (rest of predefinedResponses remains the same)
  hello:
    "Hi! I'm the SCADE assistant. Ask me anything about Magmist, the team, or how to order.",
  magmist:
    "Magmist is an Atmospheric Water Generator that pulls moisture from the air, purifies it, adds essential minerals, and delivers pH 8.5+ alkaline water with zero plastic waste. No plumbing, solar‑compatible, ultra‑low power.",
  price:
    "Pricing starts at ₹1,29,000 for the residential unit. Bulk / NGO rates are available – just ping us on WhatsApp or fill the contact form.",
  team: "SCADE is a family‑driven startup. Dr. Chinmai V S (MD), Deekshi P (Tech Head), Samartha V S (Marketing), and our two family pillars manage finance & ethics. Meet the whole team on the Team page.",
  order:
    "Tap the WhatsApp button (green) or fill the Contact form. We’ll send you a quote, demo video, and arrange a virtual/physical demo.",
  warranty:
    "2‑year comprehensive warranty + 5‑year extended service plan. Free replacement of filters for the first year.",
  default:
    "I’m not sure about that. Try asking about Magmist, price, team, order, or warranty. You can also chat with a human on WhatsApp!",
};

const quickReplies = [
  { label: "What is Magmist?", key: "magmist" },
  { label: "Price?", key: "price" },
  { label: "Team", key: "team" },
  { label: "How to order", key: "order" },
  { label: "Warranty", key: "warranty" },
];

/* -------------------------------------------------
    WhatsApp Constant
    ------------------------------------------------- */
// Replace with the actual WhatsApp number (country code + number, no '+' or spaces)
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_PREFILL = encodeURIComponent(
  "Hi SCADE, I'm reaching out from the website chatbot. I'd like to chat with a human."
);

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! How can I help you today?",
      sender: "bot",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const sendMessage = (text = input.trim()) => {
    if (!text) return;

    const userMsg = { text, sender: "user", timestamp: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    setTimeout(() => {
      const key = text.toLowerCase().replace(/[^\w]/g, "");
      let reply = predefinedResponses.default;

      for (const [k, v] of Object.entries(predefinedResponses)) {
        if (key.includes(k) || k.includes(key)) {
          reply = v;
          break;
        }
      }

      const botMsg = { text: reply, sender: "bot", timestamp: Date.now() };
      setMessages((m) => [...m, botMsg]);
    }, 600);
  };

  const handleQuick = (key) => {
    const label = quickReplies.find((q) => q.key === key)?.label || "";
    sendMessage(label);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating toggle button – LEFT SIDE */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-cyan-600 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-cyan-700 transition-all font-medium"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {open ? "Close" : "Chat"}
      </motion.button>

      {/* Chat window – LEFT SIDE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-40 flex flex-col"
            style={{ maxHeight: "80vh" }}
          >
            {/* Header (No Change) */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4 flex items-center gap-3">
              <Bot size={24} />
              <div>
                <p className="font-semibold">SCADE Assistant</p>
                <p className="text-xs opacity-90">Usually replies instantly</p>
              </div>
            </div>

            {/* Messages (No Change) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      m.sender === "user"
                        ? "bg-cyan-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies - ADDED WhatsApp button */}
            <div className="flex flex-wrap gap-2 p-3 border-t">
              {quickReplies.map((q) => (
                <button
                  key={q.key}
                  onClick={() => handleQuick(q.key)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1 transition"
                >
                  {q.label}
                </button>
              ))}
              {/* THE NEW WHATSAPP BUTTON */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="text-xs bg-green-500 hover:bg-green-600 text-white rounded-full px-3 py-1 transition font-medium flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
                Chat on WhatsApp
              </motion.button>
              {/* END NEW WHATSAPP BUTTON */}
            </div>

            {/* Input (No Change) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center border-t p-3 gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                autoFocus
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition"
                aria-label="Send"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
