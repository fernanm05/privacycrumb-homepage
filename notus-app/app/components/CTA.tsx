"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="py-28 text-center relative overflow-hidden">
      {/* Concentric ripple circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] rounded-full border border-neutral-200/50 dark:border-neutral-700/30 absolute" />
        <div className="w-[550px] h-[550px] rounded-full border border-neutral-200/35 dark:border-neutral-700/20 absolute" />
        <div className="w-[750px] h-[750px] rounded-full border border-neutral-100/25 dark:border-neutral-700/15 absolute" />
      </div>

      {/* Floating brand icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slack colored */}
        <div className="absolute top-[10%] right-[28%] w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.5 2a2.5 2.5 0 000 5H17V4.5A2.5 2.5 0 0014.5 2z" fill="#E01E5A"/><path d="M2 14.5a2.5 2.5 0 005 0V12H4.5A2.5 2.5 0 002 14.5z" fill="#36C5F0"/><path d="M9.5 22a2.5 2.5 0 000-5H7v2.5A2.5 2.5 0 009.5 22z" fill="#2EB67D"/><path d="M22 9.5a2.5 2.5 0 00-5 0V12h2.5A2.5 2.5 0 0022 9.5z" fill="#ECB22E"/><rect x="7" y="7" width="5" height="5" fill="#36C5F0"/><rect x="12" y="7" width="5" height="5" fill="#2EB67D"/><rect x="7" y="12" width="5" height="5" fill="#E01E5A"/><rect x="12" y="12" width="5" height="5" fill="#ECB22E"/></svg>
        </div>
        {/* Apple logo */}
        <div className="absolute top-[10%] right-[20%] w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-1">
          <svg width="20" height="24" viewBox="0 0 24 30" fill="#4B5563"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 16 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15 2.3c.74-.97 1.25-2.3 1.12-3.3-1.07.04-2.37.72-3.14 1.63-.69.81-1.29 2.1-1.13 3.34 1.2.09 2.42-.61 3.15-1.67"/></svg>
        </div>
        {/* Green bolt */}
        <div className="absolute top-[20%] right-[38%] w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#22C55E"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        {/* ChatGPT */}
        <div className="absolute top-[30%] left-[30%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.06-1.38"/><path d="M12 8v8M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"/></svg>
        </div>
        {/* Meta infinity */}
        <div className="absolute top-[45%] left-[28%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.8"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.132-8-12.356-8-4.236 0-4.236 8 0 8 5.224 0 7.26-8 12.356-8z"/></svg>
        </div>
        {/* Notion N */}
        <div className="absolute top-[8%] left-[28%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h5"/></svg>
        </div>
        {/* Sparkle/Claude */}
        <div className="absolute bottom-[25%] right-[30%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.6"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
        </div>
      </div>

      <FadeIn>
        <h2 className="text-3xl md:text-[3.25rem] font-semibold max-w-[650px] mx-auto mb-8 relative z-10 leading-[1.15] tracking-tight text-neutral-900 dark:text-white">
          Connect your Current Stack and Start Automating
        </h2>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-9 py-3.5 rounded-xl text-[15px] font-medium relative z-10 hover:bg-black dark:hover:bg-neutral-100 transition-colors">
          Start Building for Free
        </motion.button>
      </FadeIn>
    </section>
  );
}
