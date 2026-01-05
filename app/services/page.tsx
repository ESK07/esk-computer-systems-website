"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticHover } from "@/components/magnetic-hover"
import Link from "next/link"
import { Globe, Code2, Wrench, Network, Settings, Palette, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Create stunning, responsive websites that engage your audience and drive results. From simple landing pages to complex web applications.",
    price: "Starting from $150",
    features: [
      "Responsive design for all devices",
      "Modern frameworks and technologies",
      "SEO optimization",
      "Performance tuning",
      "Content management systems",
    ],
  },
  {
    icon: Code2,
    title: "Web Applications & Custom Systems",
    description:
      "Tailored software solutions built to your exact specifications. We develop scalable applications that solve your unique business challenges.",
    price: "Starting from $500",
    features: [
      "Custom business applications",
      "Database design and integration",
      "API development",
      "Third-party integrations",
      "Cloud-based solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Computer Repair & Maintenance",
    description:
      "Expert hardware diagnostics, repairs, and preventive maintenance to keep your systems running smoothly and efficiently.",
    price: "PC Diagnosis starting from $10",
    features: [
      "Hardware diagnostics and repair",
      "System upgrades",
      "Performance optimization",
      "Data recovery services",
      "Preventive maintenance",
    ],
  },
  {
    icon: Network,
    title: "Network & IT Support",
    description:
      "Comprehensive networking solutions and ongoing IT support to ensure your business stays connected and productive.",
    price: "Starting from $50",
    features: [
      "Network setup and configuration",
      "Wireless network solutions",
      "Security implementation",
      "Remote troubleshooting",
      "24/7 support availability",
    ],
  },
  {
    icon: Settings,
    title: "Software Installation & Troubleshooting",
    description:
      "Professional software installation, configuration, and troubleshooting services for all your business applications.",
    price: "Starting from $25",
    features: [
      "Operating system installation",
      "Software setup and licensing",
      "Application troubleshooting",
      "System updates and patches",
      "Performance optimization",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Digital Solutions",
    description:
      "Build a strong digital presence with our branding and design services that make your business stand out.",
    price: "Starting from $100",
    features: [
      "Logo and brand identity design",
      "Digital marketing materials",
      "Social media graphics",
      "Print design services",
      "Brand strategy consulting",
    ],
  },
  {
    icon: Database,
    title: "Business Systems & Automation",
    description: "Streamline your operations with custom automation solutions and integrated business systems.",
    price: "Starting from $300",
    features: [
      "Workflow automation",
      "Business process optimization",
      "System integration",
      "Data management solutions",
      "Reporting and analytics",
    ],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Guide your business through digital transformation with strategic planning and implementation support.",
    price: "Consultation from $75",
    features: [
      "Digital strategy development",
      "Technology assessment",
      "Implementation planning",
      "Change management support",
      "Training and documentation",
    ],
  },
]

export default function ServicesPage() {
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
                IT Services in Harare, Zimbabwe
              </TextReveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                From computer repair to web development, we provide the complete range of technology services your
                business needs in Harare and across Zimbabwe.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ParallaxSection offset={20}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {services.map((service, index) => (
                  <MagneticHover key={service.title}>
                    <Card className="bg-background p-8 h-full">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <span className="text-sm font-semibold text-primary whitespace-nowrap ml-4">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </MagneticHover>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Process Section */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Our Process</h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                A straightforward approach to delivering exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                { step: "01", title: "Consultation", description: "We discuss your needs, goals, and challenges" },
                { step: "02", title: "Planning", description: "Create a detailed roadmap and timeline" },
                { step: "03", title: "Implementation", description: "Execute the solution with precision" },
                { step: "04", title: "Support", description: "Provide ongoing assistance and maintenance" },
              ].map((item) => (
                <MagneticHover key={item.step}>
                  <Card className="bg-card p-6 text-center h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </MagneticHover>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">Ready to Get Started?</h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10 text-pretty">
              Let's discuss which services are right for your business. Contact us for a free consultation.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <MagneticHover>
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </MagneticHover>
              <MagneticHover>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </MagneticHover>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
