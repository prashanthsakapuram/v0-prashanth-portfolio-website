"use client"

import { useEffect, useState } from "react"
import { Code2, Briefcase, BookOpen } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("about")
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</h2>
            <h3 className="text-4xl font-bold text-foreground">Cyber Security Enthusiast</h3>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">
            I'm a Cyber-Physical Systems student at VIT Chennai, passionate about malware analysis, reverse engineering,
            and cybersecurity. I love dissecting binaries, understanding how code behaves, and building a strong
            technical foundation in system-level programming and reverse engineering.
          </p>

          <div className="space-y-4 pt-4">
            {/* Education */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Education</h4>
                <p className="text-sm text-muted-foreground">B.Tech in Cyber-Physical Systems</p>
                <p className="text-xs text-muted-foreground">Vellore Institute of Technology, Chennai (2nd Year)</p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Currently Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced malware reversing techniques and dynamic analysis
                </p>
              </div>
            </div>

            {/* Passion */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Specialization</h4>
                <p className="text-sm text-muted-foreground">
                  Malware Analysis, Reverse Engineering, Binary Dissection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Stats/Info cards */}
        <div
          className={`space-y-6 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Status Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-card border border-border rounded-xl p-8 neon-glow-hover transition-all">
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm mb-2">Status</p>
                  <p className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Active Learner
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Continuously developing skills in malware analysis and reverse engineering
                </p>
              </div>
            </div>
          </div>

          {/* Passion Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-card border border-border rounded-xl p-8 neon-glow-hover transition-all">
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">Key Interests</p>
                <div className="flex flex-wrap gap-2">
                  {["Binary Analysis", "System Programming", "Security Research"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
