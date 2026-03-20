import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import eskLogo from "@/assets/esk-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        className="dynamic-island-nav flex items-center gap-1 px-2 py-1.5 rounded-full"
        initial={{ y: -40, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center pl-3 pr-2">
          <img src={eskLogo} alt="ESK Systems" className="h-6 w-auto" />
        </Link>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-nav-divider" />

        {/* Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-[13px] px-3 py-1.5 rounded-full text-nav-muted hover:text-nav-foreground hover:bg-nav-hover transition-all duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] px-3 py-1.5 rounded-full text-nav-muted hover:text-nav-foreground hover:bg-nav-hover transition-all duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-nav-divider" />

        {/* Actions */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/dashboard"
            className="text-[13px] px-3 py-1.5 rounded-full text-nav-muted hover:text-nav-foreground hover:bg-nav-hover transition-all duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="text-[13px] px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-full text-nav-muted hover:text-nav-foreground hover:bg-nav-hover transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-full mt-2 left-4 right-4 mx-auto max-w-sm rounded-2xl dynamic-island-dropdown p-3 space-y-1"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm px-4 py-2.5 rounded-xl text-nav-muted hover:text-nav-foreground hover:bg-nav-hover transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-nav-divider my-1" />
            <Link
              to="/dashboard"
              className="block text-sm px-4 py-2.5 rounded-xl text-primary font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Sign In →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
