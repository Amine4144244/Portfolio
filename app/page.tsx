"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Files, 
  Search, 
  GitBranch, 
  Settings, 
  ChevronRight, 
  ChevronDown, 
  Folder, 
  FileCode, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Menu,
  X,
  XCircle,
  AlertTriangle,
  RadioTower,
  Layout
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAppFolderOpen, setIsAppFolderOpen] = useState(true)
  const [time, setTime] = useState("")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Force dark mode to stay true to VS Code Dark+ theme
    document.documentElement.classList.add("dark")

    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }))
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)

    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      
      const scrollY = scrollContainerRef.current.scrollTop
      const sections = ["hero", "about", "projects", "skills", "contact"]
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && scrollY >= element.offsetTop - 300) {
          setActiveSection(section)
          break
        }
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      clearInterval(timer)
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth"
      })
    }
  }

  const files = [
    { id: "hero", name: "page.tsx", icon: <FileCode size={16} className="text-[#519aba]" /> },
    { id: "about", name: "about.md", icon: <Layout size={16} className="text-[#4ec9b0]" /> },
    { id: "projects", name: "projects.json", icon: <FileCode size={16} className="text-[#cbcb41]" /> },
    { id: "skills", name: "skills.ts", icon: <FileCode size={16} className="text-[#519aba]" /> },
    { id: "contact", name: ".env", icon: <Terminal size={16} className="text-[#a0a0a0]" /> },
  ]

  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-[#cccccc] font-sans overflow-hidden">
      
      {/* Top Title Bar (Mobile Menu Toggle) */}
      <div className="md:hidden flex items-center justify-between bg-[#323233] px-4 py-2 border-b border-[#1e1e1e]">
        <div className="flex items-center gap-2">
          <FileCode size={18} className="text-[#519aba]" />
          <span className="text-sm font-medium">Amine Labibi - VS Code</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-400 hover:text-white">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Activity Bar */}
        <div className="hidden md:flex w-12 bg-[#333333] flex-col items-center py-4 gap-6 shrink-0">
          <div className="relative group cursor-pointer">
            <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r"></div>
            <Files className="text-white" size={24} />
          </div>
          <Search className="text-[#858585] hover:text-white cursor-pointer transition-colors" size={24} />
          <GitBranch className="text-[#858585] hover:text-white cursor-pointer transition-colors" size={24} />
          <div className="flex-1"></div>
          <Settings className="text-[#858585] hover:text-white cursor-pointer transition-colors mb-2" size={24} />
        </div>

        {/* Sidebar Explorer */}
        <div className={`
          absolute md:static z-40 bg-[#252526] w-64 h-full border-r border-[#1e1e1e] transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
        `}>
          <div className="h-10 flex items-center px-4 text-[11px] font-semibold tracking-wider text-gray-400">
            EXPLORER
          </div>
          <div className="flex items-center gap-1 px-2 py-1 cursor-pointer bg-[#37373d] text-white">
            <ChevronDown size={16} /> 
            <span className="text-xs font-bold font-mono">PORTFOLIO</span>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            <div 
              className="flex items-center gap-1 px-4 py-1 cursor-pointer hover:bg-[#2a2d2e] select-none"
              onClick={() => setIsAppFolderOpen(!isAppFolderOpen)}
            >
              {isAppFolderOpen ? (
                <ChevronDown size={14} className="text-[#cccccc]" />
              ) : (
                <ChevronRight size={14} className="text-[#cccccc]" />
              )}
              <Folder size={16} className="text-[#dcb67a]" />
              <span className="text-sm">app</span>
            </div>
            {isAppFolderOpen && (
              <div className="pl-8 flex flex-col font-mono text-sm space-y-[2px]">
                {files.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => scrollToSection(file.id)}
                    className={`flex items-center gap-2 px-2 py-1 w-full text-left transition-colors ${
                      activeSection === file.id 
                        ? "bg-[#37373d] text-white" 
                        : "text-[#cccccc] hover:bg-[#2a2d2e]"
                    }`}
                  >
                    {file.icon}
                    {file.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] z-10 relative">
          
          {/* Tabs */}
          <div className="hidden md:flex bg-[#2d2d2d] h-11 overflow-x-auto no-scrollbar shrink-0">
            {files.map((file) => (
              <button
                key={file.id}
                onClick={() => scrollToSection(file.id)}
                className={`flex items-center gap-2 px-4 py-2 min-w-[120px] max-w-[200px] text-sm font-mono transition-colors border-r border-[#1e1e1e] ${
                  activeSection === file.id 
                    ? "bg-[#1e1e1e] border-t-[3px] border-t-[#007acc] text-white" 
                    : "bg-[#2d2d2d] border-t-[3px] border-t-transparent text-[#8b949e] hover:bg-[#2b2b2b]"
                }`}
              >
                {file.icon}
                <span className="truncate">{file.name}</span>
                {activeSection === file.id && <X size={14} className="ml-auto text-gray-400 hover:text-white" />}
              </button>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-1 px-4 h-8 bg-[#1e1e1e] shadow-[0_1px_2px_rgba(0,0,0,0.2)] text-[13px] text-[#cccccc] font-sans">
            <span className="text-[#519aba]">my-app</span>
            <ChevronRight size={14} className="text-[#656565]" />
            <span className="text-[#519aba]">app</span>
            <ChevronRight size={14} className="text-[#656565]" />
            <span>{files.find(f => f.id === activeSection)?.name || "page.tsx"}</span>
          </div>

          {/* Scrollable Content (The "Code") */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-6 md:px-16 lg:px-32 scroll-smooth pb-32">
            
            {/* Top Spacing */}
            <div className="h-16 md:h-12 w-full"></div>

            {/* Line numbers background effect (optional visual touch) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#1e1e1e] border-r border-[#404040] hidden lg:block -z-10"></div>

            {/* -- 1. HERO -- */}
            <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative font-mono text-base md:text-lg">
              <div className="text-[#6a9955] mb-8 select-none">
                <p>{"/**"}</p>
                <p className="pl-4">{"* hello world !! Welcome to my portfolio"}</p>
                <p className="pl-4">{"* Amine Labibi - 2026"}</p>
                <p>{"*/"}</p>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="text-[#dcdcaa]">Amine</span>
                  <span className="text-[#ce9178]">Labibi</span>
                </h1>
                
                <h2 className="text-2xl md:text-4xl text-[#4ec9b0] font-sans">
                  Full-Stack Developer <span className="text-[#858585]">|</span> AI Agent Builder
                </h2>

                <p className="text-[#9cdcfe] mt-6 max-w-2xl text-lg font-sans leading-relaxed">
                  I build powerful, real-world web apps and AI agents. I focus on building clean, maintainable code and shipping working systems that solve problems.
                </p>
              </div>

              {/* Action Stats / Links */}
              <div className="flex flex-wrap gap-4 mt-10 font-sans text-sm font-semibold tracking-wider">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] rounded border border-[#404040] hover:border-[#007acc] transition-colors cursor-pointer text-[#d4d4d4]" onClick={() => scrollToSection('projects')}>
                  <Folder size={16} className="text-[#dcb67a]" /> Projects
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] rounded border border-[#404040] hover:border-[#007acc] transition-colors cursor-pointer text-[#d4d4d4]" onClick={() => scrollToSection('about')}>
                   <span></span> About Me
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded border border-[#007acc] hover:bg-[#005f9e] transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>
                   <Mail size={16} /> Contact
                </div>
              </div>

              {/* Tag / Stats row */}
              <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-[#333333] text-xs font-mono text-[#858585]">
                 <span className="flex items-center gap-1 text-[#b5cea8]"><RadioTower size={14}/> 3+ YEARS</span>
                 <span className="flex items-center gap-1 text-[#b5cea8]"><Folder size={14}/> 10+ PROJECTS</span>
                 <span className="flex items-center gap-1 text-[#c586c0]"> CURIOSITY</span>
                 <span className="flex items-center gap-1 text-[#c586c0]"> ALWAYS LEARNING</span>
              </div>
            </section>

            {/* -- 2. ABOUT -- */}
            <section id="about" className="min-h-[70vh] py-20 font-sans">
              <h3 className="text-3xl font-bold text-[#d4d4d4] font-mono mb-8 flex items-center gap-3">
                <span className="text-[#569cd6]">export const</span> <span className="text-[#dcdcaa]">AboutMe</span> = () <span className="text-[#569cd6]">{"=> {"}</span>
              </h3>
              
              <div className="pl-4 md:pl-8 border-l-2 border-[#404040] space-y-6 text-lg text-[#cccccc] leading-relaxed relative">
                <p>
                  I'm a passionate full-stack developer and AI agent builder based in <span className="text-[#ce9178] font-mono">"Morocco"</span>. With expertise spanning React, Node.js, Python, and modern AI technologies, I specialize in creating solutions that bridge the gap between complex problems and elegant implementations.
                </p>
                <p>
                  My journey in tech has been driven by a desire to build systems that matter. Whether it's crafting intuitive user interfaces or architecting robust backend systems, I approach every project with the same philosophy: run <span className="text-[#4ec9b0] font-mono">clean_code.sh</span>, maintain scalable architecture, and deliver real-world impact.
                </p>
                <div className="flex gap-6 mt-8 pt-4">
                  <a href="https://github.com/Amine4144244" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#007acc] transition-colors">
                    <Github size={20} /> <span className="font-mono text-sm">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/amine-labibi-a4b820242/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#007acc] transition-colors">
                    <Linkedin size={20} /> <span className="font-mono text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-[#569cd6] font-mono mt-8">{"}"}</h3>
            </section>

            {/* -- 3. PROJECTS -- */}
            <section id="projects" className="min-h-[80vh] py-20">
              <div className="text-[#6a9955] mb-6 font-mono">{'// Featured Deployments'}</div>
              <h3 className="text-3xl font-bold text-[#d4d4d4] font-mono mb-12 flex items-center gap-3">
                <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">projects</span> = <span className="text-[#d4d4d4]">{"["}</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6 pl-4 md:pl-8 relative z-10">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#404040] -z-10"></div>
                {[
                  {
                    title: "Agentic AI with Groq",
                    description: "A project exploring AI agent patterns (ReAct, RAG, and multi-agent workflows) using Groq's API. Features document-based RAG with ChromaDB, tool integration, and a task planning manager for complex workflows.",
                    tech: ["Python", "Groq", "LangChain", "ChromaDB"]
                  },
                  {
                    title: "AI-Blog",
                    description: "Blogging platform powered by AI. Real-time collaboration and AI-assisted writing.",
                    tech: ["React", "Express", "OpenAI API", "MongoDB"]
                  },
                  {
                    title: "AI-Journal",
                    description: "Personal journaling app that uses AI to summarize and reflect on user entries.",
                    tech: ["Next.js", "PostgreSQL", "LangChain"]
                  }
                ].map((project, idx) => (
                  <div key={idx} className="bg-[#252526] border border-[#333333] hover:border-[#007acc] transition-colors p-6 rounded relative group shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <Folder size={28} className="text-[#dcb67a]" />
                      <a href="#" className="opacity-0 group-hover:opacity-100 transition-opacity text-[#cccccc] hover:text-[#007acc]">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h4 className="text-xl font-bold font-sans text-white mb-2">{project.title}</h4>
                    <p className="text-sm text-[#cccccc] mb-6 leading-relaxed bg-[#1e1e1e] p-3 rounded font-mono border border-[#333333]">
                      <span className="text-[#ce9178]">"{project.description}"</span>
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#4ec9b0]">
                      {project.tech.map(t => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-[#d4d4d4] font-mono mt-8">{" ]"}</h3>
            </section>

            {/* -- 4. SKILLS -- */}
            <section id="skills" className="min-h-[60vh] py-20">
              <div className="text-[#6a9955] mb-6 font-mono">{'// Tech Stack configuration'}</div>
              <div className="bg-[#1e1e1e] rounded font-mono text-sm md:text-base text-[#d4d4d4]">
                <div><span className="text-[#c586c0]">interface</span> <span className="text-[#4ec9b0]">Skills</span> {"{"}</div>
                <div className="pl-8 space-y-2 py-4">
                  <div>
                    <span className="text-[#9cdcfe]">frontend</span>: <span className="text-[#569cd6]">string[]</span>;
                    <div className="pl-4 text-[#ce9178] opacity-80">
                      // ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML/CSS']
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#9cdcfe]">backend</span>: <span className="text-[#569cd6]">string[]</span>;
                    <div className="pl-4 text-[#ce9178] opacity-80">
                      // ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#9cdcfe]">ai&tools</span>: <span className="text-[#569cd6]">string[]</span>;
                    <div className="pl-4 text-[#ce9178] opacity-80">
                      // ['Python', 'LangChain', 'LangGraph', 'Agentic AI', 'OpenAI', 'Docker', 'Git']
                    </div>
                  </div>
                </div>
                <div>{"}"}</div>
              </div>
            </section>

            {/* -- 5. CONTACT -- */}
            <section id="contact" className="min-h-[70vh] py-20 relative">
              <div className="text-[#6a9955] mb-6 font-mono">{'// init_connection.sh'}</div>
              <h2 className="text-4xl font-bold mb-8 text-[#d4d4d4]">Open Connection</h2>
              <p className="text-[#cccccc] mb-8 font-sans max-w-xl text-lg">
                I'm currently looking for new opportunities. Whether it's a project idea or just saying hi, my inbox is open.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const email = "amineib135@gmail.com"
                  const subject = `New connection from ${formData.get("name")}`
                  const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`
                  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                }}
                className="max-w-md bg-[#252526] border border-[#333333] p-6 rounded shadow-lg font-mono space-y-4"
              >
                <div>
                  <label className="block text-xs text-[#858585] mb-1">name_variable</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#3c3c3c] border border-transparent focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-sm rounded shadow-inner"
                    placeholder="Enter name..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#858585] mb-1">email_string</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#3c3c3c] border border-transparent focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-sm rounded shadow-inner"
                    placeholder="Enter email..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#858585] mb-1">body_payload</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-[#3c3c3c] border border-transparent focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-sm rounded shadow-inner resize-none"
                    placeholder="Enter message..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0e639c] hover:bg-[#1177bb] transition-colors text-white font-sans font-medium py-2 rounded shadow">
                  execute send()
                </button>
              </form>
            </section>

          </div>
        </div>
      </div>

      {/* Editor Status Bar */}
      <div className="h-[22px] bg-[#007acc] text-white text-xs flex items-center justify-between px-3 font-sans select-none shrink-0 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            <GitBranch size={12} /> main*
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors hidden sm:flex">
            <span className="flex items-center gap-1"><XCircle size={13} /> 0</span>
            <span className="flex items-center gap-1"><AlertTriangle size={13} /> 0</span>
          </div>
          <div className="hidden md:block">Amine Labibi's Portfolio</div>
        </div>
        <div className="flex items-center gap-3 md:gap-4 font-mono">
          <div className="hidden sm:block cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">UTF-8</div>
          <div className="cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">TypeScript React</div>
          <div className="cursor-pointer hover:bg-white/20 px-1 rounded transition-colors"> Dark+</div>
          <div className="hidden sm:block"> {time || "14:30"}</div>
        </div>
      </div>

    </div>
  )
}
