"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-sm"
        : "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md"
    } border-b border-neutral-100 dark:border-neutral-800`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-1.5">
          <img src="/Privacy-new-logo.png" alt="" className="h-5 w-5" />
          <img src="/PrivacyCrumbText.svg" alt="PrivacyCrumb" className="h-4 dark:brightness-0 dark:invert" />
        </a>
        <div className="hidden md:flex gap-8">
          {["Pricing", "About", "Careers", "Blog"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:text-neutral-900 dark:hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-400 dark:text-neutral-500"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-2 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
            Get started
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
