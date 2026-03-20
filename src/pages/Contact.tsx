import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Sparkles, Clock, MessageSquare, CheckCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ScrollProgress from "@/components/ScrollProgress";

const allServices = [
  "Web Development",
  "Web Applications",
  "Custom Systems Development",
  "Network & IT Support",
  "Computer Repair & Maintenance",
  "Software Installation & Troubleshooting",
  "Branding & Digital Solutions",
  "Business Systems & Automation",
  "Digital Transformation Consulting",
  "ISP / Connectivity Services",
  "Fintech Infrastructure",
  "Other",
];

const projectTypes = [
  "New Project",
  "Ongoing Support",
  "Consultation",
  "System Upgrade",
  "Emergency / Urgent",
];

const budgetRanges = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We're based in Harare, Zimbabwe and offer hybrid and remote services, allowing us to work with clients anywhere. For hardware repairs, we arrange on-site visits or pickup/delivery within our service area.",
  },
  {
    q: "How quickly can you respond to urgent issues?",
    a: "For existing clients with support contracts, we offer priority response within 2-4 hours for critical issues. Emergency support is available 24/7 for urgent situations.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We work with businesses of all sizes, from sole proprietors to larger enterprises. Our services are scalable and tailored to fit your specific needs and budget.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary based on scope. Simple websites can be completed in 2-4 weeks, while custom applications may take 2-3 months. We provide detailed timelines during consultation.",
  },
];

const trustIndicators = [
  { icon: Shield, label: "Enterprise-Grade Security" },
  { icon: CheckCircle, label: "99.99% Uptime SLA" },
  { icon: Clock, label: "< 15min Critical Response" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 80, damping: 14 } },
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
    setFormState({ name: "", email: "", phone: "", service: "", projectType: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background pointer-events-none" />
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <MessageSquare className="w-3 h-3 text-accent" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Get In Touch</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's <span className="text-gradient-primary">Connect</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Have a project in mind or need IT support? Reach out and let's discuss how we can help your business succeed.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {trustIndicators.map((t) => (
              <div key={t.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/30 backdrop-blur-sm">
                <t.icon className="w-3 h-3 text-accent" />
                <span className="text-xs text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  We're here to help with all your technology needs. Whether you have a question about our services or want to discuss a project, we'd love to hear from you.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card p-4 group hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    >
                      <Phone className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Phone</h3>
                      <a href="tel:+263715866071" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +263 715 866 071
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card p-4 group hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">Harare, Zimbabwe · Hybrid / Remote</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card p-4 group hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    >
                      <Clock className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Mon–Fri: 8:00 AM – 6:00 PM<br />
                        Sat: 9:00 AM – 2:00 PM<br />
                        <span className="text-accent text-xs mt-1 inline-block">Emergency support 24/7</span>
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Sparkles trust badge */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card p-4 border-accent/20">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 text-accent" />
                    </motion.div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent font-medium">AI-powered support</span> — Use our chat assistant for instant help
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.15 }}
            >
              <Card className="glass-card p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent, hsl(var(--accent) / 0.05))" }}
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  {submitMessage && (
                    <motion.div
                      className="mb-6 p-4 rounded-lg bg-accent/10 text-accent text-sm border border-accent/20 flex items-center gap-3"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      {submitMessage}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" value={formState.name} onChange={handleChange} required placeholder="Your name" className="bg-background/50 transition-shadow focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                      </motion.div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required placeholder="your@email.com" className="bg-background/50 transition-shadow focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} placeholder="+263..." className="bg-background/50 transition-shadow focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                      </div>
                      <div className="space-y-2">
                        <Label>Service Interest *</Label>
                        <Select value={formState.service} onValueChange={(v) => handleSelectChange("service", v)}>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {allServices.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Project Type</Label>
                        <Select value={formState.projectType} onValueChange={(v) => handleSelectChange("projectType", v)}>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((p) => (
                              <SelectItem key={p} value={p}>{p}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Budget Range (optional)</Label>
                        <Select value={formState.budget} onValueChange={(v) => handleSelectChange("budget", v)}>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" value={formState.message} onChange={handleChange} required placeholder="Tell us about your project or how we can help..." rows={6} className="bg-background/50 resize-none transition-shadow focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto glow-primary">
                        {isSubmitting ? (
                          <motion.span
                            className="flex items-center gap-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          <>Send Message <Send className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Support</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {faqs.map((faq) => (
              <motion.div key={faq.q} variants={itemVariants}>
                <Card className="glass-card-hover p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Contact;
