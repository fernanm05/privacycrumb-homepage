"use client";
import { motion } from "framer-motion";
import {
  ScanSearch, ShieldCheck, FileCheck, Globe, Cookie, Scale,
  Palette, BarChart3, Bell, Code, Layers, Lock, Eye, Zap,
  MonitorSmartphone, Users, ArrowRight, Shield, Check, X, AlertTriangle
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== ANIMATED FEATURE GRAPHICS ====== */

function ScannerGraphic() {
  const cookies = [
    { name: "_ga", type: "Analytics", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { name: "_fbp", type: "Marketing", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-900/20" },
    { name: "session_id", type: "Necessary", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
    { name: "_shopify", type: "Analytics", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { name: "ad_tracker", type: "Marketing", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-900/20" },
  ];
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 h-[180px] overflow-hidden">
      {/* Scan line */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent z-10"
        style={{ position: "absolute" }}
      />
      <div className="space-y-1.5">
        {cookies.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg px-3 py-1.5 text-[10px]"
          >
            <div className="flex items-center gap-2">
              <Cookie size={10} className={c.color} />
              <span className="font-mono font-medium text-neutral-700 dark:text-neutral-300">{c.name}</span>
            </div>
            <span className={`${c.bg} ${c.color} px-1.5 py-0.5 rounded text-[9px] font-semibold`}>{c.type}</span>
          </motion.div>
        ))}
      </div>
      {/* Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 right-3 text-[10px] font-mono text-green-500"
      >
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >● Scanning...</motion.span>
      </motion.div>
    </div>
  );
}

function ComplianceGraphic() {
  const regs = [
    { name: "GDPR", flag: "🇪🇺", status: "Compliant" },
    { name: "CCPA", flag: "🇺🇸", status: "Compliant" },
    { name: "LGPD", flag: "🇧🇷", status: "Compliant" },
    { name: "CPRA", flag: "🇺🇸", status: "Compliant" },
  ];
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 h-[180px]">
      <div className="flex items-center gap-1.5 mb-2">
        <ShieldCheck size={12} className="text-green-500" />
        <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300">Compliance Status</span>
      </div>
      <div className="space-y-1.5">
        {regs.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs">{r.flag}</span>
              <span className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">{r.name}</span>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.2, type: "spring" }}
              className="flex items-center gap-1"
            >
              <Check size={10} className="text-green-500" />
              <span className="text-[9px] font-semibold text-green-500">{r.status}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BlockingGraphic() {
  const items = [
    { name: "Google Analytics", blocked: true },
    { name: "Facebook Pixel", blocked: true },
    { name: "Session Cookie", blocked: false },
    { name: "HotJar Tracking", blocked: true },
  ];
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 h-[180px]">
      <div className="flex items-center gap-1.5 mb-2">
        <Shield size={12} className="text-coral" />
        <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300">Cookie Blocking</span>
      </div>
      <div className="space-y-1.5">
        {items.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg px-3 py-2"
          >
            <span className="text-[10px] font-medium text-neutral-700 dark:text-neutral-300">{c.name}</span>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.15, type: "spring" }}
            >
              {c.blocked ? (
                <span className="flex items-center gap-0.5 text-[9px] font-semibold text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-1.5 py-0.5 rounded">
                  <X size={8} /> Blocked
                </span>
              ) : (
                <span className="flex items-center gap-0.5 text-[9px] font-semibold text-green-500 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
                  <Check size={8} /> Allowed
                </span>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BannerBuilderGraphic() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 h-[180px] relative overflow-hidden">
      {/* Mini page */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg h-full relative overflow-hidden border border-neutral-100 dark:border-neutral-800">
        {/* Fake browser bar */}
        <div className="flex items-center gap-1 px-2 py-1 border-b border-neutral-100 dark:border-neutral-800">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <div className="ml-2 bg-neutral-100 dark:bg-neutral-800 rounded h-2.5 flex-1" />
        </div>
        {/* Fake content */}
        <div className="p-2 space-y-1">
          <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded w-3/4" />
          <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded w-1/2" />
          <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded w-2/3" />
        </div>
        {/* Consent banner sliding up */}
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 100 }}
          className="absolute bottom-0 left-0 right-0 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 p-2"
        >
          <p className="text-[7px] text-neutral-500 dark:text-neutral-400 mb-1.5">We use cookies to improve your experience</p>
          <div className="flex gap-1">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-green-500 text-white text-[6px] font-bold px-2 py-0.5 rounded"
            >Accept All</motion.div>
            <div className="border border-neutral-300 dark:border-neutral-600 text-neutral-500 text-[6px] font-medium px-2 py-0.5 rounded">Customize</div>
            <div className="text-neutral-400 text-[6px] font-medium px-1 py-0.5">Reject</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function GeoTargetingGraphic() {
  const regions = [
    { code: "EU", color: "bg-blue-500", x: "55%", y: "25%", delay: 0.4 },
    { code: "US", color: "bg-red-500", x: "22%", y: "35%", delay: 0.6 },
    { code: "UK", color: "bg-indigo-500", x: "47%", y: "20%", delay: 0.8 },
    { code: "BR", color: "bg-green-500", x: "32%", y: "65%", delay: 1.0 },
    { code: "AU", color: "bg-amber-500", x: "82%", y: "70%", delay: 1.2 },
  ];
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 h-[180px] relative overflow-hidden">
      {/* Simplified world map dots */}
      <div className="absolute inset-3 opacity-20">
        {Array.from({ length: 40 }).map((_, i) => {
          const left = 8 + ((i * 37 + 13) % 84);
          const top = 10 + ((i * 53 + 7) % 80);
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"
              style={{ left: `${left}%`, top: `${top}%` }}
            />
          );
        })}
      </div>
      {/* Region pins */}
      {regions.map((r) => (
        <motion.div
          key={r.code}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: r.delay, type: "spring" }}
          className="absolute"
          style={{ left: r.x, top: r.y }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: r.delay }}
          >
            <div className={`${r.color} text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full shadow-lg`}>
              {r.code}
            </div>
          </motion.div>
          {/* Ping rings */}
          <motion.div
            animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: r.delay }}
            className={`absolute inset-0 ${r.color} rounded-full opacity-30`}
          />
        </motion.div>
      ))}
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-2 left-3 right-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-lg px-2 py-1.5 flex items-center gap-2"
      >
        <Globe size={10} className="text-blue-500" />
        <span className="text-[9px] font-medium text-neutral-600 dark:text-neutral-400">Auto-detecting visitor region...</span>
      </motion.div>
    </div>
  );
}

