"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Globe, Shield, Cookie, CheckCircle2, Loader2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanDone, setScanDone] = useState(false);

  const handleScan = () => {
    if (!url.trim()) return;
    setScanning(true);
    setScanDone(false);
    setTimeout(() => {
      setScanning(false);
      setScanDone(true);
    }, 3000);
  };

  const handleClose = () => {
    setShowModal(false);
    setScanning(false);
    setScanDone(false);
    setUrl("");
  };

  return (
    <>
      <section className="text-center pt-24 pb-12 px-6 relative overflow-hidden grid-bg">
        {/* Vertical border lines */}
        <div className="absolute left-[calc(50%-37rem)] top-0 bottom-0 w-px bg-neutral-200/60 dark:bg-neutral-700/40 hidden lg:block" />
        <div className="absolute right-[calc(50%-37rem)] top-0 bottom-0 w-px bg-neutral-200/60 dark:bg-neutral-700/40 hidden lg:block" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-coral text-sm font-medium mb-6 tracking-wide">Cookie consent made simple for every website.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-semibold leading-[1.1] mb-6 tracking-tight text-neutral-900 dark:text-white">
              Stay compliant with<br />cookie{" "}
              <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">privacy laws</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-[17px] max-w-lg mx-auto mb-8 leading-relaxed">
              An all-in-one cookie compliance platform that helps businesses stay GDPR, CCPA, and LGPD compliant — effortlessly
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-3 justify-center mb-12">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                Start for free
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(true)}
                className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-8 py-3 rounded-xl text-sm font-medium border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors">
                Free cookie scan
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
              <span>Trusted by 10,000+ websites worldwide</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Free Cookie Scan Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button onClick={handleClose} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">
                  <X size={18} />
                </button>

                {!scanDone ? (
                  <>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-1">
                      <Cookie size={20} className="text-amber-500" />
                      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Free Cookie Scan</h2>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Enter your website URL to scan for cookies, trackers, and compliance issues.</p>

                    {/* URL Input */}
                    <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl bg-neutral-50 dark:bg-neutral-800 px-4 py-3 mb-4 focus-within:border-coral focus-within:ring-1 focus-within:ring-coral/30 transition-all">
                      <Globe size={16} className="text-neutral-400 mr-2 shrink-0" />
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleScan()}
                        placeholder="https://yourwebsite.com"
                        className="flex-1 text-sm outline-none bg-transparent text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400"
                        autoFocus
                        disabled={scanning}
                      />
                    </div>

                    {/* Scan button */}
                    <motion.button
                      whileHover={!scanning ? { scale: 1.02 } : {}}
                      whileTap={!scanning ? { scale: 0.98 } : {}}
                      onClick={handleScan}
                      disabled={scanning || !url.trim()}
                      className={`w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                        scanning
                          ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-wait"
                          : url.trim()
                            ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-black dark:hover:bg-neutral-100"
                            : "bg-neutral-200 dark:bg-neutral-700 text-neutral-400 cursor-not-allowed"
                      }`}
                    >
                      {scanning ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Scanning your website...
                        </>
                      ) : (
                        <>
                          <Search size={16} />
                          Scan Website
                        </>
                      )}
                    </motion.button>

                    {/* Scanning animation */}
                    <AnimatePresence>
                      {scanning && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="space-y-2.5">
                            {[
                              { text: "Connecting to website...", delay: 0 },
                              { text: "Scanning for cookies & trackers...", delay: 0.8 },
                              { text: "Checking GDPR compliance...", delay: 1.6 },
                              { text: "Analyzing consent requirements...", delay: 2.2 },
                            ].map((step, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: step.delay, duration: 0.3 }}
                                className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="shrink-0"
                                >
                                  <Loader2 size={12} />
                                </motion.div>
                                {step.text}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Info */}
                    <div className="flex items-center gap-2 mt-4 text-[11px] text-neutral-400">
                      <Shield size={12} />
                      <span>Your data is secure. We never store or share your website information.</span>
                    </div>
                  </>
                ) : (
                  /* Scan Results */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-center mb-5">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3"
                      >
                        <CheckCircle2 size={24} className="text-green-500" />
                      </motion.div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">Scan Complete!</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{url}</p>
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mb-5">
                      {[
                        { label: "Cookies Found", value: "24", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
                        { label: "Third-party Trackers", value: "8", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
                        { label: "Compliance Score", value: "42%", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
                        { label: "Issues Detected", value: "6", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
                      ].map((r, i) => (
                        <motion.div
                          key={r.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${r.bg}`}
                        >
                          <span className="text-xs text-neutral-600 dark:text-neutral-300">{r.label}</span>
                          <span className={`text-sm font-semibold ${r.color}`}>{r.value}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-black dark:hover:bg-neutral-100 transition-colors mb-2"
                    >
                      Get Full Report — Free
                    </motion.button>
                    <button
                      onClick={handleClose}
                      className="w-full py-2 text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
