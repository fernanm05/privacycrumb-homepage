"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="text-center pt-24 pb-12 px-6 relative overflow-hidden grid-bg">
      {/* Vertical border lines */}
      <div className="absolute left-[calc(50%-37rem)] top-0 bottom-0 w-px bg-neutral-200/60 dark:bg-neutral-700/40 hidden lg:block" />
      <div className="absolute right-[calc(50%-37rem)] top-0 bottom-0 w-px bg-neutral-200/60 dark:bg-neutral-700/40 hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-coral text-sm font-medium mb-6 tracking-wide">For fast moving engineering teams.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-semibold leading-[1.1] mb-6 tracking-tight text-neutral-900 dark:text-white">
            Manage and simulate<br />agentic{" "}
            <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">workflows</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-[17px] max-w-lg mx-auto mb-8 leading-relaxed">
            We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex gap-3 justify-center mb-12">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
              Start building
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-8 py-3 rounded-xl text-sm font-medium border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors">
              View pricing
            </motion.button>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-base">G</span>
            <div className="flex gap-0.5 text-neutral-800 dark:text-neutral-200">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span className="w-px h-4 bg-neutral-200 dark:bg-neutral-700" />
            <span>Innovative AI solution 2025 by</span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-[15px]">Gartner</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
