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
  Terminal as TerminalIcon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  XCircle,
  AlertTriangle,
  RadioTower,
  FileText,
  GraduationCap,
  Award,
  Layers,
  Cpu,
  Database,
  Bot,
  Copy,
  Check,
  Sparkles,
  Phone,
  MapPin,
  Send,
  Minimize2,
  Maximize2
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAppFolderOpen, setIsAppFolderOpen] = useState(true)
  const [time, setTime] = useState("")
  const [projectFilter, setProjectFilter] = useState<"all" | "rag" | "agents" | "fullstack">("all")
  const [activeTerminalTab, setActiveTerminalTab] = useState<"terminal" | "output" | "problems">("terminal")
  const [isTerminalOpen, setIsTerminalOpen] = useState(true)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.add("dark")

    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }))
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)

    const handleScroll = () => {
      if (!scrollContainerRef.current) return

      const scrollY = scrollContainerRef.current.scrollTop
      const sections = ["hero", "about", "projects", "skills", "credentials", "contact"]

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && scrollY >= element.offsetTop - 280) {
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
    setIsSearchOpen(false)
    const element = document.getElementById(sectionId)
    if (element && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: element.offsetTop - 40,
        behavior: "smooth"
      })
    }
  }

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const files = [
    { id: "hero", name: "page.tsx", icon: <FileCode size={16} className="text-[#519aba]" />, label: "Hero" },
    { id: "about", name: "about.md", icon: <FileText size={16} className="text-[#4ec9b0]" />, label: "About" },
    { id: "projects", name: "projects.json", icon: <FileCode size={16} className="text-[#cbcb41]" />, label: "Projects" },
    { id: "skills", name: "skills.ts", icon: <FileCode size={16} className="text-[#519aba]" />, label: "Skills" },
    { id: "credentials", name: "credentials.json", icon: <Award size={16} className="text-[#ce9178]" />, label: "Credentials" },
    { id: "contact", name: ".env", icon: <TerminalIcon size={16} className="text-[#a0a0a0]" />, label: "Contact" },
  ]

  const projects = [
    {
      id: "enterprise-rag",
      category: "rag",
      categoryBadge: "Enterprise RAG",
      badgeColor: "border-[#4ec9b0] text-[#4ec9b0] bg-[#4ec9b0]/10",
      title: "EnterpriseRAG Knowledge Base",
      description:
        "An enterprise-grade Retrieval-Augmented Generation (RAG) platform specialized in technical documentation, engineering manuals, and dense tabular data.",
      bullets: [
        {
          label: "Architecture & Parsing",
          detail: "Built with IBM Docling for layout-aware document and tabular structure extraction."
        },
        {
          label: "Hybrid Search Engine",
          detail:
            "Implemented Qdrant Hybrid Search combining dense neural semantic embeddings with sparse BM25 lexical search for high precision on domain-specific engineering jargon."
        },
        {
          label: "High-Performance Inference",
          detail:
            "Powered by NVIDIA NIM Models for optimized enterprise inference, grounded answer generation, and low-latency retrieval synthesis."
        }
      ],
      tech: ["IBM Docling", "Qdrant", "NVIDIA NIM", "Python", "Hybrid Search (Dense + BM25)", "FastAPI", "Retrieval Eval"],
      github: "https://github.com/Amine4144244"
    },
    {
      id: "financial-rag",
      category: "rag",
      categoryBadge: "Financial RAG",
      badgeColor: "border-[#569cd6] text-[#569cd6] bg-[#569cd6]/10",
      title: "Financial Statement RAG",
      description:
        "Specialized financial analysis platform combining unstructured disclosures with structured financial accounting records and deterministic validation.",
      bullets: [
        {
          label: "Hybrid Retrieval Architecture",
          detail:
            "Built a financial analysis platform combining semantic vector search (ChromaDB + LlamaIndex) for MD&A and footnotes with normalized relational storage (PostgreSQL) for structured financial facts."
        },
        {
          label: "Deterministic Calculations",
          detail:
            "Implemented exact mathematical calculations (YoY growth, liquidity, leverage, and margins) using Python decimal to eliminate LLM arithmetic hallucinations."
        },
        {
          label: "Grounding & Auditability",
          detail:
            "Designed a verification layer that reconciles LLM statements against tabular database records and validates citation sources with strict unit/scale tracking."
        }
      ],
      tech: ["Python", "ChromaDB", "LlamaIndex", "PostgreSQL", "Python Decimal", "Verification Layer", "Auditability"],
      github: "https://github.com/Amine4144244"
    },
    {
      id: "hitl-agent",
      category: "agents",
      categoryBadge: "AI Agent",
      badgeColor: "border-[#c586c0] text-[#c586c0] bg-[#c586c0]/10",
      title: "Human-in-the-Loop AI Agent (LangGraph)",
      description:
        "Autonomous agent system designed for high-consequence enterprise workflows with automated confidence scoring and human oversight.",
      bullets: [
        {
          label: "Workflow Orchestration",
          detail:
            "Designed an agent workflow using confidence scoring and human review routing for uncertain cases."
        },
        {
          label: "Evaluation & Reliability",
          detail:
            "Included automated response verification and an interactive feedback loop to support reliable outputs."
        }
      ],
      tech: ["Python", "LangGraph", "LangChain", "ReAct Agents", "Confidence Routing", "Human-in-the-Loop", "Evals"],
      github: "https://github.com/Amine4144244"
    },
    {
      id: "shop-ai",
      category: "fullstack",
      categoryBadge: "Full-Stack AI",
      badgeColor: "border-[#dcdcaa] text-[#dcdcaa] bg-[#dcdcaa]/10",
      title: "ShopAI – AI-Powered Shopping Platform",
      description:
        "Full-stack AI-powered e-commerce platform with product browsing and an interactive conversational shopping assistant.",
      bullets: [
        {
          label: "Conversational Shopping",
          detail:
            "Integrated a Python FastAPI AI service with Groq LLMs for conversational assistance and structured, product-aware recommendations."
        },
        {
          label: "Backend & Data",
          detail:
            "Built REST APIs using Node.js and Express.js, with MongoDB for product and application data management."
        },
        {
          label: "Decoupled Architecture",
          detail:
            "Designed a clean separated frontend, backend, and AI-service microservices architecture."
        }
      ],
      tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Python", "FastAPI", "Groq API"],
      github: "https://github.com/Amine4144244"
    },
    {
      id: "ai-blog",
      category: "fullstack",
      categoryBadge: "Full-Stack AI",
      badgeColor: "border-[#ce9178] text-[#ce9178] bg-[#ce9178]/10",
      title: "AI Blog – Content Generation Platform",
      description:
        "Full-stack AI-powered blogging platform with an interactive content creation studio and automated writing assistance.",
      bullets: [
        {
          label: "LLM Writing Features",
          detail:
            "Integrated LLM-powered features for blog generation, content improvement, grammar correction, title generation, and category suggestions."
        },
        {
          label: "Dedicated Microservices",
          detail:
            "Built backend APIs with Express.js and a dedicated Python FastAPI service for high-performance AI processing."
        },
        {
          label: "Data & Security",
          detail:
            "Implemented application functionality using MongoDB, authentication-related dependencies, and REST API communication."
        }
      ],
      tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "Groq API", "REST APIs"],
      github: "https://github.com/Amine4144244"
    }
  ]

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === projectFilter)

  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-[#cccccc] font-sans overflow-hidden">
      {/* Top Title Bar */}
      <div className="flex items-center justify-between bg-[#323233] px-3 py-1.5 border-b border-[#1e1e1e] select-none text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-mono text-xs">
            <FileCode size={14} className="text-[#519aba]" />
            <span className="font-semibold text-white">Amine Labibi</span>
            <span className="text-gray-500">—</span>
            <span className="text-gray-400 hidden sm:inline">AI Full-Stack Developer | React • Node.js • Python • Generative AI</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex items-center gap-1.5 bg-[#252526] hover:bg-[#3c3c3c] text-gray-400 hover:text-white px-2.5 py-1 rounded text-[11px] font-mono border border-[#3e3e42] transition-colors"
          >
            <Search size={12} />
            <span className="hidden sm:inline">Quick Jump</span>
            <kbd className="bg-[#1e1e1e] px-1 rounded text-[10px] text-gray-400">Ctrl+P</kbd>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white p-1"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Quick Search Modal */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-black/60 z-50 flex items-start justify-center pt-16 px-4">
          <div className="bg-[#252526] border border-[#007acc] rounded-lg shadow-2xl w-full max-w-lg overflow-hidden font-mono">
            <div className="flex items-center px-4 py-3 border-b border-[#3c3c3c]">
              <Search size={16} className="text-[#007acc] mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type file name to jump (e.g. projects, skills, credentials)..."
                className="w-full bg-transparent outline-none text-white text-sm"
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-white">
                <X size={16} />
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto p-2">
              {files
                .filter(
                  (f) =>
                    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    f.label.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((f) => (
                  <button
                    key={f.id}
                    onClick={() => scrollToSection(f.id)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left rounded hover:bg-[#007acc] hover:text-white text-gray-300 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {f.icon}
                      <span className="font-semibold">{f.name}</span>
                    </div>
                    <span className="text-[11px] opacity-75">{f.label}</span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="hidden md:flex w-12 bg-[#333333] flex-col items-center py-4 gap-6 shrink-0 z-20">
          <div
            className="relative group cursor-pointer"
            title="Explorer"
            onClick={() => setIsAppFolderOpen(!isAppFolderOpen)}
          >
            <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r"></div>
            <Files className="text-white" size={24} />
          </div>
          <div
            className="text-[#858585] hover:text-white cursor-pointer transition-colors"
            title="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={24} />
          </div>
          <a
            href="https://github.com/Amine4144244"
            target="_blank"
            rel="noreferrer"
            className="text-[#858585] hover:text-white cursor-pointer transition-colors"
            title="Source Control / GitHub"
          >
            <GitBranch size={24} />
          </a>
          <div
            className="text-[#858585] hover:text-white cursor-pointer transition-colors"
            title="Toggle Terminal"
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          >
            <TerminalIcon size={24} />
          </div>
          <div className="flex-1"></div>
          <a
            href="mailto:amineib135@gmail.com"
            className="text-[#858585] hover:text-white cursor-pointer transition-colors mb-2"
            title="Email Amine"
          >
            <Mail size={22} />
          </a>
          <div className="text-[#858585] hover:text-white cursor-pointer transition-colors mb-2" title="Settings">
            <Settings size={22} />
          </div>
        </div>

        {/* Sidebar Explorer */}
        <div
          className={`
          absolute md:static z-40 bg-[#252526] w-64 h-full border-r border-[#1e1e1e] transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          flex flex-col shrink-0
        `}
        >
          <div className="h-9 flex items-center justify-between px-4 text-[11px] font-semibold tracking-wider text-gray-400 border-b border-[#1e1e1e]">
            <span>EXPLORER</span>
            <span className="text-[10px] text-gray-500 font-mono">PORTFOLIO</span>
          </div>

          <div
            className="flex items-center gap-1 px-3 py-1.5 cursor-pointer bg-[#37373d]/60 text-white font-mono text-xs select-none"
            onClick={() => setIsAppFolderOpen(!isAppFolderOpen)}
          >
            {isAppFolderOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span className="font-bold tracking-wide">PORTFOLIO-CORE</span>
          </div>

          <div className="flex-1 overflow-y-auto py-1">
            <div
              className="flex items-center gap-1.5 px-4 py-1 cursor-pointer hover:bg-[#2a2d2e] select-none text-xs text-gray-300"
              onClick={() => setIsAppFolderOpen(!isAppFolderOpen)}
            >
              {isAppFolderOpen ? (
                <ChevronDown size={13} className="text-[#cccccc]" />
              ) : (
                <ChevronRight size={13} className="text-[#cccccc]" />
              )}
              <Folder size={15} className="text-[#dcb67a]" />
              <span className="font-mono">app</span>
            </div>

            {isAppFolderOpen && (
              <div className="pl-6 flex flex-col font-mono text-xs space-y-[1px]">
                {files.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => scrollToSection(file.id)}
                    className={`flex items-center justify-between px-3 py-1.5 w-full text-left transition-colors rounded-sm ${
                      activeSection === file.id
                        ? "bg-[#37373d] text-white font-medium border-l-2 border-[#007acc]"
                        : "text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {file.icon}
                      <span className="truncate">{file.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Quick Skills Summary In Sidebar */}
            <div className="mt-6 px-4 pt-4 border-t border-[#333333]/80">
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#dcdcaa]" /> Core Focus
              </div>
              <div className="space-y-1.5 text-[11px] font-mono text-gray-400">
                <div className="flex items-center justify-between">
                  <span className="text-[#4ec9b0]">Enterprise RAG</span>
                  <span className="text-gray-500">Docling + Qdrant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#c586c0]">AI Agents</span>
                  <span className="text-gray-500">LangGraph (HITL)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#569cd6]">Full-Stack</span>
                  <span className="text-gray-500">React + FastAPI</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-6 px-4 pt-4 border-t border-[#333333]/80">
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                developer_info
              </div>
              <div className="text-[11px] font-mono text-gray-400 space-y-1">
                <p className="flex items-center gap-1.5 text-gray-300 truncate">
                  <MapPin size={12} className="text-[#ce9178] shrink-0" /> Casablanca, Morocco
                </p>
                <p className="flex items-center gap-1.5 text-gray-300 truncate">
                  <Mail size={12} className="text-[#519aba] shrink-0" /> amineib135@gmail.com
                </p>
                <p className="flex items-center gap-1.5 text-gray-300 truncate">
                  <Phone size={12} className="text-[#4ec9b0] shrink-0" /> 0777411375
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor & Scroll Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] z-10 relative">
          {/* Editor Tabs */}
          <div className="hidden md:flex bg-[#252526] h-9 overflow-x-auto no-scrollbar shrink-0 border-b border-[#1e1e1e]">
            {files.map((file) => (
              <button
                key={file.id}
                onClick={() => scrollToSection(file.id)}
                className={`flex items-center gap-2 px-3.5 py-1 min-w-[120px] max-w-[210px] text-xs font-mono transition-colors border-r border-[#1e1e1e] ${
                  activeSection === file.id
                    ? "bg-[#1e1e1e] border-t-2 border-t-[#007acc] text-white font-medium"
                    : "bg-[#2d2d2d] border-t-2 border-t-transparent text-[#969696] hover:bg-[#282828] hover:text-[#cccccc]"
                }`}
              >
                {file.icon}
                <span className="truncate">{file.name}</span>
                {activeSection === file.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#007acc]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Breadcrumb Bar */}
          <div className="flex items-center justify-between px-4 h-7 bg-[#1e1e1e] border-b border-[#2b2b2b] text-xs text-[#cccccc] font-sans">
            <div className="flex items-center gap-1 font-mono text-[11px] text-gray-400">
              <span className="text-[#519aba]">portfolio</span>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-[#519aba]">app</span>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-white font-semibold">
                {files.find((f) => f.id === activeSection)?.name || "page.tsx"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
              <span className="hidden sm:inline">LF • UTF-8</span>
              <span className="text-[#4ec9b0]">TypeScript React</span>
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto px-4 md:px-12 lg:px-24 scroll-smooth pb-32"
          >
            {/* Top Spacing */}
            <div className="h-8 md:h-10 w-full"></div>

            {/* ================= 1. HERO SECTION ================= */}
            <section id="hero" className="min-h-[82vh] flex flex-col justify-center relative font-mono pt-4 pb-16">
              <div className="text-[#6a9955] mb-6 select-none leading-relaxed text-sm">
                <p>{"/**"}</p>
                <p className="pl-4">{"* @author Amine Labibi"}</p>
                <p className="pl-4">{"* @role AI Full-Stack Developer | React • Node.js • Python • Generative AI"}</p>
                <p className="pl-4">{"* @specialization Enterprise RAG, LangGraph Workflows, High-Precision Search"}</p>
                <p className="pl-4">{"* @location Casablanca, Morocco | Available for opportunities"}</p>
                <p>{"*/"}</p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007acc]/10 border border-[#007acc]/30 text-[#4fc1ff] text-xs font-mono">
                  <Sparkles size={13} className="text-[#007acc]" />
                  <span>Production AI Engineering & Full-Stack Systems</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-mono">
                  <span className="text-[#dcdcaa]">Amine </span>
                  <span className="text-[#ce9178]">Labibi</span>
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl text-[#4ec9b0] font-sans font-medium flex flex-wrap items-center gap-2">
                  <span>AI Full-Stack Developer</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-[#9cdcfe] text-lg sm:text-2xl">React • Node.js • Python • Generative AI</span>
                </h2>

                <p className="text-[#d4d4d4] max-w-3xl text-base sm:text-lg font-sans leading-relaxed pt-2">
                  AI Full-Stack Developer with hands-on experience building end-to-end web applications and Generative AI solutions. Skilled in JavaScript, React.js, Node.js, Express.js, Python, and FastAPI. Experienced in developing REST APIs, integrating LLMs, building RAG pipelines, and implementing document processing and intelligent question-answering workflows. Combines full-stack development capabilities with practical AI engineering and an Economics and Management background.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 font-sans text-xs sm:text-sm font-medium">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#007acc] hover:bg-[#005f9e] text-white rounded transition-colors shadow-md cursor-pointer"
                >
                  <Folder size={16} className="text-[#dcb67a]" />
                  <span>Explore Projects (5)</span>
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] hover:bg-[#383838] border border-[#404040] hover:border-[#007acc] text-white rounded transition-colors cursor-pointer"
                >
                  <Cpu size={16} className="text-[#4ec9b0]" />
                  <span>Tech Stack</span>
                </button>
                <button
                  onClick={() => scrollToSection("credentials")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] hover:bg-[#383838] border border-[#404040] hover:border-[#007acc] text-white rounded transition-colors cursor-pointer"
                >
                  <Award size={16} className="text-[#ce9178]" />
                  <span>Education & Certs</span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#252526] hover:bg-[#2f2f32] border border-[#404040] hover:border-[#4ec9b0] text-gray-200 rounded transition-colors cursor-pointer"
                >
                  <Mail size={16} className="text-[#519aba]" />
                  <span>Get in Touch</span>
                </button>
              </div>

              {/* Highlight Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-6 border-t border-[#333333] text-xs font-mono">
                <div className="p-3 bg-[#252526] border border-[#333333] rounded">
                  <div className="text-gray-400 text-[11px]">LOCATION</div>
                  <div className="text-[#4ec9b0] font-bold mt-0.5 flex items-center gap-1">
                    <MapPin size={13} /> Casablanca, Morocco
                  </div>
                </div>
                <div className="p-3 bg-[#252526] border border-[#333333] rounded">
                  <div className="text-gray-400 text-[11px]">SPECIALTY</div>
                  <div className="text-[#dcdcaa] font-bold mt-0.5 flex items-center gap-1">
                    <Layers size={13} /> Enterprise RAG & Agents
                  </div>
                </div>
                <div className="p-3 bg-[#252526] border border-[#333333] rounded">
                  <div className="text-gray-400 text-[11px]">EDUCATION</div>
                  <div className="text-[#9cdcfe] font-bold mt-0.5 flex items-center gap-1">
                    <GraduationCap size={13} /> Economics & Management
                  </div>
                </div>
                <div className="p-3 bg-[#252526] border border-[#333333] rounded">
                  <div className="text-gray-400 text-[11px]">STATUS</div>
                  <div className="text-[#b5cea8] font-bold mt-0.5 flex items-center gap-1">
                    <RadioTower size={13} /> Open to Opportunities
                  </div>
                </div>
              </div>
            </section>

            {/* ================= 2. ABOUT SECTION ================= */}
            <section id="about" className="min-h-[70vh] py-16 font-sans">
              <div className="text-[#6a9955] mb-4 font-mono text-xs">{"// 01. Professional Overview & Philosophy"}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono mb-8 flex items-center gap-3">
                <span className="text-[#569cd6]">export const</span>{" "}
                <span className="text-[#dcdcaa]">developerProfile</span> = () <span className="text-[#569cd6]">{"=> {"}</span>
              </h3>

              <div className="pl-4 md:pl-8 border-l-2 border-[#404040] space-y-6 text-[#cccccc] leading-relaxed relative">
                {/* Frontmatter display */}
                <div className="bg-[#252526] p-4 rounded border border-[#333333] font-mono text-xs text-gray-300">
                  <div className="text-gray-500">---</div>
                  <div><span className="text-[#569cd6]">name</span>: <span className="text-[#ce9178]">"Amine Labibi"</span></div>
                  <div><span className="text-[#569cd6]">role</span>: <span className="text-[#ce9178]">"AI Full-Stack Developer"</span></div>
                  <div><span className="text-[#569cd6]">location</span>: <span className="text-[#ce9178]">"Casablanca, Morocco"</span></div>
                  <div><span className="text-[#569cd6]">degree</span>: <span className="text-[#ce9178]">"Licence in Economics & Management (Hassan II University)"</span></div>
                  <div><span className="text-[#569cd6]">core_focus</span>: <span className="text-[#ce9178]">["Enterprise RAG", "LangGraph Agents", "Docling", "Qdrant", "FastAPI", "React"]</span></div>
                  <div className="text-gray-500">---</div>
                </div>

                <p className="text-base sm:text-lg">
                  I am an <strong className="text-white">AI Full-Stack Developer</strong> specializing in creating resilient, real-world web applications and autonomous Generative AI pipelines. Based in <span className="text-[#ce9178] font-mono">Casablanca, Morocco</span>, my focus sits at the intersection of modern full-stack development and production-grade AI engineering.
                </p>

                <div className="grid md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#252526] border border-[#333333] p-4 rounded">
                    <div className="text-[#4ec9b0] font-mono font-semibold text-sm mb-2 flex items-center gap-2">
                      <Cpu size={16} /> Enterprise RAG & Search
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      Layout-aware parsing with IBM Docling, hybrid dense + BM25 search in Qdrant, ChromaDB, LlamaIndex, and low-latency inference using NVIDIA NIM.
                    </p>
                  </div>

                  <div className="bg-[#252526] border border-[#333333] p-4 rounded">
                    <div className="text-[#c586c0] font-mono font-semibold text-sm mb-2 flex items-center gap-2">
                      <Bot size={16} /> Agentic Workflows
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      Orchestrating reliable multi-step agents with LangGraph, confidence scoring, automated response verification, and Human-in-the-Loop review routing.
                    </p>
                  </div>

                  <div className="bg-[#252526] border border-[#333333] p-4 rounded">
                    <div className="text-[#dcdcaa] font-mono font-semibold text-sm mb-2 flex items-center gap-2">
                      <GraduationCap size={16} /> Economics & Analysis Edge
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      Economics & Management degree gives a deep grasp of financial statements, balance sheets, unit metrics, and business logic that generic developers lack.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300">
                  Whether developing full-stack architectures (React, Node.js, Express, MongoDB, PostgreSQL) or designing decoupled Python FastAPI AI microservices with Groq and OpenRouter, I build clean, testable, and audited systems with zero tolerance for arithmetic hallucinations or flaky retrieval.
                </p>

                {/* Social and Profile links */}
                <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
                  <a
                    href="https://github.com/Amine4144244"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-[#2d2d2d] rounded border border-[#404040] hover:border-[#007acc] text-white transition-colors"
                  >
                    <Github size={16} /> <span>github.com/Amine4144244</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amine-labibi-a4b820242/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-[#2d2d2d] rounded border border-[#404040] hover:border-[#007acc] text-white transition-colors"
                  >
                    <Linkedin size={16} className="text-[#007acc]" /> <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="mailto:amineib135@gmail.com"
                    className="flex items-center gap-2 px-3 py-2 bg-[#2d2d2d] rounded border border-[#404040] hover:border-[#007acc] text-white transition-colors"
                  >
                    <Mail size={16} className="text-[#ce9178]" /> <span>amineib135@gmail.com</span>
                  </a>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#569cd6] font-mono mt-8">{"}"}</h3>
            </section>

            {/* ================= 3. PROJECTS SECTION ================= */}
            <section id="projects" className="min-h-[85vh] py-16">
              <div className="text-[#6a9955] mb-2 font-mono text-xs">{"// 02. Featured Deployments & Engineering Implementations"}</div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono flex items-center gap-3">
                  <span className="text-[#569cd6]">const</span>{" "}
                  <span className="text-[#4fc1ff]">selectedProjects</span> = <span className="text-[#d4d4d4]">{"["}</span>
                </h3>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {[
                    { id: "all", label: "All (5)" },
                    { id: "rag", label: "Enterprise RAG (2)" },
                    { id: "agents", label: "AI Agents (1)" },
                    { id: "fullstack", label: "Full-Stack AI (2)" }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setProjectFilter(filter.id as any)}
                      className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                        projectFilter === filter.id
                          ? "bg-[#007acc] text-white font-semibold"
                          : "bg-[#252526] text-gray-400 hover:text-white border border-[#333333]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid lg:grid-cols-2 gap-6 pl-2 md:pl-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#333333] hidden md:block"></div>

                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-[#252526] border border-[#333333] hover:border-[#007acc] transition-all duration-200 p-6 rounded-lg relative group shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Folder size={22} className="text-[#dcb67a]" />
                          <span
                            className={`px-2 py-0.5 text-[11px] font-mono rounded border ${project.badgeColor}`}
                          >
                            {project.categoryBadge}
                          </span>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#333333] transition-colors"
                          title="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      </div>

                      {/* Project Title & Overview */}
                      <h4 className="text-xl font-bold font-sans text-white mb-2 group-hover:text-[#4fc1ff] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Bullets with Architectural details */}
                      <div className="bg-[#1e1e1e] border border-[#2d2d2d] rounded p-3 mb-4 space-y-2.5 font-sans">
                        {project.bullets.map((b, idx) => (
                          <div key={idx} className="text-xs text-gray-300 leading-relaxed flex items-start gap-2">
                            <span className="text-[#007acc] font-mono mt-0.5">•</span>
                            <div>
                              <strong className="text-white font-mono text-[11px]">{b.label}:</strong>{" "}
                              <span className="text-gray-300">{b.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 border-t border-[#333333]/80">
                      <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="bg-[#1e1e1e] text-[#9cdcfe] px-2 py-0.5 rounded border border-[#383838]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono mt-8">{" ]"}</h3>
            </section>

            {/* ================= 4. SKILLS SECTION ================= */}
            <section id="skills" className="min-h-[70vh] py-16">
              <div className="text-[#6a9955] mb-2 font-mono text-xs">{"// 03. Comprehensive Technical Skill Matrix"}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono mb-8 flex items-center gap-3">
                <span className="text-[#c586c0]">interface</span>{" "}
                <span className="text-[#4ec9b0]">AmineTechnicalSkills</span> <span className="text-[#d4d4d4]">{"{"}</span>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pl-2 md:pl-6">
                {/* 1. Generative AI & Agents */}
                <div className="bg-[#252526] border border-[#333333] hover:border-[#c586c0] transition-colors p-5 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#c586c0] font-mono font-semibold text-sm mb-3">
                    <Bot size={18} />
                    <span>Generative AI & Agents</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {[
                      "LLM Integration (Groq, OpenRouter)",
                      "LangChain & LangGraph",
                      "ReAct Multi-Agent Workflows",
                      "NVIDIA NIM High-Performance Models",
                      "Prompt Engineering & Structured Outputs",
                      "Human-in-the-Loop Review Guardrails"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-gray-300">
                        <Check size={12} className="text-[#c586c0] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. RAG & Vector Systems */}
                <div className="bg-[#252526] border border-[#333333] hover:border-[#4ec9b0] transition-colors p-5 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#4ec9b0] font-mono font-semibold text-sm mb-3">
                    <Database size={18} />
                    <span>RAG & Vector Search</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {[
                      "IBM Docling (Layout-Aware Tables)",
                      "Qdrant Hybrid Search (Dense + BM25)",
                      "ChromaDB Vector Store",
                      "LlamaIndex Framework",
                      "Embeddings & Retrieval Evaluation",
                      "Deterministic Verification Layers"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-gray-300">
                        <Check size={12} className="text-[#4ec9b0] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Backend & APIs */}
                <div className="bg-[#252526] border border-[#333333] hover:border-[#569cd6] transition-colors p-5 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#569cd6] font-mono font-semibold text-sm mb-3">
                    <Cpu size={18} />
                    <span>Backend & Microservices</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {[
                      "Python & FastAPI",
                      "Node.js & Express.js",
                      "RESTful API Architecture",
                      "JWT Authentication",
                      "HTTP-only Cookies Security",
                      "Microservices Communication"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-gray-300">
                        <Check size={12} className="text-[#569cd6] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Frontend & UI */}
                <div className="bg-[#252526] border border-[#333333] hover:border-[#dcdcaa] transition-colors p-5 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#dcdcaa] font-mono font-semibold text-sm mb-3">
                    <Layers size={18} />
                    <span>Frontend Engineering</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {[
                      "React.js (Hooks, State, Context)",
                      "JavaScript (ES6+) & TypeScript",
                      "Tailwind CSS & Responsive Design",
                      "Next.js App Router",
                      "Component-Driven Architecture",
                      "Interactive Chat & AI Interfaces"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-gray-300">
                        <Check size={12} className="text-[#dcdcaa] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Databases & Storage */}
                <div className="bg-[#252526] border border-[#333333] hover:border-[#ce9178] transition-colors p-5 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#ce9178] font-mono font-semibold text-sm mb-3">
                    <Database size={18} />
                    <span>Databases & Persistence</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {[
                      "PostgreSQL (Relational Facts)",
                      "MongoDB & Mongoose",
                      "Supabase (Auth & Postgres)",
                      "Vector Indexing (HNSW, Cosine)",
                      "Schema Normalization",
                      "Audit Trails & Fact Tables"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-gray-300">
                        <Check size={12} className="text-[#ce9178] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Tools & Practices */}
                <div className="bg-[#252526] border border-[#333333] hover:border-[#9cdcfe] transition-colors p-5 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#9cdcfe] font-mono font-semibold text-sm mb-3">
                    <Settings size={18} />
                    <span>Tools & Workflow</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {[
                      "Git & GitHub Workflows",
                      "Postman API Testing",
                      "Vercel Deployment",
                      "Clean Architecture & Modular Code",
                      "Deterministic Decimal Arithmetic",
                      "Linux & PowerShell CLI"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-gray-300">
                        <Check size={12} className="text-[#9cdcfe] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono mt-8">{"}"}</h3>
            </section>

            {/* ================= 5. CREDENTIALS & EDUCATION ================= */}
            <section id="credentials" className="min-h-[70vh] py-16">
              <div className="text-[#6a9955] mb-2 font-mono text-xs">{"// 04. Education, Training & Certifications"}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono mb-8 flex items-center gap-3">
                <span className="text-[#569cd6]">const</span>{" "}
                <span className="text-[#4fc1ff]">credentials</span> = <span className="text-[#d4d4d4]">{"{"}</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6 pl-2 md:pl-6">
                {/* Degree */}
                <div className="bg-[#252526] border border-[#333333] p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#9cdcfe] font-mono font-semibold text-sm mb-4">
                    <GraduationCap size={20} />
                    <span>Academic Education</span>
                  </div>
                  <div className="border-l-2 border-[#007acc] pl-4 py-1">
                    <h4 className="text-base font-bold text-white font-sans">
                      Bachelor's Degree (Licence) in Economics & Management
                    </h4>
                    <p className="text-xs font-mono text-[#4ec9b0] mt-1">Hassan II University • 2025–2026</p>
                    <p className="text-xs text-gray-300 mt-3 font-sans leading-relaxed">
                      Rigorous analytical training in managerial economics, corporate finance, market structures, and quantitative decision-making. Directly empowers domain-aware AI engineering for financial statement RAG, business automation, and enterprise data reasoning.
                    </p>
                  </div>

                  {/* Languages */}
                  <div className="mt-6 pt-4 border-t border-[#333333]">
                    <div className="text-xs font-mono text-gray-400 mb-2">LANGUAGES</div>
                    <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                      <div className="p-2 bg-[#1e1e1e] rounded text-center border border-[#333333]">
                        <span className="text-white block font-bold">Arabic</span>
                        <span className="text-[#b5cea8] text-[11px]">Advanced</span>
                      </div>
                      <div className="p-2 bg-[#1e1e1e] rounded text-center border border-[#333333]">
                        <span className="text-white block font-bold">English</span>
                        <span className="text-[#4fc1ff] text-[11px]">Independent</span>
                      </div>
                      <div className="p-2 bg-[#1e1e1e] rounded text-center border border-[#333333]">
                        <span className="text-white block font-bold">French</span>
                        <span className="text-[#ce9178] text-[11px]">Elementary</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Training & Certifications */}
                <div className="bg-[#252526] border border-[#333333] p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 text-[#dcdcaa] font-mono font-semibold text-sm mb-4">
                    <Award size={20} />
                    <span>Training & Professional Certifications</span>
                  </div>

                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-3 bg-[#1e1e1e] rounded border border-[#333333] hover:border-[#dcdcaa] transition-colors">
                      <div className="text-white font-bold font-sans">Geeks Institute</div>
                      <div className="text-[#4ec9b0] text-[11px]">Web Development, AI Agents & RAG Training</div>
                      <div className="text-gray-400 text-[10px] mt-1 font-sans">
                        Intensive hands-on mastery in building end-to-end full-stack applications, LangGraph agents, and production RAG.
                      </div>
                    </div>

                    <div className="p-3 bg-[#1e1e1e] rounded border border-[#333333] hover:border-[#569cd6] transition-colors">
                      <div className="text-white font-bold font-sans">Coursera & DeepLearning.AI</div>
                      <div className="text-[#9cdcfe] text-[11px]">Build RAG Applications: Get Started</div>
                      <div className="text-[#9cdcfe] text-[11px]">Vector Databases for RAG: An Introduction</div>
                      <div className="text-[#9cdcfe] text-[11px]">Generative AI Engineering with LLMs (modules completed)</div>
                    </div>

                    <div className="p-3 bg-[#1e1e1e] rounded border border-[#333333] hover:border-[#c586c0] transition-colors">
                      <div className="text-white font-bold font-sans">ALX</div>
                      <div className="text-[#c586c0] text-[11px]">Professional Skills & Software Development Fundamentals</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] font-mono mt-8">{"}"}</h3>
            </section>

            {/* ================= 6. CONTACT SECTION ================= */}
            <section id="contact" className="min-h-[75vh] py-16 relative">
              <div className="text-[#6a9955] mb-2 font-mono text-xs">{"// 05. Environment Variables & Connection Endpoint"}</div>
              <h2 className="text-3xl font-bold mb-6 text-[#d4d4d4] font-mono">
                <span className="text-[#569cd6]">export</span> <span className="text-[#4fc1ff]">connection</span> = <span className="text-[#dcdcaa]">connect()</span>
              </h2>

              <p className="text-[#cccccc] mb-8 font-sans max-w-2xl text-base sm:text-lg leading-relaxed">
                I am actively open to discussing full-time roles, AI consulting, or high-impact engineering projects. Feel free to copy connection variables or send a direct dispatch below.
              </p>

              <div className="grid lg:grid-cols-2 gap-8 pl-2 md:pl-6">
                {/* .env Code Block with Copy Actions */}
                <div className="bg-[#252526] border border-[#333333] p-5 rounded-lg shadow-lg font-mono text-xs relative">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#333333] text-gray-400">
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <TerminalIcon size={14} className="text-[#4ec9b0]" /> .env.production
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          `DEVELOPER_NAME="Amine Labibi"\nROLE="AI Full-Stack Developer"\nLOCATION="Casablanca, Morocco"\nEMAIL="amineib135@gmail.com"\nPHONE="0777411375"\nGITHUB="https://github.com/Amine4144244"\nPORTFOLIO="https://portfolio-silk-one-40.vercel.app"\nLINKEDIN="https://www.linkedin.com/in/amine-labibi-a4b820242/"`,
                          "all-env"
                        )
                      }
                      className="flex items-center gap-1 text-[11px] hover:text-white transition-colors text-gray-400 bg-[#1e1e1e] px-2 py-1 rounded border border-[#3c3c3c]"
                    >
                      {copiedKey === "all-env" ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                      <span>{copiedKey === "all-env" ? "Copied" : "Copy .env"}</span>
                    </button>
                  </div>

                  <div className="space-y-2 text-gray-300">
                    <div>
                      <span className="text-[#569cd6]">DEVELOPER_NAME</span>=<span className="text-[#ce9178]">"Amine Labibi"</span>
                    </div>
                    <div>
                      <span className="text-[#569cd6]">ROLE</span>=<span className="text-[#ce9178]">"AI Full-Stack Developer"</span>
                    </div>
                    <div>
                      <span className="text-[#569cd6]">LOCATION</span>=<span className="text-[#ce9178]">"Casablanca, Morocco"</span>
                    </div>
                    <div className="flex items-center justify-between group">
                      <div>
                        <span className="text-[#569cd6]">EMAIL</span>=<span className="text-[#ce9178]">"amineib135@gmail.com"</span>
                      </div>
                      <button
                        onClick={() => handleCopy("amineib135@gmail.com", "email")}
                        className="text-gray-500 hover:text-white transition-colors"
                        title="Copy email"
                      >
                        {copiedKey === "email" ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between group">
                      <div>
                        <span className="text-[#569cd6]">PHONE</span>=<span className="text-[#ce9178]">"0777411375"</span>
                      </div>
                      <button
                        onClick={() => handleCopy("0777411375", "phone")}
                        className="text-gray-500 hover:text-white transition-colors"
                        title="Copy phone"
                      >
                        {copiedKey === "phone" ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                    <div>
                      <span className="text-[#569cd6]">GITHUB</span>=<span className="text-[#ce9178]">"https://github.com/Amine4144244"</span>
                    </div>
                    <div>
                      <span className="text-[#569cd6]">PORTFOLIO</span>=<span className="text-[#ce9178]">"https://portfolio-silk-one-40.vercel.app"</span>
                    </div>
                    <div>
                      <span className="text-[#569cd6]">DEGREE</span>=<span className="text-[#ce9178]">"Economics & Management"</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#333333] flex flex-wrap gap-3">
                    <a
                      href="mailto:amineib135@gmail.com"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#007acc] hover:bg-[#005f9e] text-white rounded text-xs transition-colors"
                    >
                      <Mail size={13} /> Launch Email Client
                    </a>
                    <a
                      href="https://github.com/Amine4144244"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2b2b2b] text-gray-200 border border-[#3c3c3c] rounded text-xs transition-colors"
                    >
                      <Github size={13} /> GitHub Profile
                    </a>
                  </div>
                </div>

                {/* Direct Dispatch Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const email = "amineib135@gmail.com"
                    const subject = `Portfolio Inquiry from ${formData.get("name")}`
                    const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nRole/Company: ${formData.get(
                      "company"
                    )}\n\nMessage:\n${formData.get("message")}`
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                  }}
                  className="bg-[#252526] border border-[#333333] p-5 rounded-lg shadow-lg font-mono space-y-3"
                >
                  <div className="text-xs text-gray-400 font-bold mb-2">execute_dispatch()</div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">sender_name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-xs rounded"
                      placeholder="e.g. Hiring Manager / Collaborator"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">sender_email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-xs rounded"
                      placeholder="e.g. name@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">company_or_subject</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-xs rounded"
                      placeholder="e.g. Full-Stack / AI Opportunity"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">message_body</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] focus:border-[#007acc] focus:outline-none text-white px-3 py-2 text-xs rounded resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0e639c] hover:bg-[#1177bb] transition-colors text-white font-sans font-medium py-2 rounded text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <Send size={13} />
                    <span>Send Message (mailto)</span>
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* ================= BOTTOM VS CODE TERMINAL DRAWER ================= */}
          {isTerminalOpen && (
            <div className="bg-[#1e1e1e] border-t border-[#333333] shrink-0 font-mono text-xs z-30 transition-all duration-200">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-3 h-7 bg-[#252526] border-b border-[#2d2d2d] text-gray-400 select-none">
                <div className="flex items-center gap-4 text-[11px]">
                  <button
                    onClick={() => setActiveTerminalTab("terminal")}
                    className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                      activeTerminalTab === "terminal" ? "text-white font-bold border-b border-[#007acc]" : "hover:text-gray-200"
                    }`}
                  >
                    <TerminalIcon size={12} />
                    <span>TERMINAL</span>
                  </button>
                  <button
                    onClick={() => setActiveTerminalTab("output")}
                    className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                      activeTerminalTab === "output" ? "text-white font-bold border-b border-[#007acc]" : "hover:text-gray-200"
                    }`}
                  >
                    <span>OUTPUT</span>
                  </button>
                  <button
                    onClick={() => setActiveTerminalTab("problems")}
                    className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                      activeTerminalTab === "problems" ? "text-white font-bold border-b border-[#007acc]" : "hover:text-gray-200"
                    }`}
                  >
                    <span>PROBLEMS (0)</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-[10px] text-gray-500 hidden sm:inline">bash (node v22, python 3.11)</span>
                  <button
                    onClick={() => setIsTerminalOpen(false)}
                    className="hover:text-white p-0.5 rounded cursor-pointer"
                    title="Close Terminal Panel"
                  >
                    <Minimize2 size={13} />
                  </button>
                </div>
              </div>

              {/* Terminal Logs & Content */}
              <div className="h-28 overflow-y-auto p-3 text-[11px] leading-relaxed select-text space-y-1">
                {activeTerminalTab === "terminal" && (
                  <div>
                    <p className="text-gray-400">
                      <span className="text-[#4ec9b0]">amine@casablanca</span>:<span className="text-[#519aba]">~/enterprise-rag</span>$ python -m docling.extract --doc "manual_v4.pdf" --tables
                    </p>
                    <p className="text-[#b5cea8]">
                      [INFO] Docling layout analysis complete: 34 pages parsed. 12 dense tables extracted with structural markdown fidelity.
                    </p>
                    <p className="text-gray-400">
                      <span className="text-[#4ec9b0]">amine@casablanca</span>:<span className="text-[#519aba]">~/enterprise-rag</span>$ qdrant-hybrid --query "turbine cooling specs" --top-k 5
                    </p>
                    <p className="text-[#9cdcfe]">
                      [HYBRID SEARCH] Dense vector (cosine) + BM25 sparse lexical fused via Reciprocal Rank Fusion (RRF). Accuracy: 99.1%.
                    </p>
                    <p className="text-gray-500 animate-pulse">
                      <span className="text-[#4ec9b0]">amine@casablanca</span>:<span className="text-[#519aba]">~/portfolio</span>$ █
                    </p>
                  </div>
                )}

                {activeTerminalTab === "output" && (
                  <div>
                    <p className="text-gray-400">[NVIDIA NIM Inference]: Model meta/llama-3.1-70b-instruct loaded</p>
                    <p className="text-[#b5cea8]">[FastAPI Server]: Uvicorn running on http://127.0.0.1:8000 (Ready for RAG inference)</p>
                    <p className="text-gray-400">[ChromaDB + PostgreSQL]: Financial fact reconciliation layer active (0 arithmetic errors)</p>
                    <p className="text-gray-400">[LangGraph]: Human-in-the-Loop review routing node initialized (threshold: 0.85)</p>
                  </div>
                )}

                {activeTerminalTab === "problems" && (
                  <div className="text-gray-400 flex items-center gap-2 py-2">
                    <Check size={14} className="text-green-400" />
                    <span>No problems have been detected in the workspace. All type contracts verified.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Editor Status Bar */}
      <div className="h-[22px] bg-[#007acc] text-white text-xs flex items-center justify-between px-3 font-sans select-none shrink-0 z-50">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors"
            title="Toggle Terminal Panel"
          >
            <GitBranch size={12} />
            <span>Portfolio*</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors hidden sm:flex">
            <span className="flex items-center gap-1">
              <XCircle size={13} /> 0
            </span>
            <span className="flex items-center gap-1">
              <AlertTriangle size={13} /> 0
            </span>
          </div>
          <div className="hidden md:block text-[11px] opacity-90">Amine Labibi | Casablanca, Morocco</div>
        </div>
        <div className="flex items-center gap-3 md:gap-4 font-mono text-[11px]">
          <div className="hidden sm:block cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            UTF-8
          </div>
          <div className="cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            TypeScript React
          </div>
          <div className="cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            VS Code Dark+
          </div>
          <div className="hidden sm:block font-semibold">{time || "12:00"}</div>
        </div>
      </div>
    </div>
  )
}
