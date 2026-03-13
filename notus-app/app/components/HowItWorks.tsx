"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SquarePen, Brain, Video, Globe, Sparkles } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const tabs = [
  { icon: SquarePen, title: "Design your Workflow", desc: "A drag-and-drop interface to create, connect, and configure agents into logical workflows" },
  { icon: Brain, title: "Connect your Tools", desc: "Agents operate independently and coordinate tasks to complete all complex goals together" },
  { icon: Video, title: "Deploy & Scale", desc: "Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions" },
];

/* ========== TAB 0: Design your Workflow ========== */
function PreviewDesign() {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)',
        backgroundSize: '16px 16px',
        animation: 'dotDrift 20s linear infinite',
      }}
    >
      {/* Slack card - centered top */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-0"
      >
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4 shadow-sm w-[220px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14.5 2a2.5 2.5 0 000 5H17V4.5A2.5 2.5 0 0014.5 2z" fill="#E01E5A"/><path d="M2 14.5a2.5 2.5 0 005 0V12H4.5A2.5 2.5 0 002 14.5z" fill="#36C5F0"/><path d="M9.5 22a2.5 2.5 0 000-5H7v2.5A2.5 2.5 0 009.5 22z" fill="#2EB67D"/><path d="M22 9.5a2.5 2.5 0 00-5 0V12h2.5A2.5 2.5 0 0022 9.5z" fill="#ECB22E"/><rect x="7" y="7" width="5" height="5" fill="#36C5F0"/><rect x="12" y="7" width="5" height="5" fill="#2EB67D"/><rect x="7" y="12" width="5" height="5" fill="#E01E5A"/><rect x="12" y="12" width="5" height="5" fill="#ECB22E"/></svg>
              <span className="text-sm font-semibold dark:text-white">Slack</span>
            </div>
            <span className="text-[11px] text-neutral-400">#standups</span>
          </div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="inline-block text-[11px] px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-md font-medium"
          >
            Connected
          </motion.span>
        </div>
      </motion.div>

      {/* Connection lines SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <svg width="280" height="60" viewBox="0 0 280 60" fill="none" className="overflow-visible">
          {/* Center vertical line from Slack */}
          <line x1="140" y1="0" x2="140" y2="30" stroke="#d4d4d4" strokeWidth="1" />
          {/* Horizontal line */}
          <line x1="40" y1="30" x2="240" y2="30" stroke="#d4d4d4" strokeWidth="1" />
          {/* Three vertical lines down to cards */}
          <line x1="40" y1="30" x2="40" y2="60" stroke="#d4d4d4" strokeWidth="1" />
          <line x1="140" y1="30" x2="140" y2="60" stroke="#d4d4d4" strokeWidth="1" />
          <line x1="240" y1="30" x2="240" y2="60" stroke="#d4d4d4" strokeWidth="1" />
          {/* Junction dots */}
          <motion.circle cx="140" cy="30" r="3" fill="#d4d4d4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
          <motion.circle cx="40" cy="30" r="3" fill="#d4d4d4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
          <motion.circle cx="240" cy="30" r="3" fill="#d4d4d4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
          {/* Animated pulse dots traveling down */}
          <circle r="3" fill="#60a5fa">
            <animateMotion dur="2s" repeatCount="indefinite" path="M140,0 L140,30 L40,30 L40,60" />
          </circle>
          <circle r="3" fill="#f97316">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M140,0 L140,30 L140,60" />
          </circle>
          <circle r="3" fill="#a3a3a3">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M140,0 L140,30 L240,30 L240,60" />
          </circle>
        </svg>
      </motion.div>

      {/* Model cards row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { brand: "Anthropic", model: "Claude 4", label: "Summarizer", labelColor: "bg-orange-50 text-orange-500 border-orange-200", icon: "✦" },
          { brand: "Meta", model: "Llama 2", label: "Text Generator", labelColor: "bg-blue-50 text-blue-500 border-blue-200", icon: "∞" },
          { brand: "OpenAI", model: "", label: "Code Generator", labelColor: "bg-neutral-100 text-neutral-500 border-neutral-200", icon: "◎" },
        ].map((m, i) => (
          <motion.div
            key={m.brand}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-neutral-400">{m.icon}</span>
                <span className="text-[12px] font-semibold text-neutral-700 dark:text-neutral-200">{m.brand}</span>
              </div>
              {m.model && <span className="text-[11px] text-neutral-400">{m.model}</span>}
            </div>
            {!m.model && <div className="h-3" />}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.15 }}
              className={`inline-block text-[10px] px-2 py-0.5 rounded-md border font-medium mt-1 ${m.labelColor}`}
            >
              {m.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ========== TAB 1: Connect your Tools ========== */
function PreviewConnect() {
  return (
    <div className="w-full relative">
      {/* Two-panel layout with SVG connections */}
      <div className="flex gap-3 items-stretch">
        {/* Left: Tasks panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-3">
              {/* Checkbox icon */}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#a3a3a3" strokeWidth="1.5">
                <rect x="1" y="1" width="14" height="14" rx="3" />
              </svg>
              <span className="text-[12px] font-semibold text-neutral-700 dark:text-neutral-200">Tasks</span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] text-neutral-500 leading-relaxed mb-3"
            >
              Write the first and second rule of it using Claude and ChatGPT.
            </motion.p>
            {/* Typing cursor animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1"
            >
              <div className="w-16 h-1.5 bg-neutral-200 dark:bg-neutral-600 rounded-full" />
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="w-0.5 h-3.5 bg-blue-400"
              />
            </motion.div>

            {/* Connection line going right */}
            <div className="mt-4 flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="w-3 h-3 rounded-full bg-blue-400 shadow-sm shadow-blue-200 shrink-0"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
                className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 relative"
              >
                {/* Animated pulse traveling along line */}
                <motion.div
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-md shadow-blue-300"
                  style={{ filter: "blur(0.5px)" }}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="w-3 h-3 rounded-full bg-blue-400 shadow-sm shadow-blue-200 shrink-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Integrations panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-[180px]"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm h-full">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#a3a3a3" strokeWidth="1.5"><rect x="1" y="1" width="14" height="14" rx="3" /><path d="M5 8h6M8 5v6" /></svg>
                <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-200">Integrations</span>
              </div>
              <span className="text-[10px] text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-1.5 py-0.5 rounded">200</span>
            </div>

            {/* ChatGPT */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center justify-between py-2.5 border-b border-neutral-100 dark:border-neutral-700"
            >
              <span className="flex items-center gap-2 text-[11px] font-medium text-neutral-700 dark:text-neutral-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#10a37f" strokeWidth="2"/>
                  <path d="M12 7v5l3 3" stroke="#10a37f" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                ChatGPT
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[9px] px-1.5 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-md font-medium"
              >
                Connected
              </motion.span>
            </motion.div>

            {/* Claude 4 Opus */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center justify-between py-2.5 border-b border-neutral-100 dark:border-neutral-700"
            >
              <span className="flex items-center gap-2 text-[11px] font-medium text-neutral-700 dark:text-neutral-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L3 8v8l9 5 9-5V8l-9-5z" stroke="#cc785c" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="#cc785c"/>
                </svg>
                Claude 4 Opus
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
                className="text-[9px] px-1.5 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-md font-medium"
              >
                Connected
              </motion.span>
            </motion.div>

            {/* Placeholder loading bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-3 space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-neutral-100 dark:bg-neutral-700" />
                <div className="h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full flex-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="h-full bg-neutral-200 dark:bg-neutral-600 rounded-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-neutral-100 dark:bg-neutral-700" />
                <div className="h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full flex-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="h-full bg-neutral-200 dark:bg-neutral-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ========== TAB 2: Deploy & Scale — Conveyor belt with depth effect ========== */
const allDeploys = [
  { name: "deploy-prod-eu-128", time: "10m ago", branch: "main", color: "#a3a3a3" },
  { name: "deploy-dev-us-445", time: "45m ago", branch: "feature/auth", color: "#fbbf24" },
  { name: "deploy-prod-ap-223", time: "1h ago", branch: "main", color: "#f87171" },
  { name: "deploy-dev-eu-891", time: "2h ago", branch: "fix/cache", color: "#a3a3a3" },
  { name: "deploy-prod-us-337", time: "3h ago", branch: "main", color: "#4ade80" },
  { name: "deploy-dev-ap-556", time: "4h ago", branch: "feat/api", color: "#fbbf24" },
  { name: "deploy-dev-eu-672", time: "5h ago", branch: "feat/search", color: "#a3a3a3" },
  { name: "deploy-prod-ap-445", time: "6h ago", branch: "main", color: "#f87171" },
];

function PreviewDeploy() {
  const [, forceRender] = useState(0);
  const offsetRef = useRef(0);
  const animRef = useRef<number>(0);
  const count = allDeploys.length;
  const ROW_H = 62; // height of each row + gap
  const VISIBLE = 5; // number of visible rows

  useEffect(() => {
    const animate = () => {
      offsetRef.current += 0.3; // smooth continuous speed (pixels per frame)
      if (offsetRef.current >= ROW_H * count) {
        offsetRef.current -= ROW_H * count;
      }
      forceRender((n) => n + 1);
      animRef.current = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      animRef.current = requestAnimationFrame(animate);
    }, 600);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animRef.current);
    };
  }, [count]);

  const containerH = ROW_H * VISIBLE;
  const centerY = containerH / 2;

  return (
    <div className="w-full relative overflow-hidden" style={{ height: containerH }}>
      {/* Fade overlays */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-neutral-100/95 dark:from-neutral-800/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-100/95 dark:from-neutral-800/95 to-transparent z-10 pointer-events-none" />

      {allDeploys.map((d, i) => {
        // Compute vertical position for this entry
        const rawY = (i * ROW_H - offsetRef.current) % (ROW_H * count);
        const y = rawY < -ROW_H ? rawY + ROW_H * count : rawY;

        // Only render if visible
        if (y < -ROW_H || y > containerH + ROW_H) return null;

        // Distance from center (0 = center, 1 = one row away, etc.)
        const distFromCenter = Math.abs(y + ROW_H / 2 - centerY) / ROW_H;

        // Smooth scale and opacity based on distance from center
        const scale = Math.max(0.75, 1 - distFromCenter * 0.08);
        const opacity = Math.max(0.15, 1 - distFromCenter * 0.3);

        // Smooth centerness: 1 at center, fading to 0 over ~1.2 rows
        const centerness = Math.max(0, 1 - distFromCenter / 1.2);
        // Smooth easing for more natural fade
        const highlightOpacity = centerness * centerness;

        // Interpolate padding based on centerness
        const py = 12 + highlightOpacity * 6; // 12px → 18px

        return (
          <div
            key={d.name}
            className="absolute left-0 right-0"
            style={{
              transform: `translateY(${y}px) scale(${scale})`,
              opacity,
              willChange: "transform, opacity",
            }}
          >
            <div
              className="flex items-center justify-between px-4 rounded-xl border"
              style={{
                paddingTop: py,
                paddingBottom: py,
                background: highlightOpacity > 0.01
                  ? `linear-gradient(to right, rgba(248,113,113,${highlightOpacity * 0.35}), rgba(254,178,178,${highlightOpacity * 0.5}), rgba(254,202,202,${highlightOpacity * 0.35}))`
                  : "rgba(255,255,255,0.9)",
                borderColor: highlightOpacity > 0.01
                  ? `rgba(248,113,113,${highlightOpacity * 0.4})`
                  : "rgb(245,245,245)",
                boxShadow: highlightOpacity > 0.1
                  ? `0 4px ${14 * highlightOpacity}px rgba(248,113,113,${highlightOpacity * 0.25})`
                  : "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: d.color }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 8l-4 4 4 4" />
                    <path d="M17 8l4 4-4 4" />
                  </svg>
                </div>
                <span
                  className="font-medium whitespace-nowrap"
                  style={{
                    fontSize: 12 + highlightOpacity * 2,
                    fontWeight: highlightOpacity > 0.5 ? 600 : 500,
                    color: `rgb(${Math.round(23 + (100 - 23) * (1 - highlightOpacity))}, ${Math.round(23 + (100 - 23) * (1 - highlightOpacity))}, ${Math.round(23 + (100 - 23) * (1 - highlightOpacity))})`,
                  }}
                >
                  {d.name}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] text-neutral-400">{d.time}</span>
                <span className="text-[10px] text-neutral-300">·</span>
                <span className="text-[11px] text-neutral-400 font-mono">{d.branch}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const handleTabClick = (i: number) => {
    setActive(i);
    startTimer(); // reset timer on manual click
  };

  return (
    <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="How it works" title="Integrates easily" subtitle="We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-1">
            {tabs.map((t, i) => (
              <motion.div key={i} onClick={() => handleTabClick(i)} whileHover={{ x: 3 }}
                className={`p-5 rounded-xl cursor-pointer transition-all border-l-2 ${active === i ? "bg-neutral-100/70 dark:bg-neutral-800/70 border-coral" : "border-transparent hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40"}`}>
                <h3 className="text-[15px] font-semibold mb-1 flex items-center gap-2 dark:text-white">
                  <t.icon size={18} className={active === i ? "text-coral" : "text-neutral-500"} />
                  {t.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60 rounded-2xl p-8 min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-full">
                {active === 0 && <PreviewDesign />}
                {active === 1 && <PreviewConnect />}
                {active === 2 && <PreviewDeploy />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
