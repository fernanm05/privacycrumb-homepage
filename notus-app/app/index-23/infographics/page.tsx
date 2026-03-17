"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Download, Share2, Eye, ArrowRight,
  Shield, Cookie, Globe, BarChart3, Lock, Scale,
  FileText, Zap, BookOpen, MonitorSmartphone, Code, Palette
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

interface Infographic {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  category: string;
  stats: string;
  slug: string;
}

const filters = ["All", "Regulations", "Technical", "Business", "Best Practices"];

const infographics: Infographic[] = [
  {
    title: "GDPR Cookie Consent — The Complete Visual Guide",
    desc: "Everything you need to know about GDPR cookie consent requirements, lawful basis, and penalties in one visual guide.",
    icon: Shield, color: "text-blue-500", gradient: "from-blue-500/20 to-blue-600/5",
    category: "Regulations", stats: "12.4k views", slug: "/index-23/infographics/gdpr-guide",
  },
  {
    title: "Cookie Types & Categories Explained",
    desc: "Visual breakdown of Necessary, Functional, Analytics, and Marketing cookies — what they do and why they matter.",
    icon: Cookie, color: "text-amber-500", gradient: "from-amber-500/20 to-amber-600/5",
    category: "Technical", stats: "9.8k views", slug: "/index-23/infographics/cookie-types",
  },
  {
    title: "CCPA vs GDPR — Key Differences",
    desc: "Side-by-side comparison of the two major privacy regulations and what each requires for cookie consent.",
    icon: Scale, color: "text-green-500", gradient: "from-green-500/20 to-green-600/5",
    category: "Regulations", stats: "11.2k views", slug: "/index-23/infographics/ccpa-vs-gdpr",
  },
  {
    title: "The Cookie Consent Flow",
    desc: "Step-by-step visual walkthrough of how cookie consent works — from first visit to preference management.",
    icon: BarChart3, color: "text-purple-500", gradient: "from-purple-500/20 to-purple-600/5",
    category: "Technical", stats: "7.6k views", slug: "/index-23/infographics/consent-flow",
  },
  {
    title: "Global Privacy Regulations Map",
    desc: "Interactive world map showing privacy regulations by country — GDPR, CCPA, LGPD, PIPEDA, POPIA, and more.",
    icon: Globe, color: "text-teal-500", gradient: "from-teal-500/20 to-teal-600/5",
    category: "Regulations", stats: "15.1k views", slug: "/index-23/infographics/privacy-map",
  },
  {
    title: "Cookie Banner Best Practices",
    desc: "Design dos and don'ts for consent banners — layout, copy, colors, and accessibility guidelines.",
    icon: Palette, color: "text-pink-500", gradient: "from-pink-500/20 to-pink-600/5",
    category: "Best Practices", stats: "8.3k views", slug: "/index-23/infographics/banner-best-practices",
  },
  {
    title: "Third-Party Cookie Sunset Timeline",
    desc: "Visual timeline of the deprecation of third-party cookies and what it means for your website.",
    icon: MonitorSmartphone, color: "text-orange-500", gradient: "from-orange-500/20 to-orange-600/5",
    category: "Technical", stats: "6.9k views", slug: "/index-23/infographics/third-party-sunset",
  },
  {
    title: "ROI of Cookie Compliance",
    desc: "How investing in proper cookie consent can save you from fines, build trust, and improve conversion rates.",
    icon: Zap, color: "text-coral", gradient: "from-coral/20 to-coral/5",
    category: "Business", stats: "5.4k views", slug: "/index-23/infographics/roi-compliance",
  },
  {
    title: "Google Consent Mode v2 Explained",
    desc: "Visual guide to implementing Google Consent Mode v2 — consent signals, tag behavior, and data modeling.",
    icon: Code, color: "text-indigo-500", gradient: "from-indigo-500/20 to-indigo-600/5",
    category: "Technical", stats: "10.7k views", slug: "/index-23/infographics/consent-mode-v2",
  },
  {
    title: "Anatomy of a Compliant Cookie Banner",
    desc: "Dissecting every element of a legally compliant cookie banner — required buttons, text, and disclosures.",
    icon: FileText, color: "text-cyan-500", gradient: "from-cyan-500/20 to-cyan-600/5",
    category: "Best Practices", stats: "8.9k views", slug: "/index-23/infographics/compliant-banner-anatomy",
  },
  {
    title: "GDPR Fines & Enforcement — By the Numbers",
    desc: "Infographic showing the largest GDPR fines to date, enforcement trends, and what triggers investigations.",
    icon: Lock, color: "text-red-500", gradient: "from-red-500/20 to-red-600/5",
    category: "Regulations", stats: "13.5k views", slug: "/index-23/infographics/gdpr-fines",
  },
  {
    title: "Cookie Compliance Checklist for Startups",
    desc: "A visual step-by-step checklist to get your startup compliant with global cookie regulations.",
    icon: BookOpen, color: "text-emerald-500", gradient: "from-emerald-500/20 to-emerald-600/5",
    category: "Business", stats: "7.1k views", slug: "/index-23/infographics/startup-checklist",
  },
];

