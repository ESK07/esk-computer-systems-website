import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "For small businesses getting started",
    features: ["Up to 50 Mbps connectivity", "Basic IT monitoring", "Email support", "5 user accounts", "Monthly reports"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$1,499",
    description: "For growing enterprises",
    features: ["Up to 500 Mbps connectivity", "24/7 managed IT", "Priority support", "Fintech API access", "Unlimited users", "Real-time analytics"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations at scale",
    features: ["Dedicated fibre links", "Full infrastructure management", "Dedicated account manager", "Custom fintech integrations", "SLA guarantees", "On-premise deployment"],
    highlighted: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 14 },
  },
};

const PricingSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/3 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Infrastructure That Scales With You
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/40 bg-primary/5 glow-primary"
                  : "border-border bg-card hover:border-primary/20"
              }`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {plan.highlighted && (
                <motion.div
                  className="text-[10px] uppercase tracking-widest text-primary font-medium mb-4"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-2 mb-1">
                <motion.span
                  className="text-3xl font-bold font-mono-nums"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {plan.price}
                </motion.span>
                {plan.price !== "Custom" && <span className="text-sm text-muted-foreground">/mo</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.05 }}
                  >
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </motion.li>
                ))}
              </ul>
              <a href="/contact" className="block">
                <motion.button
                  className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-surface text-foreground hover:border-primary/30"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </motion.button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
