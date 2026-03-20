import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useRef } from "react";
import RadarGrid from "./RadarGrid";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]); // parallax bg slower

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <RadarGrid />
      </motion.div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px]"
        animate={{
          background: [
            "radial-gradient(circle, hsl(217 100% 58% / 0.08) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(167 100% 50% / 0.08) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(217 100% 58% / 0.08) 0%, transparent 70%)",
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      {[
        { x: "15%", y: "25%", size: "w-2 h-2", color: "bg-accent/40", dur: 5, delay: 0 },
        { x: "80%", y: "30%", size: "w-1.5 h-1.5", color: "bg-primary/50", dur: 4, delay: 1 },
        { x: "25%", y: "65%", size: "w-1 h-1", color: "bg-warning/40", dur: 6, delay: 2 },
        { x: "70%", y: "60%", size: "w-1.5 h-1.5", color: "bg-accent/30", dur: 5.5, delay: 0.5 },
        { x: "50%", y: "20%", size: "w-1 h-1", color: "bg-primary/30", dur: 7, delay: 1.5 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.size} ${orb.color}`}
          style={{ left: orb.x, top: orb.y }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      <motion.div className="relative z-10 max-w-5xl mx-auto px-6 text-center" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8">
            <span className="dot-pulse" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Systems Online — 99.99% Uptime</span>
          </div>
        </motion.div>

        {/* Headline with blur-in */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          Enterprise IT, Connectivity
          <br />
          <motion.span
            className="text-gradient-primary inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            & Fintech
          </motion.span>{" "}
          — Built for Scale
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Africa's next-generation infrastructure platform. Managed IT, high-speed connectivity, 
          and fintech solutions engineered for enterprises that demand reliability at scale.
        </motion.p>

        {/* CTA buttons with shimmer + glow hover */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/contact">
            <motion.button
              className="group relative flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px -5px hsl(217 100% 58% / 0.6), 0 0 60px -15px hsl(217 100% 58% / 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Request Proposal
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          </a>
          <a href="/contact">
            <motion.button
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-surface/50 text-foreground font-medium text-sm transition-all duration-200 hover:border-primary/30 hover:bg-elevated"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </motion.button>
          </a>
        </motion.div>

        {/* Trust metrics with animated counters */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { value: "99.99%", label: "Uptime SLA" },
            { value: "500+", label: "Enterprises Served" },
            { value: "12", label: "African Countries" },
            { value: "<10ms", label: "Avg Latency" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400 } }}
            >
              <AnimatedCounter
                value={stat.value}
                className="text-2xl font-bold font-mono-nums text-foreground"
              />
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
