"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

interface TestimonialData {
  brand: string;
  brandIcon: React.ReactNode;
  quote: string;
  name: string;
  title: string;
  image: string;
  stats: { value: string; label: string }[];
}

const testimonials: TestimonialData[] = [
  {
    brand: "Replicate",
    brandIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h6v6H4zM14 4h6v6h-6z"/><path d="M4 14h16v6H4z"/></svg>,
    quote: "\u201cOur agents have become an essential part of our infrastructure. They handle complex workflows with a reliability that exceeds our expectations every time.\u201d",
    name: "Rachel Green",
    title: "Technical Director, NextGen Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "5x", label: "Faster" }, { value: "10x", label: "Hours Saved" }, { value: "100%", label: "Reliability" }],
  },
  {
    brand: "Hippocratic AI",
    brandIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 19h20L12 2z"/><circle cx="12" cy="14" r="3"/></svg>,
    quote: "\u201cNotus transformed how our medical AI team builds and deploys agent pipelines. The visual workflow builder alone saved us months of development time.\u201d",
    name: "Dr. Sarah Chen",
    title: "VP of Engineering, Hippocratic AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "3x", label: "Faster Deploys" }, { value: "40%", label: "Cost Reduction" }, { value: "99.9%", label: "Uptime" }],
  },
  {
    brand: "ARCH",
    brandIcon: null,
    quote: "\u201cThe native tool integrations and real-time monitoring give us complete visibility into our agent ecosystem. It\u2019s become indispensable for our operations.\u201d",
    name: "Marcus Webb",
    title: "CTO, Arch Technologies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "8x", label: "Throughput" }, { value: "50+", label: "Integrations" }, { value: "24/7", label: "Monitoring" }],
  },
  {
    brand: "bill",
    brandIcon: null,
    quote: "\u201cWe migrated our entire agent infrastructure to Notus in under a week. The sandbox testing environment gave us confidence to ship faster than ever.\u201d",
    name: "Emily Torres",
    title: "Lead Engineer, Bill.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "7 days", label: "Migration" }, { value: "15x", label: "Faster Testing" }, { value: "0", label: "Downtime" }],
  },
  {
    brand: "Attention",
    brandIcon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    quote: "\u201cNotus\u2019s LLM model selector and the ability to switch between providers seamlessly has been a game-changer for our AI-powered attention analytics.\u201d",
    name: "James Liu",
    title: "Head of AI, Attention Inc.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "12x", label: "Faster" }, { value: "90%", label: "Accuracy" }, { value: "4", label: "LLM Providers" }],
  },
  {
    brand: "incident.io",
    brandIcon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>,
    quote: "\u201cThe workflow automation capabilities have reduced our incident response time dramatically. Notus agents handle the heavy lifting so our team can focus on resolution.\u201d",
    name: "Alex Morgan",
    title: "SRE Lead, incident.io",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "75%", label: "Faster Response" }, { value: "200+", label: "Workflows" }, { value: "99.99%", label: "SLA" }],
  },
  {
    brand: "granola",
    brandIcon: null,
    quote: "\u201cAs a growing startup, we needed something that could scale with us. Notus\u2019s agent orchestration platform has been the backbone of our AI strategy.\u201d",
    name: "Priya Sharma",
    title: "Co-founder, Granola",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "10x", label: "Scale" }, { value: "60%", label: "Time Saved" }, { value: "3 mo", label: "ROI" }],
  },
  {
    brand: "Modal",
    brandIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.132-8-12.356-8-4.236 0-4.236 8 0 8 5.224 0 7.26-8 12.356-8z"/></svg>,
    quote: "\u201cIntegrating Notus with our compute infrastructure was seamless. The custom connector SDK made it trivial to bridge our GPU clusters with intelligent agents.\u201d",
    name: "David Park",
    title: "Infrastructure Lead, Modal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "20x", label: "GPU Efficiency" }, { value: "5 min", label: "Setup Time" }, { value: "∞", label: "Scalability" }],
  },
];

const allBrands = [
  ["Hippocratic AI", "ARCH", "bill", "Attention"],
  ["incident.io", "granola", "Modal", "Replicate"],
];

function renderBrandLabel(n: string) {
  if (n === "ARCH") return <span className="tracking-[0.3em]">ARCH</span>;
  if (n === "bill") return <span className="font-extrabold text-xl tracking-tighter">bill</span>;
  const t = testimonials.find(t => t.brand === n);
  if (t?.brandIcon) return <span className="flex items-center gap-1.5">{t.brandIcon}{n}</span>;
  return n;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  return (
    <section className="py-12">
      <p className="text-xs text-center uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">Trusted by fast growing startups</p>
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.5fr_auto]" style={{ minHeight: '420px', height: '420px' }}>
              {/* Photo */}
              <div className="bg-neutral-100 dark:bg-neutral-800 h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
              {/* Quote */}
              <div className="p-10 flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.brand}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <span className="text-lg font-bold tracking-tight flex items-center gap-1 dark:text-white">
                        {active.brandIcon}
                        {active.brand}
                      </span>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed mb-8">
                      {active.quote}
                    </blockquote>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{active.name}</div>
                      <div className="text-sm text-neutral-500">{active.title}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Stats */}
              <div className="border-l border-neutral-100 dark:border-neutral-800 flex flex-col justify-center p-8 min-w-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.brand + "-stats"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {active.stats.map((s, i) => (
                      <div key={s.label} className={i < active.stats.length - 1 ? "border-b border-neutral-100 dark:border-neutral-800 pb-6 mb-6" : ""}>
                        <div className="text-5xl font-bold text-neutral-900 dark:text-white">{s.value}</div>
                        <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      {/* Logo grid below testimonial - clickable */}
      <FadeIn className="mt-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900">
            {allBrands.map((row, ri) => (
              <div key={ri} className="grid grid-cols-4">
                {row.map((n) => {
                  const idx = testimonials.findIndex(t => t.brand === n);
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={n}
                      onClick={() => setActiveIdx(idx)}
                      className={`${ri === 0 ? "border-b" : ""} border-r border-neutral-100 dark:border-neutral-800 last:border-r-0 flex items-center justify-center h-[80px] text-base font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      }`}
                    >
                      {renderBrandLabel(n)}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
