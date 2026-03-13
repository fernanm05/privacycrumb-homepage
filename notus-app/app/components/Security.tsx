"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

/* CCPA: California state outline with lock/shield */
const CCPAIcon = () => (
  <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
    {/* California outline */}
    <path d="M18 8c-2 4-4 8-5 14-1 4 0 8 1 12 1 3 3 6 4 8l2 3c1 1 3 2 5 2h4c2-1 4-2 5-4 2-3 3-7 3-11 0-5-1-10-3-14-1-3-3-6-5-8l-4-3c-2-1-4-1-5 0l-2 1z" stroke="#B0B0B0" strokeWidth="1.5" fill="none"/>
    {/* Lock shield overlay */}
    <rect x="30" y="22" width="16" height="18" rx="3" stroke="#B0B0B0" strokeWidth="1.5" fill="white"/>
    <path d="M34 22v-4a4 4 0 018 0v4" stroke="#B0B0B0" strokeWidth="1.5" fill="none"/>
    <rect x="36" y="28" width="4" height="5" rx="1" fill="#B0B0B0"/>
    {/* Small checkmark on shield */}
    <path d="M35 32l2.5 2.5L42 30" stroke="#B0B0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* GDPR: EU stars circle with checkmark */
const GDPRIcon = () => (
  <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
    {/* Stars in a circle */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
      const r = 22;
      const cx = 28 + r * Math.cos((angle - 90) * Math.PI / 180);
      const cy = 28 + r * Math.sin((angle - 90) * Math.PI / 180);
      return (
        <polygon
          key={i}
          points={`${cx},${cy - 3} ${cx + 1.1},${cy - 1} ${cx + 3},${cy - 1} ${cx + 1.5},${cy + 0.5} ${cx + 2},${cy + 3} ${cx},${cy + 1.5} ${cx - 2},${cy + 3} ${cx - 1.5},${cy + 0.5} ${cx - 3},${cy - 1} ${cx - 1.1},${cy - 1}`}
          fill="#B0B0B0"
        />
      );
    })}
    {/* Center checkmark */}
    <polyline points="22 28 26 32 34 24" stroke="#B0B0B0" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ISO 27001: double circle with text */
const ISOIcon = () => (
  <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="24" stroke="#B0B0B0" strokeWidth="1.5"/>
    <circle cx="28" cy="28" r="20" stroke="#B0B0B0" strokeWidth="1"/>
    <text x="28" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B0B0B0" fontFamily="system-ui">ISO</text>
    <text x="28" y="37" textAnchor="middle" fontSize="9" fontWeight="600" fill="#B0B0B0" fontFamily="system-ui">27001</text>
  </svg>
);

export default function Security() {
  return (
    <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">For Security First Teams</p>
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 p-10 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 leading-tight text-neutral-900 dark:text-white">Scale securely with confidence</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed mb-6">Our AI assistant is designed with enterprise-grade security practices and compliant with global data protection standards.</p>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-7 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start for free</motion.button>
            </div>
            <div className="flex gap-12 justify-center">
              {[
                { Icon: CCPAIcon, label: "CCPA" },
                { Icon: GDPRIcon, label: "GDPR" },
                { Icon: ISOIcon, label: "ISO" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="w-[72px] h-[72px] rounded-full border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-900">
                    <Icon />
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                    <span className="w-2 h-2 rounded-full bg-neutral-700" />{label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
