"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { TextReveal } from "@/components/text-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticHover } from "@/components/magnetic-hover"
import { Phone, MapPin, Send, Linkedin, Github, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
    setFormState({ name: "", email: "", phone: "", service: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
                Let's Connect
              </TextReveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Have a project in mind or need IT support? Reach out and let's discuss how we can help your business
                succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ParallaxSection offset={20}>
          <section className="py-24 sm:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Contact Info */}
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're here to help with all your technology needs. Whether you have a question about our services or
                    want to discuss a project, we'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    <MagneticHover>
                      <Card className="bg-background p-4">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <a
                              href="tel:+263715866071"
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              +263 715 866 071
                            </a>
                          </div>
                        </div>
                      </Card>
                    </MagneticHover>

                    <MagneticHover>
                      <Card className="bg-background p-4">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-sm text-muted-foreground">Hybrid / Remote Services</p>
                          </div>
                        </div>
                      </Card>
                    </MagneticHover>

                    <MagneticHover>
                      <Card className="bg-background p-4">
                        <h3 className="font-semibold mb-3">Connect With Us</h3>
                        <div className="flex items-center gap-3">
                          <a
                            href="https://github.com/ESK07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary transition-all duration-300 group btn-glow"
                            aria-label="GitHub"
                          >
                            <Github className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/ephraim-s-kunaka-0b2610213/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary transition-all duration-300 group btn-glow"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </a>
                          <a
                            href="https://wa.me/263715866071"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary transition-all duration-300 group btn-glow"
                            aria-label="WhatsApp"
                          >
                            <MessageCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </a>
                        </div>
                      </Card>
                    </MagneticHover>

                    <Card className="bg-primary text-primary-foreground p-6">
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-sm text-primary-foreground/90 leading-relaxed">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                        <br />
                        <span className="block mt-2">Emergency support available 24/7</span>
                      </p>
                    </Card>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="bg-background p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                    {submitMessage && (
                      <div className="mb-6 p-4 rounded-lg bg-primary/10 text-primary">{submitMessage}</div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="bg-card"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="bg-card"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+263..."
                            className="bg-card"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interest</Label>
                          <Input
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            placeholder="e.g., Web Development"
                            className="bg-card"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your project or how we can help..."
                          rows={6}
                          className="bg-card resize-none"
                        />
                      </div>

                      <MagneticHover>
                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </MagneticHover>
                    </form>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* FAQ Section */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Frequently Asked Questions</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {[
                {
                  q: "What areas do you serve?",
                  a: "We offer hybrid and remote services, allowing us to work with clients anywhere. For certain services like hardware repairs, we can arrange on-site visits or pickup/delivery within our service area.",
                },
                {
                  q: "How quickly can you respond to urgent issues?",
                  a: "For existing clients with support contracts, we offer priority response within 2-4 hours for critical issues. Emergency support is available 24/7 for urgent situations.",
                },
                {
                  q: "Do you work with small businesses?",
                  a: "We work with businesses of all sizes, from sole proprietors to larger enterprises. Our services are scalable and can be tailored to fit your specific needs and budget.",
                },
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. Simple websites can be completed in 2-4 weeks, while custom applications may take 2-3 months. We provide detailed timelines during the consultation phase.",
                },
              ].map((faq) => (
                <MagneticHover key={faq.q}>
                  <Card className="bg-card p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </Card>
                </MagneticHover>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
