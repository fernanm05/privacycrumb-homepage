"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { Shield, Globe, Cookie, FileCheck, Scale, Scan } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 text-center relative overflow-hidden">
      {/* Concentric ripple circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] rounded-full border border-neutral-200/50 dark:border-neutral-700/30 absolute" />
        <div className="w-[550px] h-[550px] rounded-full border border-neutral-200/35 dark:border-neutral-700/20 absolute" />
        <div className="w-[750px] h-[750px] rounded-full border border-neutral-100/25 dark:border-neutral-700/15 absolute" />
      </div>

      {/* Floating privacy-related icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shield */}
        <div className="absolute top-[10%] right-[28%] w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim">
          <Shield size={22} className="text-green-500" />
        </div>
        {/* Globe */}
        <div className="absolute top-[10%] right-[20%] w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-1">
          <Globe size={22} className="text-blue-500" />
        </div>
        {/* Cookie */}
        <div className="absolute top-[20%] right-[38%] w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-2">
          <Cookie size={22} className="text-amber-500" />
        </div>
        {/* Scan */}
        <div className="absolute top-[30%] left-[30%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-3">
          <Scan size={18} className="text-neutral-400" />
        </div>
        {/* Scale/Compliance */}
        <div className="absolute top-[45%] left-[28%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-4">
          <Scale size={18} className="text-indigo-400" />
        </div>
        {/* FileCheck */}
        <div className="absolute top-[8%] left-[28%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-1">
          <FileCheck size={18} className="text-neutral-500" />
        </div>
        {/* PrivacyCrumb logo */}
        <div className="absolute bottom-[25%] right-[30%] w-10 h-10 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center float-anim-2">
          <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-5 h-5" />
        </div>
      </div>

      <FadeIn>
        <h2 className="text-3xl md:text-[3.25rem] font-semibold max-w-[650px] mx-auto mb-8 relative z-10 leading-[1.15] tracking-tight text-neutral-900 dark:text-white">
          Protect Your Users and Stay Compliant Today
        </h2>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-9 py-3.5 rounded-xl text-[15px] font-medium relative z-10 hover:bg-black dark:hover:bg-neutral-100 transition-colors">
          Get Started for Free
        </motion.button>
      </FadeIn>
    </section>
  );
}
