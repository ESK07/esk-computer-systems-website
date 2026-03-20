import { motion } from "framer-motion";
import { Globe, Code2, Wrench, Network, Settings, Palette, Database, Zap, Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AIChatWidget from "../components/AIChatWidget";
import ScrollProgress from "../components/ScrollProgress";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Create stunning, responsive websites that engage your audience and drive results.",
    price: "Starting from $150",
    features: ["Responsive design for all devices", "Modern frameworks and technologies", "SEO optimization", "Performance tuning", "Content management systems"],
  },
  {
    icon: Code2,
    title: "Web Applications & Custom Systems",
    description: "Tailored software solutions built to your exact specifications.",
    price: "Starting from $500",
    features: ["Custom business applications", "Database design and integration", "API development", "Third-party integrations", "Cloud-based solutions"],
  },
  {
    icon: Wrench,
    title: "Computer Repair & Maintenance",
    description: "Expert hardware diagnostics, repairs, and preventive maintenance.",
    price: "PC Diagnosis starting from $10",
    features: ["Hardware diagnostics and repair", "System upgrades", "Performance optimization", "Data recovery services", "Preventive maintenance"],
  },
  {
    icon: Network,
    title: "Network & IT Support",
    description: "Comprehensive networking solutions and ongoing IT support.",
    price: "Starting from $50",
    features: ["Network setup and configuration", "Wireless network solutions", "Security implementation", "Remote troubleshooting", "24/7 support availability"],
  },
  {
    icon: Settings,
    title: "Software Installation & Troubleshooting",
    description: "Professional software installation, configuration, and troubleshooting.",
    price: "Starting from $25",
    features: ["Operating system installation", "Software setup and licensing", "Application troubleshooting", "System updates and patches", "Performance optimization"],
  },
  {
    icon: Palette,
    title: "Branding & Digital Solutions",
    description: "Build a strong digital presence with our branding and design services.",
    price: "Starting from $100",
    features: ["Logo and brand identity design", "Digital marketing materials", "Social media graphics", "Print design services", "Brand strategy consulting"],
  },
  {
    icon: Database,
    title: "Business Systems & Automation",
    description: "Streamline your operations with custom automation solutions.",
    price: "Starting from $300",
    features: ["Workflow automation", "Business process optimization", "System integration", "Data management solutions", "Reporting and analytics"],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Guide your business through digital transformation with strategic planning.",
    price: "Consultation from $75",
    features: ["Digital strategy development", "Technology assessment", "Implementation planning", "Change management support", "Training and documentation"],
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We discuss your needs, goals, and challenges" },
  { step: "02", title: "Planning", description: "Create a detailed roadmap and timeline" },
  { step: "03", title: "Implementation", description: "Execute the solution with precision" },
  { step: "04", title: "Support", description: "Provide ongoing assistance and maintenance" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background pointer-events-none" />
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}

        <motion.div className="relative z-10 max-w-4xl mx-auto text-center" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">8 Core Service Areas</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            IT Services in <span className="text-gradient-primary">Harare, Zimbabwe</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            From computer repair to web development, we provide the complete range of technology services your business needs.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid md:grid-cols-2 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {services.map((service) => (
              <motion.div key={service.title} className="group glass-card-hover p-6 relative overflow-hidden" variants={cardVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <motion.div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent, hsl(var(--accent) / 0.1))" }}
                />
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <span className="text-xs font-mono text-accent">{service.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <motion.ul className="space-y-2.5" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {service.features.map((feature, fi) => (
                      <motion.li key={feature} className="flex items-center gap-2.5 text-sm" custom={fi} variants={featureVariants}>
                        <motion.div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0" whileHover={{ scale: 1.3 }}>
                          <Check className="w-2.5 h-2.5 text-accent" />
                        </motion.div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 relative overflow-hidden">
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">A straightforward approach to delivering exceptional results</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
            {processSteps.map((item, i) => (
              <motion.div key={item.step} className="glass-card p-6 text-center relative z-10"
                initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ type: "spring" as const, stiffness: 100, damping: 12, delay: i * 0.15 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)" }}
              >
                <motion.div className="text-3xl font-bold text-gradient-primary mb-3" whileHover={{ scale: 1.2 }}>{item.step}</motion.div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div className="max-w-3xl mx-auto text-center glass-card p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 15 }}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 6, repeat: Infinity }} />
          <motion.div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" animate={{ scale: [1.5, 1, 1.5] }} transition={{ duration: 6, repeat: Infinity }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">Contact us for a free consultation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact"
                className="group relative flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm overflow-hidden glow-primary"
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/services" className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-surface/50 text-foreground font-medium text-sm hover:border-primary/30 hover:bg-elevated transition-all">
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Services;
