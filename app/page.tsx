"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("darkMode", String(!isDark))
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AL
                </h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {["hero", "about", "projects", "skills", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>

              {/* Theme Toggle & Mobile Menu */}
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button
                  className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                {["hero", "about", "projects", "skills", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-mono text-sm">Hello, my name is</p>
                  <h1 className="text-5xl md:text-7xl font-bold text-balance">Amine Labibi</h1>
                  <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground text-balance">
                    Full-Stack Developer & AI Agent Builder
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  I build powerful, real-world web apps and AI agents. I focus on building clean, maintainable code and
                  shipping working systems that solve problems.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button onClick={() => scrollToSection("projects")} size="lg">
                    View My Work
                  </Button>
                  <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
                    Get In Touch
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/Amine4144244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amine-labibi-a4b820242/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:amineib135@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amine-profile-xsQJ25GLHOtRPBhcQAPjb710YxDCam.jpg"
                    alt="Amine Labibi"
                    className="relative w-full h-full object-cover rounded-2xl border-2 border-primary/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer and AI agent builder based in Morocco. With expertise spanning
                React, Node.js, Python, and modern AI technologies, I specialize in creating solutions that bridge the
                gap between complex problems and elegant implementations.
              </p>
              <p>
                My journey in tech has been driven by a desire to build systems that matter. Whether it's crafting
                intuitive user interfaces or architecting robust backend systems, I approach every project with the same
                philosophy: clean code, maintainable architecture, and real-world impact.
              </p>
              <p>
                I'm currently open to freelance work and collaboration opportunities. I'm particularly interested in
                projects involving AI integration, full-stack development, and building products that solve meaningful
                problems.
              </p>
              <div className="pt-4">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> Morocco
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Email:</span> amineib135@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
            <div className="space-y-8">
              {[
                {
                  title: "AI Extractor",
                  description:
                    "A full-stack app that extracts structured data from PDFs and ID documents using OCR and LLM pipelines. Combines advanced computer vision with language models for accurate data extraction.",
                  tech: ["React", "Node.js", "LangChain", "MongoDB", "OCR"],
                },
                {
                  title: "AI-Blog",
                  description:
                    "A full-stack blogging platform powered by AI to help users generate, edit, and publish intelligent content. Features real-time collaboration and AI-assisted writing.",
                  tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
                },
                {
                  title: "AI-Journal",
                  description:
                    "A personal journaling app that uses AI to summarize, analyze, and reflect on user entries. Provides insights and patterns from your thoughts and experiences.",
                  tech: ["React", "Node.js", "PostgreSQL", "LangChain"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
                },
                {
                  category: "AI & Tools",
                  skills: ["LangChain", "AI Agents", "Docker", "Git", "REST APIs"],
                },
              ].map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        ✓ {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-2xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get In Touch</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              I'd love to hear about your project. Feel free to reach out for collaboration, freelance opportunities, or
              just a friendly chat.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const email = "amineib135@gmail.com"
                const subject = `New message from ${formData.get("name")}`
                const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-12 border-t border-border pt-12">
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/Amine4144244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/amine-labibi-a4b820242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:amineib135@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8 px-4">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
            <p>© 2025 Amine Labibi. All rights reserved.</p>
            <p className="mt-2">Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
