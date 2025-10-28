// src/Components/Chatbot.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
} from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  ExternalLink,
  Zap,
  Users,
  ShoppingCart,
  Shield,
  HelpCircle,
} from "lucide-react";

/* -------------------------------------------------
    Pre‑defined Q&A (unchanged)
   ------------------------------------------------- */
const predefinedResponses = {
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
  { label: "What is Magmist?", key: "magmist", icon: Zap },
  { label: "Price?", key: "price", icon: ShoppingCart },
  { label: "Team", key: "team", icon: Users },
  { label: "How to order", key: "order", icon: HelpCircle },
  { label: "Warranty", key: "warranty", icon: Shield },
];

/* -------------------------------------------------
    WhatsApp Constant
   ------------------------------------------------- */
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_PREFILL = encodeURIComponent(
  "Hi SCADE, I'm reaching out from the website chatbot. I'd like to chat with a human."
);

/* -------------------------------------------------
    Main Component
   ------------------------------------------------- */
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
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const controls = useAnimationControls();

  /* ---------- Scroll to bottom ---------- */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  /* ---------- Send message ---------- */
  const sendMessage = async (text = input.trim()) => {
    if (!text) return;

    const userMsg = { text, sender: "user", timestamp: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));

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
    setTyping(false);
  };

  const handleQuick = (key) => {
    const label = quickReplies.find((q) => q.key === key)?.label || "";
    sendMessage(label);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleChat = () => {
    if (!open) {
      setOpen(true);
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.95, opacity: 0 }).then(() => setOpen(false));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* ---------- Floating Orb ---------- */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-0 shadow-2xl ring-4 ring-cyan-400/30 transition-all"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(34,211,238,0.4)",
            "0 0 30px rgba(34,211,238,0.6)",
            "0 0 20px rgba(34,211,238,0.4)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ---------- Chat Window ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-6 z-40 w-80 sm:w-96 overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-gray-200/50"
            style={{ maxHeight: "80vh" }}
            role="dialog"
            aria-labelledby="chatbot-title"
          >
            {/* Header */}
            <motion.div
              className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 p-4 text-white"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur"
                >
                  <Bot className="h-6 w-6" />
                </motion.div>
                <div>
                  <h2 id="chatbot-title" className="text-lg font-semibold">
                    SCADE Assistant
                  </h2>
                  <p className="text-xs opacity-90">
                    {typing ? "typing..." : "Online"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Messages – simple scrollable div */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/80 backdrop-blur-sm scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-100"
              style={{ maxHeight: "calc(80vh - 190px)" }}
            >
              {messages.map((m, i) => {
                const isUser = m.sender === "user";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`relative max-w-[78%] rounded-2xl px-4 py-2.5 text-sm shadow-sm
                        ${isUser
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none"
                          : "bg-white/80 backdrop-blur-sm text-gray-800 rounded-tl-none border border-gray-200"
                        }`}
                    >
                      {/* Tail */}
                      <div
                        className={`absolute bottom-0 w-3 h-3 transform
                          ${isUser
                            ? "right-0 translate-x-1/2 bg-gradient-to-l from-cyan-500 to-blue-600"
                            : "left-0 -translate-x-1/2 bg-white/80"
                          }`}
                        style={{
                          clipPath: isUser
                            ? "polygon(0% 0%, 100% 100%, 0% 100%)"
                            : "polygon(100% 0%, 0% 100%, 100% 100%)",
                        }}
                      />
                      <p className="whitespace-pre-wrap">{m.text}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-white/80 px-4 py-2.5 shadow-sm">
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "easeInOut",
                          delay,
                        }}
                        className="h-2 w-2 rounded-full bg-cyan-500"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="flex flex-wrap gap-2 border-t border-gray-200 bg-gray-50/80 p-3 backdrop-blur">
              {quickReplies.map((q, i) => {
                const Icon = q.icon;
                return (
                  <motion.button
                    key={q.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuick(q.key)}
                    className="flex items-center gap-1 rounded-full bg-cyan-100 px-3 py-1.5 text-xs font-medium text-cyan-800 transition hover:bg-cyan-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {q.label}
                  </motion.button>
                );
              })}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="flex items-center gap-1 rounded-full bg-green-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-green-700"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                WhatsApp
              </motion.button>
            </div>

            {/* Input */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-gray-200 bg-white/90 p-3 backdrop-blur"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full rounded-full border border-gray-300 bg-white/70 px-4 py-2.5 pr-10 text-sm placeholder-gray-500 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  autoFocus
                  aria-label="Message input"
                />
                {input && (
                  <motion.button
                    type="submit"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-cyan-600 p-1.5 text-white shadow-md transition hover:bg-cyan-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}