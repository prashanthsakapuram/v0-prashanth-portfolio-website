"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`space-y-6 ${isLoaded ? "animate-slide-in-up" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            Welcome to my cybersecurity journey
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance">
            <span className="text-foreground">SAKAPURAM </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
              PRASHANTH
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            Aspiring Malware Analyst & Reverse Engineer
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the deep layers of software behavior and cybersecurity through static and dynamic analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection("skills")}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center pt-2 mx-auto mt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
