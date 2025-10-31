"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("portfolio")
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

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</h2>
          <h3 className="text-4xl font-bold text-foreground">Portfolio</h3>
        </div>

        {/* Coming Soon Card */}
        <div className={`relative group max-w-2xl mx-auto ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100"></div>
          <div className="relative bg-card border border-border rounded-xl p-12 text-center space-y-6 neon-glow-hover transition-all">
            <div className="space-y-2">
              <p className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                Coming Soon
              </p>
              <h4 className="text-3xl font-bold text-foreground">Real-World Malware Analysis</h4>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Currently working on developing comprehensive real-world malware analysis projects showcasing static
              analysis, dynamic analysis, and reverse engineering techniques.
            </p>

            <div className="pt-4">
              <button className="px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center gap-2 group">
                Stay Tuned
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Timeline indicator */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-6 border-t border-border">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Analysis & Documentation
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Research Phase
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
