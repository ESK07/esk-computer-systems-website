"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TextReveal } from "@/components/text-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticHover } from "@/components/magnetic-hover"
import { Code2, Globe, Wrench, Network, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Modern, responsive websites built with the latest technologies.",
    price: "Starting from $150",
  },
  {
    icon: Code2,
    title: "Web Applications & Custom Systems",
    description: "Tailored software solutions for your unique business needs.",
    price: "Starting from $500",
  },
  {
    icon: Wrench,
    title: "Computer Repair & Maintenance",
    description: "Expert hardware diagnostics, repairs, and preventive maintenance.",
    price: "PC Diagnosis starting from $10",
  },
  {
    icon: Network,
    title: "Network & IT Support",
    description: "Reliable network setup, troubleshooting, and ongoing IT support.",
    price: "Starting from $50",
  },
]

const features = ["Remote & Hybrid Support", "Rapid Response Time", "Scalable Solutions", "Expert Technical Team"]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Computer Repairs & IT Support in Harare
              </TextReveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Professional IT services and digital solutions in Harare, Zimbabwe. From computer repairs and web
                development to complete systems integration and networking support.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                <MagneticHover>
                  <Button asChild size="lg" className="text-base">
                    <Link href="/services">
                      Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticHover>
                <MagneticHover>
                  <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </MagneticHover>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ParallaxSection offset={30}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                  Comprehensive Technology Solutions
                </h2>
                <p className="mt-4 text-muted-foreground text-pretty">
                  Our collection of tech services spans various needs at every stage of the digital transformation
                  process.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <MagneticHover key={service.title}>
                    <Card className="group relative overflow-hidden bg-background p-6 transition-all hover:shadow-lg hover:shadow-primary/5 h-full">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-0" />
                      <div className="relative">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                        <p className="text-sm font-semibold text-primary">{service.price}</p>
                      </div>
                    </Card>
                  </MagneticHover>
                ))}
              </div>

              <div className="mt-16 text-center">
                <MagneticHover>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">
                      View All Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticHover>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
                  Built for Modern Business Needs
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We understand that today's businesses need flexible, reliable technology solutions. Our hybrid/remote
                  model ensures you get expert support wherever you are, whenever you need it.
                </p>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <MagneticHover>
                    <Button asChild size="lg">
                      <Link href="/about">Learn More About Us</Link>
                    </Button>
                  </MagneticHover>
                </div>
              </div>

              <ParallaxSection offset={40}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                  <Card className="relative bg-card/50 backdrop-blur-xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Why Choose ESK?</h3>
                          <p className="text-sm text-muted-foreground">Reliability meets expertise</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        With years of experience in IT services and digital solutions, we bring technical expertise and
                        a commitment to understanding your unique challenges. Every project is an opportunity to deliver
                        solutions that truly work for you.
                      </p>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            <AnimatedCounter to={100} suffix="+" />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            <AnimatedCounter to={50} suffix="+" />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            <AnimatedCounter to={99} suffix="%" />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border/40">
                        <p className="text-sm text-muted-foreground">Ready to transform your technology?</p>
                        <Button asChild variant="link" className="px-0 mt-2">
                          <Link href="/contact">
                            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
              Ready to Elevate Your Technology?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10 text-pretty">
              Let's discuss how we can help transform your business with reliable IT solutions and innovative digital
              services.
            </p>
            <MagneticHover>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </MagneticHover>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
