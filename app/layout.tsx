import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Amine Labibi | AI Full-Stack Developer - React, Node.js, Python & RAG",
  description:
    "Portfolio of Amine Labibi — AI Full-Stack Developer specializing in enterprise RAG pipelines (Docling, Qdrant, ChromaDB), LangGraph agents, FastAPI, Node.js, and React.",
  keywords: [
    "Amine Labibi",
    "AI Full-Stack Developer",
    "RAG",
    "Retrieval-Augmented Generation",
    "LangGraph",
    "Qdrant",
    "ChromaDB",
    "FastAPI",
    "React",
    "Node.js",
    "Python",
    "Enterprise RAG",
    "Docling"
  ],
  authors: [{ name: "Amine Labibi", url: "https://github.com/Amine4144244" }],
  openGraph: {
    title: "Amine Labibi | AI Full-Stack Developer",
    description: "Enterprise RAG pipelines, LangGraph autonomous agents, and production full-stack AI web applications.",
    type: "website",
    url: "https://portfolio-silk-one-40.vercel.app",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="font-sans antialiased bg-[#1e1e1e] text-[#cccccc] selection:bg-[#264f78] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
