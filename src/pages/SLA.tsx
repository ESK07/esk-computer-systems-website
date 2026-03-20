import { motion } from "framer-motion";
import { Zap, Clock, Shield, Server, AlertCircle, BarChart3, Wrench, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 14 } },
};

const uptimeMetrics = [
  { tier: "Standard", uptime: "99.9%", downtime: "~43 min/month", color: "text-primary" },
  { tier: "Business", uptime: "99.95%", downtime: "~22 min/month", color: "text-accent" },
  { tier: "Enterprise", uptime: "99.99%", downtime: "~4.3 min/month", color: "text-accent" },
];

const responseTimes = [
  { severity: "Critical (P1)", desc: "Complete service outage or data breach", response: "< 15 min", resolution: "< 4 hours", color: "bg-destructive/20 text-destructive border-destructive/30" },
  { severity: "High (P2)", desc: "Major feature degradation affecting operations", response: "< 1 hour", resolution: "< 8 hours", color: "bg-warning/20 text-warning border-warning/30" },
  { severity: "Medium (P3)", desc: "Non-critical issue with workaround available", response: "< 4 hours", resolution: "< 24 hours", color: "bg-primary/20 text-primary border-primary/30" },
  { severity: "Low (P4)", desc: "Minor issue, enhancement request, or inquiry", response: "< 24 hours", resolution: "< 5 business days", color: "bg-muted text-muted-foreground border-border" },
];

const supportTiers = [
  {
    name: "Basic",
    price: "Included",
    features: ["Email support (business hours)", "48-hour response SLA", "Knowledge base access", "Monthly status reports", "99.9% uptime guarantee"],
  },
  {
    name: "Business",
    price: "$499/mo",
    features: ["Phone + email support (extended hours)", "4-hour response SLA", "Dedicated account manager", "Priority ticket queue", "Weekly status reports", "99.95% uptime guarantee", "Quarterly business reviews"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["24/7 phone, email, and chat support", "15-minute critical response SLA", "Named senior engineer", "Custom escalation paths", "Real-time monitoring dashboard", "99.99% uptime guarantee", "On-site support available", "Custom SLA terms"],
  },
];

const sections = [
  {
    icon: Server,
    title: "Scope of Services",
    content: `This Service Level Agreement covers all services provided by ESK Systems:

• **Web Applications & Systems** — Uptime, performance, and availability of hosted web applications, dashboards, SaaS platforms, and custom business systems
• **Network & IT Support** — Response times for infrastructure issues, network troubleshooting, and IT service requests
• **ISP / Connectivity** — Bandwidth delivery, latency targets, and network availability guarantees
• **Fintech Infrastructure** — Payment processing uptime, API availability, and transaction processing guarantees
• **Computer Repair & Maintenance** — Turnaround times for hardware diagnostics and repairs
• **Managed Services** — Monitoring, patching, backup, and security management SLAs`,
  },
  {
    icon: AlertCircle,
    title: "Incident Management",
    content: `Our incident management process follows ITIL best practices:

**Detection** — Automated monitoring systems detect anomalies within 60 seconds. Alerts are triggered via PagerDuty-style escalation. Client-reported issues are triaged within the response SLA.

**Classification** — Incidents are classified by severity (P1–P4) based on impact and urgency. Classification determines response teams, communication frequency, and escalation paths.

**Communication** — P1/P2: Real-time updates every 30 minutes via status page and direct notification. P3: Updates every 4 hours. P4: Updates upon resolution.

**Resolution & Review** — Root cause analysis (RCA) within 48 hours for P1/P2 incidents. Post-incident review shared with affected clients. Corrective actions tracked to completion.`,
  },
  {
    icon: Wrench,
    title: "Scheduled Maintenance",
    content: `**Maintenance Windows**
• Standard maintenance: Sundays 02:00–06:00 CAT (Central Africa Time)
• Emergency maintenance: As required with maximum possible advance notice
• Client-specific maintenance: Scheduled in coordination with the client

**Notification**
• Planned maintenance: 7 days advance notice minimum
• Emergency maintenance: As much notice as reasonably possible (minimum 2 hours for non-critical)
• Maintenance windows do not count against uptime SLAs

**Impact Minimization**
• Rolling deployments to minimize downtime
• Blue-green deployment strategies for zero-downtime updates where possible
• Maintenance during lowest-traffic periods`,
  },
  {
    icon: BarChart3,
    title: "Service Credits",
    content: `If we fail to meet our uptime commitments, eligible clients receive service credits:

**Credit Schedule**
• 99.9% – 99.5% uptime: 10% credit on monthly fee
• 99.5% – 99.0% uptime: 25% credit on monthly fee
• 99.0% – 95.0% uptime: 50% credit on monthly fee
• Below 95.0% uptime: 100% credit on monthly fee

**Claim Process**
• Submit credit request within 30 days of the incident
• Include incident reference numbers and affected service details
• Credits are applied to the next billing cycle
• Credits do not exceed 100% of monthly fees for the affected service

**Exclusions**
• Scheduled maintenance windows
• Force majeure events
• Client-caused outages
• Third-party service failures outside our control`,
  },
  {
    icon: Users,
    title: "Customer Responsibilities",
    content: `To ensure we can meet our SLA commitments, clients agree to:

• **Access** — Provide timely access to systems, credentials, and environments needed for support
• **Communication** — Designate authorized contacts and maintain current contact information
• **Cooperation** — Respond to diagnostic requests and approve maintenance activities promptly
• **Security** — Follow recommended security practices and report suspected incidents immediately
• **Updates** — Keep client-managed components (browsers, plugins, local software) updated
• **Backups** — Maintain independent backups of critical business data
• **Compliance** — Adhere to acceptable use policies and platform terms of service`,
  },
];

const SLA = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background pointer-events-none" />
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Zap className="w-3 h-3 text-accent" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Reliability Guarantee</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Service Level <span className="text-gradient-primary">Agreement</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enterprise-grade reliability commitments backed by measurable guarantees. Built to AWS and Cloudflare reliability standards.
          </motion.p>
        </motion.div>
      </section>

      {/* Uptime Metrics */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Uptime Guarantees
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {uptimeMetrics.map((m, i) => (
              <motion.div
                key={m.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card-hover p-6 text-center">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{m.tier}</p>
                  <p className={`text-4xl font-bold ${m.color} mb-1`}>{m.uptime}</p>
                  <p className="text-xs text-muted-foreground">{m.downtime}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Response & Resolution Times
          </motion.h2>
          <div className="space-y-3">
            {responseTimes.map((rt, i) => (
              <motion.div
                key={rt.severity}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="glass-card p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${rt.color} shrink-0 w-fit`}>
                      {rt.severity}
                    </span>
                    <p className="text-sm text-muted-foreground flex-1">{rt.desc}</p>
                    <div className="flex gap-6 shrink-0">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Response</p>
                        <p className="text-sm font-semibold">{rt.response}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Resolution</p>
                        <p className="text-sm font-semibold">{rt.resolution}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Support Tiers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`glass-card-hover p-6 h-full flex flex-col ${tier.highlighted ? "border-primary/40 relative overflow-hidden" : ""}`}>
                  {tier.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-hero" />
                  )}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{tier.name}</p>
                    <p className="text-2xl font-bold">{tier.price}</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Shield className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.03 }}
            >
              <Card className="glass-card-hover p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <section.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold mb-3">{section.title}</h2>
                    <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content.split("**").map((part, idx) =>
                        idx % 2 === 1 ? (
                          <strong key={idx} className="text-foreground font-medium">{part}</strong>
                        ) : (
                          <span key={idx}>{part}</span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SLA;
