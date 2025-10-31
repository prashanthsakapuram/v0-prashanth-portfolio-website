"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const section = document.getElementById("contact")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Get In Touch</h2>
          <h3 className="text-4xl font-bold text-foreground">Contact Me</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to collaborate? Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            {/* Email */}
            <a
              href="mailto:prashanthsakapuram@gmail.com"
              className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  prashanthsakapuram@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:7995690928"
              className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  +91 7995690928
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Connect on Social Media</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="relative w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="relative w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="relative w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                "Message Sent! ✓"
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
