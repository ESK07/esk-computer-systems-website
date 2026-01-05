"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticHover } from "@/components/magnetic-hover"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A fully responsive online store with integrated payment processing, inventory management, and customer portal.",
    tech: ["Next.js", "React", "Stripe", "PostgreSQL"],
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Business Management System",
    category: "Custom Software",
    description:
      "Comprehensive business automation system integrating CRM, invoicing, and project management capabilities.",
    tech: ["React", "Node.js", "MongoDB", "API Integration"],
    image: "/business-management-software-interface.jpg",
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Design",
    description:
      "Modern, accessible website redesign for a professional services firm with improved SEO and user experience.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "CMS"],
    image: "/professional-corporate-website.png",
  },
  {
    title: "Healthcare Portal",
    category: "Web Application",
    description:
      "Secure patient portal with appointment scheduling, medical records access, and telemedicine integration.",
    tech: ["React", "Firebase", "WebRTC", "HIPAA Compliant"],
    image: "/healthcare-patient-portal.png",
  },
  {
    title: "Network Infrastructure Upgrade",
    category: "IT Services",
    description:
      "Complete network infrastructure overhaul for a 50+ employee organization with enhanced security and reliability.",
    tech: ["Cisco", "VPN", "Firewall", "Cloud Backup"],
    image: "/network-infrastructure-diagram.jpg",
  },
  {
    title: "Restaurant Booking System",
    category: "Web Application",
    description: "Online reservation system with table management, customer notifications, and analytics dashboard.",
    tech: ["React", "Express", "PostgreSQL", "SMS API"],
    image: "/restaurant-booking-system-interface.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card py-24 sm:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Our Portfolio
              </TextReveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Explore our collection of successful projects spanning web development, custom software, and IT
                infrastructure solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <ParallaxSection offset={20}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <MagneticHover key={project.title}>
                    <Card className="group overflow-hidden bg-background h-full">
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                          {project.category}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </MagneticHover>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Stats Section */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: 50, suffix: "+", label: "Projects Completed" },
                { value: 30, suffix: "+", label: "Happy Clients" },
                { value: 5, suffix: "+", label: "Years Experience" },
                { value: 24, suffix: "/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <ParallaxSection offset={25}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">What Our Clients Say</h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    quote:
                      "ESK transformed our outdated website into a modern, efficient platform that our customers love. Their expertise and professionalism are unmatched.",
                    author: "Sarah M.",
                    role: "Business Owner",
                  },
                  {
                    quote:
                      "The custom system they built has streamlined our entire operation. We've seen a 40% increase in productivity since implementation.",
                    author: "James K.",
                    role: "Operations Manager",
                  },
                  {
                    quote:
                      "Reliable, responsive, and always available when we need them. ESK has become an invaluable technology partner for our company.",
                    author: "Linda R.",
                    role: "CEO",
                  },
                ].map((testimonial) => (
                  <Card key={testimonial.author} className="bg-background p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-border/40 pt-4">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10 text-pretty">
              Let's bring your vision to life. Contact us today to discuss your project requirements.
            </p>
            <MagneticHover>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </MagneticHover>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
