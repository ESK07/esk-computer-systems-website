import Link from "next/link"
import Image from "next/image"
import { Phone, Linkedin, Github, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="relative h-12 w-56 mb-4">
              <Image
                src="/esk-logo-3d.png"
                alt="ESK Computer Systems"
                fill
                className="object-contain object-left mix-blend-lighten dark:mix-blend-lighten logo-enhance"
              />
            </div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-primary">ESK</span> Computer Systems
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional IT services and digital solutions for modern businesses. Hybrid/Remote support available.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com/ESK07"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group btn-glow"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ephraim-s-kunaka-0b2610213/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group btn-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://wa.me/263715866071"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group btn-glow"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+263715866071" className="hover:text-primary transition-colors">
                  +263 715 866 071
                </a>
              </div>
              <p className="text-muted-foreground">Hybrid / Remote</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ESK Computer Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