function AnalyticsGraphic() {
  const bars = [35, 52, 45, 68, 55, 72, 80, 65, 78, 85, 72, 90];
  return (
    <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 h-[180px]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <BarChart3 size={12} className="text-coral" />
          <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300">Consent Rate</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-[10px] font-bold text-green-500"
        >87.4% ↑</motion.span>
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1 h-[100px] px-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: "easeOut" }}
            className="flex-1 rounded-t bg-gradient-to-t from-coral/80 to-coral/30 min-w-0"
          />
        ))}
      </div>
      {/* x-axis labels */}
      <div className="flex justify-between px-1 mt-1">
        <span className="text-[7px] text-neutral-400">Jan</span>
        <span className="text-[7px] text-neutral-400">Jun</span>
        <span className="text-[7px] text-neutral-400">Dec</span>
      </div>
    </div>
  );
}

const coreFeatures = [
  { title: "Auto Cookie Scanning", desc: "Automatically detect every cookie & tracker on your website — no manual auditing needed.", Graphic: ScannerGraphic },
  { title: "Instant Compliance", desc: "Stay compliant with GDPR, CCPA, CPRA, and ePrivacy with auto-updating consent rules.", Graphic: ComplianceGraphic },
  { title: "Smart Cookie Blocking", desc: "Block non-essential cookies before consent is given — ensuring privacy by default.", Graphic: BlockingGraphic },
  { title: "Consent Banner Builder", desc: "Design beautiful, branded cookie consent banners with our visual editor. No code required.", Graphic: BannerBuilderGraphic },
  { title: "Geo-targeted Banners", desc: "Show the right consent banner based on visitor location. EU, US, UK — automatically.", Graphic: GeoTargetingGraphic },
  { title: "Consent Analytics", desc: "See opt-in rates, consent trends, and compliance metrics in a real-time dashboard.", Graphic: AnalyticsGraphic },
];

