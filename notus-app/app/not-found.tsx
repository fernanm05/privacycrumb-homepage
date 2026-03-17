"use client";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Cookie, HelpCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const quickLinks = [
  { icon: Home, label: "Homepage", href: "/index-23", desc: "Back to the main page" },
  { icon: HelpCircle, label: "Help Center", href: "/index-23/help-center", desc: "Find answers to common questions" },
  { icon: Search, label: "Knowledge Base", href: "/index-23/knowledge-base", desc: "Browse our guides and articles" },
  { icon: Cookie, label: "Features", href: "/index-23/features", desc: "Explore what PrivacyCrumb offers" },
];

export default function NotFound() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center px-6 py-24 relative overflow-hidden">
          {/* Animated background dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => {
              const size = 4 + (i % 3) * 3;
              const x = ((i * 47 + 13) % 90) + 5;
              const y = ((i * 31 + 7) % 80) + 10;
              const delay = (i * 0.3) % 3;
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-coral/10 dark:bg-coral/5"
                  style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
                  animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4 + (i % 3), repeat: Infinity, delay }}
                />
              );
            })}
          </div>

          <div className="relative z-10 text-center max-w-lg mx-auto">
            {/* Animated 404 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="relative inline-block">
                <span className="text-[8rem] md:text-[10rem] font-black leading-none tracking-tighter bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 bg-clip-text text-transparent select-none">
                  404
                </span>
                {/* Floating cookie */}
                <motion.div
                  className="absolute -top-2 -right-4 md:-right-6"
                  animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-coral to-[#E8735A] flex items-center justify-center shadow-lg shadow-coral/20">
                    <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white mb-3 tracking-tight"
            >
              This cookie crumbled
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base mb-8 max-w-md mx-auto"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Don&apos;t worry — let&apos;s get you back on track.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
            >
              <Link href="/index-23">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-7 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors w-full sm:w-auto"
                >
                  <Home size={14} /> Go Home
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-7 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <ArrowLeft size={14} /> Go Back
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-xs text-neutral-400 mb-4 uppercase tracking-wider font-medium">Quick links</p>
              <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-coral/30 hover:shadow-sm transition-all group text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <link.icon size={14} className="text-neutral-400 group-hover:text-coral transition-colors" />
                        <span className="text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-coral transition-colors">{link.label}</span>
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-snug">{link.desc}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
