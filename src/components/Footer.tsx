import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import eskLogo from "@/assets/esk-logo.png";

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border py-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-3">
            <img src={eskLogo} alt="ESK Systems" className="h-8 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground max-w-xs">
            Enterprise IT, Connectivity & Fintech infrastructure for Africa's digital future.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Platform",
              links: [
                { label: "All Services", href: "/services" },
                { label: "Connectivity", href: "/services" },
                { label: "Fintech", href: "/services" },
                { label: "Cloud", href: "/services" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "SLA", href: "/sla" },
              ],
            },
          ].map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + si * 0.08 }}
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{section.title}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">© 2026 ESK Systems. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
