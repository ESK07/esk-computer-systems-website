import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe, Code, Server, Wifi, CreditCard, Monitor, Wrench, Palette,
  Settings, Lightbulb, Target, Rocket, Shield, Layers, Users, ArrowRight,
  Building, Briefcase, TrendingUp, Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ScrollProgress from "@/components/ScrollProgress";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 14 } },
};

const services = [
  { icon: Globe, label: "Web Development", desc: "Corporate websites, landing pages, and web portals" },
  { icon: Code, label: "Web Applications", desc: "Custom platforms, dashboards, and SaaS systems" },
  { icon: Settings, label: "Custom Systems", desc: "Business software, internal tools, and bespoke solutions" },
  { icon: Server, label: "Network & IT Support", desc: "Infrastructure design, monitoring, and troubleshooting" },
  { icon: Monitor, label: "Computer Repair", desc: "Hardware diagnostics, repair, and maintenance" },
  { icon: Wrench, label: "Software Support", desc: "Installation, configuration, and troubleshooting" },
  { icon: Palette, label: "Branding & Digital", desc: "Logo design, brand identity, and digital presence" },
  { icon: Layers, label: "Business Automation", desc: "ERP-lite, workflow automation, and process optimization" },
  { icon: Lightbulb, label: "Digital Transformation", desc: "Strategic consulting for technology adoption" },
  { icon: Wifi, label: "ISP / Connectivity", desc: "Fibre, wireless, and hybrid internet solutions" },
  { icon: CreditCard, label: "Fintech Infrastructure", desc: "Payment processing, APIs, and transaction management" },
];

const values = [
  { icon: Shield, title: "Reliability", desc: "99.99% uptime SLAs, redundant infrastructure, and proactive monitoring that ensures your systems never sleep." },
  { icon: Layers, title: "Technical Depth", desc: "From bare-metal networking to cloud-native applications — we operate across the entire technology stack." },
  { icon: Target, title: "End-to-End Solutions", desc: "One partner for development, infrastructure, connectivity, payments, and support. No fragmented vendor relationships." },
  { icon: Zap, title: "Speed & Agility", desc: "Rapid deployment cycles, agile methodologies, and a bias toward shipping. Your business can't wait." },
];

const industries = [
  { icon: Building, label: "Enterprises", desc: "Custom infrastructure and digital transformation" },
  { icon: Briefcase, label: "SMEs", desc: "Scalable solutions that grow with your business" },
  { icon: Rocket, label: "Startups", desc: "MVP development and rapid market entry" },
  { icon: TrendingUp, label: "Financial Services", desc: "Fintech integrations and payment systems" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background pointer-events-none" />
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Globe className="w-3 h-3 text-accent" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">About ESK Systems</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Engineering Digital Infrastructure{" "}
            <span className="text-gradient-primary">for the Future of Africa</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            We build, connect, and secure the technology that powers businesses across the continent — from custom software to enterprise networking and fintech infrastructure.
          </motion.p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Company Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  ESK Systems (ESK Nova Core) is a full-spectrum technology company headquartered in Harare, Zimbabwe. We provide enterprise-grade IT solutions, connectivity services, fintech infrastructure, and digital transformation consulting to businesses of all sizes.
                </p>
                <p>
                  Founded on the principle that African businesses deserve world-class technology, we deliver solutions that rival global standards — engineered locally with deep understanding of the market's unique challenges and opportunities.
                </p>
                <p>
                  Our platform approach means clients get a single, integrated partner for everything from web development and custom systems to network infrastructure, payment processing, and ongoing IT support.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {[
                { value: "99.99%", label: "Uptime SLA" },
                { value: "50+", label: "Systems Deployed" },
                { value: "24/7", label: "Support Available" },
                { value: "<15min", label: "Critical Response" },
              ].map((stat) => (
                <Card key={stat.label} className="glass-card p-5 text-center">
                  <p className="text-2xl font-bold text-gradient-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Our Mission",
              text: "To empower African businesses with enterprise-grade technology solutions that are reliable, scalable, and built for the realities of our market — bridging the gap between global technology standards and local business needs.",
              accent: "primary",
            },
            {
              title: "Our Vision",
              text: "To become Africa's most trusted technology infrastructure partner — the platform businesses turn to for development, connectivity, payments, and digital transformation. We envision a continent where every business has access to world-class IT.",
              accent: "accent",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card-hover p-8 h-full relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${item.accent === "accent" ? "bg-accent" : "bg-primary"}`} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">What We Do</p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Complete Service Portfolio</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">Every technology capability your business needs, under one roof.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((svc) => (
              <motion.div key={svc.label} variants={itemVariants}>
                <Card className="glass-card-hover p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                      <svc.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{svc.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Our Approach</p>
            <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "Custom-Built Solutions", desc: "No cookie-cutter templates. Every system, application, and infrastructure design is tailored to your specific business requirements and growth trajectory." },
              { icon: Layers, title: "Scalable Systems", desc: "We architect for scale from day one. Whether you're serving 10 users or 10,000, our solutions grow with your business without costly rebuilds." },
              { icon: Target, title: "Business-Focused Tech", desc: "Technology serves business goals, not the other way around. Every decision is evaluated against ROI, operational efficiency, and competitive advantage." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card-hover p-6 h-full text-center">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Differentiators</p>
            <h2 className="text-3xl font-bold tracking-tight">Why Choose ESK Systems</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="glass-card-hover p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                      <v.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Industries Served</p>
            <h2 className="text-3xl font-bold tracking-tight">Built for Every Stage</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="glass-card-hover p-5 text-center h-full">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-3">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{ind.label}</h3>
                  <p className="text-xs text-muted-foreground">{ind.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Build your system with <span className="text-gradient-primary">ESK Nova Core</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to transform your business with enterprise-grade technology? Let's start the conversation.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium glow-primary hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default About;
