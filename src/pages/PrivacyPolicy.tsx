import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Cookie, Globe, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 14 } },
};

const sections = [
  {
    icon: Eye,
    title: "1. Introduction",
    content: `ESK Systems ("ESK Nova Core", "we", "us", or "our") is committed to protecting your privacy and securing the data you entrust to us. As a leading provider of enterprise IT solutions, connectivity services, fintech infrastructure, and digital transformation consulting in Africa, we understand the critical importance of data privacy.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or interact with our platforms. We are committed to transparency and operate to the highest standards of data stewardship.

Effective Date: March 1, 2026
Last Updated: March 20, 2026`,
  },
  {
    icon: Database,
    title: "2. Data We Collect",
    content: `**Personal Data**
We may collect personally identifiable information including but not limited to: full name, email address, phone number, physical address, government-issued identification (where required for fintech services), and professional title or role.

**Business Data**
For our enterprise clients, we collect: company name and registration details, billing and payment information, project specifications and requirements, system configurations and network architecture details, service usage data, and support ticket history.

**Technical & Device Data**
We automatically collect: IP addresses and geolocation data, browser type and version, device identifiers, operating system information, access timestamps and session duration, network performance metrics (for ISP/connectivity clients), and API usage logs and request metadata.`,
  },
  {
    icon: Shield,
    title: "3. How We Use Your Data",
    content: `We use collected data to deliver and improve our full suite of services:

**Service Delivery** — Designing, developing, and deploying web applications, custom business systems, and digital solutions. Providing network and IT support including infrastructure monitoring and troubleshooting. Delivering computer repair and maintenance services. Processing payments and managing fintech integrations (Paynow, EcoCash, Stripe). Configuring and managing ISP/connectivity services.

**Business Operations** — Business automation and workflow optimization. Branding and digital presence management. Digital transformation consulting and advisory. ERP-lite implementations and system integrations.

**Platform Improvement** — Network optimization and performance enhancement. Security monitoring and fraud prevention. Service analytics and reporting. Customer support quality improvement.

**Communications** — Service updates and maintenance notifications. Billing and invoice communications. Marketing communications (with your consent). Emergency security alerts.`,
  },
  {
    icon: Globe,
    title: "4. Data Sharing & Third Parties",
    content: `We do not sell your personal data. We may share data with the following categories of trusted partners:

**Payment Processors** — Paynow, EcoCash, Stripe, and other financial service providers necessary to process transactions for our fintech infrastructure services. These processors are PCI-DSS compliant.

**Infrastructure Partners** — Cloud hosting providers, CDN services, and network infrastructure partners that enable us to deliver reliable connectivity and hosting services. All partners are vetted for security compliance.

**Technology Partners** — Software vendors, API providers, and integration partners required to deliver custom systems and web applications.

**Legal & Regulatory** — Government authorities, regulatory bodies, or law enforcement agencies when required by law, legal process, or to protect the rights and safety of ESK Systems and its clients.

**Professional Advisors** — Auditors, legal counsel, and consultants bound by confidentiality obligations.`,
  },
  {
    icon: Lock,
    title: "5. Data Security",
    content: `We implement enterprise-grade security measures to protect your data:

**Encryption** — All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256. API communications are secured with HMAC authentication.

**Secure Hosting** — Our infrastructure is hosted in certified data centers with physical security controls. We maintain geographically redundant backups. All systems undergo regular security audits and penetration testing.

**Access Controls** — Role-based access control (RBAC) across all systems. Multi-factor authentication (MFA) for administrative access. Audit logging of all data access events. Regular access reviews and privilege attestation.

**Incident Response** — We maintain a dedicated security incident response team with defined escalation procedures, notification protocols aligned with regulatory requirements, and post-incident review processes.`,
  },
  {
    icon: Database,
    title: "6. Data Retention",
    content: `We retain your data only as long as necessary for the purposes outlined in this policy:

• **Active client data**: Retained for the duration of the service relationship plus 2 years
• **Financial records**: Retained for 7 years as required by tax and financial regulations
• **Technical logs**: Retained for 12 months for security and performance monitoring
• **Support records**: Retained for 3 years after resolution
• **Marketing data**: Retained until consent is withdrawn

Upon request or at the end of the retention period, data is securely deleted using industry-standard data destruction methods.`,
  },
  {
    icon: UserCheck,
    title: "7. Your Rights",
    content: `You have the following rights regarding your personal data:

• **Right of Access** — Request a copy of all personal data we hold about you
• **Right to Rectification** — Request correction of inaccurate or incomplete data
• **Right to Erasure** — Request deletion of your personal data (subject to legal obligations)
• **Right to Restrict Processing** — Request limitation of how we process your data
• **Right to Data Portability** — Receive your data in a structured, machine-readable format
• **Right to Object** — Object to processing based on legitimate interests or direct marketing
• **Right to Withdraw Consent** — Withdraw consent at any time without affecting prior processing

To exercise any of these rights, contact our Data Protection Officer at privacy@esksystems.com.`,
  },
  {
    icon: Cookie,
    title: "8. Cookies & Tracking",
    content: `Our website and platforms use cookies and similar tracking technologies:

**Essential Cookies** — Required for platform functionality, authentication, and security. These cannot be disabled.

**Analytics Cookies** — Help us understand how visitors interact with our website and services. Used to improve user experience and service delivery.

**Functional Cookies** — Remember your preferences, language settings, and customized configurations.

**Marketing Cookies** — Used with your consent to deliver relevant advertisements and measure campaign effectiveness.

You can manage cookie preferences through your browser settings or our cookie consent tool. Note that disabling certain cookies may affect platform functionality.`,
  },
  {
    icon: Globe,
    title: "9. Compliance",
    content: `ESK Systems is committed to compliance with applicable data protection regulations:

• **GDPR** — We adhere to General Data Protection Regulation principles for all EU/EEA data subjects
• **POPIA** — Compliant with the Protection of Personal Information Act where applicable
• **Local Regulations** — We comply with Zimbabwean data protection laws and the Cyber and Data Protection Act
• **Industry Standards** — PCI-DSS compliance for payment processing, ISO 27001 aligned security practices

We conduct regular compliance audits and maintain documentation of our data processing activities.`,
  },
  {
    icon: Mail,
    title: "10. Contact Us",
    content: `For questions, concerns, or requests regarding this Privacy Policy or our data practices:

**ESK Systems — Data Protection Office**
📍 Harare, Zimbabwe
📧 privacy@esksystems.com
📞 +263 715 866 071

**Response Commitment**: We will acknowledge your request within 48 hours and provide a substantive response within 30 days.

We reserve the right to update this Privacy Policy periodically. Material changes will be communicated via email to registered users and posted on our website with the updated effective date.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background pointer-events-none" />
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Shield className="w-3 h-3 text-accent" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Data Protection</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Privacy <span className="text-gradient-primary">Policy</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your trust is our foundation. This policy outlines how ESK Systems collects, uses, and protects your data across all our enterprise services.
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
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

export default PrivacyPolicy;
