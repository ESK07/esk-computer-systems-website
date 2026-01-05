"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticHover } from "@/components/magnetic-hover"
import Link from "next/link"
import { Target, Users, Zap, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "We prioritize understanding your unique needs and delivering solutions that align with your business goals.",
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "Staying ahead with the latest technologies to provide cutting-edge solutions for modern challenges.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent, dependable service you can count on. We're here when you need us most.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to delivering technical excellence and exceptional service.",
  },
]

export default function AboutPage() {
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
                Building Digital Solutions That Matter
              </TextReveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                At ESK Computer Systems, we combine technical expertise with a deep understanding of business needs to
                deliver IT solutions that drive real results.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <ParallaxSection offset={20}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    ESK Computer Systems was founded on the principle that technology should empower businesses, not
                    complicate them. We recognized the growing need for reliable, accessible IT services that could
                    adapt to the modern hybrid and remote work environment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our journey began with a simple mission: to provide professional IT services that are both
                    technically excellent and genuinely helpful. Today, we serve businesses and individuals across
                    various industries, offering everything from web development to comprehensive systems integration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What sets us apart is our commitment to understanding each client's unique challenges. We don't just
                    implement solutions—we partner with you to ensure technology works for your specific needs, whether
                    you're a small startup or an established enterprise.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Values Section */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Our Values</h2>
              <p className="mt-4 text-muted-foreground text-pretty">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <MagneticHover key={value.title}>
                  <Card className="bg-card p-6 h-full">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                </MagneticHover>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <ParallaxSection offset={30}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Our Approach</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We believe in building lasting relationships through transparent communication and consistent
                    delivery. Our hybrid/remote model means we can provide flexible, responsive support that fits your
                    schedule and workflow.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Every project starts with listening. We take the time to understand your goals, challenges, and
                    vision before proposing solutions. This collaborative approach ensures that what we build truly
                    serves your needs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From initial consultation to ongoing support, we're committed to being a reliable technology partner
                    you can count on.
                  </p>
                </div>

                <Card className="bg-background p-8">
                  <h3 className="text-xl font-semibold mb-6">What We Offer</h3>
                  <ul className="space-y-4">
                    {[
                      "Comprehensive IT consulting",
                      "Custom software development",
                      "Responsive web design",
                      "System integration and automation",
                      "Ongoing technical support",
                      "Remote and on-site services",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">Let's Work Together</h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10 text-pretty">
              Ready to discuss your technology needs? Get in touch and let's explore how we can help your business
              thrive.
            </p>
            <MagneticHover>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </MagneticHover>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
