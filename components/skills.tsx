"use client"

import { useEffect, useState } from "react"
import { Code2, Wrench, Activity } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("skills")
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

  const skillsData = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "C++"],
      color: "from-primary to-blue-500",
    },
    {
      icon: Wrench,
      title: "Reversing Tools",
      skills: ["Ghidra", "IDA Free", "Pestudio", "PE Bear", "Exeinfo", "ANY.RUN"],
      color: "from-accent to-cyan-500",
    },
    {
      icon: Activity,
      title: "Techniques",
      skills: ["Static Analysis", "Dynamic Analysis", "Malware Analysis"],
      color: "from-primary to-cyan-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Skills</h2>
          <h3 className="text-4xl font-bold text-foreground">Technical Expertise</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for malware analysis, reverse engineering, and security research
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className={`group ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-all"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(10, 132, 255, 0.2), rgba(0, 217, 255, 0.2))`,
                  }}
                ></div>
                <div className="relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all h-full neon-glow-hover">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-semibold text-foreground">{category.title}</h4>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex items-center justify-between gap-4">
                          <span className="text-sm text-muted-foreground">{skill}</span>
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden border border-border">
                            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-3/4"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
