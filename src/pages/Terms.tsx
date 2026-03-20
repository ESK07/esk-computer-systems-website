import { motion } from "framer-motion";
import { FileText, Scale, Users, CreditCard, AlertTriangle, ShieldCheck, Gavel } from "lucide-react";
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
    icon: FileText,
    title: "1. Definitions",
    content: `In these Terms & Conditions:

• **"ESK Systems"** (also "ESK Nova Core", "Company", "we", "us") refers to ESK Systems, a technology company registered and operating in Harare, Zimbabwe.
• **"Client"** ("you", "your") refers to any individual, business, or organization that engages ESK Systems for services.
• **"Services"** refers to all products, platforms, solutions, and support offered by ESK Systems as described in Section 3.
• **"Platform"** refers to the ESK Nova Core web platform, dashboards, APIs, and associated digital properties.
• **"Deliverables"** refers to any output, code, design, system, or documentation produced by ESK Systems for a Client.
• **"SLA"** refers to our Service Level Agreement, available at /sla.`,
  },
  {
    icon: Scale,
    title: "2. Acceptance of Terms",
    content: `By accessing or using any ESK Systems service, platform, or engaging us for project work, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.

If you are entering into these terms on behalf of a company or organization, you represent that you have the authority to bind that entity. If you do not agree, you must not use our services.

We reserve the right to update these terms at any time. Material changes will be communicated via email to active clients and posted on our website. Continued use of services after changes constitutes acceptance.`,
  },
  {
    icon: Users,
    title: "3. Scope of Services",
    content: `ESK Systems provides the following enterprise-grade services:

**Development & Digital**
• Web Development — Corporate websites, landing pages, and web portals
• Web Applications — Custom platforms, dashboards, SaaS systems, and progressive web apps
• Custom Systems Development — Business software, internal tools, ERPs, and bespoke solutions

**IT & Infrastructure**
• Network & IT Support — Infrastructure design, troubleshooting, monitoring, and maintenance
• Computer Repair & Maintenance — Hardware diagnostics, repair, upgrades, and servicing
• Software Installation & Troubleshooting — OS deployment, software configuration, and issue resolution

**Business & Digital Solutions**
• Branding & Digital Solutions — Logo design, brand identity, digital presence management
• Business Systems & Automation — ERP-lite implementations, workflow automation, process optimization
• Digital Transformation Consulting — Strategic advisory for technology adoption and modernization

**Connectivity & Fintech**
• ISP / Connectivity Services — Fibre, wireless, and hybrid internet solutions with SLA-backed uptime
• Fintech Infrastructure — Payment processing integrations (Paynow, EcoCash, Stripe), API development, and transaction management

Each service engagement is subject to specific project proposals, statements of work, or subscription agreements.`,
  },
  {
    icon: Users,
    title: "4. User Responsibilities",
    content: `As a client, you agree to:

• Provide accurate, complete, and current information for service delivery
• Designate authorized contact persons for project communications
• Provide timely feedback and approvals during project execution
• Maintain the security of any credentials, API keys, or access provided to you
• Ensure all content you provide does not infringe third-party intellectual property rights
• Comply with all applicable local and international laws
• Make payments in accordance with agreed schedules
• Back up your data independently (while we maintain our own backups)`,
  },
  {
    icon: AlertTriangle,
    title: "5. Acceptable Use Policy",
    content: `You agree NOT to use ESK Systems services, platforms, or infrastructure to:

**Prohibited Activities**
• Engage in any illegal, fraudulent, or unauthorized activities
• Transmit malware, viruses, or malicious code through our networks or systems
• Attempt to gain unauthorized access to our systems, other users' accounts, or connected networks
• Use our ISP/connectivity services for network abuse, including DDoS attacks or spam distribution
• Reverse-engineer, decompile, or attempt to extract source code from our proprietary systems
• Resell, sublicense, or redistribute our services without written authorization
• Use our fintech infrastructure for money laundering or sanctions evasion
• Transmit content that is defamatory, obscene, or violates any person's rights

**Enforcement**: Violations may result in immediate service suspension, termination, and referral to appropriate authorities. ESK Systems reserves the right to monitor usage patterns to enforce this policy.`,
  },
  {
    icon: CreditCard,
    title: "6. Payments & Billing",
    content: `**Payment Terms**
• All fees are quoted in USD unless otherwise specified
• Recurring services are billed monthly or annually as per the selected plan
• Project-based work requires a deposit (typically 30-50%) before commencement
• Final payment is due upon project delivery and client acceptance
• Invoices are payable within 14 days of issuance unless otherwise agreed

**Project-Based Work**
• Milestone-based payment schedules are defined in individual project proposals
• Change requests outside the original scope may incur additional fees
• Revisions beyond the agreed number are billable at our standard hourly rate

**Late Payments**
• Late payments incur interest at 2% per month on the outstanding balance
• Services may be suspended after 30 days of non-payment
• Collection costs, including legal fees, are the responsibility of the client

**Refunds**
• Subscription services: Pro-rated refunds within the first 14 days
• Project work: Non-refundable once milestones are delivered and accepted
• Hardware/repairs: Subject to manufacturer warranty terms`,
  },
  {
    icon: ShieldCheck,
    title: "7. Intellectual Property",
    content: `**ESK Systems IP**
• All proprietary tools, frameworks, libraries, and methodologies remain the exclusive property of ESK Systems
• Our brand, trademarks, and visual identity are protected and may not be used without authorization

**Client Deliverables**
• Upon full payment, clients receive full ownership of custom code, designs, and content created specifically for their project
• Generic components, templates, and reusable modules remain ESK Systems property and may be licensed for client use
• Open-source components used in deliverables retain their original licenses

**Pre-existing IP**
• Each party retains ownership of their pre-existing intellectual property
• Licenses granted for pre-existing IP are non-exclusive and limited to the project scope

**Portfolio Rights**
• ESK Systems retains the right to showcase completed work in its portfolio unless a confidentiality agreement states otherwise`,
  },
  {
    icon: AlertTriangle,
    title: "8. Limitation of Liability",
    content: `**Disclaimer**
Services are provided "as is" and "as available." While we strive for excellence, ESK Systems does not guarantee uninterrupted or error-free service.

**Liability Cap**
ESK Systems' total liability for any claim arising from or related to our services shall not exceed the total fees paid by the client in the 12 months preceding the claim.

**Exclusions**
We are not liable for:
• Indirect, incidental, special, or consequential damages
• Loss of data, revenue, or business opportunities
• Service interruptions due to force majeure (natural disasters, power outages, government actions)
• Third-party service failures (payment processors, hosting providers, ISP backbones)
• Client's failure to implement recommended security measures
• Unauthorized modifications to delivered systems by the client or third parties`,
  },
  {
    icon: Gavel,
    title: "9. Termination & Suspension",
    content: `**By Client**
• Subscription services may be cancelled with 30 days written notice
• Project-based engagements may be terminated subject to payment for completed milestones and work-in-progress

**By ESK Systems**
• We may suspend or terminate services immediately upon breach of these terms
• We may suspend services for non-payment after appropriate notice
• We may terminate services if continued provision becomes commercially impracticable

**Post-Termination**
• Client data will be available for export for 30 days post-termination
• All outstanding fees become immediately due
• Confidentiality obligations survive termination
• IP assignments for fully-paid deliverables remain in effect`,
  },
  {
    icon: Gavel,
    title: "10. Governing Law & Dispute Resolution",
    content: `**Governing Law**
These terms are governed by the laws of the Republic of Zimbabwe.

**Dispute Resolution**
• Parties shall first attempt to resolve disputes through good-faith negotiation within 30 days
• If negotiation fails, disputes shall be referred to mediation administered by a mutually agreed mediator in Harare
• If mediation fails, disputes shall be resolved through binding arbitration under the Arbitration Act of Zimbabwe
• Each party bears its own costs unless the arbitrator determines otherwise

**International Clients**
For international engagements, the parties may agree to alternative dispute resolution mechanisms. In the absence of such agreement, Zimbabwean law and Harare-based arbitration shall apply.

**Severability**
If any provision is found unenforceable, the remaining provisions continue in full force and effect.

**Contact**
For legal inquiries: legal@esksystems.com | +263 715 866 071`,
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

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
            <Scale className="w-3 h-3 text-accent" />
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Legal</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Terms & <span className="text-gradient-primary">Conditions</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Clear, fair, and transparent terms that govern our professional relationship and protect both parties.
          </motion.p>
        </motion.div>
      </section>

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

export default Terms;
