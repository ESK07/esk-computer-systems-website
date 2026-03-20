import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    client: "National Bank of Zimbabwe",
    result: "40% reduction in downtime",
    description: "Migrated legacy infrastructure to ESK's managed cloud, achieving 99.99% uptime across 45 branches.",
    tags: ["Cloud Migration", "Managed IT"],
  },
  {
    icon: Shield,
    client: "ZimConnect ISP",
    result: "3x bandwidth capacity",
    description: "Deployed redundant fibre links with automatic failover, tripling available bandwidth for 10,000+ subscribers.",
    tags: ["ISP", "Connectivity"],
  },
  {
    icon: Zap,
    client: "PayFlow Africa",
    result: "$2M monthly throughput",
    description: "Built a multi-gateway fintech platform processing EcoCash, Paynow, and Stripe transactions in real-time.",
    tags: ["Fintech", "Payments"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 14 },
  },
};

const CaseStudies = () => {
  return (
    <section className="py-24 px-6 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] -translate-y-1/2"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Proven at Enterprise Scale
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cases.map((c) => (
            <motion.div
              key={c.client}
              className="glass-card-hover p-6 group"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.div
                className="p-2 rounded-lg bg-accent/10 border border-accent/20 inline-block mb-4"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <c.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                className="text-xl font-bold text-accent mb-1 font-mono-nums"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
              >
                {c.result}
              </motion.div>
              <div className="text-sm font-medium mb-2 group-hover:text-primary transition-colors duration-300">{c.client}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.description}</p>
              <div className="flex gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
