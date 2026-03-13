"use client";
import { motion } from "framer-motion";
import { ScanSearch, ShieldCheck, FileCheck, Globe, Cookie, Scale, Bell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const leftItems = [
  { Icon: ScanSearch, t: "Auto Cookie Scanning", d: "Automatically detect every cookie and tracker on your website — no manual auditing needed" },
  { Icon: ShieldCheck, t: "Instant Compliance", d: "Stay compliant with GDPR, CCPA, and ePrivacy with auto-updating consent rules" },
  { Icon: FileCheck, t: "One-Click Policies", d: "Generate a fully compliant cookie policy tailored to your website in seconds" },
];
const rightItems = [
  { Icon: Globe, t: "Multi-Domain Support", d: "Manage consent banners and cookie policies across all your domains from one dashboard" },
  { Icon: Cookie, t: "Smart Cookie Blocking", d: "Block non-essential cookies before consent is given — ensuring privacy by default" },
  { Icon: Scale, t: "Audit-Ready Logs", d: "Keep detailed consent records ready for regulatory audits at any time" },
];

function BenefitCard({ Icon, title, desc, delay = 0 }: { Icon: LucideIcon; title: string; desc: string; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div whileHover={{ y: -2 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-7 bg-white dark:bg-neutral-900 transition-shadow hover:shadow-sm">
        <Icon size={22} className="text-coral mb-3" strokeWidth={1.5} />
        <h3 className="text-[15px] font-semibold mb-1.5 text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p>
      </motion.div>
    </FadeIn>
  );
}

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Benefits" title="Privacy compliance, simplified" subtitle="PrivacyCrumb automates cookie consent so you can focus on growing your business — not worrying about regulations" />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            {leftItems.map((b, i) => <BenefitCard key={b.t} Icon={b.Icon} title={b.t} desc={b.d} delay={i * 0.1} />)}
          </div>

          {/* ===== CENTER CARD: privacy compliance visual ===== */}
          <FadeIn delay={0.15}>
            <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl flex flex-col min-h-[300px] md:min-h-full p-6 relative overflow-hidden">
              {/* Top: Cookie scan flow — Website + PrivacyCrumb + Shield */}
              <div className="flex items-center justify-center relative pt-4 pb-2 gap-2">
                {/* Website icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-11 h-11 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center justify-center"
                >
                  <Globe size={20} className="text-neutral-500" strokeWidth={1.5} />
                </motion.div>
                {/* Dashed line left + animated dot */}
                <div className="relative w-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                    className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-600"
                  />
                  <motion.div
                    animate={{ left: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#F26C4F] shadow-[0_0_6px_#F26C4F]"
                  />
                </div>
                {/* PrivacyCrumb icon - center with orbiting glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  {/* Orbit glow 1 — coral/gold */}
                  <div
                    className="absolute inset-[-1px] rounded-xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle-b, 0deg), transparent 0%, transparent 92%, #F26C4F 96%, #FBBF24 98%, transparent 100%)',
                      animation: 'orbitSpinB 6s linear infinite',
                      filter: 'blur(1px)',
                      opacity: 0.8,
                    }}
                  />
                  <div
                    className="absolute inset-[-1px] rounded-xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle-b, 0deg), transparent 0%, transparent 92%, #F26C4F 96%, #FBBF24 98%, transparent 100%)',
                      animation: 'orbitSpinB 6s linear infinite',
                    }}
                  />
                  {/* Orbit glow 2 — blue/purple */}
                  <div
                    className="absolute inset-[-1px] rounded-xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle-b, 0deg), transparent 0%, transparent 92%, #60A5FA 96%, #818CF8 98%, transparent 100%)',
                      animation: 'orbitSpinB 6s linear infinite',
                      animationDelay: '-3s',
                      filter: 'blur(1px)',
                      opacity: 0.8,
                    }}
                  />
                  <div
                    className="absolute inset-[-1px] rounded-xl"
                    style={{
                      background: 'conic-gradient(from var(--orbit-angle-b, 0deg), transparent 0%, transparent 92%, #60A5FA 96%, #818CF8 98%, transparent 100%)',
                      animation: 'orbitSpinB 6s linear infinite',
                      animationDelay: '-3s',
                    }}
                  />
                  <div className="relative w-14 h-14 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center">
                    <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-7 h-7" />
                  </div>
                  <style>{`
                    @property --orbit-angle-b {
                      syntax: '<angle>';
                      initial-value: 0deg;
                      inherits: false;
                    }
                    @keyframes orbitSpinB {
                      from { --orbit-angle-b: 0deg; }
                      to { --orbit-angle-b: 360deg; }
                    }
                  `}</style>
                </motion.div>
                {/* Dashed line right + animated dot */}
                <div className="relative w-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    style={{ transformOrigin: "left" }}
                    className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-600"
                  />
                  <motion.div
                    animate={{ left: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_6px_#60A5FA]"
                  />
                </div>
                {/* Shield icon */}
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="w-11 h-11 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center justify-center"
                >
                  <ShieldCheck size={20} className="text-green-500" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Vertical connecting line + animated dot */}
              <div className="relative mx-auto w-px h-12">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  style={{ transformOrigin: "top" }}
                  className="w-full h-full border-l border-dashed border-neutral-300 dark:border-neutral-600"
                />
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]"
                />
              </div>

              {/* Compliant badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9, type: "spring", stiffness: 300 }}
                className="flex justify-center my-2"
              >
                <span className="text-xs px-2.5 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 rounded font-medium">Compliant ✓</span>
              </motion.div>

              {/* Bottom: Compliance dashboard mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm p-4 w-full mt-auto relative overflow-visible"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-red-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-2 h-2 rounded-full bg-amber-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <motion.div
                    animate={{ opacity: [0, 0, 1, 1, 0], y: [6, 6, 0, 0, -4], scale: [0.9, 0.9, 1, 1, 0.95] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.08, 0.18, 0.82, 1] }}
                    className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 bg-neutral-50 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600 rounded-lg shadow-sm"
                  >
                    <Bell size={10} className="text-amber-500" /> 3 cookies blocked
                  </motion.div>
                </div>
                <div className="font-semibold text-sm mb-3 dark:text-white">Consent Overview</div>
                {["Cookies Scanned", "Consent Rate", "Compliance Score"].map((label, i) => (
                  <div key={label} className="mb-2">
                    <div className="text-[11px] text-neutral-400 mb-1">{label}</div>
                    <div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${95 - i * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-neutral-300"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {rightItems.map((b, i) => <BenefitCard key={b.t} Icon={b.Icon} title={b.t} desc={b.d} delay={i * 0.1 + 0.1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
