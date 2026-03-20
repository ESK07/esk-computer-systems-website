import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 border-t border-border relative overflow-hidden">
      {/* Animated background glows */}
      <motion.div
        className="absolute -top-20 left-1/3 w-60 h-60 bg-primary/5 rounded-full blur-[100px]"
        animate={{ x: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/3 w-60 h-60 bg-accent/5 rounded-full blur-[100px]"
        animate={{ x: [0, -50, 0], scale: [1.3, 1, 1.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 14 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Build Your Infrastructure
            <br />
            <motion.span
              className="text-gradient-primary inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              With Us
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join 500+ enterprises across Africa running their critical systems on ESK infrastructure. 
            Get started in minutes, scale to millions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <motion.button
                className="group relative flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px -5px hsl(217 100% 58% / 0.6), 0 0 60px -15px hsl(217 100% 58% / 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Today
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 py-3.5 rounded-lg border border-border bg-surface/50 text-foreground font-medium text-sm hover:border-primary/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Talk to Sales
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
