import { motion } from "framer-motion";
import { Globe, Code2, Wrench, Network, Settings, Palette, Database, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Stunning, responsive websites that engage your audience and drive results.",
    metrics: "Starting from $150",
  },
  {
    icon: Code2,
    title: "Web Applications & Custom Systems",
    description: "Tailored software solutions built to your exact specifications.",
    metrics: "Starting from $500",
  },
  {
    icon: Wrench,
    title: "Computer Repair & Maintenance",
    description: "Expert hardware diagnostics, repairs, and preventive maintenance.",
    metrics: "Diagnosis from $10",
  },
  {
    icon: Network,
    title: "Network & IT Support",
    description: "Comprehensive networking solutions and ongoing IT support.",
    metrics: "Starting from $50",
  },
  {
    icon: Settings,
    title: "Software Installation",
    description: "Professional software installation, configuration, and troubleshooting.",
    metrics: "Starting from $25",
  },
  {
    icon: Palette,
    title: "Branding & Digital Solutions",
    description: "Build a strong digital presence with our branding and design services.",
    metrics: "Starting from $100",
  },
  {
    icon: Database,
    title: "Business Systems & Automation",
    description: "Custom automation solutions and integrated business systems.",
    metrics: "Starting from $300",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Strategic planning and implementation for your digital journey.",
    metrics: "Consultation from $75",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const ServicesGrid = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Complete IT Solutions
            </h2>
          </div>
          <Link
            to="/services"
            className="group flex items-center gap-2 text-sm text-primary hover:underline transition-all"
          >
            View all services
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group glass-card-hover p-5 cursor-pointer relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Floating glow on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="p-2.5 rounded-lg bg-primary/10 border border-primary/20"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                <div className="text-xs font-mono text-accent">{service.metrics}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
