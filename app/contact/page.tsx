"use client"

import type React from "react"
import emailjs from "@emailjs/browser"
import { useState, useRef } from "react"

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

import {
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isError, setIsError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitMessage("")
    setIsError(false)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitMessage(
        "Thank you for your message! We'll get back to you within 24 hours."
      )

      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      setIsError(true)
      setSubmitMessage("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
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
              <TextReveal className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Let's Connect
              </TextReveal>
              <p className="mt-6 text-lg text-muted-foreground">
                Have a project in mind or need IT support? Reach out and let's
                discuss how we can help your business succeed.
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
                <div className="lg:col-span-1 space-y-6">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>

                  <Card className="p-4">
                    <div className="flex gap-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+263715866071" className="text-sm">
                        +263 715 866 071
                      </a>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex gap-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <p className="text-sm">Hybrid / Remote Services</p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex gap-3">
                      <a href="https://github.com/ESK07" target="_blank">
                        <Github />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ephraim-s-kunaka-0b2610213/"
                        target="_blank"
                      >
                        <Linkedin />
                      </a>
                      <a href="https://wa.me/263715866071" target="_blank">
                        <MessageCircle />
                      </a>
                    </div>
                  </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      Send Us a Message
                    </h2>

                    {submitMessage && (
                      <div
                        className={`mb-6 p-4 rounded-lg ${
                          isError
                            ? "bg-destructive/10 text-destructive"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label>Name *</Label>
                          <Input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label>Email *</Label>
                          <Input
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label>Phone</Label>
                          <Input
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <Label>Service</Label>
                          <Input
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Message *</Label>
                        <Textarea
                          name="message"
                          rows={6}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </main>

      <Footer />
    </>
  )
}
