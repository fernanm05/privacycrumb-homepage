"use client";
import { motion } from "framer-motion";
import { Cookie, Shield, Wrench, Lock, FileText, Terminal, Sparkles, Layout, Paperclip, SendHorizontal, Globe, ShieldCheck, ScrollText } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

/* ========== BRAND SVG ICONS (privacy-related platforms) ========== */

/* WordPress - W logo */
const WordPressIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#21759B">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.36.308-2.648.856-3.8l4.72 12.932A8.996 8.996 0 013.009 12zM12 20.991a8.963 8.963 0 01-2.773-.437l2.943-8.546 3.015 8.258.02.046a8.965 8.965 0 01-3.205.679zM13.45 7.19c.59-.031 1.12-.093 1.12-.093.528-.063.466-.838-.062-.808 0 0-1.588.125-2.612.125-.962 0-2.581-.125-2.581-.125-.528-.03-.59.776-.063.808 0 0 .5.062 1.028.093l1.527 4.185-2.146 6.434L6.18 7.19c.59-.031 1.12-.093 1.12-.093.527-.063.466-.838-.063-.808 0 0-1.587.125-2.612.125-.184 0-.4-.005-.627-.013A8.966 8.966 0 0112 3.009c2.34 0 4.471.895 6.071 2.36-.038-.002-.076-.008-.116-.008-1.006 0-1.72.935-1.72 1.72 0 .699.371 1.257.774 1.923.309.543.587 1.134.587 2.141 0 .665-.256 1.436-.59 2.512l-.774 2.586-2.802-8.053zM16.4 19.82l2.86-8.262c.534-1.334.712-2.402.712-3.352 0-.345-.023-.665-.065-.963A8.954 8.954 0 0120.991 12a8.994 8.994 0 01-4.591 7.82z" />
  </svg>
);

/* Shopify - S bag logo */
const ShopifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#95BF47">
    <path d="M15.337 3.199c-.147-.047-.31 0-.387.16-.062.128-1.073 2.036-1.073 2.036s-1.201-.53-1.36-.593c-.497-.21-1.201-.257-1.809-.13-.624.13-1.176.498-1.616 1.024-.816 1.005-1.153 2.426-1.153 2.426l-2.09.643S6.016 8.828 5.923 8.86c-.093.032-.155.097-.186.193L3.92 16.04l8.29 1.56L17.83 4.367c0-.032-.016-.065-.032-.097a.253.253 0 00-.129-.128c-.367-.193-1.504-.66-2.332-.943zM12.73 6.327l-.56 1.78s-.608-.304-1.376-.24c-1.12.08-1.136.768-1.12.96.064.96 2.594 1.168 2.738 3.424.112 1.776-1.04 2.992-2.642 3.088-1.921.112-2.977-1.008-2.977-1.008l.417-1.712s1.072.768 1.936.72c.56-.032.768-.48.752-.8-.08-1.248-2.13-1.168-2.258-3.248-.112-1.744 1.04-3.52 3.568-3.68.976-.064 1.472.192 1.472.192l.05.524z" />
  </svg>
);

/* Google Analytics - chart icon */
const GoogleAnalyticsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="17" y="3" width="4" height="18" rx="2" fill="#F9AB00" />
    <rect x="10" y="9" width="4" height="12" rx="2" fill="#E37400" />
    <circle cx="5" cy="19" r="2.5" fill="#E37400" />
  </svg>
);

/* Google Tag Manager - tag icon */
const TagManagerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M13.646 22.058l-8.29-8.29a2.5 2.5 0 010-3.536l8.29-8.29a2.5 2.5 0 013.536 0l.094.094-5.569 5.569a1.5 1.5 0 000 2.121l3.182 3.182a1.5 1.5 0 002.121 0l5.569-5.569.094.094a2.5 2.5 0 010 3.536l-8.29 8.29a2.5 2.5 0 01-3.537-.001z" fill="#8AB4F8" />
    <path d="M13.646 22.058l8.29-8.29a2.5 2.5 0 000-3.536l-3.841-3.841-5.569 5.569a1.5 1.5 0 01-2.121 0L7.223 8.778 3.356 12.646a2.5 2.5 0 000 3.536l8.29 8.29a2.5 2.5 0 002.121-.414h-2.121z" fill="#4285F4" opacity="0.6" />
    <circle cx="12" cy="12" r="2" fill="#fff" />
  </svg>
);

