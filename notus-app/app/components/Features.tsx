"use client";
import { motion } from "framer-motion";
import { Globe, SquarePen, Wrench, Fingerprint, RefreshCw, Terminal, Sparkles, Layout, Paperclip, SendHorizontal, Monitor, Code2, Phone } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

/* ========== BRAND SVG ICONS ========== */
const NotusLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a2 2 0 012 2v6h4a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4H5a2 2 0 01-2-2V5a2 2 0 012-2h8zm0 2H5v8h6V7a2 2 0 012-2zm6 8h-4v6h6v-6h-2z"/></svg>
);

/* Notion - actual "N" logo with bracket (bold filled) */
const NotionIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
    <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L75.343 3.57l-.257-.18C71.657.097 69.837-.38 63.037.2l-1.687.027zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-1.167-1.167-.583-2.527 6.03-3.11l51.89-3.693c5.44-.39 8.163 1.36 10.303 3.107l9.91 7.19c.583.39 1.943 2.527.39 2.527l-53.6 3.107-.39.003-7.54.885z" fill="#000"/>
    <path d="M25.92 19.523v70.15c0 4.077 2.14 5.443 6.99 5.247l56.113-3.303c4.857-.197 5.827-3.11 5.827-6.607V21.27c0-3.5-1.357-5.25-4.467-4.86l-58.823 3.5c-3.5.193-5.64 1.113-5.64 4.47v-4.857z" fill="#fff"/>
    <path d="M53.22 37.933l-22.74 1.36c-.97.06-1.167.583-1.167 1.36v1.75c0 .78.583 1.363 1.36 1.363h8.557v25.67l-8.557 1.363c-.78.39-1.36.97-1.36 1.75v1.75c0 .78.58 1.167 1.36 1.167l24.887-1.553c.78 0 1.36-.387 1.36-1.167v-1.75c0-.78-.58-1.36-1.36-1.75l-8.557-.58V41.43h.58l11.083 33.247c.39.78.97 1.167 1.75 1.167h2.333c.78 0 1.36-.387 1.75-1.167L74.5 43.183h.39v29.513l-8.36 1.167c-.973.39-1.553.97-1.553 1.75v1.75c0 .78.58 1.167 1.36 1.167l23.333-1.36c.78 0 1.167-.387 1.167-1.167v-1.75c0-.78-.387-1.36-1.167-1.75l-7.583-.78V39.1c0-.78-.39-1.36-1.167-1.36l-5.637.39c-.78 0-1.36.39-1.75 1.167l-10.5 29.12h-.39l-10.11-30.093c-.39-.78-.97-1.167-1.75-1.167l-.003.777z" fill="#000"/>
  </svg>
);

/* Slack - colored hash logo */
const SlackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M14.5 2a2.5 2.5 0 000 5H17V4.5A2.5 2.5 0 0014.5 2z" fill="#E01E5A"/>
    <path d="M2 14.5a2.5 2.5 0 005 0V12H4.5A2.5 2.5 0 002 14.5z" fill="#36C5F0"/>
    <path d="M9.5 22a2.5 2.5 0 000-5H7v2.5A2.5 2.5 0 009.5 22z" fill="#2EB67D"/>
    <path d="M22 9.5a2.5 2.5 0 00-5 0V12h2.5A2.5 2.5 0 0022 9.5z" fill="#ECB22E"/>
    <rect x="7" y="7" width="5" height="5" fill="#36C5F0"/>
    <rect x="12" y="7" width="5" height="5" fill="#2EB67D"/>
    <rect x="7" y="12" width="5" height="5" fill="#E01E5A"/>
    <rect x="12" y="12" width="5" height="5" fill="#ECB22E"/>
  </svg>
);

