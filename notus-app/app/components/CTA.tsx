"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { Shield, Globe, Cookie, FileCheck, Scale, Scan, Lock, Eye } from "lucide-react";

const floatingIcons = [
  { Icon: Shield, color: "text-green-500", size: 22, x: "12%", y: "12%", dx: 30, dy: -25, dur: 6, delay: 0 },
  { Icon: Globe, color: "text-blue-500", size: 22, x: "78%", y: "15%", dx: -25, dy: 20, dur: 7, delay: 0.5 },
  { Icon: Cookie, color: "text-amber-500", size: 22, x: "85%", y: "55%", dx: -20, dy: -30, dur: 5.5, delay: 1 },
  { Icon: Scan, color: "text-neutral-400", size: 18, x: "18%", y: "65%", dx: 25, dy: -15, dur: 8, delay: 0.3 },
  { Icon: Scale, color: "text-indigo-400", size: 18, x: "25%", y: "35%", dx: -15, dy: 25, dur: 6.5, delay: 0.8 },
  { Icon: FileCheck, color: "text-neutral-500", size: 18, x: "72%", y: "70%", dx: 20, dy: -20, dur: 7.5, delay: 1.2 },
  { Icon: Lock, color: "text-rose-400", size: 16, x: "8%", y: "40%", dx: 20, dy: 15, dur: 9, delay: 0.6 },
  { Icon: Eye, color: "text-cyan-400", size: 16, x: "90%", y: "30%", dx: -30, dy: 10, dur: 6, delay: 1.5 },
];

export default function CTA() {
  return (
    <section className="py-28 text-center relative overflow-hidden">
      {/* Concentric ripple circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] rounded-full border border-neutral-200/50 dark:border-neutral-700/30 absolute" />
        <div className="w-[550px] h-[550px] rounded-full border border-neutral-200/35 dark:border-neutral-700/20 absolute" />
        <div className="w-[750px] h-[750px] rounded-full border border-neutral-100/25 dark:border-neutral-700/15 absolute" />
      </div>

      {/* Floating privacy-related icons that fly everywhere */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay, duration: 0.6 }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <motion.div
              animate={{
                x: [0, item.dx, -item.dx * 0.6, item.dx * 0.4, 0],
                y: [0, item.dy, -item.dy * 0.8, item.dy * 0.3, 0],
                rotate: [0, 8, -5, 3, 0],
              }}
              transition={{
                duration: item.dur,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-11 h-11 bg-white/90 dark:bg-neutral-800/90 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center backdrop-blur-sm"
            >
              <item.Icon size={item.size} className={item.color} />
            </motion.div>
          </motion.div>
        ))}
        {/* PrivacyCrumb logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute"
          style={{ left: "50%", top: "75%" }}
        >
          <motion.div
            animate={{
              x: [0, 15, -10, 5, 0],
              y: [0, -20, 10, -8, 0],
              rotate: [0, -5, 8, -3, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-11 h-11 bg-white/90 dark:bg-neutral-800/90 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex items-center justify-center backdrop-blur-sm"
          >
            <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-5 h-5" />
          </motion.div>
        </motion.div>
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