/* HubSpot - sprocket logo */
const HubSpotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF7A59">
    <path d="M16.5 7.56V4.5a1.5 1.5 0 10-1.5 0v3.06A4.49 4.49 0 0012.18 10H7.5l-3 3.75L7.5 17.5h4.68a4.5 4.5 0 102.82-2.94 4.48 4.48 0 001.5-7zM16.5 16a2.5 2.5 0 11-2.5-2.5 2.5 2.5 0 012.5 2.5z" />
  </svg>
);

export default function Features() {
  return (
    <section className="py-20 dark:bg-neutral-950" id="features">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Features" title="Complete Privacy Toolkit" subtitle="Everything you need to scan, manage, and stay compliant with global cookie privacy regulations" />
        {/* Bento grid: 2 cols top */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* LLM Model Selector */}
          <FadeIn>
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white dark:bg-neutral-900 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Cookie size={18} className="text-neutral-700 dark:text-neutral-300" />
                <h3 className="text-base font-semibold dark:text-white">Cookie Scanner</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">Automatically detect and categorize every cookie and tracker on your website with detailed classification reports.</p>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-5">
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-sm border border-neutral-100 dark:border-neutral-700 relative overflow-hidden">
                  {/* Scanning line that sweeps down */}
                  <motion.div
                    animate={{ top: ["-5%", "105%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    className="absolute left-0 right-0 h-8 pointer-events-none z-10"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(34,197,94,0.12), transparent)" }}
                  />

                  <div className="flex gap-1.5 mb-4">
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 pb-2.5 border-b border-neutral-100 dark:border-neutral-700 mb-3">
                    <span className="flex items-center gap-1.5"><Layout size={12} /> All Cookies</span>
                    <motion.span
                      className="font-semibold text-neutral-700 dark:text-neutral-200 tabular-nums"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      2,847
                    </motion.span>
                  </div>
                  {[
                    { n: "Analytics", Icon: Sparkles, ic: "text-orange-500", s: "18 found", c: "bg-orange-50 text-orange-600 border border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800", delay: 0 },
                    { n: "Marketing", Icon: Globe, ic: "text-blue-500", s: "12 found", c: "bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800", delay: 0.75 },
                    { n: "Functional", Icon: Cookie, ic: "text-green-600", s: "6 found", c: "bg-green-50 text-green-600 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800", delay: 1.5 },
                    { n: "Essential", Icon: Lock, ic: "text-purple-500", s: "3 found", c: "bg-purple-50 text-purple-600 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800", delay: 2.25 },
                  ].map((m) => (
                    <motion.div
                      key={m.n}
                      animate={{
                        backgroundColor: ["rgba(0,0,0,0)", "rgba(34,197,94,0.06)", "rgba(0,0,0,0)"],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: m.delay, ease: "easeInOut" }}
                      className="flex justify-between items-center py-2.5 px-1 -mx-1 rounded-lg text-[13px] border-b border-neutral-50 dark:border-neutral-800 last:border-0"
                    >
                      <span className="font-medium text-neutral-700 dark:text-neutral-200 flex items-center gap-1.5"><m.Icon size={14} className={m.ic} />{m.n}</span>
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: m.delay, ease: "easeInOut" }}
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
          {/* Consent Banner Builder */}
          <FadeIn delay={0.1}>
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white dark:bg-neutral-900 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Layout size={18} className="text-neutral-700 dark:text-neutral-300" />
                <h3 className="text-base font-semibold dark:text-white">Consent Banner Builder</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">Design beautiful, compliant cookie consent banners that match your brand. Customize colors, layout, and text with a live preview.</p>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-4">
                {/* Mini website mockup */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm overflow-hidden relative">
                  {/* Fake browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-neutral-100 dark:border-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="ml-2 flex-1 h-3.5 bg-neutral-100 dark:bg-neutral-700 rounded-md flex items-center px-2">
                      <span className="text-[8px] text-neutral-400">yourwebsite.com</span>
                    </div>
                  </div>
                  {/* Fake page content */}
                  <div className="px-3 py-2 space-y-1.5">
                    <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full w-3/4" />
                    <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full w-1/2" />
                    <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full w-5/6" />
                  </div>

                  {/* Consent banner overlay */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mx-2 mb-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-3 shadow-lg"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <Cookie size={12} className="text-amber-500" />
                      <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-200">Cookie Preferences</span>
                    </div>
                    <p className="text-[9px] text-neutral-400 mb-2.5 leading-relaxed">We use cookies to enhance your experience. Choose which cookies you allow.</p>

                    {/* Cookie toggles */}
                    {[
                      { name: "Essential", on: true, locked: true },
                      { name: "Analytics", on: false, locked: false },
                      { name: "Marketing", on: false, locked: false },
                    ].map((c, i) => (
                      <div key={c.name} className="flex items-center justify-between py-1">
                        <span className="text-[10px] text-neutral-600 dark:text-neutral-300">{c.name}</span>
                        <motion.div
                          animate={c.locked ? {} : { backgroundColor: ["#e5e7eb", "#22c55e", "#22c55e", "#e5e7eb"] }}
                          transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
                          className="w-7 h-4 rounded-full relative"
                          style={{ backgroundColor: c.locked ? "#22c55e" : "#e5e7eb" }}
                        >
                          <motion.div
                            animate={c.locked ? {} : { x: [0, 13, 13, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
                            className="absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white shadow-sm"
                          />
                        </motion.div>
                      </div>
                    ))}

                    {/* Buttons */}
                    <div className="flex gap-1.5 mt-2">
                      <motion.button
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex-1 text-[9px] font-medium py-1.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                      >
                        Accept All
                      </motion.button>
                      <button className="flex-1 text-[9px] font-medium py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300">
                        Save Preferences
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ===== Native Tools Integration - EXACT MATCH ===== */}
        <FadeIn className="mt-4">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 mb-2">
              <Wrench size={18} className="text-neutral-700 dark:text-neutral-300" />
              <h3 className="text-base font-semibold dark:text-white">Platform Integrations</h3>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">Connect PrivacyCrumb with your favorite tools — CMS platforms, analytics, and marketing services.</p>

            {/* Node diagram - positions matched to original screenshot */}
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl relative overflow-hidden [--dot-color:#d4d4d4] dark:[--dot-color:#404040]" style={{ backgroundImage: 'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)', backgroundSize: '20px 20px', height: '380px' }}>

              {/* === LEFT: Scanner labels === */}
              <div className="absolute left-[3%] top-[17%] flex items-center gap-2 z-10">
                <Globe size={15} className="text-neutral-400" />
                <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">Website Scanner</span>
              </div>
              <div className="absolute left-[3%] top-[47%] flex items-center gap-2 z-10">
                <Shield size={15} className="text-neutral-400" />
                <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">Consent Banner</span>
              </div>
              <div className="absolute left-[3%] top-[77%] flex items-center gap-2 z-10">
                <ScrollText size={15} className="text-neutral-400" />
                <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">Cookie Policy</span>
              </div>

              {/* === CENTER: PrivacyCrumb logo with orbiting glow === */}
              <div className="absolute z-10" style={{ left: '40%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="relative">
                  {/* Orbiting glow dot 1 */}
                  <div
                    className="absolute inset-[-1px] rounded-2xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle, 0deg), transparent 0%, transparent 92%, #F26C4F 96%, #FBBF24 98%, transparent 100%)',
                      animation: 'orbitSpin 6s linear infinite',
                      filter: 'blur(1px)',
                      opacity: 0.8,
                    }}
                  />
                  <div
                    className="absolute inset-[-1px] rounded-2xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle, 0deg), transparent 0%, transparent 92%, #F26C4F 96%, #FBBF24 98%, transparent 100%)',
                      animation: 'orbitSpin 6s linear infinite',
                    }}
                  />
                  {/* Orbiting glow dot 2 (180° offset via delay) */}
                  <div
                    className="absolute inset-[-1px] rounded-2xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle, 0deg), transparent 0%, transparent 92%, #60A5FA 96%, #818CF8 98%, transparent 100%)',
                      animation: 'orbitSpin 6s linear infinite',
                      animationDelay: '-3s',
                      filter: 'blur(1px)',
                      opacity: 0.8,
                    }}
                  />
                  <div
                    className="absolute inset-[-1px] rounded-2xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle, 0deg), transparent 0%, transparent 92%, #60A5FA 96%, #818CF8 98%, transparent 100%)',
                      animation: 'orbitSpin 6s linear infinite',
                      animationDelay: '-3s',
                    }}
                  />
                  <div className="relative w-[60px] h-[60px] bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shadow-xl">
                    <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-7 h-7" />
                  </div>
                </div>
                <style>{`
                  @property --orbit-angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                  }
                  @keyframes orbitSpin {
                    from { --orbit-angle: 0deg; }
                    to { --orbit-angle: 360deg; }
                  }
                `}</style>
              </div>

              {/* === "Connected" badge - at the T-junction where horizontal meets vertical trunk === */}
              <div className="absolute z-10" style={{ left: '70%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="text-[11px] px-2.5 py-1 bg-white dark:bg-neutral-800 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 rounded font-medium shadow-sm">Connected</span>
              </div>

              {/* === RIGHT SIDE: Brand icons === */}
              {/* WordPress - upper on vertical trunk */}
              <div className="absolute z-10" style={{ left: '70%', top: '12%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <WordPressIcon />
                </div>
              </div>
              {/* Shopify - top right */}
              <div className="absolute z-10" style={{ left: '84%', top: '12%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <ShopifyIcon />
                </div>
              </div>
              {/* Google Analytics - at the T-junction where bolt branches off */}
              <div className="absolute z-10" style={{ left: '84%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <GoogleAnalyticsIcon />
                </div>
              </div>
              {/* HubSpot - far right on horizontal line */}
              <div className="absolute z-10" style={{ left: '92%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <HubSpotIcon />
                </div>
              </div>
              {/* Google Tag Manager - bottom on vertical trunk */}
              <div className="absolute z-10" style={{ left: '70%', top: '88%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-md flex items-center justify-center">
                  <TagManagerIcon />
                </div>
              </div>

              {/* === SVG CONNECTION LINES + ANIMATED BEAMS === */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none text-[#E5E5E5] dark:text-neutral-600" viewBox="0 0 1000 380" preserveAspectRatio="none" style={{ zIndex: 2 }}>
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

                  {/* Path definitions for animated dots to follow */}
                  <path id="path-top" d="M 220,76 L 400,76 L 400,160" fill="none" />
                  <path id="path-mid" d="M 200,190 L 360,190" fill="none" />
                  <path id="path-bot" d="M 220,304 L 400,304 L 400,220" fill="none" />
                  <path id="path-ctr" d="M 440,190 L 700,190" fill="none" />
                  <path id="path-up" d="M 700,190 L 700,46" fill="none" />
                  <path id="path-down" d="M 700,190 L 700,334" fill="none" />
                  <path id="path-chat" d="M 700,190 L 920,190" fill="none" />
                  <path id="path-bolt" d="M 840,190 L 840,46" fill="none" />
                </defs>

                {/* Left labels → center PrivacyCrumb box */}
                {/* Website Scanner → center (L-shaped: right then down) */}
                <line x1="220" y1="76" x2="400" y2="76" stroke="currentColor" strokeWidth="1.5" />
                <line x1="400" y1="76" x2="400" y2="160" stroke="currentColor" strokeWidth="1.5" />
                {/* Consent Banner → center (straight horizontal) */}
                <line x1="200" y1="190" x2="360" y2="190" stroke="currentColor" strokeWidth="1.5" />
                {/* Cookie Policy → center (L-shaped: right then up) */}
                <line x1="220" y1="304" x2="400" y2="304" stroke="currentColor" strokeWidth="1.5" />
                <line x1="400" y1="304" x2="400" y2="220" stroke="currentColor" strokeWidth="1.5" />

                {/* Center → right horizontal to Slack */}
                <line x1="440" y1="190" x2="700" y2="190" stroke="currentColor" strokeWidth="1.5" />
                {/* Vertical trunk on right */}
                <line x1="700" y1="46" x2="700" y2="334" stroke="currentColor" strokeWidth="1.5" />
                {/* Horizontal branch to ChatGPT */}
                <line x1="700" y1="190" x2="920" y2="190" stroke="currentColor" strokeWidth="1.5" />
                {/* Vertical to bolt */}
                <line x1="840" y1="190" x2="840" y2="46" stroke="currentColor" strokeWidth="1.5" />

                {/* ANIMATED BEAM DOTS */}
                {/* Coral: top agent → center */}
                <circle r="5" fill="#F26C4F" filter="url(#glow-c)">
                  <animateMotion dur="5s" repeatCount="indefinite" begin="0s">
                    <mpath href="#path-top" />
                  </animateMotion>
                </circle>
                {/* Blue: middle agent → center */}
                <circle r="5" fill="#60A5FA" filter="url(#glow-b)">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="0.7s">
                    <mpath href="#path-mid" />
                  </animateMotion>
                </circle>
                {/* Gold: bottom agent → center */}
                <circle r="5" fill="#FBBF24" filter="url(#glow-g)">
                  <animateMotion dur="5s" repeatCount="indefinite" begin="1.3s">
                    <mpath href="#path-bot" />
                  </animateMotion>
                </circle>
                {/* Blue: center → Slack */}
                <circle r="4" fill="#60A5FA" opacity="0.85" filter="url(#glow-b)">
                  <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.4s">
                    <mpath href="#path-ctr" />
                  </animateMotion>
                </circle>
                {/* Gray: trunk up to Notion */}
                <circle r="3.5" fill="#A1A1AA" opacity="0.7">
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.9s">
                    <mpath href="#path-up" />
                  </animateMotion>
                </circle>
                {/* Gray: trunk down to Linear */}
                <circle r="3.5" fill="#A1A1AA" opacity="0.7">
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.6s">
                    <mpath href="#path-down" />
                  </animateMotion>
                </circle>
                {/* Blue: to ChatGPT */}
                <circle r="3.5" fill="#60A5FA" opacity="0.75">
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.1s">
                    <mpath href="#path-chat" />
                  </animateMotion>
                </circle>
                {/* Green: up to bolt */}
                <circle r="3.5" fill="#22C55E" opacity="0.75">
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s">
                    <mpath href="#path-bolt" />
                  </animateMotion>
                </circle>
              </svg>
            </div>
          </div>
        </FadeIn>

        {/* 3 small feature cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            { Icon: Lock, t: "Auto Cookie Blocking", d: "Automatically block non-essential cookies until users give explicit consent via your banner" },
            { Icon: FileText, t: "Consent Logging", d: "Record every consent action with timestamps, IPs, and preferences for full audit compliance" },
            { Icon: Terminal, t: "Policy Generator", d: "Generate GDPR, CCPA, and LGPD compliant cookie and privacy policies in minutes" },
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