/* ChatGPT - actual OpenAI swirl/flower logo */
const ChatGPTIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#404040] dark:text-neutral-400">
    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.78.178 6.029 6.029 0 005.47 1.567 5.985 5.985 0 001.394 5.7a6.046 6.046 0 00.742 7.048 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.516 2.9A6.056 6.056 0 0013.647 23.82a6.03 6.03 0 006.31-1.39 5.98 5.98 0 004.076-4.133 6.043 6.043 0 00-.742-7.048l-.009-1.428zM13.647 21.63a4.508 4.508 0 01-2.895-1.053l.143-.082 4.806-2.775a.779.779 0 00.394-.678v-6.78l2.033 1.174a.073.073 0 01.039.052v5.614a4.526 4.526 0 01-4.52 4.528zm-9.712-4.145a4.494 4.494 0 01-.538-3.026l.144.085 4.806 2.774a.788.788 0 00.788 0l5.868-3.387v2.348a.07.07 0 01-.029.057l-4.86 2.806a4.527 4.527 0 01-6.179-1.657zm-1.264-10.49a4.503 4.503 0 012.356-1.979l-.003.165v5.55a.78.78 0 00.394.677l5.868 3.386-2.033 1.175a.073.073 0 01-.068.005l-4.86-2.807A4.529 4.529 0 012.671 6.994zm16.672 3.878l-5.868-3.387 2.034-1.175a.072.072 0 01.068-.005l4.86 2.807a4.524 4.524 0 01-.7 8.15v-5.712a.78.78 0 00-.394-.678zm2.022-3.04l-.144-.085-4.806-2.775a.786.786 0 00-.787 0l-5.869 3.387V6.01a.072.072 0 01.029-.057l4.86-2.805a4.526 4.526 0 016.717 4.684zm-12.72 4.177l-2.034-1.175a.073.073 0 01-.039-.052V5.168a4.525 4.525 0 017.414-3.472l-.143.082-4.806 2.775a.78.78 0 00-.394.678l.002 6.778zm1.105-2.383l2.614-1.51 2.614 1.51v3.017l-2.614 1.51-2.614-1.51V9.626z"/>
  </svg>
);

/* Linear - actual Linear logo (tilted mark) */
const LinearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="#5E6AD2">
    <path d="M1.22541 61.5228c-.97658-1.5224-.97658-3.5228 0-5.048L45.5 0l44.27 56.475c.977 1.525.977 3.525 0 5.048L45.5 100 1.22541 61.5228z" opacity="0.9"/>
  </svg>
);