const detailFeatures = [
  { Icon: FileCheck, title: "One-Click Policies", desc: "Generate compliant cookie and privacy policies tailored to your website in seconds.", color: "text-green-500" },
  { Icon: Scale, title: "Audit-Ready Consent Logs", desc: "Keep detailed consent records ready for regulatory audits at any time. Export in one click.", color: "text-indigo-500" },
  { Icon: Code, title: "Developer-Friendly API", desc: "Full REST API and webhook support. Integrate PrivacyCrumb into any workflow or stack.", color: "text-cyan-500" },
  { Icon: Layers, title: "Multi-Domain Dashboard", desc: "Manage consent banners and cookie policies across all your domains from one place.", color: "text-amber-500" },
  { Icon: Lock, title: "Google Consent Mode v2", desc: "Native integration with Google Consent Mode. Unlock full analytics while staying compliant.", color: "text-rose-500" },
  { Icon: Eye, title: "IAB TCF v2.2 Support", desc: "Full Transparency & Consent Framework support for programmatic advertising compliance.", color: "text-violet-500" },
  { Icon: MonitorSmartphone, title: "Responsive Design", desc: "Banners look great on every device — desktop, tablet, and mobile. Automatically adapted.", color: "text-orange-500" },
  { Icon: Users, title: "Team Collaboration", desc: "Invite team members with role-based access. Agencies can manage client sites effortlessly.", color: "text-blue-500" },
  { Icon: Zap, title: "Lightweight Script", desc: "Our script is under 30KB gzipped. No impact on page speed or Core Web Vitals scores.", color: "text-emerald-500" },
  { Icon: Bell, title: "Compliance Alerts", desc: "Get notified when new cookies appear on your site or regulations change that affect you.", color: "text-pink-500" },
  { Icon: ScanSearch, title: "Scheduled Scans", desc: "Set up automatic recurring scans — daily, weekly, or monthly — to catch new cookies early.", color: "text-teal-500" },
  { Icon: ShieldCheck, title: "Multi-Language Support", desc: "Consent banners in 30+ languages. Auto-detect visitor language or let them choose.", color: "text-lime-500" },
];

const integrations = [
  "WordPress", "Shopify", "Wix", "Squarespace", "Webflow", "Next.js",
  "Google Tag Manager", "Google Analytics", "HubSpot", "Segment",
];

