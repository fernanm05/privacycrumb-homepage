"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSupportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Features", href: "/index-23/features" },
    { label: "Pricing", href: "/index-23/pricing" },
    { label: "About", href: "/index-23/about" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/index-23/help-center" },
    { label: "Contact Us", href: "/index-23/contact" },
    { label: "FAQ", href: "/faq.html" },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-sm"
          : "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md"
      } border-b border-neutral-100 dark:border-neutral-800`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="/index-23" className="flex items-center gap-1.5">
            <img src="/Privacy-new-logo.png" alt="" className="h-5 w-5" />
            <img src="/PrivacyCrumbText.svg" alt="PrivacyCrumb" className="h-4 dark:brightness-0 dark:invert" />
          </a>

          {/* Desktop nav */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 items-center">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:text-neutral-900 dark:hover:text-white transition-colors">{l.label}</a>
            ))}

            {/* Support dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setSupportOpen(!supportOpen)}
                className="text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
              >
                Support
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform ${supportOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <AnimatePresence>
                {supportOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-44 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg py-1.5 z-50"
                  >
                    {supportLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-400 dark:text-neutral-300"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </button>
            <a href="https://app.privacycrumb.com/signin"
              className="hidden md:block border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-5 py-2 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
              Log in
            </a>
            <motion.a href="https://app.privacycrumb.com/signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="hidden md:block bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-2 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
              Get started
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-neutral-900 z-[70] md:hidden shadow-2xl flex flex-col"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 h-14 border-b border-neutral-100 dark:border-neutral-800 shrink-0">
                <a href="/index-23" className="flex items-center gap-1.5" onClick={() => setMobileOpen(false)}>
                  <img src="/Privacy-new-logo.png" alt="" className="h-5 w-5" />
                  <img src="/PrivacyCrumbText.svg" alt="PrivacyCrumb" className="h-4 dark:brightness-0 dark:invert" />
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Sidebar links */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-0.5">
                  {navLinks.map((l, i) => (
                    <motion.a
                      key={l.label}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {l.label}
                    </motion.a>
                  ))}
                </div>

                {/* Support section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800"
                >
                  <p className="px-3 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Support</p>
                  {supportLinks.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Sidebar footer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-4 pb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800 shrink-0"
              >
                <a
                  href="https://app.privacycrumb.com/signup"
                  className="block text-center bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                >
                  Get started
                </a>
                <a
                  href="https://app.privacycrumb.com/signin"
                  className="block text-center border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors mt-2"
                >
                  Log in
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
