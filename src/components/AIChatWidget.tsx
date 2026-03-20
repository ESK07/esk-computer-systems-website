import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Welcome to ESK Systems. I can help you find the right solution — from web development and custom systems to IT support, connectivity, and fintech. How can I help?",
  },
];

const quickActions = [
  "Request a website",
  "Fix my network",
  "Build a custom system",
  "Business automation help",
];

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const simulateResponse = (userMessage: string) => {
    setTyping(true);
    setTimeout(() => {
      let response = "I'd be happy to help with that. Let me connect you with our team for a detailed consultation.";
      
      if (userMessage.toLowerCase().includes("website") || userMessage.toLowerCase().includes("web")) {
        response = "Great choice! We build corporate websites, landing pages, web applications, and full SaaS platforms. Pricing starts at $499 for landing pages and scales based on complexity. Want me to help scope your project, or would you prefer to speak with our team?";
      } else if (userMessage.toLowerCase().includes("network") || userMessage.toLowerCase().includes("fix")) {
        response = "We offer 24/7 network and IT support with critical response times under 15 minutes. Our team can diagnose connectivity issues, infrastructure problems, and provide ongoing monitoring. For urgent issues, I can prioritize your request. Shall I connect you with our support team?";
      } else if (userMessage.toLowerCase().includes("custom") || userMessage.toLowerCase().includes("system") || userMessage.toLowerCase().includes("build")) {
        response = "We specialize in custom business systems — from internal tools and ERPs to full SaaS platforms. Our process: Discovery → Design → Development → Deployment → Support. Typical timelines range from 4-12 weeks. Would you like to discuss your requirements?";
      } else if (userMessage.toLowerCase().includes("automation") || userMessage.toLowerCase().includes("business")) {
        response = "Our business automation services include ERP-lite implementations, workflow automation, process optimization, and digital transformation consulting. We help businesses eliminate manual processes and scale operations. Want to explore what we can automate for you?";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setTyping(false);
    }, 1500);
  };

  const sendMessage = (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setInput("");
    simulateResponse(msg);
  };

  return (
    <>
      {/* Floating action button with pulse glow */}
      <AnimatePresence>
        {!open && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground"
            onClick={() => setOpen(true)}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Pulse ring */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{
                scale: [1, 1.8, 1.8],
                opacity: [0.6, 0, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.4, 0, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            />
            {/* Glow */}
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 15px hsl(217 100% 58% / 0.3)",
                  "0 0 30px hsl(217 100% 58% / 0.5)",
                  "0 0 15px hsl(217 100% 58% / 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <MessageCircle className="w-5 h-5 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[600px] flex flex-col rounded-xl border border-border bg-card overflow-hidden"
            style={{ boxShadow: "0 0 40px -10px rgba(59,130,246,0.25), 0 20px 60px -20px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 40, scale: 0.8, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                </motion.div>
                <span className="text-sm font-medium">ESK AI Assistant</span>
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              <motion.button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-elevated"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 15, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: i === 0 ? 0.2 : 0 }}
                >
                  {msg.role === "assistant" && (
                    <motion.div
                      className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    </motion.div>
                  )}
                  <motion.div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    {msg.content}
                  </motion.div>
                </motion.div>
              ))}

              {/* Enhanced typing indicator */}
              {typing && (
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-secondary px-4 py-3 rounded-lg">
                    <div className="flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full bg-primary/60"
                          animate={{
                            y: [0, -6, 0],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions with glow hover */}
            {messages.length <= 1 && (
              <motion.div
                className="px-4 pb-2 flex flex-wrap gap-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {quickActions.map((action, i) => (
                  <motion.button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="text-xs px-2.5 py-1.5 rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.06 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px hsl(217 100% 58% / 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Input */}
            <motion.div
              className="p-3 border-t border-border bg-surface"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_2px_hsl(217_100%_58%/0.1)] transition-all"
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  className="p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-30 transition-opacity"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px hsl(217 100% 58% / 0.4)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