function DetailCard({ Icon, title, desc, color, delay = 0 }: { Icon: LucideIcon; title: string; desc: string; color: string; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div whileHover={{ y: -2 }} className="flex gap-4 p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-sm transition-shadow h-full">
        <div className={`shrink-0 w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center ${color}`}>
          <Icon size={18} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function FeaturesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="text-center pt-24 pb-4 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Features</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Everything you need for{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">cookie compliance</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                PrivacyCrumb gives you a complete cookie consent toolkit — from scanning and blocking to analytics and audit-ready logs.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
                Start for free <ArrowRight size={14} />
              </motion.button>
            </FadeIn>
          </div>
        </section>

        {/* Core Features with Animated Graphics */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium text-center mb-2 tracking-wide">Core Features</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-neutral-900 dark:text-white">
                Built for modern cookie compliance
              </h2>
            </FadeIn>
            {/* Row 1: Two large hero cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {coreFeatures.slice(0, 2).map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -4 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 transition-shadow hover:shadow-lg h-full">
                    <div className="h-[220px]"><f.Graphic /></div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{f.title}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
            {/* Row 2: Four smaller cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {coreFeatures.slice(2).map((f, i) => (
                <FadeIn key={f.title} delay={0.2 + i * 0.08}>
                  <motion.div whileHover={{ y: -4 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 transition-shadow hover:shadow-lg h-full">
                    <f.Graphic />
                    <div className="p-4">
                      <h3 className="text-[14px] font-semibold mb-1 text-neutral-900 dark:text-white">{f.title}</h3>
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* All Features */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium text-center mb-2 tracking-wide">All Features</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-neutral-900 dark:text-white">
                Every tool you need, included
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-md mx-auto mb-12">
                From auto-scanning to consent logs, PrivacyCrumb covers all aspects of cookie privacy compliance.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {detailFeatures.map((f, i) => (
                <DetailCard key={f.title} Icon={f.Icon} title={f.title} desc={f.desc} color={f.color} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <div className="flex justify-center mb-4">
                <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-10 h-10" />
              </div>
              <p className="text-coral text-sm font-medium mb-2 tracking-wide">Integrations</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
                Works with your stack
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-10">
                PrivacyCrumb integrates seamlessly with the platforms and tools you already use.
              </p>
            </FadeIn>

            <div className="relative max-w-3xl mx-auto">

              {/* Integration cards grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {/* WordPress */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#21759B"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.36.308-2.648.856-3.8l4.72 12.932A8.996 8.996 0 013.009 12zM12 20.991a8.963 8.963 0 01-2.773-.437l2.943-8.546 3.015 8.258a8.965 8.965 0 01-3.185.725zM13.45 7.19c.59-.031 1.12-.093 1.12-.093.528-.063.466-.838-.062-.808 0 0-1.588.125-2.612.125-.962 0-2.581-.125-2.581-.125-.528-.03-.59.776-.063.808 0 0 .5.062 1.028.093l1.527 4.185-2.146 6.434L6.18 7.19c.59-.031 1.12-.093 1.12-.093.527-.063.466-.838-.063-.808 0 0-1.587.125-2.612.125-.184 0-.4-.005-.627-.013A8.966 8.966 0 0112 3.009c2.34 0 4.471.895 6.071 2.36-.038-.002-.076-.008-.116-.008-1.006 0-1.72.935-1.72 1.72 0 .699.371 1.257.774 1.923.309.543.587 1.134.587 2.141 0 .665-.256 1.436-.59 2.512l-.774 2.586-2.802-8.053zM16.4 19.82l2.86-8.262c.534-1.334.712-2.402.712-3.352 0-.345-.023-.665-.065-.963A8.954 8.954 0 0120.991 12a8.994 8.994 0 01-4.591 7.82z"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">WordPress</span>
                </motion.div>
                {/* Shopify */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.38, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="28" height="32" viewBox="0 0 256 292" fill="#95BF47"><path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.828-.19.053-3.386 1.046-8.678 2.689-5.155-14.89-14.258-28.578-30.279-28.578-.444 0-.901.018-1.358.044C129.31 3.407 123.95 0 119.407 0 78.73 0 59.12 50.795 52.818 76.586c-16.455 5.1-28.166 8.738-29.574 9.192-9.215 2.894-9.506 3.184-10.71 11.78C11.426 104.166 0 193.92 0 193.92l176.93 30.826 78.96-17.17s-31.916-148.776-32.116-150.236zM156.2 40.146l-14.268 4.433c0-3.596-.195-8.78-1.263-13.42 10.395 2.024 14.049 12.853 15.531 8.987zm-24.118 7.478l-30.7 9.527c5.963-22.86 17.178-33.99 26.94-38.158 3.894 7.632 3.76 18.712 3.76 28.631zm-17.727-39.16c1.755 0 3.297.384 4.695 1.03-12.84 6.042-26.593 21.264-32.38 51.69l-24.31 7.535C69.06 47.007 83.747 8.464 114.355 8.464z"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Shopify</span>
                </motion.div>
                {/* Wix */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.46, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <span className="text-[#0C6EFC] text-2xl font-black leading-none">Wix</span>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Wix</span>
                </motion.div>
                {/* Squarespace */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.54, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-900 dark:text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.17 14.93l-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Squarespace</span>
                </motion.div>
                {/* Webflow */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.62, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="36" height="28" viewBox="0 0 410 260" fill="#4353FF"><path d="M296.7 34.5c-22.5 75.2-90.5 120.3-90.5 120.3s-6.7-41.7-47.5-82.5c43.3 95 4.2 153.2 4.2 153.2S88.3 175.7 56.2 97c-13.8 53.3 17.5 128.5 17.5 128.5S6.3 168.8 0 97c19.2 12.5 36.7-10 36.7-10S79.5 0 150.5 0c0 0-10 38.3 20 70.8 0 0 39.2-71.3 126.2-36.3z"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Webflow</span>
                </motion.div>
                {/* Next.js */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-900 dark:text-white"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.66-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Next.js</span>
                </motion.div>
                {/* Google Tag Manager */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.78, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 22l-6.5-6.5L12 2l6.5 13.5L12 22z" fill="#4285F4"/><path d="M12 22l6.5-6.5L12 2" fill="#3B78E7" opacity=".8"/><circle cx="12" cy="16" r="3" fill="#fff"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">GTM</span>
                </motion.div>
                {/* Google Analytics */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.86, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="17" y="3" width="4" height="18" rx="2" fill="#F9AB00"/><rect x="10" y="9" width="4" height="12" rx="2" fill="#E37400"/><circle cx="5" cy="19" r="2.5" fill="#E37400"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Analytics</span>
                </motion.div>
                {/* HubSpot */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.94, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF7A59"><path d="M17.5 8.5V6a2 2 0 00-2-2h0a2 2 0 00-2 2v2.5M8.5 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 0h7m0 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 0v2a1.5 1.5 0 003 0v-2" stroke="#FF7A59" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">HubSpot</span>
                </motion.div>
                {/* Segment */}
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.02, type: "spring", stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md hover:border-coral/30 transition-all cursor-default">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#52BD95"><circle cx="12" cy="12" r="3"/><path d="M12 2v7m0 6v7M2 12h7m6 0h7" stroke="#52BD95" strokeWidth="2" strokeLinecap="round"/></svg>
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Segment</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-[2.5rem] font-semibold mb-5 leading-tight text-neutral-900 dark:text-white tracking-tight">
                Ready to get compliant?
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-base">
                Start for free — no credit card required. Upgrade as your site grows.
              </p>
              <div className="flex gap-3 justify-center">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                  Get Started Free
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors">
                  View Pricing
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