export default function Features() {
  return (
    <section className="py-20 dark:bg-neutral-950" id="features">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Features" title="Built for Agentic Intelligence" subtitle="Build, test and deploy AI agents with a powerful visual interface designed for technical teams" />
        {/* Bento grid: 2 cols top */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* LLM Model Selector */}
          <FadeIn>
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white dark:bg-neutral-900 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Globe size={18} className="text-neutral-700 dark:text-neutral-300" />
                <h3 className="text-base font-semibold dark:text-white">LLM Model Selector</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</p>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-5">
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-sm border border-neutral-100 dark:border-neutral-700">
                  <div className="flex gap-1.5 mb-4">
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 pb-2.5 border-b border-neutral-100 dark:border-neutral-700 mb-3"
                  >
                    <span className="flex items-center gap-1.5"><Layout size={12} /> All Models</span>
                    <span className="font-semibold text-neutral-700 dark:text-neutral-200">69,420</span>
                  </motion.div>
                  {[
                    { n: "Claude 4 Opus", Icon: Sparkles, ic: "text-orange-500", s: "Unavailable", c: "bg-red-50 text-red-600 border border-red-200" },
                    { n: "ChatGPT", Icon: Globe, ic: "text-green-600", s: "Connected", c: "bg-green-50 text-green-600 border border-green-200" },
                    { n: "Llama 3.2", Icon: Globe, ic: "text-blue-500", s: "Connected", c: "bg-green-50 text-green-600 border border-green-200" },
                    { n: "Gemma", Icon: Globe, ic: "text-purple-500", s: "Waiting", c: "bg-amber-50 text-amber-600 border border-amber-200" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.n}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
                      className="flex justify-between items-center py-2.5 text-[13px] border-b border-neutral-50 dark:border-neutral-800 last:border-0"
                    >
                      <span className="font-medium text-neutral-700 dark:text-neutral-200 flex items-center gap-1.5"><m.Icon size={14} className={m.ic} />{m.n}</span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.12 }}
                        className={`text-[11px] px-2 py-0.5 rounded ${m.c}`}
                      >
                        {m.s}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          {/* Text to Workflow */}
          <FadeIn delay={0.1}>
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white dark:bg-neutral-900 h-full">
              <div className="flex items-center gap-2 mb-2">
                <SquarePen size={18} className="text-neutral-700 dark:text-neutral-300" />
                <h3 className="text-base font-semibold dark:text-white">Text to workflow builder</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.</p>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-5 flex flex-col gap-3">
                {/* Bot greeting */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-7 h-7 rounded-md bg-neutral-200 dark:bg-neutral-700 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg>
                  </div>
                  <div className="bg-white dark:bg-neutral-900 text-neutral-400 text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm border border-neutral-100 dark:border-neutral-700 max-w-[85%]">
                    I&apos;m good, thank you! How can I help you today?
                  </div>
                </motion.div>
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start gap-2 self-end flex-row-reverse"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg>
                  </div>
                  <div className="bg-blue-500 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%]">
                    I want to create a workflow that will send an email to all my clients
                  </div>
                </motion.div>
                {/* Bot response */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-7 h-7 rounded-md bg-neutral-200 dark:bg-neutral-700 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg>
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 px-4 py-2.5 rounded-2xl rounded-tl-sm border border-neutral-100 dark:border-neutral-700">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                    >
                      Nah, do it yourself.
                    </motion.span>
                  </div>
                </motion.div>
                {/* Input bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 px-4 py-2.5 mt-2"
                >
                  <span className="text-sm text-neutral-400 flex-1 flex items-center gap-1">
                    Ask Notus AI
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5"
                    />
                  </span>
                  <div className="flex gap-2 text-neutral-400">
                    <Paperclip size={16} />
                    <SendHorizontal size={16} />
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ===== Native Tools Integration - EXACT MATCH ===== */}
        <FadeIn className="mt-4">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 mb-2">
              <Wrench size={18} className="text-neutral-700 dark:text-neutral-300" />
              <h3 className="text-base font-semibold dark:text-white">Native Tools Integration</h3>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</p>
            
            {/* Node diagram - positions matched to original screenshot */}
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl relative overflow-hidden [--dot-color:#d4d4d4] dark:[--dot-color:#404040]" style={{backgroundImage:'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)', backgroundSize:'20px 20px', height:'380px'}}>

              {/* === LEFT: Agent labels === */}
              <div className="absolute left-[3%] top-[17%] flex items-center gap-2 z-10">
                <Monitor size={15} className="text-neutral-400" />
                <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">Meeting Summarizer</span>
              </div>
              <div className="absolute left-[3%] top-[47%] flex items-center gap-2 z-10">
                <Code2 size={15} className="text-neutral-400" />
                <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">Code Reviewer</span>
              </div>
              <div className="absolute left-[3%] top-[77%] flex items-center gap-2 z-10">
                <Phone size={15} className="text-neutral-400" />
                <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">Customer Support</span>
              </div>

              {/* === CENTER: Notus logo === */}
              <div className="absolute z-10" style={{ left: '42%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-[60px] h-[60px] bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shadow-xl">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-900 dark:text-neutral-100"><path d="M13 3a2 2 0 012 2v6h4a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4H5a2 2 0 01-2-2V5a2 2 0 012-2h8zm0 2H5v8h6V7a2 2 0 012-2zm6 8h-4v6h6v-6h-2z"/></svg>
                </div>
              </div>

              {/* === "Connected" badge === */}
              <div className="absolute z-10" style={{ left: '56%', top: '47%' }}>
                <span className="text-[11px] px-2.5 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 rounded font-medium">Connected</span>
              </div>

              {/* === RIGHT SIDE: Brand icons === */}
              {/* Notion - upper on vertical trunk */}
              <div className="absolute z-10" style={{ left: '68%', top: '12%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <NotionIcon />
                </div>
              </div>
              {/* Green bolt - top right */}
              <div className="absolute z-10" style={{ left: '82%', top: '12%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#22C55E"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              {/* Slack - middle right on vertical trunk */}
              <div className="absolute z-10" style={{ left: '75%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <SlackIcon />
                </div>
              </div>
              {/* ChatGPT - far right */}
              <div className="absolute z-10" style={{ left: '90%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <ChatGPTIcon />
                </div>
              </div>
              {/* Linear - bottom on vertical trunk */}
              <div className="absolute z-10" style={{ left: '68%', top: '88%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <LinearIcon />
                </div>
              </div>

              {/* === SVG CONNECTION LINES + ANIMATED BEAMS === */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none text-[#E5E5E5] dark:text-neutral-600" style={{zIndex:2}}>
                <defs>
                  <filter id="glow-c" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glow-b" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glow-g" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Left agent lines to center Notus box */}
                {/* Meeting Summarizer → Notus (L-shaped: right then down) */}
                <line x1="22%" y1="20%" x2="42%" y2="20%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="42%" y1="20%" x2="42%" y2="42%" stroke="currentColor" strokeWidth="1.5" />
                {/* Code Reviewer → Notus (straight horizontal) */}
                <line x1="20%" y1="50%" x2="38%" y2="50%" stroke="currentColor" strokeWidth="1.5" />
                {/* Customer Support → Notus (L-shaped: right then up) */}
                <line x1="22%" y1="80%" x2="42%" y2="80%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="42%" y1="80%" x2="42%" y2="58%" stroke="currentColor" strokeWidth="1.5" />

                {/* Center → right horizontal */}
                <line x1="46%" y1="50%" x2="68%" y2="50%" stroke="currentColor" strokeWidth="1.5" />
                {/* Vertical trunk on right */}
                <line x1="68%" y1="12%" x2="68%" y2="88%" stroke="currentColor" strokeWidth="1.5" />
                {/* Horizontal branch to ChatGPT */}
                <line x1="68%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="1.5" />
                {/* Vertical to bolt */}
                <line x1="82%" y1="50%" x2="82%" y2="12%" stroke="currentColor" strokeWidth="1.5" />

                {/* ANIMATED BEAM DOTS */}
                {/* Coral: top agent → center */}
                <circle r="5" fill="#F26C4F" filter="url(#glow-c)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="0s" path="M 0,0 L 200,0 L 200,84" />
                  <set attributeName="cx" to="22%" />
                  <set attributeName="cy" to="20%" />
                </circle>
                {/* Blue: middle agent → center */}
                <circle r="5" fill="#60A5FA" filter="url(#glow-b)">
                  <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.7s" path="M 0,0 L 180,0" />
                  <set attributeName="cx" to="20%" />
                  <set attributeName="cy" to="50%" />
                </circle>
                {/* Gold: bottom agent → center */}
                <circle r="5" fill="#FBBF24" filter="url(#glow-g)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.3s" path="M 0,0 L 200,0 L 200,-84" />
                  <set attributeName="cx" to="22%" />
                  <set attributeName="cy" to="80%" />
                </circle>
                {/* Blue: center → right */}
                <circle r="4" fill="#60A5FA" opacity="0.85" filter="url(#glow-b)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.4s" path="M 0,0 L 220,0" />
                  <set attributeName="cx" to="46%" />
                  <set attributeName="cy" to="50%" />
                </circle>
                {/* Gray: vertical up on trunk */}
                <circle r="3.5" fill="#A1A1AA" opacity="0.7">
                  <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.9s" path="M 0,0 L 0,-144" />
                  <set attributeName="cx" to="68%" />
                  <set attributeName="cy" to="50%" />
                </circle>
                {/* Gray: vertical down on trunk */}
                <circle r="3.5" fill="#A1A1AA" opacity="0.7">
                  <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.6s" path="M 0,0 L 0,144" />
                  <set attributeName="cx" to="68%" />
                  <set attributeName="cy" to="50%" />
                </circle>
                {/* Blue: to ChatGPT */}
                <circle r="3.5" fill="#60A5FA" opacity="0.75">
                  <animateMotion dur="1.5s" repeatCount="indefinite" begin="1.1s" path="M 0,0 L 220,0" />
                  <set attributeName="cx" to="68%" />
                  <set attributeName="cy" to="50%" />
                </circle>
                {/* Green: up to bolt */}
                <circle r="3.5" fill="#22C55E" opacity="0.75">
                  <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.5s" path="M 0,0 L 0,-144" />
                  <set attributeName="cx" to="82%" />
                  <set attributeName="cy" to="50%" />
                </circle>
              </svg>
            </div>
          </div>
        </FadeIn>

        {/* 3 small feature cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            { Icon: Fingerprint, t: "One Click Auth", d: "A drag-and-drop interface to create, connect, and configure agents into logical workflows" },
            { Icon: RefreshCw, t: "Realtime Sync", d: "Agents operate independently and coordinate tasks to complete complex all goals" },
            { Icon: Terminal, t: "Custom Connector SDK", d: "Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions" },
          ].map((f, idx) => (
            <FadeIn key={f.t} delay={idx * 0.1}>
              <motion.div whileHover={{ y: -2 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-7 bg-white dark:bg-neutral-900 cursor-default transition-shadow hover:shadow-sm">
                <f.Icon size={22} className="text-coral mb-3" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold mb-1.5 dark:text-white">{f.t}</h3>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.d}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