/* ====== PAGE ====== */
export default function InfographicsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = infographics.filter(ig => {
    const matchesFilter = activeFilter === "All" || ig.category === activeFilter;
    const matchesSearch = !search.trim() ||
      ig.title.toLowerCase().includes(search.toLowerCase()) ||
      ig.desc.toLowerCase().includes(search.toLowerCase()) ||
      ig.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-14 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Infographics</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                Privacy compliance,{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">visualized</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                Explore our collection of {infographics.length} visual guides on cookie consent, privacy regulations, and compliance best practices.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative max-w-lg mx-auto">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search infographics..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="pb-8 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="flex flex-wrap gap-2 justify-center">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      activeFilter === f
                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                        : "border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-coral/30"
                    }`}
                  >
                    {f} ({f === "All" ? infographics.length : infographics.filter(ig => ig.category === f).length})
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Infographics Grid */}
        <section className="py-10 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search size={32} className="text-neutral-300 dark:text-neutral-600 mx-auto mb-3" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">No infographics found for &ldquo;{search}&rdquo;</p>
                <button onClick={() => { setSearch(""); setActiveFilter("All"); }} className="text-coral text-sm font-medium mt-2 hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((ig, i) => (
                  <FadeIn key={ig.title} delay={i * 0.05}>
                    <a href={ig.slug}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden cursor-pointer hover:border-coral/30 hover:shadow-md transition-all group h-full flex flex-col"
                    >
                      {/* Preview area */}
                      <div className={`relative h-40 bg-gradient-to-br ${ig.gradient} flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 opacity-[0.03]">
                          {Array.from({ length: 6 }).map((_, j) => {
                            const x = 10 + ((j * 41 + 7) % 80);
                            const y = 10 + ((j * 53 + 13) % 70);
                            return <div key={j} className="absolute w-8 h-8 border border-current rounded-lg" style={{ left: `${x}%`, top: `${y}%` }} />;
                          })}
                        </div>
                        <ig.icon size={48} className={`${ig.color} opacity-40 group-hover:opacity-60 transition-opacity`} />

                        <div className="absolute bottom-3 left-3">
                          <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm text-neutral-600 dark:text-neutral-300">
                            {ig.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-coral transition-colors leading-snug">
                          {ig.title}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-1">
                          {ig.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                            <Eye size={10} />
                            {ig.stats}
                          </div>
                          <span className="text-[11px] font-medium text-coral flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            View <ArrowRight size={10} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, value: `${infographics.length}`, label: "Infographics" },
              { icon: Eye, value: "125k+", label: "Total Views" },
              { icon: Download, value: "Free", label: "Download" },
              { icon: Zap, value: "Monthly", label: "New Releases" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="text-center p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <s.icon size={18} className="text-coral mx-auto mb-2" />
                  <div className="text-xl font-bold text-neutral-900 dark:text-white">{s.value}</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Want to see more visual content?</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Visit our Knowledge Base for in-depth articles or reach out with infographic requests.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="/index-23/knowledge-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                  Knowledge Base <ArrowRight size={14} />
                </motion.a>
                <motion.a href="/index-23/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  Request an Infographic
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
